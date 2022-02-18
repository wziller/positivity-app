import { createTheme } from '@mui/material/styles'
import { purple } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: grey[200],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#eb3955",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          list_title: "h1",
          profile_list_items: "h4",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});

  export default theme;
