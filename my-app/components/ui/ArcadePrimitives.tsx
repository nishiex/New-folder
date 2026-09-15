import type { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

export function NeonButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <a className={`lx-order ${className}`} href={href}>{children}<ArrowUpRight size={17} weight="bold" /></a>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description?: ReactNode }) {
  return <div className="lx-section-heading lx-scroll-reveal"><div><p className="lx-eyebrow">{eyebrow}</p><h2>{title}</h2></div>{description && <p>{description}</p>}</div>;
}
