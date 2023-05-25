import * as React from 'react'
import Small from '../cards/Small'
import Box from '@mui/material/Box'
import '../../style/mealplan.css'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import anything from '../../icons/anything.png'
import paleo from '../../icons/paleo.png'
import vegetarian from '../../icons/vegetarian.png'
import vegan from '../../icons/vegan.png'
import keto from '../../icons/keto.png'

function Categories() {
    const [selectedDiet, setSelectedDiet] = React.useState('anything');
    
    const handleOptionChange = (event, newSelect) => {
        setSelectedDiet(newSelect);
    };

    return (
        <div className="categories">
            <h1>Create a meal plan</h1>
            <h3>Reach your diet and nutritional goals
                with our meal plan generator</h3>
            <Box
                textAlign='center'
            >
                <ToggleButtonGroup
                    value={selectedDiet}
                    exclusive
                    onChange={handleOptionChange}
                    className="toggle"
                >
                    <ToggleButton value="anything">
                        <Small
                            style={{
                                background: '#B497ED'
                            }}
                        >
                            <img src={anything} height={65}></img>
                            <h5>Anything</h5>
                        </Small>
                    </ToggleButton>


                    <ToggleButton value="paleo">
                        <Small
                            style={{
                                background: '#A781F0'
                            }}
                        >
                            <img src={paleo} height={65}></img>
                            <h5>Paleo</h5>
                        </Small>
                    </ToggleButton>

                    <ToggleButton value="vegetarian">
                        <Small
                            style={{
                                background: '#996CF0'
                            }}
                        >
                            <img src={vegetarian} height={65}></img>
                            <h5>Vegetarian</h5>
                        </Small>
                    </ToggleButton>

                    <ToggleButton value="vegan"> 
                        <Small
                            style={{
                                background: '#8D5AF0'
                            }}
                        >
                            <img src={vegan} height={65}></img>
                            <h5>Vegan</h5>
                        </Small>
                    </ToggleButton>

                    <ToggleButton value="keto">
                        <Small
                            style={{
                                background: '#7E44EE'
                            }}
                        >
                            <img src={keto} height={65}></img>
                            <h5>Keto</h5>
                        </Small>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
        </div>
    ) 
}

export default Categories