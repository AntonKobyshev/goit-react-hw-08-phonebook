import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const move = keyframes`
   100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
`;

export const BackgroundContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #aeadae;
  overflow: hidden;
  z-index: -1;
`;

export const BackgroundItem = styled.span`
  width: 35vmin;
  height: 35vmin;
  border-radius: 35vmin;
  backface-visibility: hidden;
  position: absolute;
  animation: ${move};
  animation-duration: 1;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &:nth-of-type(0) {
    color: #28432e;
    top: 35%;
    left: 24%;
    animation-duration: 340s;
    animation-delay: -20s;
    transform-origin: -8vw 16vh;
    box-shadow: -70vmin 0 9.031142682621923vmin currentColor;
  }

  &:nth-of-type(1) {
    color: #3c8677;
    top: 91%;
    left: 1%;
    animation-duration: 240s;
    animation-delay: -140s;
    transform-origin: 3vw 17vh;
    box-shadow: 70vmin 0 9.389666198332264vmin currentColor;
  }
  &:nth-of-type(2) {
    color: #28432e;
    top: 77%;
    left: 66%;
    animation-duration: 460s;
    animation-delay: -307s;
    transform-origin: 17vw 21vh;
    box-shadow: -70vmin 0 8.966702705525718vmin currentColor;
  }
  &:nth-of-type(3) {
    color: #2f2d2d;
    top: 20%;
    left: 75%;
    animation-duration: 382s;
    animation-delay: -132s;
    transform-origin: 12vw -13vh;
    box-shadow: -70vmin 0 9.312685962436085vmin currentColor;
  }
  &:nth-of-type(4) {
    color: #2f2d2d;
    top: 60%;
    left: 96%;
    animation-duration: 404s;
    animation-delay: -456s;
    transform-origin: 2vw 15vh;
    box-shadow: 70vmin 0 9.063150301281294vmin currentColor;
  }
  &:nth-of-type(5) {
    color: #3c8677;
    top: 82%;
    left: 18%;
    animation-duration: 234s;
    animation-delay: -5s;
    transform-origin: 5vw 6vh;
    box-shadow: -70vmin 0 8.868810308720338vmin currentColor;
  }
  &:nth-of-type(6) {
    color: #2f2d2d;
    top: 47%;
    left: 55%;
    animation-duration: 318s;
    animation-delay: -309s;
    transform-origin: -13vw -5vh;
    box-shadow: 70vmin 0 9.382762309390719vmin currentColor;
  }
  &:nth-of-type(7) {
    color: #2f2d2d;
    top: 4%;
    left: 52%;
    animation-duration: 304s;
    animation-delay: -116s;
    transform-origin: -7vw 11vh;
    box-shadow: -70vmin 0 8.908533663410674vmin currentColor;
  }
  &:nth-of-type(8) {
    color: #28432e;
    top: 91%;
    left: 39%;
    animation-duration: 37s;
    animation-delay: -429s;
    transform-origin: -15vw 20vh;
    box-shadow: 70vmin 0 8.8336300664292vmin currentColor;
  }
  &:nth-of-type(9) {
    color: #2f2d2d;
    top: 14%;
    left: 35%;
    animation-duration: 24s;
    animation-delay: -178s;
    transform-origin: -6vw 11vh;
    box-shadow: 70vmin 0 8.949013453383543vmin currentColor;
  }
  &:nth-of-type(10) {
    color: #2f2d2d;
    top: 11%;
    left: 26%;
    animation-duration: 451s;
    animation-delay: -136s;
    transform-origin: -6vw -24vh;
    box-shadow: -70vmin 0 9.347635742896493vmin currentColor;
  }
  &:nth-of-type(11) {
    color: #2f2d2d;
    top: 13%;
    left: 45%;
    animation-duration: 211s;
    animation-delay: -283s;
    transform-origin: -16vw -22vh;
    box-shadow: 70vmin 0 9.12741604607717vmin currentColor;
  }
  &:nth-of-type(12) {
    color: #2f2d2d;
    top: 76%;
    left: 24%;
    animation-duration: 32s;
    animation-delay: -244s;
    transform-origin: 3vw 6vh;
    box-shadow: -70vmin 0 9.10280696013311vmin currentColor;
  }
  &:nth-of-type(13) {
    color: #28432e;
    top: 25%;
    left: 52%;
    animation-duration: 352s;
    animation-delay: -76s;
    transform-origin: -5vw -8vh;
    box-shadow: 70vmin 0 8.774786018249593vmin currentColor;
  }
  &:nth-of-type(14) {
    color: #28432e;
    top: 75%;
    left: 25%;
    animation-duration: 78s;
    animation-delay: -456s;
    transform-origin: 6vw -17vh;
    box-shadow: 70vmin 0 8.80925043788744vmin currentColor;
  }
  &:nth-of-type(15) {
    color: #3c8677;
    top: 7%;
    left: 74%;
    animation-duration: 249s;
    animation-delay: -406s;
    transform-origin: -21vw -13vh;
    box-shadow: 70vmin 0 9.558601018417608vmin currentColor;
  }
  &:nth-of-type(16) {
    color: #2f2d2d;
    top: 90%;
    left: 70%;
    animation-duration: 468s;
    animation-delay: -309s;
    transform-origin: -17vw -2vh;
    box-shadow: -70vmin 0 9.034368529406466vmin currentColor;
  }
  &:nth-of-type(17) {
    color: #28432e;
    top: 92%;
    left: 72%;
    animation-duration: 206s;
    animation-delay: -285s;
    transform-origin: -2vw -22vh;
    box-shadow: 70vmin 0 9.429772596796564vmin currentColor;
  }
  &:nth-of-type(18) {
    color: #3c8677;
    top: 93%;
    left: 26%;
    animation-duration: 106s;
    animation-delay: -232s;
    transform-origin: 6vw 4vh;
    box-shadow: -70vmin 0 9.18897479597855vmin currentColor;
  }
  &:nth-of-type(19) {
    color: #28432e;
    top: 2%;
    left: 78%;
    animation-duration: 464s;
    animation-delay: -462s;
    transform-origin: 1vw 8vh;
    box-shadow: 70vmin 0 9.461763450657154vmin currentColor;
  }
  &:nth-of-type(20) {
    color: #3c8677;
    top: 39%;
    left: 24%;
    animation-duration: 136s;
    animation-delay: -102s;
    transform-origin: -8vw 15vh;
    box-shadow: -70vmin 0 9.69901089851049vmin currentColor;
  }
  &:nth-of-type(21) {
    color: #2f2d2d;
    top: 43%;
    left: 18%;
    animation-duration: 108s;
    animation-delay: -382s;
    transform-origin: 2vw -17vh;
    box-shadow: 70vmin 0 8.945388146401504vmin currentColor;
  }
  &:nth-of-type(22) {
    color: #28432e;
    top: 51%;
    left: 87%;
    animation-duration: 115s;
    animation-delay: -389s;
    transform-origin: -12vw 20vh;
    box-shadow: -70vmin 0 9.347193748724866vmin currentColor;
  }
  &:nth-of-type(23) {
    color: #2f2d2d;
    top: 5%;
    left: 66%;
    animation-duration: 327s;
    animation-delay: -15s;
    transform-origin: -8vw 18vh;
    box-shadow: -70vmin 0 9.632517270165831vmin currentColor;
  }
  &:nth-of-type(24) {
    color: #2f2d2d;
    top: 1%;
    left: 34%;
    animation-duration: 76s;
    animation-delay: -71s;
    transform-origin: -3vw -1vh;
    box-shadow: 70vmin 0 9.011147540527567vmin currentColor;
  }
  &:nth-of-type(25) {
    color: #2f2d2d;
    top: 31%;
    left: 62%;
    animation-duration: 428s;
    animation-delay: -445s;
    transform-origin: 21vw 4vh;
    box-shadow: -70vmin 0 9.490407678147498vmin currentColor;
  }
  &:nth-of-type(26) {
    color: #2f2d2d;
    top: 75%;
    left: 7%;
    animation-duration: 414s;
    animation-delay: -14s;
    transform-origin: 11vw 16vh;
    box-shadow: 70vmin 0 8.796368415152598vmin currentColor;
  }
  &:nth-of-type(27) {
    color: #3c8677;
    top: 40%;
    left: 15%;
    animation-duration: 383s;
    animation-delay: -54s;
    transform-origin: 25vw -9vh;
    box-shadow: 70vmin 0 9.11933159015661vmin currentColor;
  }
  &:nth-of-type(28) {
    color: #28432e;
    top: 42%;
    left: 97%;
    animation-duration: 83s;
    animation-delay: -36s;
    transform-origin: 2vw -19vh;
    box-shadow: 70vmin 0 9.307812819752241vmin currentColor;
  }
  &:nth-of-type(29) {
    color: #3c8677;
    top: 64%;
    left: 19%;
    animation-duration: 453s;
    animation-delay: -389s;
    transform-origin: -20vw 11vh;
    box-shadow: -70vmin 0 8.990246846946524vmin currentColor;
  }
  &:nth-of-type(30) {
    color: #2f2d2d;
    top: 65%;
    left: 70%;
    animation-duration: 319s;
    animation-delay: -81s;
    transform-origin: 1vw 3vh;
    box-shadow: -70vmin 0 9.661866533992981vmin currentColor;
  }
`;