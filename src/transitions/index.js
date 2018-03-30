import { SlideUp } from "./SlideUp";
import { SlideDown } from "./SlideDown";
import { SlideDownUp } from "./SlideDownUp";
import { SlideUpDown } from "./SlideUpDown";
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

import { Test } from "./Test";

import { transitionConstants } from "../core/constants";

export const transitions = {
  [transitionConstants.SlideDown]: SlideDown,
  [transitionConstants.SlideUp]: SlideUp,
  [transitionConstants.SlideDownUp]: SlideDownUp,
  [transitionConstants.SlideUpDown]: SlideUpDown,
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
  [transitionConstants.test]: Test
};
