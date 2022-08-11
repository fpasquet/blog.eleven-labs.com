import * as yup from 'yup';

export const postDataValidationSchema = yup.object({
  lang: yup.string().required(),
  slug: yup.string().required(),
  date: yup.date().required(),
  title: yup.string().required(),
  excerpt: yup.string().required(),
  authors: yup.array().of(yup.string()),
  categories: yup.array().of(yup.string()),
  isDraft: yup.bool()
});
