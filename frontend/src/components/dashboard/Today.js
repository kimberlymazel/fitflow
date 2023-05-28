import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Standard from '../cards/Standard'
import '../../style/dashboard.css'

function Today() {    const [bmi, setBMI] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
  
    const handleEditClick = () => {
      setShowPopup(true);
    };
  
    const handleSaveBMI = () => {
      const parsedHeight = parseFloat(height);
      const parsedWeight = parseFloat(weight);
  
      const bmiValue = (parsedWeight / (parsedHeight/100 * parsedHeight/100)).toFixed(1);
      setBMI(bmiValue);
      setShowPopup(false);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };

    let bmiCategory = '';
    if (bmi !== null) {
      if (bmi < 18.5) {
        bmiCategory = 'Underweight';
      } else if (bmi >= 18.5 && bmi <= 25) {
        bmiCategory = 'Normal';
      } else if (bmi>25) {
        bmiCategory = 'Overweight';
      }
    }

    return (
        <div class="today" style={{ maxWidth:"100%", height:"100%"}}>
            <div style={{display:"flex"}}>
                <div 
                    style={{
                        background: '#F2ECFF',
                        boxShadow:"2px 2px 2px 2px lightgrey",
                        borderRadius:"10px",
                        padding:"30px 10px 40px 10px",
                        margin:"10px 20px 10px 30px",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",
                        width:"50%",
                        height:"100px"
                    }}
                >
                    <h3 style={{marginBottom:"5px",marginTop:"20px", fontSize:"20px"}}>Your BMI</h3>
                    <div>
                        <button style={{background:"none",width:"100%",fontSize:"40px", color:"#531EB7", fontWeight:"800", border:"none"}} onClick={handleEditClick}>BMI {bmi} (kg/m^2)</button>
                        {bmi && (
                            <div>
                                <p style={{fontSize:"20px",marginLeft:"auto",marginRight:"auto", textAlign:"center",  marginTop:"5px", color:"#531EB7", fontWeight:"800", border:"none"}}>{bmiCategory}</p>
                            </div>
                        )}
                        {showPopup && (
                        <div className="popup" style={{margin:"10px auto 10px auto", display:"flex",alignItems:"center", justifyContent:"center"}}>
                            <input
                            type="text"
                            placeholder="Height (cm)"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            style={{width:"100px", fontSize:"16px",borderColor:"grey" }}
                            />
                            <input
                            type="text"
                            placeholder="Weight (kg)"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            style={{width:"100px", fontSize:"16px", borderColor:"grey" }}
                            />
                            <button onClick={handleSaveBMI} 
                                style={{ fontSize:"16px", backgroundColor:"#C4B2E8"}}
                            >Save</button>
                            <button onClick={handleClosePopup}
                                style={{ fontSize:"16px", backgroundColor:"#C4B2E8"}}
                            >Exit</button>
                        </div>
                        )}
                    </div>
                </div>
                <div
                    style={{
                        background: '#F2ECFF',
                        boxShadow:"2px 2px 2px 2px lightgrey",
                        borderRadius:"10px",
                        padding:"30px 10px 40px 10px",
                        margin:"10px 20px 10px 30px",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",
                        width:"50%",
                        height:"100px"
                    }}
                >
                    <h3>Today's lunch</h3>
                </div>
            </div>
        </div>
    )
}

export default Today