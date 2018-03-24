import { FadeSlide as DefaultTransition } from "../transitions/FadeSlide";

export const bottom = "bottom";
export const top = "top";
export const topLeft = "top-left";
export const topRight = "top-right";
export const bottomLeft = "bottom-left";
export const bottomRight = "bottom-right";
export const bottomFull = "bottom-full";
export const topFull = "top-full";

export const basic = "basic";
export const error = "error";
export const warning = "warning";
export const info = "info";
export const success = "success";

export const alertTypes = [basic, error, warning, info, success];

export const positions = [
  bottom,
  top,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  bottomFull,
  topFull
];

export const defaultAlertArgs = {
  type: info,
  timeout: 5000,
  align: "center",
  transition: DefaultTransition,
  duration: 500,
  position: bottom,
  content: "content: define some content"
};
