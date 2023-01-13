import { useState } from "react";

import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  Button,
  styled,
} from "@mui/material";

const Conatainer = styled(FormGroup)`
  width: 50%;
  margin: 8% auto 0 auto;
  & > div {
    margin-top: 25px;
  }
`;

const Btn = styled(Button)`
  margin-top: 30px;
`;

const defaultData = {
  fullName: "",
  City: "",
  Email: "",
  Phone: "",
};


const AddUser = () => {
  const [user, setUser] = useState();

  return (
    <Conatainer>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Full Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} />
      </FormControl>

      <FormControl>
        <InputLabel>City</InputLabel>
        <Input />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input />
      </FormControl>

      <Btn variant="contained">Register Now!</Btn>
    </Conatainer>
  );
};

export default AddUser;
