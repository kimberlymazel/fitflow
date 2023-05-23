import React from 'react'
import Small from '../cards/Small'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import '../../style/mealplan.css'

import anything from '../../icons/anything.png'
import paleo from '../../icons/paleo.png'
import vegetarian from '../../icons/vegetarian.png'
import vegan from '../../icons/vegan.png'
import keto from '../../icons/keto.png'

function Categories() {
  return (
    <div className="categories">
        <Box>
            <Grid
                container spacing={1.5}
                wrap="nowrap"
            >
                <Grid item>
                    <Small
                        style={{
                            background: '#B497ED'
                        }}
                    >
                        <img src={anything} height={65}></img>
                        <h5>Anything</h5>
                    </Small>
                </Grid>

                <Grid item>
                    <Small
                        style={{
                            background: '#A781F0'
                        }}
                    >
                        <img src={paleo} height={65}></img>
                        <h5>Paleo</h5>
                    </Small>
                </Grid>

                <Grid item>
                    <Small
                        style={{
                            background: '#996CF0'
                        }}
                    >
                        <img src={vegetarian} height={65}></img>
                        <h5>Vegetarian</h5>
                    </Small>
                </Grid>

                <Grid item>
                    <Small
                        style={{
                            background: '#8D5AF0'
                        }}
                    >
                        <img src={vegan} height={65}></img>
                        <h5>Vegan</h5>
                    </Small>
                </Grid>

                <Grid item>
                    <Small
                        style={{
                            background: '#7E44EE'
                        }}
                    >
                        <img src={keto} height={65}></img>
                        <h5>Keto</h5>
                    </Small>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Categories