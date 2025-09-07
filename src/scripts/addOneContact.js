import { faker } from '@faker-js/faker';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const createFakeContact = () => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
  };
};

const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    
    existingContacts.push(newContact);
    
    await writeContacts(existingContacts);
    
    console.log('Успішно додано один новий контакт.');
  } catch (error) {
    console.error('Помилка при додаванні контакту:', error);
  }
};

addOneContact();