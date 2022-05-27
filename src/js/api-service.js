/* Именованный export/import (несколько сущностей) */

export const fetchAllUsers = () => {
  console.log("fetchAllUsers");
};
/* экспорт нескольких сущностей с помощью именованного экспорта */

export const fetchUserById = (id) => {
  console.log("fetchUserById");
};

export const updateUserById = (id) => {
  console.log("updateUserById");
};

export const x = 5;
export const y = "qweqwe";

export default { fetchAllUsers, fetchUserById, updateUserById };
/* экспорт по дефолту нескольких сущностей */
