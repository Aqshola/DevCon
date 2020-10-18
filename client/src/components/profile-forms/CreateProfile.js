import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
  makeStyles,
  InputLabel,
  Button,
} from "@material-ui/core";
import React from "react";

const style = makeStyles((theme) => ({
  form: {
    display: "flex",
    width: "70%",
    flexDirection: "column",
    height: "600px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
}));

const CreateProfile = () => {
  const [value, setValue] = React.useState("");
  const classes = style();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Typography style={{ marginBottom: "30px" }} variant="h4">
        Create Your Profile
      </Typography>
      <FormControl className={classes.form}>
        <InputLabel>Select Status</InputLabel>
        <Select onChange={handleChange} label="Status" aria-setsize="small">
          <MenuItem value="Developer">Developer</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Ceo">Ceo</MenuItem>
        </Select>
        <TextField
          size="small"
          label="Company"
          helperText="could be your own company of the you work for"
        />
        <TextField label="Website" helperText="could be your own or company " />
        <TextField label="Location" helperText="City & state suggested" />
        <TextField label="Skills" helperText="Use comma for separated values" />
        <TextField
          label="Github Username"
          helperText="if you  your latest repos and Github link, include your username"
        />
        <TextField
          label="Short Bio"
          helperText="Tell us a little about yourself"
        />
        <Button variant="contained"></Button>
      </FormControl>
    </>
  );
};

export default CreateProfile;
