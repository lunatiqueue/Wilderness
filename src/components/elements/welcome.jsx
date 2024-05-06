import './welcome.css';

export const Welcome = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <header className="main-header">
          <div className="layers">
            <div className="layer__header">
              <div className="layers__caption">Welcome to Wilderness</div>
              <div className="layers__title">Lets see the world</div>
            </div>
            <div className="layer layers__base"></div>
            <div className="layer layers__middle"></div>
            <div className="layer layers__front"></div>
          </div>
        </header>

        <article className="main-article">
          <div className="main-article__content">
            <h2 className="main-article__header">Click below</h2>
            <p className="main-article__paragraph">
            Discover the finest wilderness destinations in Europe and North America! Click on each intriguing location to explore further and experience something truly special. From majestic mountain ranges to serene forests, embark on a journey of discovery and immerse yourself in the beauty of these natural wonders.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
