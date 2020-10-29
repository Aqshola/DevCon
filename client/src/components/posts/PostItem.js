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
  Divider,
} from "@material-ui/core";
import React from "react";
import Moment from "react-moment";
import { like } from "../../action/post";
import { connect } from "react-redux";

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
  cardDetail: {
    display: "flex",
    flexDirection: "column",
  },
  cardLike: {
    flexGrow: 1,
  },
  cardActions: {
    display: "flex",

    width: "100%",
  },
  detail: {
    display: "flex",
    justifyContent: "space-between",
    width: "85%",
  },
  actionBtn: {
    margin: theme.spacing(1),
    width: "30%",
  },
}));

const PostItem = ({
  post: { _id, avatar, name, text, date, likes },
  like,
  auth,
}) => {
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

      <CardActions className={classes.cardDetail}></CardActions>
      <CardActions className={classes.cardDetail}>
        <Box className={classes.detail} marginBottom="5px">
          {likes.length > 0 && (
            <Box display="flex" alignItems="center">
              <ThumbUpAltIcon fontSize="small" />
              <Typography
                variant="body1"
                style={{ marginLeft: "5px" }}
                className={classes.cardLike}
              >
                {`${likes.length} like`}
              </Typography>
            </Box>
          )}
        </Box>

        <Box className={classes.cardActions} borderTop="0.1px solid grey">
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
    </Card>
  );
};

const mapStateToProp = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProp, { like })(PostItem);
