import * as yup from 'yup'

export const  validationsSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().typeError('Invalid password').min(6,'Minimum length 6 characters').required('Password is required'),
  userName: yup.string().typeError('Invalid name').required('User Name is required')
})