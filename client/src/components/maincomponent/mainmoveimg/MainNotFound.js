import React from 'react'
import styled from 'styled-components'

const NotSeachContanier = styled.div`
    color: black;
    text-align: center;
    padding-top: 80px;
    width: 100vw;
    font-size: 3rem;
    font-weight: 600;
 `

function MainNotFound() {
    return (
        <div>
                <NotSeachContanier>
                 등록된 데이터가 없습니다!
                </NotSeachContanier>
        </div>
    )
}

export default MainNotFound