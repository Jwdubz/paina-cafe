/* eslint-disable @next/next/no-img-element */

import { PassageController } from './passage-controller';

const orderUrl = 'https://order.online/business/61203';
const instagramUrl = 'https://www.instagram.com/painacafelv/';
const tiktokUrl = 'https://www.tiktok.com/@painacafelv';
const blueDiamondDirections =
  'https://www.google.com/maps/search/?api=1&query=4965+Blue+Diamond+Rd+Ste+125+Las+Vegas+NV+89139';
const springMountainDirections =
  'https://www.google.com/maps/search/?api=1&query=6870+Spring+Mountain+Rd+Ste+6+Las+Vegas+NV+89146';

function FlavorsWord() {
  return (
    <span className="flavors-word" aria-label="Flavors">
      <span className="brand-letter letter-teal" aria-hidden="true">F</span>
      <span className="brand-letter letter-aqua" aria-hidden="true">l</span>
      <span className="brand-letter letter-yellow" aria-hidden="true">a</span>
      <span className="brand-letter letter-orange" aria-hidden="true">v</span>
      <span className="brand-letter letter-green" aria-hidden="true">o</span>
      <span className="brand-letter letter-teal" aria-hidden="true">r</span>
      <span className="brand-letter letter-aqua" aria-hidden="true">s</span>
    </span>
  );
}

