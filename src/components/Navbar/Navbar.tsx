import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';

const Navbar = () => {

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Test App
          </Typography>
          <Button variant='outlined' color="inherit" onClick={handleClick}>Open favorites</Button>
        </Toolbar>
      </AppBar>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
    </>
  )
}

export default Navbar