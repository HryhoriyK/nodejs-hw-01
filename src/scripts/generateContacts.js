import { faker } from '@faker-js/faker';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

// Допоміжна функція для створення одного фейкового контакту
const createFakeContact = () => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    job: faker.person.jobTitle(),
  };
};

// Головна функція для генерації контактів
const generateContacts = async (count) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: count }, createFakeContact);

    const allContacts = [...existingContacts, ...newContacts];

    await writeContacts(allContacts);
    console.log(`Успішно згенеровано та додано ${count} нових контактів.`);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error);
  }
};

const numberOfContactsToGenerate = 5; 
generateContacts(numberOfContactsToGenerate);