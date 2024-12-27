import { RunningPage } from '@/pageContainers';

const Running = ({ params: { id } }: { params: { id: string } }) => {
  return <RunningPage id={id} />;
};

export default Running;
