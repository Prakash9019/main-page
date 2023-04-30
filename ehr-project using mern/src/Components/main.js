import React from 'react'
import main from "./images/main-page.jpg";
import ehr from "./images/ehr-symbol.png";


const Main = () => {
  return (
    <nav>
      
        <div className="main-display">
            <div className="image">
                <img src={main} alt="this is main"/>
            </div>
            <div className="main-info">
                <img src={ehr} alt="this is ehr logo"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nisi expedita sequi reprehenderit fugit eveniet vel laboriosam quae illum est. Perspiciatis doloribus harum incidunt 
                    voluptatibus ab ut recusandae perferendis sequi eius!</p>
            </div>
        </div>
    </nav>
  )
}

export default Main;