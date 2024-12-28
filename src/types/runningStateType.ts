export default interface RunningStateType {
  location: string;
  distance: number;
  title: string;
  date: string;
  level: number;
  totalDistance: number;
  longestDistance: number;
  shortestDistance: number | null;
  todayRunning: string[];

  //TODO 필드 명 변경시 변경
}
