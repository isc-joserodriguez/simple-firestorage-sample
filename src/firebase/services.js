import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from './config';

export const uploadFile = async (file) => {
  try {
    const storageRef = ref(storage, 'imagenes/' + v4() + file.name);
    await uploadBytes(storageRef, file);
    console.log(await getDownloadURL(storageRef));
  } catch (e) {
    console.error('Algo salió mal', e);
  }
};
