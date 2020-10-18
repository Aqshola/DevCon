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
  btn: {
    width: "200px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
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
        <Select
          size="small"
          placeholder="lala"
          variant="outlined"
          onChange={handleChange}
          aria-setsize="small"
          defaultValue="Select Status"
        >
          <MenuItem value="Select Status" disabled>
            Select Status
          </MenuItem>
          <MenuItem value="Developer">Developer</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Ceo">Ceo</MenuItem>
        </Select>
        <TextField
          size="small"
          variant="outlined"
          placeholder="Company"
          helperText="could be your own company of the you work for"
        />
        <TextField
          size="small"
          variant="outlined"
          placeholder="Website"
          helperText="could be your own or company "
        />
        <TextField
          size="small"
          variant="outlined"
          placeholder="Location"
          helperText="City & state suggested"
        />
        <TextField
          size="small"
          variant="outlined"
          placeholder="Skills"
          helperText="Use comma for separated values"
        />
        <TextField
          size="small"
          variant="outlined"
          placeholder="Github Username"
          helperText="if you  your latest repos and Github link, include your username"
        />
        <TextField
          size="small"
          variant="outlined"
          placeholder="Short Bio"
          helperText="Tell us a little about yourself"
          rows={3}
        />
        <Button color="primary" className={classes.btn} variant="contained">
          Submit
        </Button>
      </FormControl>
    </>
  );
};

export default CreateProfile;
