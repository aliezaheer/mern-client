import { useState, useEffect } from "react";

import { addUser, getUser } from "../util/api.js";

import { useNavigate, useParams } from "react-router-dom";

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
  name: "",
  city: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(defaultData);

  const navigate = useNavigate();
  const { _id } = useParams;

  useEffect(() => {
    populateDetails();
  }, []);

  const populateDetails = async () => {
    let reposnse = await getUser(_id);
    setUser(reposnse.data._id);
    console.log(reposnse.data._id);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const userDetailsHandler = async () => {
    await addUser(user);
    navigate("/users-list");
  };

  return (
    <Conatainer>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Full Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>

      <FormControl>
        <InputLabel>City</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="city" />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>

      <Btn variant="contained" onClick={() => userDetailsHandler()}>
        Register Now!
      </Btn>
    </Conatainer>
  );
};

export default EditUser;
