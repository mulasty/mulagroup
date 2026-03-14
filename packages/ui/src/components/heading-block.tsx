import * as React from 'react';

export function HeadingBlock({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mg-heading-block">
      {eyebrow ? <p className="mg-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="mg-muted">{description}</p> : null}
    </div>
  );
}
