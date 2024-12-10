import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from '../assets/Screenshot_2024-11-14_143347-removebg-preview.png';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [accountMenu, setAccountMenu] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleAccountMenuOpen = (event) => {
    setAccountMenu(event.currentTarget);
  };
  const handleAccountMenuClose = () => {
    setAccountMenu(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'black',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        paddingX: { xs: 2, md: 4 },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ width: 130, height: 70, marginRight: 10 }} />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, maxWidth: '80%' }}>
          <Button component={Link} to="/" startIcon={<HomeIcon />} sx={{ color: 'white', '&:hover': { color: '#f47745' } }}>Home</Button>
          <Button component={Link} to="/About" startIcon={<InfoIcon />} sx={{ color: 'white', '&:hover': { color: '#f47745' } }}>About</Button>
          <Button component={Link} to="/Shop" startIcon={<ShoppingCartIcon />} sx={{ color: 'white', '&:hover': { color: '#f47745' } }}>Shop</Button>
          <Button component={Link} to="/Contact" startIcon={<ContactMailIcon />} sx={{ color: 'white', '&:hover': { color: '#f47745' } }}>Contact</Button>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, justifyContent: 'space-around' }}>
          <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', borderRadius: '20px', '&:hover': { backgroundColor: '#f47745', color: 'white' } }}>Login</Button>
          <Button variant="contained" sx={{ backgroundColor: '#f47745', color: 'white', borderRadius: '20px', '&:hover': { backgroundColor: '#f47745' } }}>Sign Up</Button>
          <IconButton onClick={handleAccountMenuOpen} sx={{ color: 'white', '&:hover': { color: '#f47745' } }}>
            <AccountCircleIcon />
          </IconButton>
          <Menu anchorEl={accountMenu} open={Boolean(accountMenu)} onClose={handleAccountMenuClose}>
            <MenuItem onClick={handleAccountMenuClose}>My Profile</MenuItem>
            <MenuItem onClick={handleAccountMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleAccountMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 2 }}>
          <IconButton onClick={handleMenuOpen}>
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem component={Link} to="/" onClick={handleMenuClose}><HomeIcon sx={{ mr: 1, color: '#f47745' }} />Home</MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleMenuClose}><InfoIcon sx={{ mr: 1, color: '#f47745' }} />About</MenuItem>
            <MenuItem component={Link} to="/shop" onClick={handleMenuClose}><ShoppingCartIcon sx={{ mr: 1, color: '#f47745' }} />Shop</MenuItem>
            <MenuItem component={Link} to="/contact" onClick={handleMenuClose}><ContactMailIcon sx={{ mr: 1, color: '#f47745' }} />Contact</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;