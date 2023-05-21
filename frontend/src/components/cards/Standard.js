import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Standard = styled(Paper)(({ theme }) => ({
    width: 230,
    height: 130,
    padding: theme.spacing(2),
    display: 'flex-inline',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20
}));

export default Standard