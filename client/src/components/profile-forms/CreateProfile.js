import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  TextField,
  Typography,
  makeStyles,
  Button,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputAdornment,
} from "@material-ui/core";
import AlertCom from "../layout/Alert";
import { ExpandMore } from "@material-ui/icons";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { createProfile } from "../../action/profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

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

const CreateProfile = ({ createProfile, history }) => {
  const classes = style();
  const [formData, setformData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
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
          onChange={onChange}
          helperText="Select Professional Status"
          value={status}
          name="status"
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
          value={company}
          name="company"
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          placeholder="Website"
          helperText="could be your own or company "
          value={website}
          name="website"
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          placeholder="Location"
          helperText="City & state suggested"
          value={location}
          name="location"
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          placeholder="Skills"
          helperText="Use comma for separated values"
          value={skills}
          name="skills"
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          placeholder="Github Username"
          helperText="if you  your latest repos and Github link, include your username"
          value={githubusername}
          name="githubusername"
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          placeholder="Short Bio"
          helperText="Tell us a little about yourself"
          multiline
          rows={3}
          value={bio}
          name="bio"
          onChange={onChange}
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
              value={twitter}
              name="twitter"
              fullWidth
              onChange={onChange}
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
              value={facebook}
              name="facebook"
              fullWidth
              onChange={onChange}
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
              value={youtube}
              name="youtube"
              fullWidth
              onChange={onChange}
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
              value={linkedin}
              name="linkedin"
              placeholder="LinkedIn URL"
              fullWidth
              onChange={onChange}
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
              value={instagram}
              name="instagram"
              fullWidth
              onChange={onChange}
            />
          </AccordionDetails>
        </Accordion>
        <Button
          onClick={onSubmit}
          color="primary"
          className={classes.btn}
          variant="contained"
        >
          Submit
        </Button>
      </FormControl>
      <AlertCom />
    </Container>
  );
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
