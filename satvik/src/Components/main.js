import React from 'react'
import main from "./images/main-page.jpg";
import ehr from "./images/ehr-symbol.png";


const main = () => {
  return (
    <nav>
      
        <div className="main-display">
            <div className="image">
                <img src={main}/>
            </div>
            <div className="main-info">
                <img src={ehr}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nisi expedita sequi reprehenderit fugit eveniet vel laboriosam quae illum est. Perspiciatis doloribus harum incidunt 
                    voluptatibus ab ut recusandae perferendis sequi eius!</p>
            </div>
        </div>
    </nav>
  )
}

export default main;