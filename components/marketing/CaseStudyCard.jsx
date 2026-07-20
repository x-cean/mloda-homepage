import React from 'react';
import {Tag} from '../core/Tag.jsx';

/** Case-study / blog teaser: logo area + title + arrow link + industry tag. */
export function CaseStudyCard({title, industry, logoSrc, logoText, href='#', imageSrc, linkLabel='Read our case study', style}) {
  const [hov,setHov]=React.useState(false);
  return React.createElement('a',{href,onMouseEnter:()=>setHov(true),onMouseLeave:()=>setHov(false),
    style:{display:'flex',flexDirection:'column',width:340,borderRadius:'var(--radius-card)',overflow:'hidden',
      background:'var(--paper-1)',border:'1px solid var(--line-light)',textDecoration:'none',color:'var(--text-ink)',
      transform:hov?'translateY(-4px)':'none',transition:'transform var(--dur-med) var(--ease-brand)',...style}},
    React.createElement('div',{style:{height:120,display:'grid',placeItems:'center',
      background:imageSrc?('url('+imageSrc+') center/cover'):'var(--paper-2)'}},
      logoSrc?React.createElement('img',{src:logoSrc,alt:'',style:{maxHeight:36,maxWidth:'60%'}}):
      React.createElement('span',{style:{fontFamily:'var(--font-mono)',fontSize:13,letterSpacing:'0.06em',textTransform:'uppercase',
        color:imageSrc?'#fff':'var(--text-muted)'}},logoText||'')),
    React.createElement('div',{style:{padding:20,display:'flex',flexDirection:'column',gap:14,flex:1}},
      React.createElement('h3',{style:{margin:0,fontSize:18,fontWeight:500,lineHeight:1.3,letterSpacing:'-0.01em'}},title),
      React.createElement('div',{style:{marginTop:'auto',display:'flex',alignItems:'center',justifyContent:'space-between'}},
        React.createElement('span',{style:{fontSize:14,color:'var(--accent)',display:'inline-flex',alignItems:'center',gap:6}},linkLabel,
          React.createElement('span',{style:{display:'inline-block',transform:hov?'translateX(4px)':'none',transition:'transform var(--dur-fast) var(--ease-brand)'}},'\u2192')),
        industry&&React.createElement(Tag,{label:industry}))));
}
