import { FadeSlideUp } from "./FadeSlideUp";
import { FadeSlideDown } from "./FadeSlideDown";
import { FadeSlideDownUp } from "./FadeSlideDownUp";
import { Fade } from "./Fade";
import { SlideRight } from "./SlideRight";

import { transitionConstants } from "../core/constants";

export const transitions = {
  [transitionConstants.fadeSlideDown]: FadeSlideDown,
  [transitionConstants.fadeSlideUp]: FadeSlideUp,
  [transitionConstants.fadeSlideDownUp]: FadeSlideDownUp,
  [transitionConstants.fade]: Fade,
  [transitionConstants.slideRight]: SlideRight
};
