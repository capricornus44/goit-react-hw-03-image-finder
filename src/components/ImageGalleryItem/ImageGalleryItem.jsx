import scss from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ src, source, id, alt, onClick }) => {
  return (
    <li className={scss.imageGalleryItem}>
      <img
        src={src}
        alt={alt}
        data-id={id}
        className={scss.imageGalleryItemImage}
        onClick={() => onClick(source)}
      />
    </li>
  );
};

export default ImageGalleryItem;
