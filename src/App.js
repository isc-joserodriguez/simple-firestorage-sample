import { useEffect, useState } from 'react';
import FormComponent from './Components/FormComponent';
import ImageListComponent from './Components/ImageListComponent';
import NavComponent from './Components/NavComponent';
import { getAllFiles } from './firebase/services';

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const imagesResponse = await getAllFiles();
    setImages(imagesResponse);

    console.log('imagenes', imagesResponse);
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <>
      <NavComponent />
      <FormComponent fetchImages={fetchImages} />
      <ImageListComponent images={images} />
    </>
  );
}

export default App;
