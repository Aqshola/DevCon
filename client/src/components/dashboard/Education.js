import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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

const Education = ({ education }) => {
  const classes = useStyles();

  const educations = education.map((edc) => (
    <TableRow key={edc._id}>
      <TableCell component="th" scope="row">
        {edc.school}
      </TableCell>
      <TableCell align="left">{edc.degree}</TableCell>
      <TableCell align="left">
        <Moment format=" MMM YYYY ">{edc.from}</Moment> -{" "}
        {edc.to === null ? "Now" : <Moment format="MMM YYYY ">{edc.to}</Moment>}
      </TableCell>
      <TableCell align="left">
        <Button size="small" variant="contained" color="secondary">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <>
      <Typography variant="h5" style={{ marginTop: "20px" }}>
        Educations
      </Typography>
      <TableContainer className={classes.paper} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>School</StyledTableCell>
              <StyledTableCell align="left">Degree</StyledTableCell>
              <StyledTableCell align="left">Years</StyledTableCell>
              <StyledTableCell align="left"> </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{educations}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Education;
