const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isRead = document.querySelector("#yes");
const isNotRead = document.querySelector("#no");
const popUpBtn = document.querySelector(".addBookPopUp");
const addBtn = document.querySelector(".submitButton");
const containerBody = document.querySelector("#containerBody")


const myLibrary = [];

function book(title, author, pageCount, isRead){
    this.title = title;
    this.author = author;
    this.isRead = isRead;
};

function addBookToLibrary(){
    myLibrary.push(book);
};

addBtn.addEventListener("click", bookCard);

                    // Book Cards
function bookCard(){
const card = document.createElement("div");
    card.classList.add('card');
    containerBody.append(card);

const bookTitle = document.createElement("div");
    bookTitle.textContent = title.value;
    bookTitle.classList.add("cardTitle");
    card.appendChild(bookTitle);

const bookAuthor =  document.createElement("div");
bookAuthor.textContent = "Author: " + author.value;
card.appendChild(bookAuthor);

const isBookRead = function isBookReadChecker(){
    if(yes.checked){
    const isBookRead = document.createElement("div");
    isBookRead.textContent = "Status: " + "Finsihed";
    card.appendChild(isBookRead);
    }
    else if(no.checked){
        const isBookRead = document.createElement("div");
        isBookRead.textContent = "Status: " + "Still reading...";
        card.appendChild(isBookRead);
    }

    const newBook = new book(title.value, author.value, );
    console.log(newBook);
    myLibrary.push(newBook);

};
isBookRead();
                
                // Card Buttons
const btnDiv = document.createElement("div");
        btnDiv.classList.add('btnDiv');
        card.appendChild(btnDiv);
const readBtn = document.createElement("button");
        readBtn.classList.add('readBtn');
        readBtn.textContent = "Status";
        btnDiv.appendChild(readBtn);
const deleteBookBtn = document.createElement("button");
    deleteBookBtn.classList.add('deleteBookBtn');
    deleteBookBtn.textContent = "Delete";
    btnDiv.appendChild(deleteBookBtn);

    readBtn.addEventListener("click", ()=>{
        if(isBookRead.textContent = "Status: " + "Finsihed"){
            isBookRead.textContent = "Status: " + "Still reading...";
        }
        else if(isBookRead.textContent = "Status: " + "Still reading..."){
            isBookRead.textContent = "Status: " + "Finsihed";
        }
    });

containerBody.appendChild(card);

};
