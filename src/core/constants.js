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
const slideDownUp = "slide-down-up";
const slideUpDown = "slide-up-down";
const fade = "fade";
const slideRight = "slide-right";
const slideLeft = "slide-left";
const rotateLeft = "rotate-left";
const rotateRight = "rotate-right";
const test = "test";
const scale = "scale";

const scaleSlideLeft = "scale-slide-left";
const scaleSlideRight = "scale-slide-right";
const scaleSlideDown = "scale-slide-down";
const scaleSlideUp = "scale-slide-up";

export const transitionConstants = {
  slideDown,
  slideUp,
  slideDownUp,
  slideUpDown,
  fade,
  slideRight,
  slideLeft,
  rotateLeft,
  rotateRight,
  scale,
  test,
  scaleSlideDown,
  scaleSlideLeft,
  scaleSlideRight,
  scaleSlideUp
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
