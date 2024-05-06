import { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './gallery.css';

export const Gallery = ({ topic }) => {
  const [firstLoad, setFirstLoad] = useState(false);
  const [open, setOpen] = useState(false);
  const [sectionIdx, setSectionIdx] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstLoad(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const slides = topic[sectionIdx].imgs.map(img => {
    return { src: img };
  });

  return (
    <div className={`gallery_container ${firstLoad ? 'show' : ''}`}>
      {topic.map((el, idx) => (
        <section
          key={idx}
          className="gallery"
          style={{
            backgroundImage: `url(${el.imgs[0]})`,
          }}
          onClick={() => {
            setSectionIdx(idx);
            setOpen(true);
          }}
        >
          <div className="gallery_title">{el.title}</div>
          <div className="gallery_description">{el.about}</div>
        </section>
      ))}
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </div>
  );
};
