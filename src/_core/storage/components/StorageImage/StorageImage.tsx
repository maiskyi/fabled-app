import { FC, CSSProperties } from 'react';

import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useAsync } from 'react-use';

export interface ImageStorageProps {
  alt: string;
  filename: string;
  objectFit?: CSSProperties['objectFit'];
}

export const ImageStorage: FC<ImageStorageProps> = ({
  alt,
  filename,
  objectFit = 'cover',
}) => {
  const { value } = useAsync(async (): Promise<string> => {
    const storage = getStorage();
    const image = ref(storage, filename);
    return await getDownloadURL(image);
  });

  return <img alt={alt} src={value} style={{ objectFit }} loading="lazy" />;
};