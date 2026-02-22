import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export function IconArrowLeft(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M10 7l-5 5 5 5M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSearch(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="2" />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconWhatsApp(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 21a9 9 0 1 0-7.77-4.5L3 21l4.68-1.23A9 9 0 0 0 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M9.6 9.4c.2-.5.5-.5.7-.5h.6c.2 0 .4.1.5.3l.7 1.6c.1.2 0 .5-.1.6l-.4.4c-.1.1-.2.3-.1.5.3.7 1 1.6 1.8 2 .2.1.4 0 .5-.1l.5-.5c.2-.2.4-.2.6-.1l1.6.7c.2.1.3.3.3.5v.6c0 .2 0 .5-.5.7-.5.3-1.5.4-2.9-.2-1.4-.6-3.3-2.4-4.1-3.9-.7-1.4-.5-2.4-.2-2.9Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

export function IconPin(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 13.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/* Category Icons */
export function IconArabic(props: Props){
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 12c0-3 2-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6 12h12c0 5-2.5 9-6 9s-6-4-6-9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M9 6.5c.4-1.2 1.4-2 3-2 1.6 0 2.6.8 3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
export function IconPastries(props: Props){
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 15c3.5-6.5 12.5-6.5 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6 15c2-3.5 10-3.5 12 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5 15c0 4 3 7 7 7s7-3 7-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}
export function IconHospitality(props: Props){
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M4 10h16l-1-6H5l-1 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 10v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
export function IconDried(props: Props){
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 21c5 0 9-4 9-9S17 3 12 3 3 7 3 12s4 9 9 9Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 13c1.2-2.3 3-4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 16c1-1.4 2.2-2.6 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
export function IconDaily(props: Props){
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3l1.3 4.2L18 9l-4.1 1.3L12 15l-1.9-4.7L6 9l4.7-1.8L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M5 16l.8 2.6L8 20l-2.2.8L5 23l-.8-2.2L2 20l2.2-1.4L5 16Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity=".85"/>
    </svg>
  );
}
export function IconNuts(props: Props){
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 21c-4.4 0-8-3.6-8-8 0-5 4.2-9 8-9s8 4 8 9c0 4.4-3.6 8-8 8Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 6c2.8 0 5 2.3 5 5.2 0 3-2.2 5.8-5 5.8s-5-2.8-5-5.8C7 8.3 9.2 6 12 6Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
export function IconHalawi(props: Props){
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 21h10a4 4 0 0 0 4-4v-3H3v3a4 4 0 0 0 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M6 14l2-7h8l2 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M9 7c.5-2 2-3 3-3s2.5 1 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}