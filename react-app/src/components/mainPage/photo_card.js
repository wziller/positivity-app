import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function PhotoCard({ randomAffirmation }) {

  return (
    <Card
      sx={{
        display: "flex",
        minWidth: 275,
        maxWidth: 700,
        maxHeight: 300,
    
        zIndex: 10,
        justify: "center"
      }}
    >
      {/* distance from */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {`"${randomAffirmation.body}"`}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
      <img src={randomAffirmation.image_url} alt=""></img>
    </Card>
  );
}
