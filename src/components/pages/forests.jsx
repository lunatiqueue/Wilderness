import { Gallery } from 'components/elements/gallery';
import { data } from 'data/data';
import './pages.css';

const Forests = () => {
  return (
    <div className="page">
      <Gallery topic={data.forests} />
    </div>
  );
};

export default Forests;
