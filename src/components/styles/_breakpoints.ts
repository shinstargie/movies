/* base breakpoints */

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  /* desktopL: `(max-width: ${size.desktop})`, */
};

/* swiper js slider breakpoints */
/* see corresponding styles per breakpoint in index.css */

export const swiperBreakpoints = {
  320: {
    width: 320,
    slidesPerView: 2,
    spaceBetween: 15,
  },
  /*  375: {
    width: 375,
    slidesPerView: 2,
  }, */
  425: {
    width: 425,
    slidesPerView: 2,
  },
  768: {
    width: 768,
    slidesPerView: 3,
  },
  1024: {
    width: 1024,
    slidesPerView: 4,
  },
  1440: {
    width: 1440,
    slidesPerView: 5,
  },
  /*  2560: {
    width: 2560,
    slidesPerView: 5,
  }, */
};
