import React from 'react';

/** Pill button with the brand text roll-up hover (label duplicated, slides up). */
export function Button({label, variant='primary', size='md', href, onClick, style}) {
  const pal={
    primary:{background:'var(--accent)',color:'#fff'},
    ink:{background:'var(--text-ink)',color:'#fff'},
    white:{background:'#fff',color:'var(--text-ink)'},
    outline:{background:'transparent',color:'inherit',boxShadow:'inset 0 0 0 1px currentColor'},
  }[variant]||{};
  const pad={sm:'8px 18px',md:'12px 26px',lg:'16px 34px'}[size];
  const fs={sm:14,md:15,lg:17}[size];
  const [hov,setHov]=React.useState(false);
  const Tag=href?'a':'button';
  return React.createElement(Tag,{
    href,onClick,
    onMouseEnter:()=>setHov(true),onMouseLeave:()=>setHov(false),
    style:{display:'inline-flex',alignItems:'center',justifyContent:'center',border:'none',cursor:'pointer',
      borderRadius:'var(--radius-pill)',padding:pad,fontFamily:'var(--font-button)',fontWeight:500,fontSize:fs,
      lineHeight:1.2,whiteSpace:'nowrap',textDecoration:'none',position:'relative',overflow:'hidden',...pal,...style}},
    React.createElement('span',{style:{display:'block',position:'relative',height:fs*1.2,overflow:'hidden'}},
      React.createElement('span',{style:{display:'block',transform:hov?'translateY(-100%)':'none',transition:'transform var(--dur-med) var(--ease-brand)'}},label),
      React.createElement('span',{style:{display:'block',position:'absolute',top:'100%',left:0,right:0,transform:hov?'translateY(-100%)':'none',transition:'transform var(--dur-med) var(--ease-brand)'}},label)));
}
