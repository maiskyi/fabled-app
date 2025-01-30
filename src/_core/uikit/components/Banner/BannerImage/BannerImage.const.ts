import { ASSETS } from '../../../constants';

import { BannerImageAsset } from './BannerImage.types';

const { TWO_ROBOTS, ROBOTS_1_2_3, ROBOT_1, ROBOT_2, ROBOT_3, ROBOT_4 } = ASSETS;

export const ASSETS_MAPPING: Record<BannerImageAsset, string> = {
  'robot-1': ROBOT_1,
  'robot-2': ROBOT_2,
  'robot-3': ROBOT_3,
  'robot-4': ROBOT_4,
  'robots-1-2-3': ROBOTS_1_2_3,
  'two-robots': TWO_ROBOTS,
};
