import PropTypes from 'prop-types';
import scss from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ src, source, id, alt, onClick }) => {
  return (
    <li className={scss.imageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={scss.imageGalleryItemImage}
        onClick={() => onClick(source)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
