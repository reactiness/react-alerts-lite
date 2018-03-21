import { configure, shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import "raf/polyfill";

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

configure({ adapter: new Adapter() });
