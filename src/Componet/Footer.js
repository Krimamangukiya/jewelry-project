import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material';
import { Facebook, Twitter, LinkedIn, Pinterest } from '@mui/icons-material';
import logo from '../assets/Screenshot_2024-11-14_143347-removebg-preview.png';
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 6,
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Grid container spacing={6} justifyContent="center" textAlign="center">
        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
            <img src={logo} alt="Logo" style={{ width: 130, height: 70, marginRight: 10 }} />
          </Box>
          <Typography variant="body2" sx={{ color: '#bdbdbd' }}>
            A quietly luxurious interpretation of Scandinavian art and ceramics, Lagom is all about flowing geometric shapes.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Typography variant="h6" color="#f47745" gutterBottom>
            Contact Us
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center" mb={1}>
            <Phone sx={{ color: '#f47745', mr: 1 }} /> +(91) 234-567-8901
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" mb={1}>
            <Email sx={{ color: '#f47745', mr: 1 }} /> hello@example.com
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" mb={1}>
            <LocationOn sx={{ color: '#f47745', mr: 1 }} /> 26th St, Ubud, Bali - 80571, ID
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" mb={1}>
            <AccessTime sx={{ color: '#f47745', mr: 1 }} /> Mon - Fri: 9:00 AM - 5:00 PM
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" color="#f47745" gutterBottom>
            Quick Links
          </Typography>
          {['About', 'Shop', 'Contact'].map((link, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 1, color: 'white', fontSize: '15px' }}>
              {link}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Typography variant="h6" color="#f47745" gutterBottom>
            Connect with Us
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" alignItems="center" mb={1}>
              <Facebook sx={{ color: '#f47745', mr: 1 }} /> Facebook
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Twitter sx={{ color: '#f47745', mr: 1 }} /> Twitter
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <LinkedIn sx={{ color: '#f47745', mr: 1 }} /> LinkedIn
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Pinterest sx={{ color: '#f47745', mr: 1 }} /> Pinterest
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box mt={4} textAlign="center" color="#bdbdbd" >
        <Typography variant="body2">
          © 2024 Luxdiamond. Crafted with precision and care.
        </Typography>
      </Box>
    </Box>
  );
}
export default Footer;