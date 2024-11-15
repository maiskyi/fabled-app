import { createContext } from 'use-context-selector';

import { Cloudinary } from '@cloudinary/url-gen';

interface CloudinaryContextProps {
  cld: Cloudinary;
}

export const CloudinaryContext = createContext<CloudinaryContextProps>({
  cld: null,
});
