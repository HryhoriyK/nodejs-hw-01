import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.error('Помилка при отриманні всіх контактів:', error);
    return null;
  }
};

getAllContacts();