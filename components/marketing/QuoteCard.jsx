import React from 'react';

/** Testimonial card on dark panel or duotone imagery: metric-led quote + attribution. */
export function QuoteCard({quote, name, role, logoText, imageSrc, href='#', style}) {
  return React.createElement('a',{href,style:{display:'flex',flexDirection:'column',justifyContent:'flex-end',width:420,height:480,
    borderRadius:'var(--radius-panel)',overflow:'hidden',position:'relative',textDecoration:'none',
    background:imageSrc?('url('+imageSrc+') center/cover'):'var(--ink-900)',...style}},
    React.createElement('div',{style:{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(10,12,15,0) 30%,rgba(10,12,15,.82) 100%)'}}),
    logoText&&React.createElement('div',{style:{position:'absolute',top:24,left:24,fontFamily:'var(--font-mono)',fontSize:12,
      letterSpacing:'0.08em',textTransform:'uppercase',color:'#fff',opacity:.9}},logoText),
    React.createElement('div',{style:{position:'relative',padding:28,color:'#fff'}},
      React.createElement('p',{style:{margin:0,fontSize:22,fontWeight:500,lineHeight:1.32,letterSpacing:'-0.01em'}},quote),
      React.createElement('div',{style:{marginTop:16,fontSize:13,opacity:.72,lineHeight:1.45}},name,React.createElement('br'),role),
      React.createElement('div',{style:{marginTop:18,display:'flex',justifyContent:'space-between',alignItems:'center'}},
        React.createElement('span',{style:{fontSize:14,color:'#fff',opacity:.9}},'Read case \u2192'),
        React.createElement('span',{onClick:e=>{e.preventDefault();},style:{fontSize:13,color:'#fff',opacity:.9,border:'1px solid rgba(255,255,255,.45)',borderRadius:999,padding:'6px 14px',cursor:'pointer'}},'Share case'))));
}
