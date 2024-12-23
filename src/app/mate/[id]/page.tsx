import { MateDetailPage } from '@/pageContainers';

const MateDetail = ({ params: { id } }: { params: { id: string } }) => {
  return <MateDetailPage id={id} />;
};

export default MateDetail;
