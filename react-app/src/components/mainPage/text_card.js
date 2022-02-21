import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function TextCard({ randomAffirmation }) {
  return (
    <Card
      sx={{
        display: "flex",
        minWidth: 275,
        maxWidth: 700,
        maxHeight: 300,
       
        zIndex: 10,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {`"${randomAffirmation.body}"`}
        </Typography>
      </CardContent>
    </Card>
  );
}
