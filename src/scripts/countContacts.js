import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts) {
      const count = contacts.length;
      console.log(`Кількість контактів: ${count}`);
      return count;
    }
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error);
    return 0;
  }
};

countContacts();