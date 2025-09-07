import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts && contacts.length > 0) {

      const removedContact = contacts.pop();
      
      await writeContacts(contacts);
      console.log(`Успішно видалено останній контакт:`, removedContact);
    } else {
      console.log('Масив контактів порожній, немає чого видаляти.');
    }
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error);
  }
};

removeLastContact();