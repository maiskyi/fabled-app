import { Fragment, memo, useLayoutEffect, useState } from 'react';
import classNames from 'classnames';

import { Spinner } from '../Spinner';

import styles from './Image.module.scss';

export interface ImageProps {
  src: string;
}

export const Image = memo<ImageProps>(function Image({ src }: ImageProps) {
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {}, []);

  return (
    <Fragment>
      {!ready && <Spinner className={styles.spinner} color="secondary" />}
      <img
        alt=""
        className={classNames({
          [styles.hidden]: !ready,
        })}
        loading="lazy"
        onLoad={() => setReady(() => true)}
        src={src}
      />
    </Fragment>
  );
});
