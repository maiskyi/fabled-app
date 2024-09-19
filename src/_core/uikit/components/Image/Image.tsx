import { Fragment, memo, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { Spinner } from '../Spinner';

import styles from './Image.module.scss';

export interface ImageProps {
  src: string;
}

export const Image = memo<ImageProps>(function Image({ src }: ImageProps) {
  const ref = useRef<HTMLImageElement>();
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {}, []);

  return (
    <Fragment>
      {!ready && <Spinner className={styles.spinner} />}
      <img
        alt=""
        className={classNames({
          [styles.hidden]: !ready,
        })}
        onLoad={() => setReady(() => true)}
        ref={ref}
        src={src}
      />
    </Fragment>
  );
});
