import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Wide = styled(Paper)(({ theme }) => ({
    width: 510,
    height: 160,
    padding: theme.spacing(2),
    display: 'flex-inline',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'purple'
}));

export default Wide