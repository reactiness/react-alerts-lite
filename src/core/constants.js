const bottom = "bottom";
const top = "top";
const topLeft = "top-left";
const topRight = "top-right";
const bottomLeft = "bottom-left";
const bottomRight = "bottom-right";
const bottomFull = "bottom-full";
const topFull = "top-full";

const basic = "basic";
const error = "error";
const warning = "warning";
const info = "info";
const success = "success";

const rounded = "rounded";
const flatRounded = "flat-rounded";
const shadowed = "shadowed";
const flat = "flat";
const bordered = "bordered";

export const themeConstants = {
  rounded,
  flatRounded,
  shadowed,
  flat,
  bordered
};

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

const slideDown = "slide-down";
const slideUp = "slide-up";
const slideUpThrough = "slide-up-through";
const fade = "fade";
const slideRight = "slide-right";
const slideLeft = "slide-left";
const rotateLeft = "rotate-left";
const rotateRight = "rotate-right";
const test = "test";
const scale = "scale";
const none = "none";

const scaleSlideLeft = "scale-slide-left";
const scaleSlideRight = "scale-slide-right";
const scaleSlideDown = "scale-slide-down";
const scaleSlideUp = "scale-slide-up";

export const transitionConstants = {
  slideDown,
  slideUp,
  slideUpThrough,
  fade,
  slideRight,
  slideLeft,
  rotateLeft,
  rotateRight,
  scale,
  scaleSlideDown,
  scaleSlideLeft,
  scaleSlideRight,
  scaleSlideUp,
  test,
  none
};

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const defaultAlertArgs = {
  type: info,
  timeout: 4000,
  transition: "fade",
  duration: 500,
  position: bottomFull,
  content,
  closeButton: true,
  maxHeight: "200px"
};
