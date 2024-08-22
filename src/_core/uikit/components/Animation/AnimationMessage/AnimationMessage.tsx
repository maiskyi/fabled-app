import { FC, PropsWithChildren } from 'react';

import { useSpring, animated } from '@react-spring/web';

type AnimationMessageProps = PropsWithChildren<{}>;

export const AnimationMessage: FC<AnimationMessageProps> = ({ children }) => {
  const animationProps = useSpring({
    config: { friction: 26, tension: 170 },
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
  });

  return <animated.div style={animationProps}>{children}</animated.div>;
};
