import { SlideUp } from "./SlideUp";
import { SlideDown } from "./SlideDown";
import { SlideUpThrough } from "./SlideUpThrough";
import { Fade } from "./Fade";
import { SlideRight } from "./SlideRight";
import { SlideLeft } from "./SlideLeft";
import { RotateLeft } from "./RotateLeft";
import { RotateRight } from "./RotateRight";
import { Scale } from "./Scale";
import { ScaleSlideLeft } from "./ScaleSlideLeft";
import { ScaleSlideRight } from "./ScaleSlideRight";
import { ScaleSlideUp } from "./ScaleSlideUp";
import { ScaleSlideDown } from "./ScaleSlideDown";
import { NoStyle } from "./NoStyle";
import { Test } from "./Test";

import { transitionConstants } from "../core/constants";

export const transitions = {
  [transitionConstants.slideDown]: SlideDown,
  [transitionConstants.slideUp]: SlideUp,
  [transitionConstants.slideUpThrough]: SlideUpThrough,
  [transitionConstants.fade]: Fade,
  [transitionConstants.slideRight]: SlideRight,
  [transitionConstants.slideLeft]: SlideLeft,
  [transitionConstants.rotateLeft]: RotateLeft,
  [transitionConstants.rotateRight]: RotateRight,
  [transitionConstants.scale]: Scale,
  [transitionConstants.scaleSlideDown]: ScaleSlideDown,
  [transitionConstants.scaleSlideLeft]: ScaleSlideLeft,
  [transitionConstants.scaleSlideRight]: ScaleSlideRight,
  [transitionConstants.scaleSlideUp]: ScaleSlideUp,
  [transitionConstants.test]: Test,
  [transitionConstants.none]: NoStyle
};
