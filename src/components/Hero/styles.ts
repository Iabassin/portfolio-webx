import styled from "styled-components";



export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;  
    }
   .hero-text p{
      color: blue;
    }
    h1{
      font-size: 6rem;
      animation-fill-mode: both;
      animation: rubberBand 1s;
    }
    h1:hover{
      animation: bounceIn;
      animation-duration: 1s;
      animation-delay: 1s;
      animation-fill-mode: forwards;
    }
    h3{
      position: relative;
      color: #E31F71;
      -webkit-text-stroke: 0.1vw #E31F71;
      text-transform: uppercase;
      margin: 1rem 0;
      opacity: 0;
      animation: bounceIn;
      animation-duration: 1s;
      animation-delay: 1s;
      animation-fill-mode: forwards;
    }
    h3::before{
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: #23ce6b;
      -webkit-text-stroke: 0vw #E31F71; 
      overflow: hidden; 
      animation: animate 6s linear infinite;
    }
    @keyframes animate{
      0%,10%,100%{
        width: 0;
      }
      70%,90%,50%{
        width: 100%;
      }
    }
    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
   }
  .hero-image{
    img{
      max-width: 500px;
      animation: rotateIn 1s linear both;
      animation-delay: 1.4s;
    }
  }
  .stage-cube-cont {
    width: 50%;
    height: 100%;
    top: 0;
    padding-top: 18%;
    margin-left: 0;
    position: absolute;
    right: 0;
    overflow: hidden;
  }
  
  .cubespinner {
    animation-name: spincube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 12s;
    transform-style: preserve-3d;
    transform-origin: 100px 100px 0;
    margin-left: calc(50% - 100px);
  
    div {
      position: absolute;
      width: 200px;
      height: 200px;
      border: 1px solid #ccc;
      background: rgba(255, 255, 255, 0.4);
      text-align: center;
      font-size: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 20px 0px lightyellow;
    }
  
    .face1 {
      transform: translateZ(100px);
      color: #dd0031;
    }
    .face2 {
      transform: rotateY(90deg) translateZ(100px);
      color: #f06529;
    }
    .face3 {
      transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
      color: #28a4d9;
    }
    .face4 {
      transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
      color: #5ed4f4;
    }
    .face5 {
      transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
      color: #efd81d;
    }
    .face6 {
      transform: rotateX(-90deg) translateZ(100px);
      color: #ec4d28;
    }
  }
  
  @keyframes spincube {
    from,
    to {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    16% {
      transform: rotateY(-90deg);
    }
    33% {
      transform: rotateY(-90deg) rotateZ(90deg);
    }
    50% {
      transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
      transform: rotateY(-270deg) rotateX(90deg);
    }
    83% {
      transform: rotateX(90deg);
    }
  }
  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 25%;
    
  }
  @media(max-width: 480px){
    margin-top: 35%;
  }
`