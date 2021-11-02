import React from "react";
import {TextField} from "@mui/material";
import {useFormikContext} from "formik";


export function EmailField() {
  const formik = useFormikContext()
  const isError = () => formik.touched.email && formik.errors.email
  return (
    <TextField name='email' label='Email' value={formik.values.email} onChange={formik.handleChange}
               onBlur={formik.handleBlur} error={Boolean(isError())} helperText={isError()} style={{marginTop:30}}/>
  )
}