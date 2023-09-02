"use strict";
const addbtn = document.querySelector(".add-btn");
const submit = document.querySelector(".submit");
const form = document.querySelector(".form");
const container = document.querySelector(".container");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const title = document.querySelector("#title");
const read = document.querySelector("#read");

const myLibrary = [];

/* events */

addbtn.addEventListener("click", function () {
  form.classList.toggle("hidden");
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  container.classList.remove("hidden");
  addBookToLibrary();
  form.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
  const target = event.target.closest(".imgdelete");
  if (target) {
    myLibrary.splice(Number(target.getAttribute("id")), 1);
    displayBook(myLibrary);
  }
});

/* functions */

function Book(title, author, pages, read) {
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;
  this.read = read.value;
}

function addBookToLibrary() {
  const livre = new Book(title, author, pages, read);
  myLibrary.push(livre);
  displayBook(myLibrary);
}

function displayBook(arrbook) {
  container.innerHTML = "";
  arrbook.forEach(function (book, index) {
    const { title, author, pages } = book;
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="book-container" >
        <div class="cont-top">
          <div class="book">Bookname: ${title}</div>
          <div class="author">Author: ${author}</div>
          <div class="page">Page numbers: ${pages} page(s)</div>
        </div>
        <div class="cont-bottom">
         
            <div class="update">
              <div>update</div>
              <a href="#">
              <img src="pencil.svg" alt="update" class="imgupdate" id=${index} />
              </a>
            </div>

            <div class="delete">
              <div>Delete</div>
              <a href="#">
              <img src="delete.svg" alt="delete" class="imgdelete" id=${index} />
              </a>
            </div>
        </div>
      </div>`
    );
  });
}
