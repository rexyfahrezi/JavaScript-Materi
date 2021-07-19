class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
    }
    sendMessage(msg, to, from) {
        console.log(`you send: ${msg} to ${to} from ${from}`);
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    };
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');

/**
you send: hallo to penerima@dicoding.com from aku@gmail.com
**/



//#Constructor

// // cara 1
// class Mail {
//     constructor(author) {
//         this.from = 'pengirim@dicoding.com';
//         console.log('is instantiated', author);
//     };
// }
 
// // cara 2
// function Mail(author) {
//     this.from = author;
//     console.log('is instantiated', author);
// }

// const mail1 = new Mail("emailku@dicoding.com");
