import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        const countData = contacts.length;
        console.log('Кількість контактів:', countData);
        return countData;
    } catch (error) {
         console.error('Error counting:', error);
    }
};

console.log(await countContacts());
