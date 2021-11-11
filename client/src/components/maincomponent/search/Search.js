import { useState } from 'react'
import '../maincss/Search.css'
import { Link } from 'react-router-dom'

function Search({search}) {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleKeyPress = (e) => {
    if(e.type === 'keypress' && e.code === 'Enter') {
      handleSearchClick()
    }
  }

  const handleSearchClick = () => {
    search({ 
      title : text })
  }

  return (

 <div className="search_background">
     <div className="search_container">
         <div >
            <h1 className="search_text">주제를 검색해보세요!</h1>
         </div>
         <div className="search_input_center">
         <input id="search_input" type="text" value={text} onChange={handleChange} placeholder="&#61442;" onKeyPress={handleKeyPress} />
         </div>
  <div>
  <Link to = "/heal/touch" ><button className="search_btn">Touch 바로가기</button></Link>
  </div>
     </div>
     
     {/* search_input_center */}
   
 </div>
  )
}

export default Search
