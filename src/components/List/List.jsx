import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("food");
  const [rating, setRating] = useState(0);

  const places = [
    { name: 'best beer'},
    { name: 'place b'},
    { name: 'place best'},
    { name: 'place c'},
    { name: 'place second best'}
  ]

  return (
    <div className={classes.container}>
      <Typography variant="h4">food, shelter, and stuff to do</Typography>
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
          return (<Grid item key={idx} xs={12}>
            <PlaceDetails place={place} />
          </Grid>)
        })}
      </Grid>
    </div>
  );
};

export default List;
