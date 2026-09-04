'use client';

import { useEffect } from 'react';

const SCROLL_TAU_SECONDS = 0.41;
const SCROLL_SETTLE_PROGRESS = 0.995;

export function PassageController() {
  useEffect(() => {
    const scroller = document.querySelector<HTMLElement>('.passage-scroll');
    const main = document.querySelector<HTMLElement>('main');
    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-scroll-beat]'),
    );
    const videos = Array.from(
      document.querySelectorAll<HTMLVideoElement>('video[data-managed-video]'),
    );

    if (!scroller || !main || scenes.length === 0) return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motionOverride = new URLSearchParams(window.location.search).get('motion');
    let reduced = motionOverride === 'reduced' || motionPreference.matches;
    main.classList.toggle('force-motion', !reduced);

    const visibility = new Map<HTMLElement, number>(
      scenes.map((scene) => [scene, 0]),
    );

    let transitionLocked = false;
    let wheelGestureActive = false;
    let wheelIdleTimer: number | undefined;
    let scrollAnimationFrame: number | undefined;
    let scrollAnimationStartedAt = 0;
    let scrollAnimationStart = 0;
    let scrollAnimationTarget = 0;
    let touchStartX: number | null = null;
    let touchStartY: number | null = null;
    let touchNavigated = false;

    const nearestSceneIndex = () => {
      const scrollTop = scroller.scrollTop;

      return scenes.reduce((nearest, scene, index) => {
        const nearestDistance = Math.abs(scenes[nearest].offsetTop - scrollTop);
        const sceneDistance = Math.abs(scene.offsetTop - scrollTop);
        return sceneDistance < nearestDistance ? index : nearest;
      }, 0);
    };

    const releaseTransition = () => {
      if (scrollAnimationFrame !== undefined) {
        window.cancelAnimationFrame(scrollAnimationFrame);
        scrollAnimationFrame = undefined;
      }
      scroller.scrollTop = scrollAnimationTarget;
      delete scroller.dataset.scrollAnimating;
      transitionLocked = false;
    };

    const animateScroll = (now: number) => {
      const elapsedSeconds = (now - scrollAnimationStartedAt) / 1000;
      const progress = 1 - Math.exp(-elapsedSeconds / SCROLL_TAU_SECONDS);
      scroller.scrollTop =
        scrollAnimationStart +
        (scrollAnimationTarget - scrollAnimationStart) * progress;

      if (progress >= SCROLL_SETTLE_PROGRESS) {
        releaseTransition();
        return;
      }

      scrollAnimationFrame = window.requestAnimationFrame(animateScroll);
    };

    const goToScene = (index: number) => {
      const nextIndex = Math.max(0, Math.min(scenes.length - 1, index));
      if (nextIndex === nearestSceneIndex()) return;

      transitionLocked = true;
      scrollAnimationStart = scroller.scrollTop;
      scrollAnimationTarget = scenes[nextIndex].offsetTop;
      scroller.dataset.scrollTau = String(SCROLL_TAU_SECONDS);

      if (reduced) {
        releaseTransition();
        return;
      }

      scroller.dataset.scrollAnimating = 'true';
      scrollAnimationStartedAt = performance.now();
      scrollAnimationFrame = window.requestAnimationFrame(animateScroll);
    };

    const moveOneScene = (direction: -1 | 1) => {
      if (transitionLocked) return;
      goToScene(nearestSceneIndex() + direction);
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      event.preventDefault();
      if (wheelIdleTimer !== undefined) window.clearTimeout(wheelIdleTimer);

      const beginsGesture = !wheelGestureActive;
      wheelGestureActive = true;
      wheelIdleTimer = window.setTimeout(() => {
        wheelGestureActive = false;
        wheelIdleTimer = undefined;
      }, 180);

      if (!beginsGesture || Math.abs(event.deltaY) < 2) return;
      moveOneScene(event.deltaY > 0 ? 1 : -1);
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchNavigated = false;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch || touchStartX === null || touchStartY === null) return;

      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      if (Math.abs(deltaY) <= Math.abs(deltaX)) return;

      event.preventDefault();
      if (touchNavigated || Math.abs(deltaY) < 34) return;

      touchNavigated = true;
      moveOneScene(deltaY < 0 ? 1 : -1);
    };

    const resetTouch = () => {
      touchStartX = null;
      touchStartY = null;
      touchNavigated = false;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        target?.isContentEditable ||
        target?.matches('input, textarea, select')
      ) {
        return;
      }

      if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        if (!transitionLocked) {
          goToScene(event.key === 'Home' ? 0 : scenes.length - 1);
        }
        return;
      }

      const forward =
        event.key === 'ArrowDown' ||
        event.key === 'PageDown' ||
        (event.key === ' ' && !event.shiftKey);
      const backward =
        event.key === 'ArrowUp' ||
        event.key === 'PageUp' ||
        (event.key === ' ' && event.shiftKey);

      if (!forward && !backward) return;
      event.preventDefault();
      moveOneScene(forward ? 1 : -1);
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const hash = link?.getAttribute('href');
      if (!hash) return;

      const nextIndex = scenes.findIndex((scene) => `#${scene.id}` === hash);
      if (nextIndex < 0) return;

      event.preventDefault();
      if (!transitionLocked) goToScene(nextIndex);
      window.history.pushState(null, '', hash);
    };

    const sync = () => {
      const active = [...visibility.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
      if (!active) return;

      document.documentElement.dataset.activeScene =
        active.dataset.scrollBeat ?? active.id;
      scenes.forEach((scene) => {
        scene.dataset.active = scene === active ? 'true' : 'false';
      });

      videos.forEach((video) => {
        const shouldPlay =
          !reduced &&
          document.visibilityState === 'visible' &&
          active.contains(video);
        video.dataset.playbackActive = shouldPlay ? 'true' : 'false';

        if (!shouldPlay) {
          video.pause();
          return;
        }

        if (video.networkState === HTMLMediaElement.NETWORK_EMPTY) video.load();
        void video.play().catch(() => {
          // The source-bound poster remains if muted inline autoplay is declined.
        });
      });
    };

    const handleMotionPreference = () => {
      const nextReduced = motionOverride === 'reduced' || motionPreference.matches;
      if (nextReduced === reduced) return;

      reduced = nextReduced;
      main.classList.toggle('force-motion', !reduced);
      if (reduced && scrollAnimationFrame !== undefined) releaseTransition();
      sync();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(
            entry.target as HTMLElement,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });
        sync();
      },
      {
        root: scroller,
        threshold: [0, 0.18, 0.45, 0.7, 0.92],
      },
    );

    scenes.forEach((scene) => observer.observe(scene));
    const handleVisibility = () => sync();
    document.addEventListener('visibilitychange', handleVisibility);
    motionPreference.addEventListener('change', handleMotionPreference);
    scroller.addEventListener('wheel', handleWheel, { passive: false });
    scroller.addEventListener('touchstart', handleTouchStart, { passive: true });
    scroller.addEventListener('touchmove', handleTouchMove, { passive: false });
    scroller.addEventListener('touchend', resetTouch);
    scroller.addEventListener('touchcancel', resetTouch);
    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      motionPreference.removeEventListener('change', handleMotionPreference);
      scroller.removeEventListener('wheel', handleWheel);
      scroller.removeEventListener('touchstart', handleTouchStart);
      scroller.removeEventListener('touchmove', handleTouchMove);
      scroller.removeEventListener('touchend', resetTouch);
      scroller.removeEventListener('touchcancel', resetTouch);
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('keydown', handleKeyDown);
      if (wheelIdleTimer !== undefined) window.clearTimeout(wheelIdleTimer);
      if (scrollAnimationFrame !== undefined) {
        window.cancelAnimationFrame(scrollAnimationFrame);
      }
      delete scroller.dataset.scrollAnimating;
      delete scroller.dataset.scrollTau;
      videos.forEach((video) => video.pause());
      delete document.documentElement.dataset.activeScene;
    };
  }, []);

  return null;
}
