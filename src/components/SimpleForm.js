import React from 'react'
import {useFormik} from "formik";
import {TextField, Button, FormControl} from "@mui/material";


const initialValue ={
    email:'',
    password:'',
    userName:''
}

const onSubmit = values => {
    console.log('Form Values', values)
}

const validate = values => {
    let errors = {}

    if (!values.email){
        errors.email = 'Required'
    } else if (! /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
        errors.email = 'Invalid email'
    }

    if (!values.password){
        errors.password = 'Required'
    } else if (values.password.length < 6){
        errors.password = 'Invalid password'
    }

    if (!values.userName){
        errors.userName = 'Required'
    }

    return errors
}


export const SimpleForm = () => {

    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: onSubmit ,
        validate: validate
    })

    return(
        <FormControl onSubmit={formik.handleSubmit}>
            <TextField label='Email' name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} helperText={formik.touched.email && formik.errors.email} error={formik.touched.email && formik.errors.email}/>
            <TextField label='Password' name='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} helperText={formik.touched.password && formik.errors.password} error={formik.touched.password && formik.errors.password}/>
            <TextField label='User Name' name='userName' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.userName} helperText={formik.touched.userName && formik.errors.userName} error={formik.touched.userName && formik.errors.userName}/>
            <Button color='primary' type='submit' onClick={formik.handleSubmit} disabled={Object.keys(formik.errors).length}  variant='contained'>Submit</Button>
        </FormControl>
    )
}