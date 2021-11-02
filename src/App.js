import React from 'react'
import {SimpleForm} from './components/SimpleForm'
import {Form, Formik} from "formik";
import {Button, FormControl} from "@mui/material";
import {validationsSchema} from "./validationSchema";


function App() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        userName: '',
      }}
      validateOnBlur
      validationSchema={validationsSchema}
      onSubmit={values => {
        setTimeout(()=>  console.log('Formik values ===>', values), 3000)
      }}
    >
      {(bag) => (
        <Form style={{ margin: 'auto', width: 300}}>
          <FormControl>
          <SimpleForm/>
          <Button type="submit" variant='outlined' color='primary' disabled={!bag.isValid && bag.isSubmitting}>Submit</Button>
        </FormControl>
        </Form>
      )}
    </Formik>
  );
}

export default App;
