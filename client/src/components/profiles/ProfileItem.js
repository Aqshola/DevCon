import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import GamepadIcon from "@material-ui/icons/Gamepad";

const style = makeStyles((theme) => ({
  card: {
    width: "300px",
    marginBottom: "10px",
  },
}));
export const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  const classes = style();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar src={avatar} />}
        title={name}
        subheader={location}
      />
      <Divider />
      <CardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">{status}</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">{company}</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GamepadIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">
                {skills.map((skill, i) =>
                  i < 4 ? (i < skills.length - 1 ? skill + ", " : skill) : ""
                )}
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <List>
          <ListItem>
            <Button color="primary">View Profile</Button>
          </ListItem>
        </List>
      </CardActions>
    </Card>
  );
};
