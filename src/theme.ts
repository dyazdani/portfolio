import { ThemeType } from "grommet";

const theme: ThemeType = {
    global: {
      colors: {
        'status-critical': '#B30302'
      },
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
      breakpoints: {
        small: {
          value: 500,
          borderSize: {
            xsmall: "1px",
            small: "2px",
            medium: "4px",
            large: "6px",
            xlarge: "12px"
          },
        },
        medium: {value: 1000}
      },
    }
  }

  export default theme;