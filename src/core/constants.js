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

export const positionsArray = [
  bottom,
  top,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  bottomFull,
  topFull
];

const fadeSlideDown = "fade-slide-down";
const fadeSlideUp = "fade-slide-up";
const fadeSlideDownUp = "fade-slide-down-up";
const fade = "fade";
const slideRight = "slide-right";
const slideLeft = "slide-left";
const rotateLeft = "rotate-left";
const rotateRight = "rotate-right";
const test = "test";

export const transitionConstants = {
  fadeSlideDown,
  fadeSlideUp,
  fadeSlideDownUp,
  fade,
  slideRight,
  slideLeft,
  rotateLeft,
  rotateRight,
  test
};

const content =
  "content: tent: define some con tent: define some con tent: define some con tent: define some condefine some content";

export const defaultAlertArgs = {
  type: info,
  timeout: 5000,
  transition: "fade-slide-up",
  duration: 500,
  position: bottom,
  content,
  closeButton: true,
  maxHeight: "200px"
};
