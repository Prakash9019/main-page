import React from 'react'

const Labreports = () =>{
  return (
    <nav>
    <div class="top-layout">
        <div class="t-left">
            <img src="/images/logo-main.png" alt="logo"/>
            <div class="title">Electronic Health Record</div>
        </div>
        <div class="t-right">
            <div class="t-home" onclick="location.href='/main.html';">Home</div>
            <div class="t-About">About Us</div>
        </div>
    </div>
    <div class="left-layout">
        <div class="left-section-link">
            <div class="Demograph" onclick="location.href='/demographs.html';">Profile</div>
            <div class="vital" onclick="location.href='/vital_sign/vitalsigns.html';">Vital Signs</div>
            <div class="lab-test" onclick="location.href='/labtests_and_reports/labtests.html';">Lab tests</div>
            <div class="Medical" onclick="location.href='labreports.html#crp';">Medical Records</div>
            <div class="medications" onclick="location.href='labreports.html#crp';">Medicaions</div>
        </div>
    </div>
    <form class="myform">
    <div class="labreports" id="crp">
        <p>Enter the crp levels</p>
        <p>Choose the range of the crp levels</p>
        <label for="crplevel">CRP LEVEL RANGE:</label><input class="form-input" type="text" placeholder="Range" name="crplevel" list="crprange"/>
        <datalist class="form-datalist" id="crprange">
            <option value="less than 0.3mg/dl"/>
            <option value="0.3-1.00 mg/dl" />
            <option value="1.00 to 10.00 mg/dl" />
            <option value="More than 10.00 mg/dl" />
            <option value="More than 50.00 mg/dl"/>
        </datalist><br/>
        <label for="crp" >CRP LEVEL:</label><input class="form-input" type="text" placeholder="Enter the crp level in report" name="crp"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="cbc">
        <p>Enter the following details</p>
        <label for="hemoglobin">Hemoglobin:</label><input class="form-input" type="text" name="hemoglobin" placeholder="Hemoglobin levels"><br>
        <label for="rbc">RBC:</label><input class="form-input" type="text" name="rbc"  placeholder="RBC level"><br>
        <label for="wbc">WBC:</label><input class="form-input" type="text" name="wbc" placeholder="WBC level"><br>
        <label for="platelets">Platelets:</label><input class="form-input" type="text" name="platelets" placeholder="Platelets level"><br>
        <label for="hemotrocit">Hemotrocit:</label><input class="form-input" type="text" name="hemotrocit" placeholder="Hemotrocit level"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="ana">
        <p>Enter the ANA levels</p>
        <p>Choose the range of the ANA levels</p>
        <label for="analevel">ANA LEVEL RANGE:</label><input type="text" placeholder="Range" name="analevel" list="anarange"><br>
        <datalist class="form-datalist" id="anarange">
            <option value="less 20units">
            <option value="20-60 units">
            <option value="More than 60 units">
        </datalist><br>
        <label for="ana" >ANA LEVEL:</label><input class="form-input" type="text" placeholder="Enter the ANA level in report" name="ana"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="blp">
        <p>Enter the following data</p>
        <p>Choose the range of the Choloestrol levels</p>
        <label for="cholo">Choloestrol range: </label> <input type="text" placeholder="Cholestrol" class="form-input" name="cholo" list="choloestrol-list">
        <datalist id="choloestrol-list" class="form-datalist">
            <option value="Normal-Less than 200mg/dl">
            <option value="Medium-200 - 239 mg/dl">
            <option value="High-More than 240 mg/dl">    
        </datalist><br>
        <label for="cholost" >CHOLOESTROL LEVEL:</label><input class="form-input" type="text" placeholder="Enter the choloestrol level in report" name="cholost"><br>
        <label for="ldlcholo">LDLCholoestrol range: </label><input type="text" placeholder="LDLCholestrol" class="form-input" name="ldlcholo" list="ldlcholoestrol-list">
        <datalist id="ldlcholoestrol-list" class="form-datalist">
            <option value="Optimal-Less than 100mg/dl">
            <option value="Near optimal-100 t0o 129 mg/dl">
            <option value="Borderline-130 to 159 mg/dl"> 
            <option value="High-160 to 189 mg/dl">   
        </datalist><br>
        <label for="ldlcholost" >LDLCholoestrol LEVEL:</label><input class="form-input" type="text" placeholder="Enter the LDLCHOLOESTROL level in report" name="ldlcholost"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="glucose">
        <p>Enter the following data according to test reports</p>
        <p>Choose the range of the A1c test levels</p>
        <label for="a1c">A1C Test range: </label> <input type="text" placeholder="A1c Test" class="form-input" name="a1c" list="a1c-list">
        <datalist id="a1c-list" class="form-datalist">
            <option value="Normal-Below 5.7%">
            <option value="Prediabetes-5.7% - 6.4%">
            <option value="Diabetes-Above 6.5% or 6.5%">    
        </datalist><br>
        <label for="A1ctest">A1C level: </label><input type="text" placeholder="Enter the a1c test level" class="form-input" name="A1ctest"><br>
        <label for="fbst" >Fast Sugar test range:</label><input class="form-input" type="text" placeholder="Range" name="fbst" list="fbst-list"><br>
        <datalist id="fbst-list" class="form-datalist">
            <option value="Normal-Below 99mg/dl">
            <option value="Prediabetes-100-125mg/dl">
            <option value="Diabetes-126mg/dl and above">     
        </datalist><br>
        <label for="fbst-test" >Fast Sugar test:</label><input class="form-input" type="text" placeholder="Enter the levels from the report" name="fbst-test"><br>
        <label for="gtt" >Glucose tolerence test range:</label><input class="form-input" type="text" placeholder="Range" name="gtt" list="gtt-list"><br>
        <datalist id="gtt-list" class="form-datalist">
            <option value="Normal-Below 140mg/dl">
            <option value="Prediabetes-140-199mg/dl">
            <option value="Diabetes-200mg/dl and above">     
        </datalist><br>
        <label for="gtt-test" >Glucose tolerence test:</label><input class="form-input" type="text" placeholder="Enter the levels from the report" name="gtt-test"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="liver">
        <p>Enter the following data according to test reports</p>
        <label for="alt">ALT:</label><input type="text" placeholder="Alt value" name="alt" class="form-input"><br>
        <label for="ast">AST:</label><input type="text" placeholder="AST value" name="alt" class="form-input"><br>
        <label for="alp">ALP:</label><input type="text" placeholder="ALP value" name="alt" class="form-input"><br>
        <label for="alb">Albumin:</label><input type="text" placeholder="ALBUMIN value" name="alt" class="form-input"><br>
        <label for="tp">Total protien:</label><input type="text" placeholder="TOTAL PROTEIN value" name="alt" class="form-input"><br>
        <label for="blb">Bilirubin</label><input type="text" placeholder="BILIRUBIN value" name="alt" class="form-input"><br>
        <label for="ggt">GGT:</label><input type="text" placeholder="GGT value" name="alt" class="form-input"><br>
        <label for="ld">LD</label><input type="text" placeholder="LD value" name="alt" class="form-input"><br>
        <label for="pt">PT</label><input type="text" placeholder="PT value" name="alt" class="form-input"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="gfr">
        <p>Enter the following data according to test reports</p>
        <label for="gfr" >Glomerular Filtration Test range:</label><input class="form-input" type="text" placeholder="Range" name="fbst" list="gfr-list"><br>
        <datalist id="gfr-list" class="form-datalist">
            <option value="Normal-Above 60mg/dl">
            <option value="Kdiney Disease-Below 60mg/dl">
            <option value="Kdiney failure-Below 15 or lower value">     
        </datalist><br>
        <label for="gfr-test" >Glomerular Filtration Test:</label><input class="form-input" type="text" placeholder="Enter the levels from the report" name="gfr-test"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="cbu">
        <p>Enter your age</p>
        <label for="cbu-age">Age:</label><input type="text" placeholder="Enter age" class="form-input"><br>
        <label for="cbu-dis">Creatinine levels by age:</label><input type="text" name="cbu-dis" class="form-input" placeholder="crt-Age" list="cbu-list"><br>
        <datalist class="form-datalist" id="cbu-list">
            <option value="18-29/78-161 mL/min/BSA">
            <option value="30-39/72-154 mL/min/BSA">
            <option value="40-49/67-146 mL/min/BSA">
            <option value="50-59/62-139 mL/min/BSA">
        </datalist>
        <label for="cbu-level">Creatinine level</label><input type="text" placeholder="Enter value from report" name="cbu-level" class="form-input"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="albumin">
        <p>Enter following data according to test reports</p>
        <p>Select the albumin range according to th reports</p>
        <label for="albumin-range">Albumin range:</label><input type="text" placeholder="Select range" name="albumin-range" list="albumin-list" class="form-input">
        <datalist class="form-datalist" id="albumin-list">
            <option value="Normal/less than 30">
            <option value="Moderately increased/30-299mg/g">
            <option value="Severaly increased/greater than 300">
        </datalist><br>
        <label for="albumin-value">Albumin level:</label><input type="text" placeholder="Albumin value" name="albumin-value" class="form-input"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="tsh">
        <p>select the TSH levels with respective to age</p>
        <label for="tsh-range">TSH Range</label><input type="text" class="form-input" placeholder="tsh-range" name="tsh-range" list="tsh-list"><br>
        <datalist id="tsh-list" class="form-datalist">
            <option value="20weeks-18 years/0.55-5.31 mU/L">
            <option value="18 years-30 years/0.5-4.1 mU/L">
            <option value="31 years-50 years/0.5-4.1 mU/L">
            <option value="51 years-70 years/0.5-4.5 mU/L">
        </datalist><br>
        <label for="tsh-range">Age:</label><input type="text" class="form-input" placeholder="Enter age" name="tsh-age"><br>
        <label for="tsh-level">TSH level:</label><input type="text" class="form-input" placeholder="Enter value from report" name="tsh-level"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="phtest">
        <p>Enter following data according to reports</p>
        <p>Select the ph range with respective your result</p>
        <label for="ph-t">Ph-range</label><input type="text" placeholder="Ph-range" class="form-input" name="ph-t" list="ph-range"><br>
        <datalist id="ph-range" class="form-datalist">
            <option value="Acidic/less than 4">
            <option value="Normal/4-8.5">
            <option value="More than 8.5">
        </datalist>
        <label fpr="ph-level"></label>Ph level:<input type="text" placeholder="Enter value from report" class="form-input"><br>
        <button ype="submit">Update</button>
    </div>
    <div class="labreports" id="put">
        <p>Enter following data according to the reports</p>
        <label for="putvalue">Protien value:</label><input type="text" placeholder="Enter the value from report" name="putvalue" class="form-input"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="kut">
        <p>Enter the following data according to the reports</p>
        <p>Select the ketone range with respective your reports</p>
        <label for="kut-range">Ketone-range</label><input type="text" placeholder="Ketone range" class="form-input" name="kut-range" list="kut-list"><br>
        <datalist id="kut-list" class="form-datalist">
            <option value="Normal/less than 0.6mmol.L">
            <option value="Slight risk/0.6 to 1.5mmol/L">
            <option value="Moderate risk/1.6 to 2.9 mmmol/L"> 
        </datalist>
        <label for="kutlevel">Ketone value:</label><input type="text" placeholder="Enter the value from report" name="kutvalue" class="form-input"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="uspecific">
        <p>Enter the following data according to the reports</p>
        <p>Select the urine specific gravity range with respective your reports</p>
        <label for="usg-range">Urine specifi gravity-range</label><input type="text" placeholder="usg range" class="form-input" name="usg-range" list="usg-list"><br>
        <datalist id="usg-list" class="form-datalist">
            <option value="Normal/1.002.0 to 1.03">
            <option value="Mild dehydration/1.010">
            <option value="More"> 
        </datalist>
        <label for="usglevel">urine specific gravity value:</label><input type="text" placeholder="Enter the value from report" name="usgvalue" class="form-input"><br>
        <button type="submit">Update</button>
    </div>
    <div class="labreports" id="t3">
        <p>Enter the following data according to the reports</p>
        <label for="t3level">t3 value:</label><input type="text" placeholder="Enter the value from report" name="t3value" class="form-input"><br>
        <button type="submit">Update</button>            
    </div>
    <div class="labreports" id="ft3">
        <p>Enter the following data according to the reports</p>
        <label for="ft3level">free t3 value:</label><input type="text" placeholder="Enter the value from report" name="ft3value" class="form-input"><br>
        <button type="submit">Update</button> 
    </div>
    <div class="labreports" id="t4">
        <p>Enter the following data according to the reports</p>
        <label for="t4level">T4 value:</label><input type="text" placeholder="Enter the value from report" name="t4value" class="form-input"><br>
        <button type="submit">Update</button> 
    </div>
    </form>
</nav>
  )
}

export default Labreports;