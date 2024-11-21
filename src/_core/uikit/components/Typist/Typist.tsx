import { FC } from 'react';
import { noop } from 'lodash';
import { TypeAnimation } from 'react-type-animation';

export interface TypistProps {
  children: string;
  onComplete?: () => void;
}

export const Typist: FC<TypistProps> = ({ children, onComplete = noop }) => {
  return (
    <TypeAnimation
      className="css"
      cursor={false}
      sequence={[children, onComplete]}
    />
  );
};
