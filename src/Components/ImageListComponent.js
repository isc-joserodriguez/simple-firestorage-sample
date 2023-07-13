import { Image } from 'react-bootstrap';

const ImageListComponent = ({ images }) => {
  return images.map((image) => (
    <Image width={200} key={image.name} src={image.url} thumbnail />
  ));
};

export default ImageListComponent;
