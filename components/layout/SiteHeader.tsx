"use client";

import Image from "next/image";
import { useState } from "react";
import { NeonButton } from "../ui/ArcadePrimitives";

const links = ["Home", "About", "Games", "Business", "Support"];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="lx-header">
      <a href="#home" className="lx-brand" aria-label="ArcadeLX home"><Image src="/arcadelx_logo.png" alt="ArcadeLX" width={190} height={58} priority /></a>
      <nav className="lx-nav" aria-label="Primary navigation">{links.map((link) => <a className={link === "Home" ? "is-active" : ""} href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}</nav>
      <NeonButton className="lx-desktop-order" href="#contact">Order now</NeonButton>
      <button className={`lx-menu-button${menuOpen ? " is-open" : ""}`} onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="lx-mobile-nav" aria-label="Toggle navigation"><i /><i /><i /></button>
    </header>
    <nav className={`lx-mobile-nav${menuOpen ? " is-open" : ""}`} id="lx-mobile-nav" aria-label="Mobile navigation">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}</a>)}<NeonButton href="#contact" className="mobile-order" >Order now</NeonButton></nav>
  </>;
}
