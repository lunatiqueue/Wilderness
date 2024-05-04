import { useEffect, useState } from 'react';
import './pages.css';

const Forests = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(setShow(true), 1000);
    return clearTimeout(timeout);
  }, []);

  return <div className={`page ${show ? 'show' : ''}`}>Forests Page</div>;
};

export default Forests;
