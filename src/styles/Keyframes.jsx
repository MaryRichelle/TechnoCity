import { keyframes } from 'styled-components';


export const OfferTextKeyframes = keyframes`
0%{
transform: translateX(200%)
}
100%{
transform: translateX(-100%)
}

`
export const OfferTextOnTablet = keyframes`
0%{
transform: translateX(50%)
}
100%{
transform: translateX(-50%)
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