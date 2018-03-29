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

export const alertConstants = { basic, error, warning, info, success };

export const positionConstants = {
  bottom,
  top,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  bottomFull,
  topFull
};

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

const fadeSlideTop = "fade-slide-top";
const fadeSlideBottom = "fade-slide-bottom";

export const stockTransitionsConstants = {
  fadeSlideTop,
  fadeSlideBottom
};

const content =
  "content: tent: define some con tent: define some con tent: define some con tent: define some condefine some content";

export const defaultAlertArgs = {
  type: info,
  timeout: 5000,
  transition: fadeSlideBottom,
  duration: 500,
  position: bottom,
  content,
  closeButton: true
};
