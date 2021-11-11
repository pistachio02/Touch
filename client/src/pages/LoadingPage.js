import React from 'react'
import './Loading.css'
import Lottie from 'react-lottie'
import * as loading from '../pages/loadingpage/animation.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Loading = () => {
    return (
        <Lottie options = {defaultOptions} height = {900} width = {1200} speed = {2} />
    )
}

export default Loading;