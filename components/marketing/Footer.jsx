import React from 'react';

/** Dark footer: link columns + legal line. */
export function Footer({columns={Product:['How it works','Lineage','Connectors','Roadmap'],Developers:['Docs','Quickstart','GitHub','PyPI'],Company:['About','Blog','Contact'],Legal:['Imprint','Privacy Policy','Terms']}, logoSrc='assets/mloda-wordmark.svg', legal='\u00A92026 mloda. All rights reserved.', style}) {
  return React.createElement('footer',{style:{background:'var(--ink-950)',color:'var(--text-on-dark)',padding:'64px 48px 32px',...style}},
    React.createElement('div',{style:{display:'flex',gap:64,flexWrap:'wrap',justifyContent:'space-between'}},
      React.createElement('img',{src:logoSrc,alt:'mloda',style:{height:56,filter:'brightness(0) invert(1)'}}),
      Object.entries(columns).map(([h,links])=>React.createElement('div',{key:h},
        React.createElement('div',{style:{fontFamily:'var(--font-mono)',fontSize:12,letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--text-on-dark-2)',marginBottom:14}},h),
        links.map(l=>{const [label,href]=Array.isArray(l)?l:[l,'#'];const fn=typeof href==='function';return React.createElement('a',{key:label,href:fn?'#':href,onClick:fn?(e=>{e.preventDefault();href()}):undefined,style:{display:'block',color:'var(--text-on-dark)',fontSize:14,marginBottom:10,cursor:'pointer'}},label)})))),
    React.createElement('div',{style:{marginTop:48,paddingTop:24,borderTop:'1px solid var(--line-dark)',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12,fontSize:12,color:'var(--text-on-dark-2)'}},
      React.createElement('span',null,legal),
      React.createElement('span',null,'Imprint \u00B7 Privacy Policy \u00B7 Terms of Service \u00B7 Acceptable Use Policy')));
}
