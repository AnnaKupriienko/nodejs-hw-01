import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from "../utils/createFakeContact.js";
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        let newContacts = [];
        for (let i = 0; i < number; i += 1) {
            newContacts.push(createFakeContact());
        };
        const updateContacts = contacts.concat(newContacts);

        await fs.writeFile(PATH_DB, JSON.stringify(updateContacts, null, 2), 'utf-8');
         console.log(`${number} new contacts have been added.`);
    }
    catch (error) {
        console.error('Error handling db.json:', error);
    }
};

generateContacts(5);



