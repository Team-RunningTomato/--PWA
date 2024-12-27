export default interface RunningStateType {
  location: string;
  intendKM: string;
  title: string;
  date: string;
  level: number;
  totalDistance: number;
  bestDistance: number;
  worstDistance: number | null;
  todayRunning: string[];

  //TODO 필드 명 변경시 변경
}
