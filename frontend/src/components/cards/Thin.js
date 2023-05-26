import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Thin = styled(Paper)(({ theme }) => ({
    width: 240,
    height: "100%",
    padding: theme.spacing(2),
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    boxShadow: 'none'
}));

export default Thin