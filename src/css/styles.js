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

export const alertIcons = {
  [alertConstants.error]: error,
  [alertConstants.success]: success,
  [alertConstants.info]: info,
  [alertConstants.warning]: warning,
  [alertConstants.basic]: basic
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

