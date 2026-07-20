import React from 'react';

/** Big quantified claim: value + short support line. */
export function StatBlock({value, label, accent=false, onDark=false, size=56, style}) {
  return React.createElement('div',{style:{...style}},
    React.createElement('div',{style:{fontSize:size,fontWeight:500,letterSpacing:'var(--tracking-display)',lineHeight:1,
      color:accent?'var(--accent)':onDark?'var(--text-on-dark)':'var(--text-ink)'}},value),
    React.createElement('div',{style:{marginTop:10,fontSize:14,lineHeight:1.4,maxWidth:220,
      color:onDark?'var(--text-on-dark-2)':'var(--text-muted)'}},label));
}
