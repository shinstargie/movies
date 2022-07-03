export const modalStyles = {
  content: {
    overflow: "hidden",
    padding: "0px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "1140px",
    minHeight: "700px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderColor: "rgba(0, 0, 0, 0)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.88)",
    zIndex: "5000",
    overflow: "auto",
    padding: "75px",
  },
};

export const reactSelectStyles = {
  singleValue: (provided: any) => ({
    ...provided,
    color: "yellow",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  control: (provided: any) => ({
    ...provided,
    cursor: "pointer",
    borderWidth: "2px",
    height: "45px",
    borderRadius: "0px",
    backgroundColor: "black",
    border: "2px solid rgba(255,255,255,0.50)",
    boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.75)",
    "&:hover": {
      border: "2px solid rgba(255,255,255,1)",
    },
    "&:focus-within": {
      border: "2px solid rgba(255,255,255,1)",
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "22px",
      height: "50px",
    },
  }),
  container: (provided: any) => ({
    ...provided,
    width: "205px",
    backgroundColor: "black",
    color: "white",
    "@media screen and (max-width: 1024px)": {
      width: "175px",
    },
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: 0,
    zindex: "1000",
    width: "500px",
    padding: "15px",
    backgroundColor: "black",
    border: "2px solid rgba(255,255,255,0.50)",
    boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.75)",
    transition: "border-color 150ms ease-in",
    "&:hover": {
      border: "2px solid rgba(255,255,255,1)",
    },
    "@media screen and (max-width: 1024px)": {
      width: "425px",
    },
    "@media screen and (max-width: 768px)": {
      position: "relative",
      top: "0",
      width: "100%",
    },
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: "0px 0px",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    backgroundColor: "black",
    "@media screen and (max-width: 768px)": {
      gridTemplateColumns: "repeat(2,1fr)",
      maxHeight: "none",
    },
    "@media screen and (max-width: 375px)": {
      gridTemplateColumns: "repeat(1,1fr)",
      maxHeight: "none",
    },
  }),
  input: (provided: any) => ({
    ...provided,
    padding: "5px 0 5px 0px",
    color: "white",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "rgba(255,255,255,0.50)",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: "rgb(255,255,255,0.60)",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontWeight: "semibold",
    padding: "10px",
    "&:active": {
      backgroundColor: "transparent",
    },
    "&:hover": {
      color: "yellow",
    },
  }),
};
