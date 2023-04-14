import React from 'react'

const vitalsigndata = () => {
  return (
    <nav>
       
        <form className="myform">
            <div className="vital-category-dt" id="vt1">
                Body Temperature measured by:<input className="form-input" placeholder="measurement" type="text" name="btmeasure" list="btmeasure-list"/>
                <datalist className="form-datalist" id="btmeasure-list">
                <option value="Orally"/>
                <option value="Rectally"/>
                <option value="Internally"/>
                <option value="By ear"/>
                <option value="By skin"/>
                </datalist><br/>
                Body Temperature:<input className="form-input" type="text" placeholder="Enter body Temperature"/><br/>
                <button type="submit">Update</button>
            </div>
            <div className="vital-category-dt" id="vt2">
                Pulse Rate:<input type="text" placeholder="Enter your pulse rate" className="form-input"/><br/>
                <button type="submit">Update</button>
                <br/>
            </div>
            <div className="vital-category-dt" id="vt3">
                Breathing Rate:<input type="text" placeholder="Enter your breath rate" className="form-input" name="breathing rate"/><br/>
                <button type="submit">Update</button>
            <br/>
            </div>
            <div className="vital-category-dt" id="vt4">
                Blood Pressure:<input type="text" placeholder="Select range" className="form-input" list="bp-list"/> 
                <datalist id="bp-list">
                    <option value="Normal-120/80"/>
                    <option value="Elevated-(120-129)/80"/>
                    <option value="Stage1-(130-139)/(80-89)"/>
                    <option value="Stage2-(>140)/(>90)"/>
                </datalist><br/>
                Breathing Rate:<input type="text" placeholder="Enter your bprate" className="form-input" name="bprate"/><br/>
                <button type="submit">Update</button>
            </div>
    </form>
    </nav>
  )
}

export default vitalsigndata