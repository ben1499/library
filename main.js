let myLibrary = [
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        noOfPages: 150,
        isRead: true
    },
    {
        title: 'Deep Work',
        author: 'Cal Newport',
        noOfPages: 200,
        isRead: true
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        noOfPages: 150,
        isRead: false
    }
];

function Book(title, author, noOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.isRead = isRead;
    this.showInfo = function() {
        return `${title} by ${author}, ${noOfPages} pages, ${isRead ? 'has read' : 'not read yet'}`;
    }
}

function addBookToLibrary() {
    const titleInput = document.getElementById('titleInput').value;
    const authorInput = document.getElementById('authorInput').value;
    const pagesInput = document.getElementById('pagesInput').value;
    const readInput = document.querySelector('input[name="isRead"]:checked').value;
    console.log(readInput);
    // const newt = new Book(titleInput, authorInput, pagesInput);
}

const main = document.querySelector('main');


function displayBooks() {
    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const title = document.createElement('h4');
        const author = document.createElement('h6');
        const noOfPages = document.createElement('p');
        title.textContent = book.title;
        author.textContent = book.author;
        noOfPages.textContent = book.noOfPages;
        card.append(title, author, noOfPages);
        main.appendChild(card);
    })
}

displayBooks();

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', false);

console.log(theHobbit.showInfo());

const addBtn = document.querySelector('.add-btn');
const createForm = document.querySelector('.form');
const createBtn = document.querySelector('.create-btn')

addBtn.addEventListener('click', () => {
    createForm.classList.toggle('seen');
})

createBtn.addEventListener('click', addBookToLibrary);