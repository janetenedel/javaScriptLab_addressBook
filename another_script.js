class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor(contacts) {
        this.contacts = contacts;
    }

    add(contact) {
        this.contacts.push(contact);
    }

    deleteAt(index) {
        this.contacts.splice(index, 1);
    }

    print() {
        console.log(this.contacts);
    }
}


let book = new AddressBook ([new Contact('Ivan', 'ivan@ivan.com', '3135959595', 'teacher'), new Contact('Janete', 'janete@janete.com', '3130979797', 'self')]);


while (true) {
    let choice = prompt(`Would you like to add, delete, print or quit?`);


    if (choice === 'add') {
        let newName = prompt('Name?');
        let newEmail = prompt('Email?');
        let newPhone = prompt('Phone?');
        let newRelation = prompt('Relation?');
        book.add(new Contact(newName, newEmail, newPhone, newRelation));
    }

    if (choice === 'delete') {
        let index = prompt('Index?');
        book.deleteAt(index);
    }

    if (choice === 'print') {
        book.print();
    }

    if (choice === 'quit' || choice === null) {
        console.log(`Farewell!`);
        break;
    }

}






