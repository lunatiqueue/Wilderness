import './pages.css';
import { Gallery } from 'components/elements/gallery';
import { data } from 'data/data';


const Mountains = () => {
  return <div className="page"><Gallery topic={data.mountains} /></div>;
};

export default Mountains;
