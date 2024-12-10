import React from 'react';
import { Container, Typography, Box, Grid, Button, Paper } from '@mui/material';
import Footer from './Footer';
const featuredJewelry = [
  {
    imgSrc: 'https://i.ytimg.com/vi/_KrZUIK4MR0/maxresdefault.jpg',
    title: 'Elegant Diamond Necklace',
    description: 'A timeless piece crafted with exquisite diamonds.',
  },
  {
    imgSrc: 'https://i.ebayimg.com/thumbs/images/g/VkEAAOSwPyZgyxfc/s-l300.jpg',
    title: 'Gold and Emerald Ring luxurious',
    description: 'A stunning combination of gold and emerald.',
  },
  {
    imgSrc: 'https://i.ytimg.com/vi/6KR_7eiAtA0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gRiglMA8=&rs=AOn4CLDhNkduvkIQ4hJH4lX2V0r9GLgvog',
    title: 'Pearl Drop Earrings Gold',
    description: 'Classic pearl earrings for every occasion.',
  },
  {
    imgSrc: 'https://news24online.com/wp-content/uploads/2023/06/Gold-7.png',
    title: 'Gold Sapphire Bracelet',
    description: 'A luxurious bracelet adorned with sapphires.',
  },
];
const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'The necklace I bought was stunning! It was the perfect gift for my anniversary.',
  },
  {
    name: 'John Smith',
    feedback: 'Amazing craftsmanship and excellent customer service. Highly recommend!',
  },
  {
    name: 'Emma Brown',
    feedback: 'Beautiful designs and ethical sourcing made me feel great about my purchase.',
  },
];
const AboutSection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(https://avatars.mds.yandex.net/i?id=b3d1c7e9e6b8ebda59ab611c704a5e0aad3f7c1407ca9eb4-5487054-images-thumbs&n=13)",
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
          About
        </Box>
      </Box>
      <Container sx={{ mt: 6, mb: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" color="#3e3e3e" mb={2}>
              Crafting Timeless Jewellry
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4}>
              At Lux Jewellers, we specialize in creating exquisite jewellry that celebrates life's
              most precious moments. From custom designs to handcrafted pieces, we bring your
              vision to life with unmatched craftsmanship.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#f47745',
                '&:hover': { backgroundColor: '#f47745', boxShadow: 1 },
                transition: 'box-shadow 0.3s',
              }}
            >
              SHOW MORE
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6e389e61015173.5a607b318627c.jpg"
              alt="Jewelry Display"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,

              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ py: 2 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.jdmagicbox.com/quickquotes/images_main/second-hand-candere-gold-jewellery-2219664714-adpllsmi.jpg"
                alt="Jewelry Making"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,

                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" color="#3e3e3e" mb={2}>
                Handcrafted with Precision
              </Typography>
              <Typography variant="body1" color="#666666" mb={4}>
                Every piece of jewellry is a masterpiece, carefully designed and handcrafted by our
                skilled artisans. We take pride in using only the finest materials, ensuring each
                creation is both beautiful and enduring.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#f47745',
                  '&:hover': { backgroundColor: '#f47745', boxShadow: 4 },
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                SHOW MORE
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" color="#3e3e3e" mb={2}>
                Ethical Sourcing
              </Typography>
              <Typography variant="body1" color="#666666" mb={2}>
                We are committed to sourcing our materials responsibly, ensuring that our diamonds,
                gemstones, and metals are ethically obtained.
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="#3e3e3e" mb={2}>
                Eco-Friendly Practices
              </Typography>
              <Typography variant="body1" color="#666666">
                Our dedication to sustainability extends to every step of our production process,
                using eco-friendly methods and minimizing waste wherever possible.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9fbc6861015173.5a607b3184aee.jpg"
                alt="Sustainability Practices"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,

                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 1, marginBottom: "30px" }}>
        <Container>
          <Typography
            variant="h4"
            sx={{ mb: 5, textAlign: 'center', fontWeight: 'bold', color: '#3e3e3e' }}
          >
            Featured Jewellry
          </Typography>
          <Grid container spacing={4}>
            {featuredJewelry.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    borderRadius: 2,
                    boxShadow: 2,

                  }}
                >
                  <Box
                    component="img"
                    src={item.imgSrc}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: 2,
                      mb: 2,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': { transform: 'scale(1.1)', boxShadow: 4 },
                    }}
                  />
                  <Typography variant="h6" fontWeight="bold" color="#3e3e3e" mb={1}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="#666666">
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 6 }}>
        <Container>
          <Typography
            variant="h4"
            sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', color: '#3e3e3e' }}
          >
            Customer Testimonials
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    textAlign: 'center',
                    backgroundColor: 'white',
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: '#3e3e3e', mb: 2 }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body1" color="#666666">
                    {testimonial.feedback}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
export default AboutSection;