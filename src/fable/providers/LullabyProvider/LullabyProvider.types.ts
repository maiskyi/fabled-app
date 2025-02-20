interface LullabyVolumeParams {
  value: number;
}

interface LullabyMelodyParams {
  value: string;
}

export type LullabySetVolume = (params?: LullabyVolumeParams) => void;

export type LullabySetMelody = (params: LullabyMelodyParams) => void;