function ArrowUpRight() {
  return (
    <svg
      className="link-arrow"
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 12 12"
    >
      <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <PassageController />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Paina Cafe Home">
          <img src="/media/logo-transparent.png" alt="Paina Cafe" />
        </a>

        <nav aria-label="Primary Navigation">
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="order-link" href={orderUrl} target="_blank" rel="noreferrer">
            ORDER NOW <ArrowUpRight />
          </a>
        </nav>
      </header>

      <a className="floating-order" href={orderUrl} target="_blank" rel="noreferrer">
        ORDER NOW <ArrowUpRight />
      </a>

      <div className="passage-scroll">
        <section
          className="scene opening-scene"
          id="top"
          data-scroll-beat="top"
          aria-labelledby="opening-title"
        >
          <div className="opening-media" aria-hidden="true">
            <video
              className="opening-video"
              data-managed-video
              muted
              loop
              playsInline
              preload="auto"
              poster="/media/video/opening-desktop-poster.jpg"
            >
              <source
                media="(max-width: 760px)"
                src="/media/video/opening-mobile.mp4"
                type="video/mp4"
              />
              <source src="/media/video/opening-desktop.mp4" type="video/mp4" />
            </video>
            <picture className="opening-fallback">
              <source
                media="(max-width: 760px)"
                srcSet="/media/video/opening-mobile-poster.jpg"
              />
              <img src="/media/video/opening-desktop-poster.jpg" alt="" />
            </picture>
          </div>
          <div className="scene-scrim opening-scrim" aria-hidden="true" />

          <div className="opening-copy">
            <h1 id="opening-title">
              <span className="opening-line">
                <span className="brand-name" aria-label="Pā‘ina">
                  <span className="brand-letter letter-teal" aria-hidden="true">P</span>
                  <span className="brand-letter letter-aqua" aria-hidden="true">ā</span>
                  <span className="brand-letter letter-aqua" aria-hidden="true">‘</span>
                  <span className="brand-letter letter-yellow" aria-hidden="true">i</span>
                  <span className="brand-letter letter-orange" aria-hidden="true">n</span>
                  <span className="brand-letter letter-green" aria-hidden="true">a</span>
                </span>
                <span className="means-word"> Means</span>
              </span>
              <strong className="gathering-word" aria-label="Gathering.">
                <span className="brand-letter letter-teal" aria-hidden="true">G</span>
                <span className="brand-letter letter-aqua" aria-hidden="true">a</span>
                <span className="brand-letter letter-yellow" aria-hidden="true">t</span>
                <span className="brand-letter letter-orange" aria-hidden="true">h</span>
                <span className="brand-letter letter-green" aria-hidden="true">e</span>
                <span className="brand-letter letter-teal" aria-hidden="true">r</span>
                <span className="brand-letter letter-aqua" aria-hidden="true">i</span>
                <span className="brand-letter letter-yellow" aria-hidden="true">n</span>
                <span className="brand-letter letter-orange" aria-hidden="true">g</span>
                <span className="brand-letter letter-green" aria-hidden="true">.</span>
              </strong>
            </h1>
            <p>Come Hungry. Bring Somebody.</p>
          </div>

          <p className="opening-hours">
            <span>Mochi Donuts Start @ 8:00AM</span>
            <span>Full Menu 10:00AM - 7:00PM</span>
          </p>
          <a className="continue-link" href="#mochi">
            See What’s Hot
          </a>
        </section>

        <section
          className="scene mochi-scene"
          id="mochi"
          data-scroll-beat="mochi"
          aria-labelledby="mochi-title"
        >
          <div className="mochi-media" aria-hidden="true">
            <div className="mochi-color" />
            <video
              data-managed-video
              muted
              loop
              playsInline
              preload="none"
              poster="/media/video/mochi-loop-poster.jpg"
            >
              <source
                src="/media/video/mochi-loop-full-batch-v2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="scene-scrim mochi-scrim" aria-hidden="true" />
          <div className="scene-copy mochi-copy">
            <h2 id="mochi-title">
              <span>Fresh Mochi</span>
              <span>Starts @ 8:00AM</span>
            </h2>
            <a
              href="https://www.instagram.com/painacafelv/p/DcgukhyARGM/"
              target="_blank"
              rel="noreferrer"
            >
              See Mochi <FlavorsWord /> <ArrowUpRight />
            </a>
          </div>
        </section>

        <section
          className="scene poke-scene"
          id="poke"
          data-scroll-beat="poke"
          aria-labelledby="poke-title"
        >
          <div className="poke-media" aria-hidden="true">
            <div className="poke-color" />
            <video
              data-managed-video
              muted
              loop
              playsInline
              preload="none"
              poster="/media/video/hawaiian-poke-loop-poster.jpg"
            >
              <source src="/media/video/hawaiian-poke-loop.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="scene-scrim poke-scrim" aria-hidden="true" />
          <div className="scene-copy poke-copy">
            <h2 id="poke-title">
              <span>Poke.</span>
              <span>Your Way.</span>
            </h2>
          </div>
        </section>

        <section
          className="scene plate-scene"
          id="plates"
          data-scroll-beat="plates"
          aria-labelledby="plate-title"
        >
          <div className="plate-stage" aria-hidden="true">
            <div className="plate-color" />
            <video
              className="plate-video"
              data-managed-video
              muted
              loop
              playsInline
              preload="none"
              poster="/media/video/inari-loop-poster.jpg"
            >
              <source src="/media/video/inari-loop.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="scene-scrim plate-scrim" aria-hidden="true" />
          <div className="scene-copy plate-copy">
            <h2 id="plate-title">
              <span>Spicy</span>
              <span>Inari.</span>
            </h2>
            <p>Perfected One Bite at a Time.</p>
          </div>
        </section>

        <section
          className="scene social-scene"
          id="instagram"
          data-scroll-beat="instagram"
          aria-labelledby="social-title"
        >
          <div className="social-video-wrap" aria-hidden="true">
            <video
              data-managed-video
              muted
              loop
              playsInline
              preload="none"
              poster="/media/video/daily-loop-poster.jpg"
            >
              <source src="/media/video/daily-loop.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="social-copy">
            <div className="social-stat">
              <p className="social-number">158K</p>
              <p className="social-source">
                <span>Instagram</span>{' '}
                <span>Followers</span>
              </p>
            </div>
            <h2 id="social-title">
              Already Know When The Weekly <FlavorsWord /> Drop.
            </h2>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              Follow Us For Specials <ArrowUpRight />
            </a>
          </div>
        </section>

        <section
          className="scene locations-scene"
          id="locations"
          data-scroll-beat="locations"
          aria-labelledby="locations-title"
        >
          <div className="locations-heading">
            <h2 id="locations-title">Pick Your Side of Town.</h2>
          </div>

          <div className="location-choices">
            <a
              className="location-choice location-blue"
              href={blueDiamondDirections}
              target="_blank"
              rel="noreferrer"
            >
              <span>Blue Diamond</span>
              <strong>4965 Blue Diamond Rd · Ste 125</strong>
              <small>(702) 268-7138 · Directions <ArrowUpRight /></small>
            </a>

            <a
              className="location-choice location-spring"
              href={springMountainDirections}
              target="_blank"
              rel="noreferrer"
            >
              <span>Spring Mountain</span>
              <strong>Korea Town Plaza · 6870 Spring Mountain Rd · Ste 6</strong>
              <small>(702) 272-2790 · Directions <ArrowUpRight /></small>
            </a>
          </div>

          <div className="locations-foot">
            <a className="final-order" href={orderUrl} target="_blank" rel="noreferrer">
              Order What You Saw <ArrowUpRight />
            </a>
            <div className="social-links">
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                Instagram <ArrowUpRight />
              </a>
              <a href={tiktokUrl} target="_blank" rel="noreferrer">
                TikTok <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
