import styled from 'styled-components'
import image from './image/book.png'


export const PasswordInputField = styled.input`
    border: 1px solid #eee;
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 3px 3px 12px 170px;
    font-size: 16px;
    transition: all 0.2s ease;
    margin-left: 80px;
    margin-top: 25px;
`;

export const InputField = styled.input`
    border: 1px solid #eee;
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 3px 3px 12px 100px;
    font-size: 16px;
    transition: all 0.2s ease;
    margin-left: 110px;
    margin-top: 25px;
`;

export const NicknameView =styled.div.attrs(props => ({
    // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
    role: 'dialog'
  }))`
      border-radius: 10px;
      width: 500px;
      height: 200px;
      margin-top: 20px;
      display: inline-block;
      background-color: #fff;
      border-color: black;
      position: absolute;
      z-index: 999;
      margin-left: 400px;
      margin-top: 300px;
      opacity: 95%;
  `;

export const PasswordView =styled.div.attrs(props => ({

    role: 'dialog'
  }))`
      border-radius: 10px;
      width: 500px;
      height: 300px;
      margin-top: 20px;
      display: inline-block;
      background-color: #fff;
      border-color: black;
      position: absolute;
      z-index: 999;
      margin-left: 400px;
      margin-top: 300px;
      opacity: 95%;
  `;


export const MypageModal = styled.div.attrs(props => ({

    role: 'dialog'
  }))`
      border-radius: 10px;
      background-color: #f8f6ee;
      width: 350px;
      height: 550px;
      display: grid;
      grid-template-columns: 1fr 1fr 1.5fr;
      margin-left: 700px;
      margin-top: 155px;
      opacity: 70%;
  `;

export const MypageView = styled.div`
      border-radius: 10px;
      background-color:#F2F2F2;
      width: 1250px;
      height: 800px;
      margin-top: 20px;
      display: inline-block;
     background-image: url(${image});
     background-size: cover;
  `;
