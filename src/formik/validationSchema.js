import * as Yup from 'yup';

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  cellphone: Yup.string().required('Campo requerido'),
  locality: Yup.string().required('Campo requerido'),
  address: Yup.string().required('Campo requerido'),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('Campo requerido'),
  password: Yup.string()
    .min(6, 'Minimo 6 caracteres')
    .required('Campo requerido'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Mail no valido').required('Campo Requerido'),
  password: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo Requerido'),
});
