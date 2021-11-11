import styled , { css, keyframes }from 'styled-components'


export const LastButton = styled.button`
  font-size: 16px;
    color: #ffffff;
    background-color: #72A603;
    border-radius: 5px;
    border: 0px;
    height: 40px;
    padding: 4px;
    margin: 4px;
    cursor: pointer;
    width: 199px;
    outline: none;
    font-weight: 700;
    &:hover {
      background-color: #BFD962
    }
`;

export const ScrollDown = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translateY(-80px) translateX(-50%) rotate(45deg);
`;

export const animate = keyframes`
  0% {
    top: -5px;
    left: -5px;
    opacity: 0;
  } 
  25% {
    top: 0;
    left: 0;
    opacity: 1;
  }
  50%, 100% {
    top: 5px;
    left: 5px;
    opacity: 0;
  }
`;

export const Indicator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  animation: ${animate} 1.5s linear infinite;
  opacity: 0;
  &:nth-child(1) {
    transform: translate(-15px, -15px);
    animation-delay: -0.4s;
  }
  &:nth-child(2) {
    transform: translate(0, 0);
    animation-delay: -0.2s;
  }
  &:nth-child(3) {
    transform: translate(15px, 15px);
    animation-delay: 0s;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    margin-left: 120px;
  }
  @media screen and (min-width: 1281px) and (max-width: 1440px) {
   margin-top: 100px;
   margin-left: 140px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1281px){
    margin-top: 100px;
   margin-left: 100px;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px){
    margin-top: 100px;
   margin-left: 120px;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    margin-top: 100px;
   margin-left: 120px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px){
    margin-top: 100px;
   margin-left: 120px;
  }
  @media screen and (min-width: 505px) and (max-width: 600px){
    margin-top: 100px;
   margin-left: 120px;
  }
  @media screen and (min-width: 425px) and (max-width: 505px){
    margin-top: 100px;
   margin-left: 120px;
  }
  @media screen and (min-width: 319px) and (max-width: 425px){
    margin-top: 100px;
   margin-left: 120px;
  }
`;




export const StyledButton = styled.button`
  font-size: 16px;
    color: #ffffff;
    background-color: #284794;
    border-radius: 5px;
    border: 0px;
    height: 40px;
    padding: 4px;
    margin: 4px;
    cursor: pointer;
    width: 199px;
    outline: none;
    font-weight: 700;
    margin-left:70px;
    &:hover {
      background-color: #a99fee;
    }
`;

export const Menu = styled.div`
  position: absolute;
  top: 20px;
  right: -10px;
  margin-right: 40px;
  padding: 12px 5px;
  background: white;
  width: 200px;
  box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: 0.25s;
  margin-top: 20px;
  ${(props) =>
    props.open
      ? css`
          visibility: visible;
          opacity: 80%;
          top: 50px;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
  
`;

export const H3 = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding: 8px 0;
  font-weight: 700;
  color: dimgray;
  line-height: 1.2em;
  margin: 8px 0;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 4px 0;
  margin: 0;
`;


export const Move = styled.a`
  display: inline-block;
  text-decoration: none;
  color: dimgray;
  font-weight: 500;
  transition: 0.25s;
`;



export const Li = styled.li`
  list-style: none;
  padding: 8px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  margin-left: 10%;
  &:hover {
    ${Move} {
      color: black;
      font-weight: 600;
    }
  }
`;


export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 70px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.1);
  display: grid;
  place-items: center;
`;



export const ModalContainer = styled.div`


`;


export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
    border-radius: 10px;
    background-color: #ffffff;
    width: 350px;
    height: 550px;
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr;
`;