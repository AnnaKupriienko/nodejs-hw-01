import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        
        if (contacts.length > 0) {
            contacts.pop();
        } 
        else {
            console.log('No contacts to remove.');
            return;
        }
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    } catch (error) {
         console.error('Error removing the last contact:', error);
    }
};

removeLastContact();
