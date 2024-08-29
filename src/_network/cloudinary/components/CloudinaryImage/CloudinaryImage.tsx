import { memo } from 'react';
import { useContextSelector } from 'use-context-selector';

import { transformationStringFromObject } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { AspectRatioType } from '@cloudinary/url-gen/types/types';

import { CloudinaryContext } from '../../contexts/Cloudinary';

import { CropType, GravityType } from './CloudinaryImage.types';

export interface CloudinaryImageProps {
  publicId: string;
  width?: number;
  height?: number;
  aspectRatio?: AspectRatioType;
  crop?: CropType;
  gravity?: GravityType;
}

export const CloudinaryImage = memo<CloudinaryImageProps>(
  function CloudinaryImage({
    publicId,
    width,
    height,
    aspectRatio,
    crop,
    gravity,
  }: CloudinaryImageProps) {
    const pixelRatio = window.devicePixelRatio;

    const cld = useContextSelector(CloudinaryContext, ({ cld }) => cld);

    const img = cld.image(publicId).format('auto').quality('auto');

    const transformation = transformationStringFromObject([
      {
        aspect_ratio: aspectRatio,
        crop,
        gravity,
        height: height && height * pixelRatio,
        width: width && width * pixelRatio,
      },
    ]);

    img.addTransformation(transformation);

    return <AdvancedImage cldImg={img} />;
  }
);
