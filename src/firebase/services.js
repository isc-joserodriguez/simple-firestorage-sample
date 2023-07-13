import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from 'firebase/storage';
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

export const getAllFiles = async () => {
  try {
    const storageRef = ref(storage, 'imagenes');
    const fileList = await listAll(storageRef);
    const downloadURLs = await Promise.all(
      fileList.items.map(async (file) => {
        const url = await getDownloadURL(file);
        return { name: file.name, url };
      })
    );
    return downloadURLs;
  } catch (e) {
    console.log(e);
  }
};

export const deleteFile = async (filePath) => {
  try {
    await deleteObject(filePath);
  } catch (e) {
    console.log(e);
  }
};
