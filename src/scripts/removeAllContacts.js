import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
        try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
            const contacts = JSON.parse(data);
            console.log(contacts);
        const emptyContacts = [];
            await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2), 'utf-8');
            
    } catch (error) {
         console.error('Error deleting:', error);
    }
};

removeAllContacts();
