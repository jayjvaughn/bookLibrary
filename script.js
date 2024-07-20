const title = document.querySelector("#title");
const author = document.querySelector("#author");
const addBtn = document.querySelector(".submitButton");
const containerBody = document.querySelector("#containerBody");


const myLibrary = [];

function book(title, author, isRead){
    this.title = title;
    this.author = author;
    this.isRead = isRead;
    this.iD = iD;
};

let iD = 0;

function addBookToLibrary(){
    myLibrary.push(book);
    containerBody.appendChild(card);
};
addBtn.addEventListener("click",()=> {
bookCard();
iD++;
});

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

                // have you read the book?
const read = document.createElement("div");
document.getElementsByName('status')
    .forEach(radio =>{
        if(radio.checked){
            read.setAttribute('id', 'read');
            read.textContent = "Status: " + radio.value;
            card.appendChild(read);
    }});

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
        if(read.textContent == "Status: " + "Finished"){
            read.textContent = "Status: " + "Still reading...";
        }
        else if(read.textContent == "Status: " + "Still reading..."){
            read.textContent = "Status: " + "Finished";
        }
    });

card.setAttribute("id", iD);
deleteBookBtn.addEventListener("click", (e)=>{
    console.log(e.target.title);
  const elementId = e.target.parentNode.parentNode.id;
  myLibrary.splice(elementId, 1);
            card.remove();
});

  
    const newBook = new book(title.value, author.value, );
    console.log(newBook);
    myLibrary.push(newBook);

}; 