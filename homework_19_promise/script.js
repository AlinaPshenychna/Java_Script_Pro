// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост,
// то вивести на сторінку блок з постом і зробити кнопку для отримання коментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

const btn = document.querySelector(".btn");
const getBtn = document.querySelector(".get-btn");
let inputValue;
let idNumber;

btn.addEventListener("click", function () {
  const postResult = document.querySelector(".post-result");
  inputValue = document.querySelector(".input-value").value;

  fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      if (inputValue && inputValue <= 100) {
        postResult.innerHTML = `${data.title} <br/><br/>
        ${data.body}`;
        getBtn.style.display = "block";
      } else {
        postResult.textContent = "Введите число id поста, который меньше 100";
      }
    })
    .catch((error) => {
      console.log("error");
    });
});

getBtn.addEventListener("click", function () {
  inputValue = document.querySelector(".input-value").value;
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((comment) => {
        const postComment = document.createElement("div");
        postComment.innerHTML = `Name: ${comment.name}<br/> Email: ${comment.email}<br/>  Body: ${comment.body}<br/><br/>`;
        document.querySelector(".main").appendChild(postComment);
      });
    })
    .catch((error) => {
      console.log("error");
    });
});
