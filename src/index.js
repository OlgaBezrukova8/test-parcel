import validatePasswword from "./js/validate";
console.log(validatePasswword("dfdfadf"));

// import apiService from "./js/api-service.js";
/* импорт по дефолту нескольких сущностей */

// import {
//   fetchAllUsers,
//   fetchUserById,
//   updateUserById,
//   x as value,
//   y,
// } from "./js/api-service.js";

// console.log(fetchAllUsers);
// console.log(fetchUserById);
// console.log(updateUserById);
// console.log(value);
/* именованный импорт нескольких сущностей */

import * as apiService from "./js/api-service";
console.log(apiService);
/* import пространства имен */
