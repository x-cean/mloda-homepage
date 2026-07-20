import React from 'react';
import {Eyebrow} from '../core/Eyebrow.jsx';

/** Section opener: optional eyebrow + big H2 + optional lede. */
export function SectionHeader({eyebrow, title, lede, onDark=false, align='left', style}) {
  return React.createElement('div',{style:{textAlign:align,maxWidth:720,margin:align==='center'?'0 auto':undefined,...style}},
    eyebrow&&React.createElement(Eyebrow,{label:eyebrow,onDark,style:{marginBottom:16}}),
    React.createElement('h2',{style:{margin:0,fontSize:'var(--text-h2)',fontWeight:500,letterSpacing:'var(--tracking-display)',
      lineHeight:'var(--leading-heading)',color:onDark?'var(--text-on-dark)':'var(--text-ink)'}},title),
    lede&&React.createElement('p',{style:{margin:'18px 0 0',fontSize:'var(--text-body-size)',lineHeight:'var(--leading-body)',
      color:onDark?'var(--text-on-dark-2)':'var(--text-muted)'}},lede));
}
