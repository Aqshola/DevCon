import React from "react";
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
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputAdornment,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const style = makeStyles((theme) => ({
  form: {
    display: "flex",
    width: "70%",
    flexDirection: "column",
    minHeight: "800px",
    justifyContent: "space-between",
  },
  btn: {
    width: "200px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  Accordion: {
    display: "Flex",
    minHeight: "300px",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const CreateProfile = () => {
  const [value, setValue] = React.useState("");
  const classes = style();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container>
      <Typography
        style={{ marginBottom: "30px", marginTop: "30px" }}
        variant="h4"
      >
        Create Your Profile
      </Typography>
      <FormControl className={classes.form}>
        <TextField
          select
          variant="outlined"
          onChange={handleChange}
          defaultValue="Select Status"
          helperText="Select Professional Status"
        >
          <MenuItem value="Select Status" disabled>
            Select Status
          </MenuItem>
          <MenuItem value="Developer">Developer</MenuItem>
          <MenuItem value="Junior Developer">Junior Developer</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Manager">Manager</MenuItem>
          <MenuItem value="Intern">Intern</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
        <TextField
          variant="outlined"
          placeholder="Company"
          helperText="could be your own company of the you work for"
        />
        <TextField
          variant="outlined"
          placeholder="Website"
          helperText="could be your own or company "
        />
        <TextField
          variant="outlined"
          placeholder="Location"
          helperText="City & state suggested"
        />
        <TextField
          variant="outlined"
          placeholder="Skills"
          helperText="Use comma for separated values"
        />
        <TextField
          variant="outlined"
          placeholder="Github Username"
          helperText="if you  your latest repos and Github link, include your username"
        />
        <TextField
          variant="outlined"
          placeholder="Short Bio"
          helperText="Tell us a little about yourself"
          multiline
          rows={3}
        />
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>Add Social Network Links</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.Accordion}>
            <TextField
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TwitterIcon color="inherit" />
                  </InputAdornment>
                ),
              }}
              placeholder="Twitter URL"
              fullWidth
            />
            <TextField
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FacebookIcon color="inherit" />
                  </InputAdornment>
                ),
              }}
              placeholder="Facebook URL"
              fullWidth
            />
            <TextField
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <YouTubeIcon color="inherit" />
                  </InputAdornment>
                ),
              }}
              placeholder="Youtube URL"
              fullWidth
            />
            <TextField
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkedInIcon color="inherit" />
                  </InputAdornment>
                ),
              }}
              placeholder="LinkedIn URL"
              fullWidth
            />
            <TextField
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InstagramIcon color="inherit" />
                  </InputAdornment>
                ),
              }}
              placeholder="Instagram URL"
              fullWidth
            />
          </AccordionDetails>
        </Accordion>
        <Button color="primary" className={classes.btn} variant="contained">
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default CreateProfile;
