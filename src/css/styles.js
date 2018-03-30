import {
  positionConstants,
  alertConstants,
  themeConstants
} from "../core/constants";

import info from "../assets/info.svg";
import warning from "../assets/alert-circle.svg";
import error from "../assets/alert-circle.svg";
import basic from "../assets/alert-circle.svg";
import success from "../assets/check-circle.svg";

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
    width: "380px"
  },
  [positionConstants.topRight]: {
    top: "0px",
    right: "0px",
    width: "380px"
  },
  [positionConstants.bottomRight]: {
    bottom: "0px",
    right: "0px",
    width: "380px"
  },
  [positionConstants.bottomLeft]: {
    bottom: "0px",
    left: "0px",
    width: "380px"
  },
  [positionConstants.bottom]: {
    bottom: "0px",
    left: "390px",
    width: "calc(100% - 780px)"
  },
  [positionConstants.top]: {
    top: "0px",
    left: "390px",
    width: "calc(100% - 780px)"
  }
};

const bordered = {
  border: "1px solid grey",
  margin: "3px",
  width: "100%-8px"
};

const flat = {
  margin: "3px",
  width: "100%-8px"
};

const shadowed = {
  border: "1px solid grey",
  margin: "3px",
  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.35)",
  width: "100%-8px"
};

const flatRounded = {
  margin: "3px",
  width: "100%-8px",
  borderRadius: "3px"
};

const rounded = {
  border: "1px solid grey",
  margin: "3px",
  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.35)",
  width: "100%-8px",
  borderRadius: "3px"
};

export const themeStyles = {
  [themeConstants.bordered]: bordered,
  [themeConstants.flat]: flat,
  [themeConstants.flatRounded]: flatRounded,
  [themeConstants.rounded]: rounded,
  [themeConstants.shadowed]: shadowed
};

export const alertIcons = {
  [alertConstants.error]: error,
  [alertConstants.success]: success,
  [alertConstants.info]: info,
  [alertConstants.warning]: warning,
  [alertConstants.basic]: basic
};

export const defaultStyle = {
  fontFamily: "Lato,Helvetica Neue,Arial,Helvetica,sans-serif",
  fontSize: "13px",
  width: "100%",
  minHeight: "40px",
  color: "white",
  zIndex: 50,
  display: "flex",
  justifyContent: "flex-start",
  overflow: "hidden"
};

export const iconStyle = {
  padding: "10px",
  display: "flex",
  width: "40px",
  alignItems: "flex-start"
};

export const contentStyle = {
  padding: "10px",
  display: "flex",
  width: "100%"
};

export const errorStyle = {
  backgroundColor: "rgba(244, 67, 54, 0.8)"
};

export const basicStyle = {
  backgroundColor: "rgba(192,192,192,0.8)"
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
