import * as yup from 'yup';

export const postDataValidationSchema = yup.object({
  isDraft: yup.bool(),
  lang: yup.string().required(),
  slug: yup.string().required(),
  date: yup.date().required(),
  title: yup.string().required(),
  excerpt: yup.string().required(),
  authors: yup.array().of(yup.string()),
  categories: yup.array().of(yup.string()),
});

export const authorDataValidationSchema = yup.object({
  username: yup.string().required(),
  name: yup.string().required(),
  twitter: yup.string().nullable(),
  github: yup.string().nullable()
});
