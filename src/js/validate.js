/* aбсолютный импорт (из библиотеки) */
import Joi from "joi";
// console.log(Joi);

const passSchema = Joi.string().min(3).max(10);

/* export/import default (одна сущность) */
export default function validatePasswword(password) {
  return passSchema.validate(password);
}

// export default 5;
