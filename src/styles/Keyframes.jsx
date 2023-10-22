import { keyframes } from 'styled-components';


export const OfferTextKeyframes = keyframes`
0%{
transform: translateX(50%)
}
100%{
transform: translateX(-50%)
}

`
export const BottomOfferTextKeyframes = keyframes`
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