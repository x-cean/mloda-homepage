import React from 'react';
import {Button} from '../core/Button.jsx';

/** Site header: mark, center nav, pill CTA. */
export function Navbar({items=['Product','How it works','Docs','Blog','GitHub'], cta='Try for free', ctaHref, logoSrc='assets/mloda-wordmark.svg', style}) {
  return React.createElement('header',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,
    padding:'14px 28px',background:'rgba(255,255,255,.85)',backdropFilter:'blur(12px)',borderBottom:'1px solid var(--line-light)',...style}},
    React.createElement('a',{href:'#top',style:{display:'flex'}},React.createElement('img',{src:logoSrc,alt:'mloda',style:{height:34}})),
    React.createElement('nav',{style:{display:'flex',gap:26,fontSize:15}},
      items.map(i=>React.createElement('a',{key:i,href:'#',style:{color:'var(--text-ink)'}},i))),
    React.createElement(Button,{label:cta,variant:'primary',size:'sm',href:ctaHref}));
}
