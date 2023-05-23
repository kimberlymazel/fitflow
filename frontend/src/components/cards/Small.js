import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Small = styled(Paper)(({ theme }) => ({
    width: 70,
    height: 90,
    padding: theme.spacing(2),
    display: 'flex-inline',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20
}));

export default Small