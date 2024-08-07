import { FC, CSSProperties } from 'react';

import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useAsync } from 'react-use';

export interface ImageStorageProps {
  filename: string;
  aspectRatio?: CSSProperties['aspectRatio'];
}

export const ImageStorage: FC<ImageStorageProps> = ({
  filename,
  aspectRatio = '16 / 9',
}) => {
  const { value } = useAsync(async (): Promise<string> => {
    const storage = getStorage();
    const image = ref(storage, filename);
    return await getDownloadURL(image);
  });

  return <img alt="" src={value} style={{ aspectRatio }} loading="lazy" />;
};
