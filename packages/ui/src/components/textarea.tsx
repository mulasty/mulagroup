import * as React from 'react';

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return <textarea className="mg-textarea" {...props} />;
}
