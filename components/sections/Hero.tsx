import { memo } from "react";
import { Cube, Play, Plug, Pulse, UsersThree } from "@phosphor-icons/react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { NeonButton } from "../ui/ArcadePrimitives";

const shaderProps = {
  animate: "on",
  axesHelper: "off",
  bgColor1: "#000000",
  bgColor2: "#000000",
  brightness: 1.1,
  cAzimuthAngle: 180,
  cDistance: 3.57,
  cPolarAngle: 90,
  cameraZoom: 1,
  color1: "#66e6ff",
  color2: "#5d8dff",
  color3: "#e868ff",
  destination: "onCanvas",
  embedMode: "off",
  envPreset: "city",
  format: "gif",
  fov: 45,
  frameRate: 10,
  gizmoHelper: "hide",
  grain: "on",
  lightType: "3d",
  pixelDensity: 1,
  positionX: -1.4,
  positionY: 0,
  positionZ: 0,
  range: "disabled",
  rangeEnd: 40,
  rangeStart: 0,
  reflection: 0.1,
  rotationX: 0,
  rotationY: 10,
  rotationZ: 50,
  shader: "defaults",
  type: "plane",
  uAmplitude: 1,
  uDensity: 1.3,
  uFrequency: 5.5,
  uSpeed: 0.4,
  uStrength: 4,
  uTime: 0,
  wireframe: false,
} as unknown as Parameters<typeof ShaderGradient>[0];

export const MotionGradient = memo(function MotionGradient() {
  return (
    <ShaderGradientCanvas
      className="shader-gradient-canvas"
      lazyLoad={false}
      pointerEvents="none"
      pixelDensity={1}
    >
      <ShaderGradient {...shaderProps} />
    </ShaderGradientCanvas>
  );
});

export function KioskVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`lx-kiosk-wrap${compact ? " lx-kiosk-compact" : ""}`}>
      <div className="lx-kiosk-glow" />
      <div className="lx-kiosk">
        <div className="lx-kiosk-top">
          ARCADELX <b>AX</b>
        </div>
        <div className="lx-kiosk-screen">
          <div className="lx-temple-grid" />
          <span>
            THE
            <br />
            <strong>LOST</strong>
            <br />
            TEMPLE
          </span>
          <small>MOVE TO PLAY</small>
        </div>
        {/* <div className="lx-kiosk-base">
          <i />
          <i />
          <i />
        </div> */}
      </div>
      {!compact && (
        <p className="lx-visual-label">
          GAMING
          <br />
          <b>MEETS MOVEMENT</b>
        </p>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="lx-hero" id="home">
      <div className="lx-parallax-bg" />
      <div className="lx-hero-copy lx-parallax-copy">
        <p className="lx-eyebrow lx-hero-reveal">
          <span /> Move · Play · Stay active
        </p>
        <h1 className="lx-hero-reveal">
          Live the <em>gaming</em>
          <br /> experience.
        </h1>
        <p className="lx-hero-description lx-hero-reveal">
          ArcadeLX is a next-generation motion-sensing gaming kiosk that brings
          immersive, full-body gaming to malls, offices, schools and public
          spaces.
        </p>
        <div className="lx-actions lx-hero-reveal">
          <NeonButton href="#contact">Order now</NeonButton>
          <a className="lx-watch" href="#video">
            <Play className="lx-inline-icon" size={16} weight="fill" /> Watch
            video
          </a>
        </div>
      </div>
      <div className="lx-hero-visual lx-parallax-kiosk">
        <KioskVisual />
      </div>
      <div className="lx-hero-features lx-hero-reveal">
        <span>
          <b>
            <Pulse size={18} weight="duotone" />
          </b>{" "}
          Motion sensing<small>Gameplay</small>
        </span>
        <span>
          <b>
            <UsersThree size={18} weight="duotone" />
          </b>{" "}
          Fun for all<small>Age groups</small>
        </span>
        <span>
          <b>
            <Cube size={18} weight="duotone" />
          </b>{" "}
          Compact & efficient<small>Space efficient</small>
        </span>
        <span>
          <b>
            <Plug size={18} weight="duotone" />
          </b>{" "}
          Plug & play<small>Setup</small>
        </span>
      </div>
    </section>
  );
}
