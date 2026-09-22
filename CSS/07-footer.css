/* =========================
   22. FOOTER
   ========================= */
.site-footer {
  position: relative;
  background-color: var(--footer-bg);
  border-top: 1px solid var(--line);
  overflow: hidden;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr 0.8fr 1.1fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  padding: clamp(3.5rem, 7vw, 6rem) 0 clamp(2.5rem, 4vw, 4rem);
}

.footer-brand .logo {
  margin-bottom: 1.5rem;
}

.footer-motto {
  font-family: var(--serif);
  font-size: 1.15rem;
  line-height: 1.7;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}

.footer-motto-ar {
  margin-top: 0.5rem;
  font-size: 1.05rem;
  color: var(--text-mute);
}

.footer-note {
  margin-top: 1.25rem;
  max-width: 36ch;
  font-size: var(--fs-small);
  line-height: 1.8;
  color: var(--text-soft);
}

.footer-col h3 {
  margin-bottom: 1.5rem;
  font-size: var(--fs-label);
  font-weight: 700;
  letter-spacing: 0.26em;
  color: var(--accent);
}

.footer-col li {
  margin-bottom: 0.75rem;
}

.footer-col a {
  position: relative;
  font-size: var(--fs-small);
  letter-spacing: 0.08em;
  color: var(--text-soft);
  transition:
    color 0.35s var(--ease),
    padding-inline-start 0.35s var(--ease);
}

.footer-col a::before {
  content: "";
  position: absolute;
  inset-inline-start: 0;
  top: 50%;
  width: 0;
  height: 1px;
  background-color: var(--accent);
  transition: width 0.35s var(--ease);
}

.footer-col a:hover {
  color: var(--accent);
  padding-inline-start: 1.25rem;
}

.footer-col a:hover::before {
  width: 0.85rem;
}

.footer-contact p {
  margin-bottom: 1.1rem;
  font-size: var(--fs-small);
  color: var(--text-soft);
}

.footer-contact strong {
  display: block;
  margin-bottom: 0.2rem;
  font-size: var(--fs-label);
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-mute);
}

.footer-contact a[href^="tel"],
.footer-contact a[href^="mailto"] {
  font-size: var(--fs-body);
  color: var(--text);
}

.footer-contact a[href^="tel"]:hover,
.footer-contact a[href^="mailto"]:hover {
  color: var(--accent);
}

/* social marks are decorative placeholders - KEMET has no live channels yet */
.social-row {
  display: flex;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.social-mark {
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--line-soft);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text-mute);
  cursor: default;
}

.social-note {
  margin-top: 0.85rem;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--text-mute);
}

.footer-word {
  font-family: var(--serif);
  font-size: clamp(3.5rem, 15vw, 14rem);
  font-weight: 700;
  line-height: 0.82;
  letter-spacing: 0.06em;
  text-align: center;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--line);
  user-select: none;
  padding-bottom: 0.5rem;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  flex-wrap: wrap;
  padding: 1.5rem 0 2rem;
  border-top: 1px solid var(--line);
  font-size: 0.875rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-mute);
}

/* =========================
   23. ANIMATIONS
   ========================= */
/* opacity only: a transform here would trap the fixed chat widget */
@keyframes page-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(2.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes image-in {
  from {
    opacity: 0;
    transform: translateY(3rem) scale(1.04);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes drop-in {
  from {
    opacity: 0;
    transform: translateY(-0.6rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.85rem);
  }
}

@keyframes slow-zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.09);
  }
}

@keyframes disk-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(214, 169, 40, 0.5);
  }
  100% {
    box-shadow: 0 0 0 1rem rgba(214, 169, 40, 0);
  }
}

@keyframes ring-pulse {
  0% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  70% {
    transform: scale(1.25);
    opacity: 0;
  }
  100% {
    transform: scale(1.25);
    opacity: 0;
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes line-sweep {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  100% {
    transform: scaleX(1);
    transform-origin: left;
  }
}

@keyframes pop {
  0% {
    transform: scale(1);
  }
  45% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes typing {
  0%,
  60%,
  100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-4px);
    opacity: 1;
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}

@keyframes fill-bar {
  from {
    width: 0;
  }
}

@keyframes reveal-up {
  from {
    opacity: 0;
    transform: translateY(2.75rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scroll-driven reveals. Content is visible by default, so browsers
   without scroll timelines simply show everything. */
@supports (animation-timeline: view()) {
  .reveal {
    animation: reveal-up linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 28%;
  }

  .stagger > * {
    animation: reveal-up linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 26%;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* =========================
   24. RTL SUPPORT
   (the layout is built with logical properties, so switching
   direction mirrors the interface correctly)
   ========================= */
[dir="rtl"] .label::before,
[dir="rtl"] .label-center::after {
  transform: scaleX(-1);
}

[dir="rtl"] .hero-frame::before {
  transform: translate(-1.5rem, -1.5rem);
}
[dir="rtl"] .page-hero-media::after {
  transform: translate(-1rem, 1rem);
}
[dir="rtl"] .arrow {
  transform: scaleX(-1);
}
[dir="rtl"] .btn:hover .arrow,
[dir="rtl"] .btn-ghost:hover .arrow,
[dir="rtl"] .link-line:hover .arrow {
  transform: scaleX(-1) translateX(6px);
}
[dir="rtl"] .ai-panel {
  transform-origin: bottom left;
}
[dir="rtl"] .msg-ai {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
}

.lang-menu [lang="ar"] {
  font-size: 1.05rem;
}
