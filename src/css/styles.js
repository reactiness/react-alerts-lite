import { positionConstants, alertConstants } from "../core/constants";

export const containerStyle = {
  width: "100%",
  overflow: "hidden"
};

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
    width: "calc(100% - 620px)"
  },
  [positionConstants.top]: {
    top: "0px",
    left: "310px",
    width: "calc(100% - 620px)"
  }
};

export const defaultStyle = {
  lineHeight: "38px",
  fontFamily: "Lato,Helvetica Neue,Arial,Helvetica,sans-serif",
  width: "100%",
  minHeight: "40px",
  color: "white",
  zIndex: 50,
  display: "flex",
  justifyContent: "flex-start"
};

export const iconStyle = {
  color: "white",
  display: "flex",
  width: "40px",
  textAlign: "center"
};

export const contentStyle = {
  display: "flex",
  width: "100%"
};

export const closeButtonStyle = {
  color: "white",
  display: "flex",
  width: "40px"
};

export const errorStyle = {
  backgroundColor: "rgba(244, 67, 54, 0.8)"
};

export const basicStyle = {
  backgroundColor: "rgba(241, 242, 242, 0.8)"
};

export const successStyle = {
  backgroundColor: "rgba(76, 175, 80, 0.8)"
};

export const warningStyle = {
  backgroundColor: "rgba(255, 152, 0, 0.8)"
};

export const infoStyle = {
  backgroundColor: "rgba(33, 150, 243, 0.8)"
};

export const alertStyles = {
  [alertConstants.error]: errorStyle,
  [alertConstants.success]: successStyle,
  [alertConstants.info]: infoStyle,
  [alertConstants.warning]: warningStyle,
  [alertConstants.basic]: basicStyle
};
