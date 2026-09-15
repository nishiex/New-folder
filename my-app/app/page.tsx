"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const audiences = ["Malls", "Corporates", "Schools", "Hotels", "Gyms", "Events"];

const features = [
  { number: "01", title: "Motion Sensor Technology", copy: "Full-body, controller-free gaming" },
  { number: "02", title: "Wide Range of Games", copy: "Sports, adventure, fitness and more" },
  { number: "03", title: "Engaging & Healthy", copy: "Fun that gets people moving" },
  { number: "04", title: "Compact & Stylish", copy: "A modern footprint for any space" },
  { number: "05", title: "All Ages Welcome", copy: "Designed for everyone to play" },
  { number: "06", title: "Plug & Play", copy: "Easy setup, simple operation" },
];

export default function Home() {
  const page = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.from(".hero-copy > *", { y: 36, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" });
      gsap.from(".hero-machine", { x: 70, opacity: 0, duration: 1.2, delay: 0.25, ease: "power3.out" });
      gsap.to(".hero-glow", { scale: 1.12, opacity: 0.78, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 32,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 84%", once: true },
        });
      });
    }, page);

    return () => context.revert();
  }, []);

  return (
    <main ref={page}>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="ArcadeLX home">
          <Image src="/arcadelx_logo.png" alt="ArcadeLX" width={190} height={58} priority />
        </a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#games">Games</a><a href="#business">Business</a><a href="#support">Support</a>
        </div>
        <a className="nav-cta" href="#contact">Order now <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Move · Play · Stay active</p>
          <h1>Live the <em>gaming</em> experience.</h1>
          <p className="hero-text">A next-generation motion-sensing gaming kiosk that brings immersive, full-body play to the places people meet, work and grow.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Order now <span>↗</span></a><a className="button button-quiet" href="#games"><i>▶</i> Watch video</a></div>
          <div className="hero-pills"><span>Motion sensing</span><span>Fun for all</span><span>Plug & play</span></div>
        </div>
        <div className="hero-visual" aria-label="ArcadeLX gaming kiosk preview">
          <div className="hero-glow" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="hero-machine"><div className="machine-top">ARCADELX <b>AX</b></div><div className="machine-screen"><div className="screen-grid" /><span>THE<br /><strong>LOST</strong><br />TEMPLE</span><small>MOVE TO PLAY</small></div><div className="machine-base"><div /><div /><div /></div></div>
          <p className="visual-caption">Gaming meets<br /><b>movement.</b></p>
        </div>
      </section>

      <section className="trust shell reveal" id="business"><p className="eyebrow">Built for everywhere</p><h2>Trusted by forward-thinking organizations.</h2><div className="audiences">{audiences.map((audience, index) => <div className="audience" key={audience}><span>0{index + 1}</span><b>{audience}</b></div>)}</div></section>

      <section className="features shell" id="about"><div className="section-heading reveal"><div><p className="eyebrow">Why ArcadeLX</p><h2>Powerful. Engaging.<br /><em>Built for everywhere.</em></h2></div><p>More than an arcade. ArcadeLX turns the simple act of play into an energizing shared experience.</p></div><div className="feature-grid">{features.map((feature) => <article className="feature-card reveal" key={feature.number}><span className="feature-number">{feature.number}</span><div className="feature-icon">✦</div><h3>{feature.title}</h3><p>{feature.copy}</p><span className="card-arrow">↗</span></article>)}</div></section>

      <section className="statement shell reveal" id="games"><div><p className="eyebrow">The new way to play</p><h2>Movement is<br /><em>the controller.</em></h2></div><div className="statement-side"><p>Every gesture becomes part of the game. Every game becomes a reason to move. Create moments people remember long after the screen goes dark.</p><a className="text-link" href="#contact">Explore the experience <span>↗</span></a></div></section>

      <section className="contact shell" id="contact"><div className="contact-panel reveal"><div><p className="eyebrow">Ready when you are</p><h2>Make room<br />for <em>more play.</em></h2></div><a className="button button-primary" href="mailto:hello@arcadelx.com">Talk to our team <span>↗</span></a></div></section>

      <footer className="footer shell" id="support"><Image src="/arcadelx_logo.png" alt="ArcadeLX" width={135} height={41} /><p>© 2026 ArcadeLX. Move different.</p><div><a href="#top">Instagram</a><a href="mailto:hello@arcadelx.com">Contact</a></div></footer>
    </main>
  );
}
