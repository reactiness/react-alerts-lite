import * as positionConstants from "../core/constants";

export const containerStyle = pos => ({
  width: "100%",
  height: "35px"
  // bottom: `${pos * 40}px`,
  // left: "0px",
  // display: "inline-block"
});

export const positionStyle = {
  common: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    position: "fixed"
  },
  [positionConstants.bottomFull]: {
    bottom: "0px",
    left: "0px",
    width: "100%"
  },
  [positionConstants.topFull]: {
    top: "0px",
    left: "0px",
    width: "100%"
  },
  [positionConstants.topLeft]: {
    top: "0px",
    left: "0px",
    width: "300px"
  },
  [positionConstants.topRight]: {
    top: "0px",
    right: "0px",
    width: "300px"
  },
  [positionConstants.bottomRight]: {
    bottom: "0px",
    right: "0px",
    width: "300px"
  },
  [positionConstants.bottomLeft]: {
    bottom: "0px",
    left: "0px",
    width: "300px"
  },
  [positionConstants.bottom]: {
    bottom: "0px",
    left: "310px",
    width: "calc(100% - 610px)"
  },
  [positionConstants.top]: {
    top: "0px",
    left: "310px",
    width: "calc(100% - 610px)"
  }
};

export const defaultStyle = {
  verticalAlign: "middle",
  lineHeight: "35px",
  fontFamily: "Lato,Helvetica Neue,Arial,Helvetica,sans-serif",
  width: "100%",
  minHeight: "35px",
  color: "white",
  border: "1px grey black"
};

export const errorStyle = {
  backgroundColor: "#f44336"
};

export const basicStyle = {
  backgroundColor: "#f1f2f2"
};

export const successStyle = {
  backgroundColor: "#4CAF50"
};

export const warningStyle = {
  backgroundColor: "#ff9800"
};

export const infoStyle = {
  backgroundColor: "#2196F3"
};
