import React from "react";
import {
  Avatar,
  makeStyles,
  Card,
  CardContent,
  Typography,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  IconButton,
  Box,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { addPost } from "../../action/post";
import { connect } from "react-redux";
import { useState } from "react";

const style = makeStyles((theme) => ({
  card: {
    width: "100%",
    marginBottom: "40px",
  },
  content: {
    display: "flex",
    alignItem: "center",
  },
  btn: {
    marginLeft: "10px",
    borderRadius: "50px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    transition: "0.3s",
    width: "100%",

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  textTitle: {
    flexGrow: 1,
  },
  inputPost: {
    width: "100%",
  },
  mobile: {
    width: "450px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
}));

const PostForm = ({ auth, addPost }) => {
  const classes = style();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Avatar
            src={
              auth.user !== null && auth.user !== undefined
                ? auth.user.avatar
                : ""
            }
          />
          <ButtonBase
            className={classes.btn}
            variant="contained"
            onClick={handleClickOpen}
          >
            <Typography align="left" style={{ width: "90%", opacity: "50%" }}>
              {` What's on your mind, ${
                auth.user !== null && auth.user !== undefined
                  ? auth.user.name
                  : ""
              } ?`}
            </Typography>
          </ButtonBase>
        </CardContent>
      </Card>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={"sm"}
      >
        <DialogTitle onClose={handleClose}>
          <Box className={classes.title}>
            <Typography variant="h6" className={classes.textTitle}>
              Create post
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent className={classes.mobile}>
          <TextField
            className={classes.inputPost}
            size="medium"
            multiline
            rows={10}
            placeholder={` What's on your mind, ${
              auth.user !== null && auth.user !== undefined
                ? auth.user.name
                : ""
            } ?`}
            InputProps={{ disableUnderline: true }}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ textTransform: "none" }}
            disableElevation
            onClick={(e) => {
              e.preventDefault();
              addPost({ text });
              setText("");
              handleClose();
            }}
          >
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { addPost })(PostForm);
