import { cloneElement, FC, Fragment, ReactElement, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import classNames from 'classnames';

import { transformationStringFromObject } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { AspectRatioType } from '@cloudinary/url-gen/types/types';

import { CloudinaryContext } from '../../contexts/CloudinaryContext';

import { ImageCropMode } from './Image.types';

import styles from './Image.module.scss';

export interface ImageProps {
  id: string;
  width?: number;
  aspectRatio?: AspectRatioType;
  crop?: ImageCropMode;
  spinner?: ReactElement;
}

export const Image: FC<ImageProps> = ({
  id,
  width,
  crop,
  aspectRatio,
  spinner = <Fragment />,
}) => {
  const [ready, setReady] = useState(false);

  const cld = useContextSelector(CloudinaryContext, ({ cld }) => cld);

  const img = cld.image(id);

  const transformation = transformationStringFromObject([
    { aspect_ratio: aspectRatio, crop, width },
  ]);

  img.addTransformation(transformation);

  return (
    <Fragment>
      {!ready &&
        cloneElement(spinner, {
          className: styles.spinner,
        })}
      <AdvancedImage
        className={classNames({
          [styles.hidden]: !ready,
        })}
        cldImg={img}
        loading="lazy"
        onLoad={() => setReady(() => true)}
      />
    </Fragment>
  );
};
