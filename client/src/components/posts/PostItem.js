import {
  Avatar,
  Box,
  IconButton,
  makeStyles,
  Paper,
  Typography,
  Link as Links,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  CardActionArea,
} from "@material-ui/core";
import React from "react";
import Moment from "react-moment";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

const style = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  card: {
    width: "100%",
    marginBottom: "10px",
  },
  cardActions: {
    display: "flex",
  },
  actionBtn: {
    margin: theme.spacing(1),
    width: "30%",
  },
}));

export const PostItem = ({ post: { avatar, name, text, date } }) => {
  const classes = style();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar src={avatar} />}
        title={name}
        subheader={<Moment fromNow>{date}</Moment>}
      />
      <CardContent>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          className={classes.actionBtn}
          startIcon={<ThumbUpAltOutlinedIcon />}
        >
          Like
        </Button>
        <Button
          className={classes.actionBtn}
          startIcon={<ChatBubbleOutlineOutlinedIcon />}
        >
          Comment
        </Button>
        <Button className={classes.actionBtn} startIcon={<ShareOutlinedIcon />}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
