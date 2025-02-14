export interface VolumeOnChangeParams {
  value: number;
}

export type VolumeOnChange = (params: VolumeOnChangeParams) => void;
