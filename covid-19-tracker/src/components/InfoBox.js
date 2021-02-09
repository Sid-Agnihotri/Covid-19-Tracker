import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const InfoBox = ({ title, total, cases }) => {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* Title */}
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="infoBox_cases">{cases}</h2>
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
        {/* no. of Cases */}
        {/* total */}
      </CardContent>
    </Card>
  );
};

export default InfoBox;
