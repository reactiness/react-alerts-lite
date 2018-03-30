import { FadeSlideUp } from "./FadeSlideUp";
import { FadeSlideDown } from "./FadeSlideDown";
import { FadeSlideDownUp } from "./FadeSlideDownUp";
import { Fade } from "./Fade";
import { SlideRight } from "./SlideRight";
import { SlideLeft } from "./SlideLeft";
import { RotateLeft } from "./RotateLeft";
import { RotateRight } from "./RotateRight";

import { Test } from "./Test";

import { transitionConstants } from "../core/constants";

export const transitions = {
  [transitionConstants.fadeSlideDown]: FadeSlideDown,
  [transitionConstants.fadeSlideUp]: FadeSlideUp,
  [transitionConstants.fadeSlideDownUp]: FadeSlideDownUp,
  [transitionConstants.fade]: Fade,
  [transitionConstants.slideRight]: SlideRight,
  [transitionConstants.slideLeft]: SlideLeft,
  [transitionConstants.rotateLeft]: RotateLeft,
  [transitionConstants.rotateRight]: RotateRight,
  [transitionConstants.test]: Test
};
