
import React from 'react'

const Crp = () =>{
  return(
    <>
        <form className="myform">
        <div className="labreports" id="crp">
            <p>Enter the crp levels</p>
            <p>Choose the range of the crp levels</p><br/>
            <label htmlFor="crplevel">CRP LEVEL RANGE:</label><input className="form-input" type="text" placeholder="Range" name="crplevel" list="crprange"/>
            <datalist className="form-datalist" id="crprange">
                <option value="less than 0.3mg/dl"/>
                <option value="0.3-1.00 mg/dl" />
                <option value="1.00 to 10.00 mg/dl" />
                <option value="More than 10.00 mg/dl" />
                <option value="More than 50.00 mg/dl"/>
            </datalist><br/>
            <label htmlFor="crp" >CRP LEVEL:</label><input className="form-input" type="text" placeholder="Enter the crp level in report" name="crp" /><br/>
            <button type="submit">Update</button>
        </div>
        </form>
   </>
)
}

const Cbc = ()=>{
    return(
        <div className="labreports" id="cbc">
        <p>Enter the following details</p><br/>
        <label htmlFor="hemoglobin">Hemoglobin:</label><input className="form-input" type="text" name="hemoglobin" placeholder="Hemoglobin levels"/><br/>
        <label htmlFor="rbc">RBC:</label><input className="form-input" type="text" name="rbc"  placeholder="RBC level"/><br/>
        <label htmlFor="wbc">WBC:</label><input className="form-input" type="text" name="wbc" placeholder="WBC level"/><br/>
        <label htmlFor="platelets">Platelets:</label><input className="form-input" type="text" name="platelets" placeholder="Platelets level"/><br/>
        <label htmlFor="hemotrocit">Hemotrocit:</label><input className="form-input" type="text" name="hemotrocit" placeholder="Hemotrocit level"/><br/>
        <button type="submit">Update</button>
    </div>
    )
}

const Ana =()=>{
    return(
        <div className="labreports" id="ana">
        <p>Enter the ANA levels</p><br/>
        <p>Choose the range of the ANA levels</p><br/>
        <label htmlFor="analevel">ANA LEVEL RANGE:</label><input type="text" placeholder="Range" name="analevel" list="anarange" /><br/>
        <datalist className="form-datalist" id="anarange">
            <option value="less 20units"/>
            <option value="20-60 units"/>
            <option value="More than 60 units"/>
        </datalist><br/>
        <label htmlFor="ana" >ANA LEVEL:</label><input className="form-input" type="text" placeholder="Enter the ANA level in report" name="ana"/><br/>
        <button type="submit">Update</button>
    </div>
    )
}

const Blp =()=>{
    return(
        <div className="labreports" id="blp">
        <p>Enter the following data</p><br/>
        <p>Choose the range of the Choloestrol levels</p><br/>
        <label htmlFor="cholo">Choloestrol range: </label>
       <input type="text" placeholder="Cholestrol" className="form-input" name="cholo" list="choloestrol-list"/>
        <datalist id="choloestrol-list" className="form-datalist">
            <option value="Normal-Less than 200mg/dl"/>
            <option value="Medium-200 - 239 mg/dl"/>
            <option value="High-More than 240 mg/dl"/>    
        </datalist><br/>
        <label htmlFor="cholost" >CHOLOESTROL LEVEL:</label><input className="form-input" type="text" placeholder="Enter the choloestrol level in report" name="cholost"/><br/>
        <label htmlFor="ldlcholo">LDLCholoestrol range: </label><input type="text" placeholder="LDLCholestrol" className="form-input" name="ldlcholo" list="ldlcholoestrol-list"/>
        <datalist id="ldlcholoestrol-list" className="form-datalist">
            <option value="Optimal-Less than 100mg/dl"/>
            <option value="Near optimal-100 t0o 129 mg/dl"/>
            <option value="Borderline-130 to 159 mg/dl"/> 
            <option value="High-160 to 189 mg/dl"/>   
        </datalist><br/>
        <label htmlFor="ldlcholost" >LDLCholoestrol LEVEL:</label><input className="form-input" type="text" placeholder="Enter the LDLCHOLOESTROL level in report" name="ldlcholost"/><br/>
        <button type="submit">Update</button>
    </div>
    )
}

