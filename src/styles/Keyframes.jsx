import { keyframes } from 'styled-components';
import { styled, css } from 'styled-components'
import { media } from './MediaQueries';

export const OfferTextKeyframes =  keyframes`
0%{
transform: translateX(50%)
}
100%{
transform: translateX(-50%)
}
// ${media.mobile(css`
// 0%{
// transform: translateX(-180%)
// }

// 100%{
//   transform: translateX(180%)

// }

// `)}
`
export const BottomOfferTextKeyframes =  keyframes`
0%{
transform: translateX(70%)
}

100%{
  transform: translateX(-70%)

}


`

export const FlipImages = keyframes`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(-1);
  }

`