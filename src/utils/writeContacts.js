import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const dataToWrite = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, dataToWrite, 'utf-8');
    console.log('Контакти успішно записано у файл.');
  } catch (error) {
    console.error('Помилка при записі файлу контактів:', error);
  }
};