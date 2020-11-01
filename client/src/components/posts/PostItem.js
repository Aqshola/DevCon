import {
  Avatar,
  Box,
  makeStyles,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  IconButton,
  MenuItem,
  Popover,
  Link,
  TextField,
} from "@material-ui/core";
import React from "react";
import Moment from "react-moment";
import { like, deletePost } from "../../action/post";
import { connect } from "react-redux";

import AlertCom from "../layout/Alert";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SendIcon from "@material-ui/icons/Send";

const style = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  card: {
    width: "100%",
    marginBottom: "10px",
  },
  cardDetail: {
    display: "flex",
    flexDirection: "column",
  },
  cardLike: {
    flexGrow: 1,
    marginLeft: "5px",
  },
  cardActions: {
    display: "flex",

    width: "100%",
  },
  detail: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    opacity: "80%",
  },
  actionBtn: {
    margin: theme.spacing(1),
    width: "30%",
  },
  menu: {
    marginRight: theme.spacing(2),
  },
  title: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  comment: {
    marginLeft: "10px",
    width: "fit-content",
    maxWidth: "70%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    padding: "10px",
    borderRadius: "10px",
  },

  inputCom: {
    width: "70%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: "10px",
    borderRadius: "30px",
  },
}));

const PostItem = ({
  post: { _id, avatar, name, text, date, likes, user },
  like,
  deletePost,
  auth,
}) => {
  const classes = style();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar src={avatar} />}
          title={
            <Link
              variant="inherit"
              underline="hover"
              color="initial"
              href={`profile/${user}`}
            >
              {name}
            </Link>
          }
          classes={{ title: classes.title }}
          subheader={<Moment fromNow>{date}</Moment>}
          action={
            auth.user !== null && auth.user._id === user ? (
              <IconButton onClick={handleClick}>
                <MoreHorizIcon />
              </IconButton>
            ) : (
              <></>
            )
          }
        />
        <CardContent>
          <Typography
            variant={text.length > 100 ? "body2" : "h6"}
            style={{ fontWeight: 400 }}
          >
            {text}
          </Typography>
        </CardContent>

        <CardActions className={classes.cardDetail}>
          <Box className={classes.detail} marginBottom="5px">
            {likes.length > 0 && (
              <Box display="flex" alignItems="center">
                <ThumbUpAltIcon fontSize="small" />
                <Typography variant="caption" className={classes.cardLike}>
                  {auth.user !== null &&
                  likes.some((like) => like.user === auth.user._id)
                    ? likes.length === 1
                      ? `${auth.user.name}`
                      : ` You and ${likes.length - 1} Others`
                    : `${likes.length}`}
                </Typography>
              </Box>
            )}
          </Box>

          <Box
            className={classes.cardActions}
            borderTop="0.1px solid grey"
            borderBottom="0.1px solid grey"
          >
            <Button
              className={classes.actionBtn}
              startIcon={
                auth.user !== null &&
                likes.some((like) => like.user === auth.user._id) ? (
                  <ThumbUpAltIcon color="primary" />
                ) : (
                  <ThumbUpAltOutlinedIcon />
                )
              }
              onClick={() => like(_id)}
            >
              Like
            </Button>
            <Button
              className={classes.actionBtn}
              startIcon={<ChatBubbleOutlineOutlinedIcon />}
            >
              Comment
            </Button>
            <Button
              className={classes.actionBtn}
              startIcon={<ShareOutlinedIcon />}
            >
              Share
            </Button>
          </Box>
        </CardActions>

        <CardContent>
          <Box>
            <Box display="flex" marginBottom="10px">
              <Avatar src={avatar} />
              <Box className={classes.comment}>
                <Typography variant="subtitle2">{name}</Typography>
                <Typography variant="caption">Manteb bg</Typography>
              </Box>
            </Box>
            <Box display="flex">
              <Avatar src={avatar} />
              <Box className={classes.comment}>
                <Typography variant="subtitle2">{name}</Typography>
                <Typography variant="caption">
                  TESTTTTTTTTTTTTTTTTTTTTTTTTT
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" marginTop="30px">
            <Box display="flex" alignItems="top" height="100%">
              <Avatar src={avatar} />
            </Box>
            <Box
              id="boxinput"
              className={classes.inputCom}
              marginLeft="10px"
              display="flex"
              alignItems="center"
            >
              <TextField
                multiline
                placeholder="Write a comment..."
                InputProps={{ disableUnderline: true }}
                size="small"
                fullWidth
              />
            </Box>
            <Box alignSelf="bottom" height="100%">
              <IconButton>
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <div>
        <Popover
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          elevation={1}
          PaperProps={{
            variant: "outlined",
          }}
        >
          <MenuItem
            onClick={(e) => {
              handleClose();
              deletePost(_id);
            }}
          >
            Delete Post
          </MenuItem>
        </Popover>
      </div>
      <AlertCom />
    </>
  );
};

const mapStateToProp = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProp, { like, deletePost })(PostItem);
