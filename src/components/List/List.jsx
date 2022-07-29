import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./styles";

const List = ({ places, childClicked, isLoading }) => {
  const classes = useStyles();
  const [type, setType] = useState("food");
  const [rating, setRating] = useState(0);
  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">food, shelter, and stuff to do</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="food">food</MenuItem>
              <MenuItem value="shelter">shelter</MenuItem>
              <MenuItem value="stuff">stuff to do</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>all</MenuItem>
              <MenuItem value={3}>above 3</MenuItem>
              <MenuItem value={4}>above 4</MenuItem>
              <MenuItem value={4.5}>above 4.5</MenuItem>
            </Select>
          </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, idx) => {
          return (
            <Grid item key={idx} xs={12}>
              <PlaceDetails
                place={place}
                selected={Number(childClicked) === idx}
                refProp={elRefs[idx]}
              />
            </Grid>
          );
        })}
      </Grid>
      </>
      )}
    </div>
  );
};

export default List;
