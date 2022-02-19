import React from "react";
import { CircularProgress, Grid } from "@mui/material";

import { useStyles } from "./style";
import Crop from "./Crop/Crop";

const Crops = () => {
  const data = [1,2,3];

  const classess = useStyles();

  return (
    <Grid
      className={classess.mainContainer}
      container
      alignItems="stretch"
      spacing="3"
    >
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <>
          {data.map((x) => (
            <Grid key={x._id} item xs={12} sm={6}>
              <Crop data={x} />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};

export default Crops;
