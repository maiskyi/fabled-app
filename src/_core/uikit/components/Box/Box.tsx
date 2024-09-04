import { CSSProperties, forwardRef, PropsWithChildren } from 'react';

export type BoxProps = PropsWithChildren<CSSProperties>;

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { children, ...style },
  ref
) {
  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
});
