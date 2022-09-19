import * as yup from 'yup';

export const authorDataValidationSchema = yup.object({
  username: yup.string().required(),
  name: yup.string().required(),
  twitter: yup.string(),
  github: yup.string()
});
