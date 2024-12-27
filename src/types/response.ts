export interface MeetBoardDetailType {
  title: string;
  distance: string;
  startAt: string; // yyyy-MM-ddTHH:mm
  startLocation: StartLocationType;
  author: AuthorType;
  addressDetail: string;
  memberNum: string;
}

export interface AuthorType {
  name: string;
  level: string;
}

export interface AddressDetailType {
  address_name: string;
}

export interface TokenInfoType {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}

export interface MyInfoType {
  id: string;
  name: string;
  weight: string | null;
  height: string | null;
  runningUser: {
    totalDistance: number;
    bestDistance: number;
    worstDistance: number;
    levelPercentage: number;
  };
}

export interface RunningBoardType {
  id: string;
  title: string;
  distance: number;
  startAt: string;
  startLocation: StartLocationType;
}

export interface StartLocationType {
  startLongitude: number;
  startLatitude: number;
}

export interface RunningMeasurementType {
  startLongitude: number;
  startLatitude: number;
  endLongitude: number;
  endLatitude: number;
  runningTime: string;
}
