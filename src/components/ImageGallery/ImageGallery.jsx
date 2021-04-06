import ImageGalleryItem from '../ImageGalleryItem/';

import scss from './ImageGallery.module.scss';

const ImageGallery = ({ hits, onClick }) => {
  return (
    <ul className={scss.imageGallery}>
      {hits.map(hit => (
        <ImageGalleryItem
          key={hit.id}
          src={hit.webformatURL}
          source={hit.largeImageURL}
          id={hit.id}
          alt={hit.tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
