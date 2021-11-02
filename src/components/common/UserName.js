import React from "react";
import {TextField} from "@mui/material";
import {useFormikContext} from "formik";


export function UserName() {
  const formik = useFormikContext()
  const isError = () => formik.touched.userName && formik.errors.userName
  return (
    <TextField label='User Name' name='userName' value={formik.values.userName} onChange={formik.handleChange}
               onBlur={formik.handleBlur} error={Boolean(isError())} helperText={isError()} style={{marginBottom:30}}/>
  )
}