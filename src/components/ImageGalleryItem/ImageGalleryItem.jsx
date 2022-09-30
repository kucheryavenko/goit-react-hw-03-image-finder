import { Component } from 'react';
import { Item, Img } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;
    const { toggleModal } = this;
    return (
      <>
        <Item onClick={toggleModal} key={id}>
          <Img src={webformatURL} alt={tags} loading="lazy" />
        </Item>
        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
// export const ImageGalleryItem = ({ onOpen, id, webformatURL, tags }) => {
//   return (
//     <Item onClick={() => onOpen()} key={id}>
//       <Img src={webformatURL} alt={tags} loading="lazy" />
//     </Item>
//   );
// };
