interface Theme {
  pallet: {
    primary: string;
    secondary: string;
    alt1: string;
    alt2: string;
    alt3: string;
    info: string;
    success: string;
    warning: string;
    danger: string;
  };
}

const theme: Theme = {
  pallet: {
    primary: "blue",
    secondary: "green",
    alt1: "yellow",
    alt2: "yellow",
    alt3: "yellow",
    info: "yellow",
    success: "yellow",
    warning: "yellow",
    danger: "yellow"
  }
};

export default theme;