const Glucose = ()=>{
      return(
        <div className="labreports" id="glucose">
        <p>Enter the following data according to test reports</p><br/>
        <p>Choose the range of the A1c test levels</p><br/>
        <label htmlFor="a1c">A1C Test range: </label> <input type="text" placeholder="A1c Test" className="form-input" name="a1c" list="a1c-list"/>
        <datalist id="a1c-list" className="form-datalist">
            <option value="Normal-Below 5.7%"/>
            <option value="Prediabetes-5.7% - 6.4%"/>
            <option value="Diabetes-Above 6.5% or 6.5%"/>    
        </datalist><br/>
        <label htmlFor="A1ctest">A1C level: </label><input type="text" placeholder="Enter the a1c test level" className="form-input" name="A1ctest"/><br/>
        <label htmlFor="fbst" >Fast Sugar test range:</label><input className="form-input" type="text" placeholder="Range" name="fbst" list="fbst-list"/><br/>
        <datalist id="fbst-list" className="form-datalist">
            <option value="Normal-Below 99mg/dl"/>
            <option value="Prediabetes-100-125mg/dl"/>
            <option value="Diabetes-126mg/dl and above"/>     
        </datalist><br/>
        <label htmlFor="fbst-test" >Fast Sugar test:</label><input className="form-input" type="text" placeholder="Enter the levels from the report" name="fbst-test"/><br/>
        <label htmlFor="gtt" >Glucose tolerence test range:</label><input className="form-input" type="text" placeholder="Range" name="gtt" list="gtt-list"/><br/>
        <datalist id="gtt-list" className="form-datalist">
            <option value="Normal-Below 140mg/dl"/>
            <option value="Prediabetes-140-199mg/dl"/>
            <option value="Diabetes-200mg/dl and above"/>     
        </datalist><br/>
        <label htmlFor="gtt-test" >Glucose tolerence test:</label><input className="form-input" type="text" placeholder="Enter the levels from the report" name="gtt-test" /><br/>
        <button type="submit">Update</button>
    </div>
      )
}

const Liver =()=>{
      return(
        <div className="labreports" id="liver">
        <p>Enter the following data according to test reports</p><br/>
        <label htmlFor="alt">ALT:</label><input type="text" placeholder="Alt value" name="alt" className="form-input"/><br/>
        <label htmlFor="ast">AST:</label><input type="text" placeholder="AST value" name="alt" className="form-input"/><br/>
        <label htmlFor="alp">ALP:</label><input type="text" placeholder="ALP value" name="alt" className="form-input"/><br/>
        <label htmlFor="alb">Albumin:</label><input type="text" placeholder="ALBUMIN value" name="alt" className="form-input"/><br/>
        <label htmlFor="tp">Total protien:</label><input type="text" placeholder="TOTAL PROTEIN value" name="alt" className="form-input"/><br/>
        <label htmlFor="blb">Bilirubin</label><input type="text" placeholder="BILIRUBIN value" name="alt" className="form-input"/><br/>
        <label htmlFor="ggt">GGT:</label><input type="text" placeholder="GGT value" name="alt" className="form-input"/><br/>
        <label htmlFor="ld">LD</label><input type="text" placeholder="LD value" name="alt" className="form-input"/><br/>
        <label htmlFor="pt">PT</label><input type="text" placeholder="PT value" name="alt" className="form-input"/><br/>
        <button type="submit">Update</button>
    </div>
      )
}

const Gfr = ()=>{
    return(
        <div className="labreports" id="gfr">
        <p>Enter the following data according to test reports</p><br/>
        <label htmlFor="gfr" >Glomerular Filtration Test range:</label><input className="form-input" type="text" placeholder="Range" name="fbst" list="gfr-list" />
        <datalist id="gfr-list" className="form-datalist">
            <option value="Normal-Above 60mg/dl"/>
            <option value="Kdiney Disease-Below 60mg/dl"/>
            <option value="Kdiney failure-Below 15 or lower value"/>     
        </datalist><br/>
        <label htmlFor="gfr-test" >Glomerular Filtration Test:</label><input className="form-input" type="text" placeholder="Enter the levels from the report" name="gfr-test"/><br/>
        <button type="submit">Update</button>
    </div>
    )
}

const Cbu = ()=>{
    return(
        <div className="labreports" id="cbu">
        <p>Enter your age</p>
        <label htmlFor="cbu-age">Age:</label><input type="text" placeholder="Enter age" className="form-input"/><br/>
        <label htmlFor="cbu-dis">Creatinine levels by age:</label><input type="text" name="cbu-dis" className="form-input" placeholder="crt-Age" list="cbu-list"/><br/>
        <datalist className="form-datalist" id="cbu-list">
            <option value="18-29/78-161 mL/min/BSA"/>
            <option value="30-39/72-154 mL/min/BSA"/>
            <option value="40-49/67-146 mL/min/BSA"/>
            <option value="50-59/62-139 mL/min/BSA"/>
        </datalist>
        <label htmlFor="cbu-level">Creatinine level</label><input type="text" placeholder="Enter value from report" name="cbu-level" className="form-input"/><br/>
        <button type="submit">Update</button>
    </div>
    )
}

