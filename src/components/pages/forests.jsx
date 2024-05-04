import './pages.css';
import { Gallery } from 'components/elements/gallery';
import { data } from 'data/data';

const Forests = () => {
  return (
    <div className="page">
      <Gallery topic={data.forests} />
    </div>
  );
};

export default Forests;
