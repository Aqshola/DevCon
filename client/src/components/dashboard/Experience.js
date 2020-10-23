import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Button, Typography } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.default,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
  paper: {
    marginTop: "10px",
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
}));

const Experience = ({ experience }) => {
  const classes = useStyles();

  const experiences = experience.map((exp) => (
    <TableRow key={exp._id}>
      <TableCell component="th" scope="row">
        {exp.company}
      </TableCell>
      <TableCell align="right">{exp.title}</TableCell>
      <TableCell align="right">
        <Moment format=" MMM YYYY ">{exp.from}</Moment> -{" "}
        {exp.to === null ? "Now" : <Moment format="MMM YYYY ">{exp.to}</Moment>}
      </TableCell>
      <TableCell align="right">
        <Button size="small" variant="contained" color="secondary">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <>
      <Typography variant="h5" style={{ marginTop: "20px" }}>
        Experiences
      </Typography>
      <TableContainer className={classes.paper} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Company</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">Years</StyledTableCell>
              <StyledTableCell align="right"> </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{experiences}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default connect()(Experience);
