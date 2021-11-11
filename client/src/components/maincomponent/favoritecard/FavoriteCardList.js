import React,{useState,useEffect} from 'react'
import FavoriteCard from './FavoriteCard'
import styled from 'styled-components'
import axios from 'axios';
import swal from 'sweetalert';

function FavoriteCardList({userinfo}) {

const LikeCardBackground = styled.div`
background-image: url('https://cdn.pixabay.com/photo/2015/12/15/09/04/banner-1093909_960_720.jpg');
margin: 0;
font-size: 2.5rem;
background-repeat: no-repeat;
background-size : cover;
max-width: 100%;
height:15rem;
background-position: center;    
justify-content: center;
display: block;
display: flex;
flex-direction: column;
`

const LikeCardText = styled.div`
text-align: center;
background-color: rgba(255, 255, 255, 0.3);
padding:0.3rem;
color:rgb(23, 2, 2);
font-weight: 600;
color: #2f4f4f;
   
`
    
    
    const [likeCards, setLikeCards] = useState([])

    const likeList = () => {
        axios
          .get('https://localhost:4000/zzim', {withCredentials: true})
          .then((res) => {
              setLikeCards(res.data)
          })
          .catch((err) => {
            console.log(err);
          })
    }

    const handleDelete = (id, e) => {
        // e.preventDefault()

        const healing_id = id;

        axios
          .post('https://localhost:4000/delzzim', { healing_id: healing_id }, {withCredentials: true})
          .then(() => {
            swal({
                title:"삭제완료!!",
                text:"삭제 완료 되었습니다!",
                icon:"success",
                dangerMode: true,
            })
            .then(() => {
                window.location.reload()
            })
          })
          .catch((err) => {
            console.log(err);
          })
    };


    useEffect(() => {
        likeList()
    }, []);
  
    
    return userinfo&&(
        <div>
<LikeCardBackground>
    <LikeCardText>
   {userinfo.nickname} 님의 찜 목록 페이지 입니다!
    </LikeCardText>
</LikeCardBackground>



        <div className="test-back">
        <div className="test">
            
        {likeCards && likeCards.map((likeCard, idx) => 
        
        <FavoriteCard
        likeCard={likeCard}
        handleDelete={handleDelete}
        key={idx.id}/>)}
        </div>

        </div>
        </div>
    )
}

export default FavoriteCardList