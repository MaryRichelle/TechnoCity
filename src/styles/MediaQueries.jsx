
import { css } from 'styled-components';

const breakpoints = {
  mobileXSM: '300px',
  mobileSm: '480px',
  mobile: '490px',
  tablet: '750px',
  tabletSm: '900px',
  tabletLg: '960px',
  desktop: '1024px',
  desktopMd: '1100px'
};

export const media = {
  mobileXSM: (styles) => css`
    @media (max-width: ${breakpoints.mobileXSM}) {
      ${styles}
    }
  `,
  mobileSm: (styles) => css`
    @media (max-width: ${breakpoints.mobileSm}) {
      ${styles}
    }
  `,
  mobile: (styles) => css`
    @media (max-width: ${breakpoints.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles) => css`
    @media (max-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  tabletSm: (styles) => css`
    @media (min-width: ${breakpoints.tabletLg}) {
      ${styles}
    }
  `,
  tabletLg: (styles) => css`
    @media (min-width: ${breakpoints.tabletLg}) {
      ${styles}
    }
  `,
  desktop: (styles) => css`
    @media (min-width: ${breakpoints.desktop}) {
      ${styles}
    }
  `,
  desktopMd: (styles) => css`
    @media (min-width: ${breakpoints.desktopMd}) {
      ${styles}
    }
  `,
};
