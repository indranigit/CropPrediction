import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { useStyles } from "./style";

const Crop = () => {
  const classess = useStyles();

  return (
    <Card className={classess.card}>
      <CardMedia
        className={classess.media}
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Crop Name
        </Typography>
        {/* <Typography variant="body3" color="textSecondary" component="p">
            Description
          </Typography> */}
      </CardContent>
    </Card>
  );
};

export default Crop;
