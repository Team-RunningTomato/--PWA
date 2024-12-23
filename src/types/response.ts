export interface MeetBoardDetailType {
  title: string;
  distance: string;
  startAt: string; // yyyy-MM-ddTHH:mm
  startLocation: {
    startLongitude: number;
    startLatitude: number;
  };
  author: {
    name: string;
    level: string;
  };
  addressDetail: string;
  memberNum: string;
}

export interface AddressDetailType {
  address_name: string;
}
