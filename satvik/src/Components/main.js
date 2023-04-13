import React from 'react'

const main = () => {
  return (
    <nav>
        <div class="top-layout">
            <div class="t-left">
                <img src="/images/logo-main.png" alt="logo">
                <div class="title">Electronic Health Record</div>
            </div>
            <div class="t-right">
                <div class="t-home" onclick="location.href='main.html';">Home</div>
                <div class="t-About">About Us</div>
            </div>
        </div>
        <div class="left-layout">
            <div class="left-section-link">
                <div class="Demograph" onclick="location.href='demographs.html';">Profile</div>
                <div class="vital" onclick="location.href='/vital_sign/vitalsigns.html';">Vital Signs</div>
                <div class="lab-test" onclick="location.href='/labtests_and_reports/labtests.html';">Lab tests</div>
                <div class="Medical" onclick="location.href='labreports.html#crp';">Medical Records</div>
                <div class="medications" onclick="location.href='labreports.html#crp';">Medicaions</div>
            </div>
        </div>
        <div class="main-display">
            <div class="image">
                <img src="/images/main-page.jpg">
            </div>
            <div class="main-info">
                <img src="/images/ehr-symbol.png">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nisi expedita sequi reprehenderit fugit eveniet vel laboriosam quae illum est. Perspiciatis doloribus harum incidunt 
                    voluptatibus ab ut recusandae perferendis sequi eius!</p>
            </div>
        </div>
    </nav>
  )
}

export default main;