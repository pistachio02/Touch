import styled from 'styled-components'

export const BoardModalView = styled.div.attrs(props => ({
    // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
    role: 'dialog'
  }))`
      border-radius: 10px;
      background-color:#F2F2F2;
      width: 700px;
      height: auto;
      margin-left: 20%;
      opacity: 85%;
      margin-top: 50px;
      display: inline-block;
  `;