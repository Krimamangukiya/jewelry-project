import React from 'react';
import { Container, Grid, TextField, Button, Typography, Box } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import Footer from './Footer';
const ContactForm = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(https://images.wallpaperscraft.com/image/single/rings_diamond_jewelry_151900_3840x2160.jpg)",
          width: "100%",
          marginTop: '20px',
          height: { xs: "100px", sm: "200px", md: "300px" },
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }
        }}
      >
        <Box
          sx={{
            zIndex: 2,
            color: "white",
            fontSize: { xs: "24px", sm: "50px", md: "50px", lg: "60px" },
            padding: { xs: "10px", sm: "15px", md: "20px" },
            marginLeft: { xs: "10px", sm: "20px", md: "40px" }
          }}
        >
          Contact
        </Box>
      </Box>
      <Container
        sx={{
          backgroundColor: '#ffffff',
          padding: { xs: '1rem', sm: '2rem' },
          marginTop: { xs: '1rem', sm: '2rem' },
          marginBottom: '40px'
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              flexDirection="column"
              gap={3}
              sx={{
                padding: '1rem',
                backgroundColor: '#f4f4f4',
                borderRadius: '8px',
                height: '100%',
              }}
            >
              <Typography variant="h6" sx={{ color: '#3E3E3E', fontWeight: 'bold' }} gutterBottom>
                Contact Information
              </Typography>

              <Box display="flex" alignItems="center">
                <LocationOn sx={{ color: '#f47745', marginRight: '8px' }} />
                <Box>
                  <Typography variant="subtitle1" color="#666666">
                    Address
                  </Typography>
                  <Typography variant="body2">
                    26th St, Ubud,
                    <br />
                    Bali - 80571, ID
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center">
                <Phone sx={{ color: '#f47745', marginRight: '8px' }} />
                <Box>
                  <Typography variant="subtitle1" color="#666666">
                    Phone
                  </Typography>
                  <Typography variant="body2">
                    +(91) 234-567-8901
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center">
                <Email sx={{ color: '#f47745', marginRight: '8px' }} />
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    Email
                  </Typography>
                  <Typography variant="body2">
                    hello@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box>
              <Typography variant="h5" gutterBottom sx={{ color: '#3E3E3E', fontWeight: 'bold' }}>
                Send us a message
              </Typography>
              <Typography variant="body1" color="#666666" gutterBottom>
                If you have any queries related to our tutorial, feel free to send us a message. We are here to help you.
              </Typography>
              <Box component="form" display="flex" flexDirection="column" gap={3} sx={{ marginTop: '1rem' }}>
                <TextField
                  label="Enter your name"
                  variant="outlined"
                  fullWidth
                  color="#666666"
                  sx={{ marginBottom: '1rem' }}
                />
                <TextField
                  label="Enter your email"
                  variant="outlined"
                  fullWidth
                  color="#666666"
                  sx={{ marginBottom: '1rem' }}
                />
                <TextField
                  label="Enter your message"
                  variant="outlined"
                  fullWidth
                  color="#666666"
                  multiline
                  rows={4}
                  sx={{ marginBottom: '1rem' }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#f47745',
                    color: '#ffffff',
                    width: { xs: '100%', sm: '150px' },
                    alignSelf: 'flex-start',
                    '&:hover': { backgroundColor: '#d9653b' },
                  }}
                >
                  Send Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ContactForm;
