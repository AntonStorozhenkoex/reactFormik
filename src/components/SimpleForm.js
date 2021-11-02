import React from 'react'
import {FormControl} from "@mui/material";
import {EmailField} from "./common/EmailField";
import {PasswordField} from "./common/PasswordField";
import {UserName} from "./common/UserName";

export const SimpleForm = () => <FormControl>
  <EmailField/>
  <PasswordField/>
  <UserName/>
</FormControl>
