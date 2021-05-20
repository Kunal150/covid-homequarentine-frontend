import React from 'react'
import './Lungs.css';







function Lungs() {

    
  
        
    return (
    
            <div className="lung__div">
                <div className="lung__info">
           <h2 class="question">Lunch function assesment</h2>
        <ul>
       <li>
       Are having extreme cold and fever
       </li>
       <li>
      Are you facing any problem in breathing
       </li>
       <li>
     Is your spo2 level in oxymeter is below 94
       </li>
       <li>
     If you are facing any pain in the chest area
       </li>
      </ul>
      
        <div id="showscore" className="scoreArea">
            if you are having any of these issues consult your doctor because there  is strong chances that you are having lung infection
        </div>
      

                </div>

            </div>
            

            

    )
}

export default Lungs
