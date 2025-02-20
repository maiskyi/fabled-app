import { FC } from 'react';
import { noop } from 'lodash';
import { TypeAnimation } from 'react-type-animation';

export interface TypistProps {
  children: string;
  onStart?: () => void;
  onComplete?: () => void;
}

export const Typist: FC<TypistProps> = ({
  children,
  onStart = noop,
  onComplete = noop,
}) => {
  return (
    <TypeAnimation
      className="css"
      cursor={false}
      sequence={[onStart, children, onComplete]}
      speed={75}
    />
  );
};
