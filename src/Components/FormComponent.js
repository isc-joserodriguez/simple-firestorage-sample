import { useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { uploadFile } from '../firebase/services';

function FormComponent({ fetchImages }) {
  const [image, setImage] = useState(null);
  const [urlPreview, setURLPreview] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadFile(image);
    setImage(null);
    setURLPreview(null);
    e.target.reset();
    fetchImages();
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setURLPreview(URL.createObjectURL(e.target.files[0]));
    } else {
      setImage(null);
      setURLPreview(null);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control type="file" onChange={handleChange} />
      {urlPreview && <Image src={urlPreview} thumbnail />}
      <Button type="submit" variant="success">
        Success
      </Button>
    </Form>
  );
}

export default FormComponent;
