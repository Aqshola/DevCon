import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../action/post";
import Spinner from "../layout/Spinner";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import { PostItem } from "./PostItem";

const style = makeStyles((theme) => ({
  boxContent: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

const Posts = ({ getPosts, post: { posts, loading } }) => {
  const classes = style();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          margin="auto"
          marginY="20px"
          className={classes.boxContent}
        >
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </Box>
      ) : (
        <Typography>No Posts</Typography>
      )}
    </Container>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
