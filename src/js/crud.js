// id (может называться по-другому) - уникальный идентификатор ресурса внутри коллекции

/* ------------- method GET (по умолчанию) ------------- */

// const BASE_URL = "http://localhost:3000";

// function fetchBooks() {
//   return fetch(`${BASE_URL}/books`).then((response) =>
//     response.json()
//   );
// }

// function fetchBookId(bookId) {
//   fetch(`${BASE_URL}/books/${bookId}`).then((response) =>
//     response.json()
//   );
// }

// fetchBooks();
// fetchBookId(2);

/* ------------- method POST ------------- */

// обязательно должны быть options и тело (новый обьект, который нужно запостить
// переведенный в строку - без указания идентификатора, он сам генерируется с бэкенда)

/* headers: {
      "Content-Type": "application/json" - указавыает что мы отправляем на бэкенд
      "Accept" - указывает что мы получаем с бэкенда
        }, */

// const BASE_URL = "http://localhost:3000";

// const newBook = {
//   title: "Тестовая книга",
//   author: "Я",
//   genres: ["JS"],
//   rating: 10,
// };

// 1 вариант записи

// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newBook),
// };

// fetch(`${BASE_URL}/books`, options)
//   .then((response) => response.json())
//   .then(console.log);

// 2 вариант записи (через функцию)

// function addBook(book) {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options).then((response) =>
//     response.json()
//   );
// }

// addBook(newBook)
//   .then(renderBook)
//   .catch((error) => console.log(error));

// function renderBook() {
//   console.log("Можно отрисовать HTML");
// }

/* ------------- method PATCH и PUT ------------- */

// метод PUT полностью заменяет обьект, кроме уникального идентификатора (этот метод быстрее работает)
// метод PATCH обновляет откорректированные данные (этот используется чаще) -
// в ссылке на хост нужно указать идентификатор элемента, который нужно будет изменить

// const BASE_URL = "http://localhost:3000";

// 1 вариант записи

// const options = {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ title: "Новая тестовая книга" }),
// };

// fetch(`${BASE_URL}/books/4`, options)
//   .then((response) => response.json())
//   .then(console.log);

// 2 вариант записи (через функцию)

// function updateBook(update, bookId) {
//   const options = {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then((response) =>
//     response.json()
//   );
// }

// updateBook({ title: "UPDATE тестовая книга" }, 1);

/* ------------- method GET ------------- */

// const BASE_URL = "http://localhost:3000";

// function removeBook(bookId) {
//   const url = `${BASE_URL}/books/${bookId}`;

//   const options = {
//     method: "DELETE",
//   };

//   return fetch(url, options).then((response) => response.json());
// }

// removeBook(1);