const Albumin =()=>{
    return(
        <div className="labreports" id="albumin">
        <p>Enter following data according to test reports</p>
        <p>Select the albumin range according to th reports</p>
        <label htmlFor="albumin-range">Albumin range:</label><input type="text" placeholder="Select range" name="albumin-range" list="albumin-list" className="form-input"/>
        <datalist className="form-datalist" id="albumin-list">
            <option value="Normal/less than 30"/>
            <option value="Moderately increased/30-299mg/g"/>
            <option value="Severaly increased/greater than 300"/>
        </datalist><br/>
        <label htmlFor="albumin-value">Albumin level:</label><input type="text" placeholder="Albumin value" name="albumin-value" className="form-input"/><br/>
        <button type="submit">Update</button>
    </div>
    )
}

const Tsh=()=>{
    return(
        <div className="labreports" id="tsh">
        <p>select the TSH levels with respective to age</p>
        <label htmlFor="tsh-range">TSH Range</label><input type="text" className="form-input" placeholder="tsh-range" name="tsh-range" list="tsh-list"/><br/>
        <datalist id="tsh-list" className="form-datalist">
            <option value="20weeks-18 years/0.55-5.31 mU/L"/>
            <option value="18 years-30 years/0.5-4.1 mU/L"/>
            <option value="31 years-50 years/0.5-4.1 mU/L"/>
            <option value="51 years-70 years/0.5-4.5 mU/L"/>
        </datalist><br/>
        <label htmlFor="tsh-range">Age:</label><input type="text" className="form-input" placeholder="Enter age" name="tsh-age"/><br/>
        <label htmlFor="tsh-level">TSH level:</label><input type="text" className="form-input" placeholder="Enter value from report" name="tsh-level" /><br/>
        <button type="submit">Update</button>
    </div>
    )
}

const Kut=()=>{
    return(
        <div className="labreports" id="kut">
        <p>Enter the following data according to the reports</p>
        <p>Select the ketone range with respective your reports</p>
        <label htmlFor="kut-range">Ketone-range</label><input type="text" placeholder="Ketone range" className="form-input" name="kut-range" list="kut-list"/><br/>
        <datalist id="kut-list" className="form-datalist">
            <option value="Normal/less than 0.6mmol.L"/>
            <option value="Slight risk/0.6 to 1.5mmol/L"/>
            <option value="Moderate risk/1.6 to 2.9 mmmol/L"/> 
        </datalist>
        <label htmlFor="kutlevel">Ketone value:</label><input type="text" placeholder="Enter the value from report" name="kutvalue" className="form-input"/><br/>
        <button type="submit">Update</button>
    </div>
    )
}

const T3=()=>{
    return(
    <div className="labreports" id="t3">
    <p>Enter the following data according to the reports</p>
    <label htmlFor="t3level">t3 value:</label><input type="text" placeholder="Enter the value from report" name="t3value" className="form-input"/><br/>
    <button type="submit">Update</button>             
</div>
    )
}

const Phtest =()=>{
    return(
        <div className="labreports" id="phtest">
        <p>Enter following data according to reports</p>
        <p>Select the ph range with respective your result</p>
        <label htmlFor="ph-t">Ph-range</label><input type="text" placeholder="Ph-range" className="form-input" name="ph-t" list="ph-range"/><br/>
        <datalist id="ph-range" className="form-datalist">
            <option value="Acidic/less than 4"/>
            <option value="Normal/4-8.5"/>
            <option value="More than 8.5"/>
        </datalist>
        <label fpr="ph-level"></label>Ph level:<input type="text" placeholder="Enter value from report" className="form-input"/><br/>
        <button ype="submit">Update</button>
    </div>
    )
}
const Put=()=>{
    return(
    <div className="labreports" id="put">
        <p>Enter following data according to the reports</p>
        <label htmlFor="putvalue">Protien value:</label><input type="text" placeholder="Enter the value from report" name="putvalue" className="form-input"/><br/>
        <button type="submit">Update</button>
    </div>
    )
}

const Us=()=>{
    return(
        <div className="labreports" id="uspecific">
        <p>Enter the following data according to the reports</p>
        <p>Select the urine specific gravity range with respective your reports</p>
        <label htmlFor="usg-range">Urine specifi gravity-range</label><input type="text" placeholder="usg range" className="form-input" name="usg-range" list="usg-list"/><br/>
        <datalist id="usg-list" className="form-datalist">
            <option value="Normal/1.002.0 to 1.03"/>
            <option value="Mild dehydration/1.010"/>
            <option value="More"/> 
        </datalist>
        <label htmlFor="usglevel">urine specific gravity value:</label><input type="text" placeholder="Enter the value from report" name="usgvalue" className="form-input" /><br/>
        <button type="submit">Update</button>
    </div>
    )
}

const T4=()=>{
    return(
    <div className="labreports" id="t4">
    <p>Enter the following data according to the reports</p>
    <label htmlFor="t4level">T4 value:</label><input type="text" placeholder="Enter the value from report" name="t4value" className="form-input"/><br/>
    <button type="submit">Update</button> 
     </div>
    )
}

export {Crp,T4,T3,Kut,Tsh,Albumin,Cbu,Gfr,Liver,Glucose,Blp,Ana,Cbc,Phtest,Put,Us};
