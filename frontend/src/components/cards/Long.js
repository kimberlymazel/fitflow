import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Long = styled(Paper)(({ theme }) => ({
    width: 250,
    height: 560,
    padding: theme.spacing(2),
    display: 'flex-inline',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop:"10px"
}));

export default Long