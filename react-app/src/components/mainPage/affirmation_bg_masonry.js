import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import TextCard from "./text_card";
import { Backdrop } from "@mui/material";
import { Typography } from "@mui/material";
import MainPage from ".";

const TextItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "0",
  textAlign: "center",
  color: theme.palette.text.secondary,
  minWidth: 200,
}));

const TextOnly = (props) => {
  const { affirmation, index } = props;
  console.log(props);

  return (
    <TextItem key={index} sx={{ minWidth: 200 }}>
      <Box id={`body_box ${affirmation.id}`} sx={{ minWidth: 250 }}>
        <Typography
          id={`body_typography ${affirmation.id}`}
          variant="h3"
          sx={{ maxWidth: 500 }}
        >
          {affirmation.body}
        </Typography>
      </Box>
    </TextItem>
  );
};

const PhotoOnly = (props) => {
  const { affirmation, index } = props;
  return (
    <div key={index}>
      <img
        src={affirmation.image_url}
        loading="lazy"
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          display: "block",
          width: "100%",
        }}
      />
    </div>
  );
};

export default function AffirmationBgMasonry({affirmations}) {
  return affirmations ? (
      <Box sx={{ width: "100vw", minHeight: 393 }}>
        <Masonry columns={4} spacing={2}>
          {affirmations.map((affirmation, index) =>
            affirmation.image_url === "" ? (
              <TextOnly affirmation={affirmation} index={index} />
            ) : (
              <PhotoOnly affirmation={affirmation} index={index} />
            )
          )}
        </Masonry>
      </Box>
  ) : (
    <p>Loading...</p>
  );
}
