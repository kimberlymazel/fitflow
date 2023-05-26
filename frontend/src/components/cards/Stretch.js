import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Stretch = styled(Paper)(({ theme }) => ({
    width: '95%',
    height: 200,
    padding: theme.spacing(2),
    display: 'flex-inline',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    border:"none",
    boxShadow:"none"
}));

export default Stretch