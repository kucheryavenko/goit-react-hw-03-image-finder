import { Item, Img } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <Item key={id}>
      <Img src={webformatURL} alt={tags} loading="lazy" />
    </Item>
  );
};
