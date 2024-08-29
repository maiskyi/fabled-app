import { FC, PropsWithChildren, useRef } from 'react';

import { Cloudinary } from '@cloudinary/url-gen';

import { CloudinaryContext } from '../../contexts/Cloudinary';

export type CloudinaryProviderProps = PropsWithChildren<{
  cloudName: string;
}>;

export const CloudinaryProvider: FC<CloudinaryProviderProps> = ({
  cloudName,
  children,
}) => {
  const { current: cld } = useRef(
    new Cloudinary({
      cloud: { cloudName },
    })
  );

  return (
    <CloudinaryContext.Provider value={{ cld }}>
      {children}
    </CloudinaryContext.Provider>
  );
};
