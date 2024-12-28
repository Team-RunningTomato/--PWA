export interface PatchMyBodyInfoBodyType {
  height: number;
  weight: number;
}

export interface PostMateInfoType {
  title: string;
  distance: number;
  startAt: string;
  startLongitude: string;
  startLatitude: string;
  addressDetail: string;
  // TODO api 스펙 바뀔 시 수정
}
