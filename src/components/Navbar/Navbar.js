import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/i';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
        // <header style={styles.containerNav}>
        //   <div className='containerTitleNav'>
        //     <h1 className='titleNav'>New Notices</h1>
        //   </div>
        //   <nav className='nabvar'>
        //     <ul className='ulNav'>
        //       <li className='liNav'>
        //         <NavLink to='/'>Home</NavLink> 
        //       </li> 
        //       <li className='liNav'>
        //         {/* <Link to=''>First Notice</Link> */}
        //       </li>
        //       <li className='liNav'>
        //         {/* <Link to=''>Second Notice</Link> */}
        //       </li>
        //       <li className='liNav'>
        //         {/* <Link to=''>About Us</Link> */}
        //       </li>
        //     </ul>
        //   </nav>
        //   <form action='search'>
        //     <TextField id="outlined-basic" label="Search..." variant="outlined" />
        //   </form>
        // </header>
  )
};

export default Navbar;