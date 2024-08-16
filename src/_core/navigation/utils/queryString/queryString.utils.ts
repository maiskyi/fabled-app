import { has } from 'lodash';
import qs from 'qs';

import { KEYWORDS } from './queryString.const';

export const parse = (v: string) =>
  qs.parse(v, {
    decoder: (value: string) => {
      if (/^(\d+|\d*\.\d+)$/.test(value)) {
        return parseFloat(value);
      }
      if (has(KEYWORDS, value)) {
        return KEYWORDS[value];
      }
      try {
        return decodeURI(value);
      } catch (_) {
        return value;
      }
    },
    ignoreQueryPrefix: true,
  });

export const stringify = (params: object) =>
  qs.stringify(params, {
    addQueryPrefix: true,
    encode: false,
  });
