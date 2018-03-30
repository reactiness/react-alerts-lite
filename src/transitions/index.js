import { FadeSlideUp } from "./FadeSlideUp";
import { FadeSlideDown } from "./FadeSlideDown";
import { FadeSlideDownUp } from "./FadeSlideDownUp";
import { transitionConstants } from "../core/constants";

export const transitions = {
  [transitionConstants.fadeSlideDown]: FadeSlideDown,
  [transitionConstants.fadeSlideUp]: FadeSlideUp,
  [transitionConstants.fadeSlideDownUp]: FadeSlideDownUp
}; 