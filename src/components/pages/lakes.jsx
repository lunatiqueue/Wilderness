import './pages.css';
import { Gallery } from 'components/elements/gallery';
import { data } from 'data/data';

const Lakes = () => {
  return <div className="page"><Gallery topic={data.lakes} /></div>;
};

export default Lakes;
