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

import arrowLeft from './assets/arrow-left.svg?raw';
import atSign from './assets/at-sign.svg?raw';
import bookmark from './assets/bookmark.svg?raw';
import bookOpen from './assets/book-open.svg?raw';
import check from './assets/check.svg?raw';
import chevronLeft from './assets/chevron-left.svg?raw';
import chevronRight from './assets/chevron-right.svg?raw';
import edit3 from './assets/edit-3.svg?raw';
import feather from './assets/feather.svg?raw';
import fire from './assets/fire.svg?raw';
import lifeBuoy from './assets/life-buoy.svg?raw';
import mail from './assets/mail.svg?raw';
import music from './assets/music.svg?raw';
import settings from './assets/settings.svg?raw';
import shield from './assets/shield.svg?raw';
import smile from './assets/smile.svg?raw';
import user from './assets/user.svg?raw';
import volume1 from './assets/volume-1.svg?raw';
import volume2 from './assets/volume-2.svg?raw';
import x from './assets/x.svg?raw';
import playIndicator from './assets/play-indicator.svg?raw';
import trash2 from './assets/trash-2.svg?raw';

const NEW_ICONS = {
  'arrow-left': `data:image/svg+xml;utf8,${arrowLeft}`,
  'at-sign': `data:image/svg+xml;utf8,${atSign}`,
  'book-open': `data:image/svg+xml;utf8,${bookOpen}`,
  bookmark: `data:image/svg+xml;utf8,${bookmark}`,
  check: `data:image/svg+xml;utf8,${check}`,
  'chevron-left': `data:image/svg+xml;utf8,${chevronLeft}`,
  'chevron-right': `data:image/svg+xml;utf8,${chevronRight}`,
  'edit-3': `data:image/svg+xml;utf8,${edit3}`,
  feather: `data:image/svg+xml;utf8,${feather}`,
  fire: `data:image/svg+xml;utf8,${fire}`,
  'life-buoy': `data:image/svg+xml;utf8,${lifeBuoy}`,
  mail: `data:image/svg+xml;utf8,${mail}`,
  music: `data:image/svg+xml;utf8,${music}`,
  'play-indicator': `data:image/svg+xml;utf8,${playIndicator}`,
  settings: `data:image/svg+xml;utf8,${settings}`,
  shield: `data:image/svg+xml;utf8,${shield}`,
  smile: `data:image/svg+xml;utf8,${smile}`,
  'trash-2': `data:image/svg+xml;utf8,${trash2}`,
  user: `data:image/svg+xml;utf8,${user}`,
  'volume-1': `data:image/svg+xml;utf8,${volume1}`,
  'volume-2': `data:image/svg+xml;utf8,${volume2}`,
  x: `data:image/svg+xml;utf8,${x}`,
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
