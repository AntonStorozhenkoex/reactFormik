import React from "react";
import {TextField} from "@mui/material";
import {useFormikContext} from "formik";


export function PasswordField() {
  const formik = useFormikContext()
  const isError = () => formik.touched.password && formik.errors.password
  return (
    <TextField name='password' type='password' label='Password' value={formik.values.password}
               onChange={formik.handleChange} onBlur={formik.handleBlur} error={Boolean(isError())}
               helperText={isError()} style={{marginTop:30,marginBottom:30}}/>
  )
}