import React from 'react';

/** Form field (newsletter / book-a-demo forms). */
export function Input({label, placeholder, required=false, type='text', value, onChange, onDark=false, style}) {
  return React.createElement('label',{style:{display:'block',fontFamily:'var(--font-sans)',...style}},
    label&&React.createElement('span',{style:{display:'block',fontSize:13,marginBottom:6,
      color:onDark?'var(--text-on-dark-2)':'var(--text-muted)'}},label+(required?' *':'')),
    React.createElement('input',{type,placeholder,value,onChange,required,
      style:{width:'100%',boxSizing:'border-box',padding:'12px 16px',borderRadius:10,fontSize:15,fontFamily:'var(--font-sans)',
        border:onDark?'1px solid var(--line-dark)':'1px solid var(--line-light)',outline:'none',
        background:onDark?'rgba(255,255,255,.06)':'#fff',color:onDark?'var(--text-on-dark)':'var(--text-ink)'}}));
}
