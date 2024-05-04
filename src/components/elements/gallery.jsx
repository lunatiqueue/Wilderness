import { useEffect, useState } from 'react';
import './gallery.css';

export const Gallery = ({ topic }) => {
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => setFirstLoad(true), []);

  return (
    <div className={`gallery_container ${firstLoad ? 'show' : ''}`}>
      {topic.map((el, idx) => (
        <section
          key={idx}
          className="gallery"
          style={{
            backgroundImage: `url(${el.imgs[0]})`,
          }}
        >
          <div className="gallery_title">{el.title}</div>
          <div className="gallery_description">{el.about}</div>
          {/* {el.imgs.map(img => (
            <a href={img} style={{ visibility: 'hidden' }}>
              _
            </a>
          ))} */}
        </section>
      ))}
    </div>
  );
};
