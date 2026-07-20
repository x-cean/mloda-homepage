// Loads design-system .jsx sources directly (used by preview cards & UI kits).
// If the compiled _ds_bundle.js namespace is present on window it is used instead.
window.loadDS=async function(base,files){
  for(const k of Object.getOwnPropertyNames(window)){
    try{const v=window[k];if(v&&typeof v==='object'&&typeof v.Button==='function'&&typeof v.QuoteCard==='function')return v}catch(e){}
  }
  const srcs=await Promise.all(files.map(f=>fetch(base+f).then(r=>r.text())));
  let code=srcs.join('\n').replace(/^import[^\n]*$/gm,'').replace(/export function/g,'function');
  const names=[...new Set([...code.matchAll(/function ([A-Z]\w+)\(/g)].map(m=>m[1]))];
  code+='\nwindow.__DSLOCAL__={'+names.join(',')+'};';
  const out=Babel.transform(code,{presets:[['react',{runtime:'classic'}]]}).code;
  new Function('React',out)(window.React);
  return window.__DSLOCAL__;
};
window.DS_FILES=['core/Button.jsx','core/IconButton.jsx','core/Tag.jsx','core/Eyebrow.jsx','core/StatBlock.jsx','core/Input.jsx','marketing/SectionHeader.jsx','marketing/CaseStudyCard.jsx','marketing/QuoteCard.jsx','marketing/Navbar.jsx','marketing/Footer.jsx','marketing/LogoWall.jsx'];
