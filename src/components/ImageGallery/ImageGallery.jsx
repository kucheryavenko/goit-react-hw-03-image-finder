import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits }) => {
  return (
    <List>
      {hits.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
        );
      })}
    </List>
  );
};
