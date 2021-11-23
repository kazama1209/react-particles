import * as colorCodes from "constants/colorCodes";

export const bubbles = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: [
        colorCodes.GOLD,
        colorCodes.IVORY_BLACK,
        colorCodes.DEEP_SKY_BLUE,
        colorCodes.LIME,
        colorCodes.CRIMSON,
      ],
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: true,
        speed: 4,
        size_min: 2,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: true,
};
