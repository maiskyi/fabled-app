import {
  logoGoogle,
  add,
  personCircle,
  bookOutline,
  chevronForward,
  mailOutline,
  chatboxEllipsesOutline,
  logoApple,
  logoFacebook,
  lockClosedOutline,
  logOutOutline,
  documentTextOutline,
  helpBuoyOutline,
  closeOutline,
  arrowForwardOutline,
  personOutline,
  ellipse,
  checkmarkCircle,
  diamondOutline,
  alertCircleOutline,
  cloudDownloadOutline,
} from 'ionicons/icons';

import fire from './assets/fire.svg?raw';
import chevronRight from './assets/chevron-right.svg?raw';
import arrowLeft from './assets/arrow-left.svg?raw';
import feather from './assets/feather.svg?raw';
import bookOpen from './assets/book-open.svg?raw';

const NEW_ICONS = {
  'arrow-left': `data:image/svg+xml;utf8,${arrowLeft}`,
  'book-open': `data:image/svg+xml;utf8,${bookOpen}`,
  'chevron-right': `data:image/svg+xml;utf8,${chevronRight}`,
  feather: `data:image/svg+xml;utf8,${feather}`,
  fire: `data:image/svg+xml;utf8,${fire}`,
};

export const ICON = {
  add,
  'alert-circle-outline': alertCircleOutline,
  apple: logoApple,
  'arrow-forward-outline': arrowForwardOutline,
  'book-outline': bookOutline,
  'chatbox-ellipses-outline': chatboxEllipsesOutline,
  'checkmark-circle': checkmarkCircle,
  'chevron-forward': chevronForward,
  'close-outline': closeOutline,
  'cloud-download-outline': cloudDownloadOutline,
  'diamond-outline': diamondOutline,
  'document-text-outline': documentTextOutline,
  ellipse,
  facebook: logoFacebook,
  google: logoGoogle,
  'help-buoy-outline': helpBuoyOutline,
  'lock-closed-outline': lockClosedOutline,
  'log-out-outline': logOutOutline,
  'mail-outline': mailOutline,
  'person-circle': personCircle,
  'person-outline': personOutline,
  ...NEW_ICONS,
};
