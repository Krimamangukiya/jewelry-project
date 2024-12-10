import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import Footer from './Footer'
import { Card, CardMedia, CardActionArea } from '@mui/material';

function Home() {

    const images = [
        {
            src: 'https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/1.jpg',
            link: 'gold-bracelet-ut01166-1y0000.html'
        },
        {
            src: 'https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/2.jpg',
            link: 'diamond-bridal-ring-set-jr05177-wgp900.html'
        },
        {
            src: 'https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/3.jpg',
            link: 'diamond-stud-earrings-je03410-ygp600.html'
        },
        {
            src: 'https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/4.jpg',
            link: 'diamond-necklace-jl03243-ygp600.html'
        }
    ];
    const collections = [
        {
            id: 'makatza',
            title: 'Makatza',
            description:
                'The Makatza collection brings wild beauty and raw nature to life. Featuring glamorously oversized pieces with organic shapes and elements, this collection embodies the untamed power and mystique of the forest.',
            image: '//zohrajewelry.com/cdn/shop/files/Collection_home_page_2_891x.jpg?v=1723660172',
            link: '/collections/makatza',
        },
        {
            id: 'lagom',
            title: 'Lagom',
            description:
                'A quietly luxurious interpretation of Scandinavian art and ceramics, Lagom is all about flowing geometric shapes, replete with unique designs that shape your everyday style.',
            image: '//zohrajewelry.com/cdn/shop/files/Untitled-1_891x.jpg?v=1690554605',
            link: '/collections/lagom',
        },
        {
            id: 'les-animaux',
            title: 'Les Animaux',
            description:
                'Les Animaux is inspired from the animals of the Savannah. The French word “Les Animaux” translates to “The Animals”. It takes us on a safari ride in the dense Savannah Jungles.',
            image: '//zohrajewelry.com/cdn/shop/files/About_the_collection_3_891x.jpg?v=1662969135',
            link: '/collections/les-animaux',
        },
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        appendDots: (dots) => (
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                {dots}
            </Box>
        ),
        customPaging: (i) => (
            <Box
                sx={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '50%',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    },
                }}
            />
        ),
    };
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '450px',
                    padding: '40px 20px',
                }}
            >
                <Grid container spacing={4} maxWidth="lg">
                    <Grid item xs={12} md={7}>
                        <Box
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src="https://canadaimmigration.news/wp-content/uploads/2021/01/Spouse-Immigration-From-India-1000x600.jpg"
                                alt="Luxurious Interior"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',

                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: '#a9956b',
                                    fontSize: '16px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    mb: 1,
                                }}
                            >

                                A Jewellry Designer with Morvin
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#3e3e3e',
                                    mb: 2,
                                    lineHeight: 1.2,
                                }}
                            >
                                This is Precious Jewellry in Life
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#666',
                                    mb: 3,
                                    lineHeight: 1.6,
                                    maxWidth: '80%',
                                }}
                            >
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.

                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#F47745',
                                    color: '#fff',
                                    padding: '10px 24px',
                                    textTransform: 'none',
                                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                                    fontSize: '16px',
                                    fontWeight: 'medium',
                                    transition: 'transform 0.2s, box-shadow 0.3s',
                                    '&:hover': {
                                        backgroundColor: '#F47745',
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
                                    },
                                }}
                            >
                                Explore Now
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    backgroundColor: '#f2e1d5',
                    padding: { xs: '20px', sm: '30px', md: '40px' },
                    textAlign: 'center',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    maxWidth: '100%',
                    marginTop: { xs: '5px', sm: '10px', md: '15px' },
                }}

            >
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        color: '#5a4a3b',
                        marginBottom: '16px',
                        fontWeight: 'bold',
                        fontSize: { xs: '24px', sm: '32px', md: '36px' },
                    }}
                >
                    THE GIFT ATELIER
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#5a4a3b',
                        marginBottom: '24px',
                        fontSize: { xs: '14px', sm: '16px', md: '18px' },
                    }}
                >
                    Gift-giving is an art, and at The Decor Kart, we've mastered the craft of offering elegant gifts that elevate every occasion...
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#f47745',
                        '&:hover': { backgroundColor: '#f47745' },
                        color: '#fff',
                        padding: { xs: '8px 16px', sm: '10px 20px' },
                        borderRadius: '4px',
                    }}

                >
                    View Catalogue
                </Button>

            </Box>
            <Grid container spacing={2} sx={{ marginTop: { xs: '20px', sm: '40px', md: '70px' } }}>
                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="https://thedecorkart.com/collections/lighting">
                        <img
                            src="https://i.pinimg.com/originals/9f/6d/f5/9f6df581ac13688fb63209dd7989cd67.jpg"
                            alt="Illuminating Elegance"
                            width="100%"
                            height="auto"
                            style={{ maxWidth: '403px', maxHeight: '504px' }}
                        />
                    </a>
                </Grid>

                <Grid
                    item xs={12} md={4}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}

                >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: { xs: '30px', sm: '30px', md: '37px' } }}>
                        Timeless Sparkle
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' } }}>
                        Shine brightly with our exclusive diamond pieces
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: '#f47745', '&:hover': { backgroundColor: '#f47745' }, color: '#fff' }} href="">
                        SHOP NOW
                    </Button>
                </Grid>

                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="https://thedecorkart.com/collections/lighting">
                        <img
                            src="https://www.pedrospiripiri.co.uk/thumb_6/Godki-dubai-4db-cirk%C3%B3nia-esk%C3%BCv%C5%91i-nyakl%C3%A1nc-f%C3%BClbeval%C3%B3-74095_pictures.jpg"
                            alt="Illuminating Elegance"
                            width="100%"
                            height="auto"
                            style={{ maxWidth: '403px', maxHeight: '504px' }}
                        />
                    </a>
                </Grid>
            </Grid>
            <Box
                sx={{
                    width: '100%',
                    height: { xs: '60vh', sm: '75vh', md: '90vh' },
                    color: 'white',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    marginTop: "30px"
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        marginTop: '30px'
                    }}
                >


                    <img src="https://img.freepik.com/premium-photo/discover-beauty-modern-jewelry-with-premium-background-generative-ai_753390-1435.jpg?semt=ais_hybrid" alt="" style={{ width: '100%', height: '100vh', objectFit: 'cover', filter: 'brightness(45%)' }} />
                </Box>
                <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            marginTop: '50px'
                        }}
                    >
                        Luxurious and Exquisite Jewellery.
                    </Typography>
                </Box>
            </Box>
            <Container>
                <Grid container spacing={3} justifyContent="center" marginTop={3} marginBottom={3}>
                    <Grid item xs={12}>
                        <Box textAlign="center" mb={4}>
                            <Typography variant="h4" className="title" color="#3e3e3e">
                                Why Choose Us
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={6} md={2}>
                            <Box textAlign="center" mb={3}>
                                <Box display="inline-block">
                                    <img
                                        src="https://kjsjewellers.com/assets/img/why-1.png"
                                        alt="Certified jewellery"
                                        style={{ maxHeight: '50px', width: 'auto', marginBottom: '1rem' }}
                                    />
                                </Box>
                                <Typography variant="h6" color="#3e3e3e">Certified jewellery</Typography>
                                <Typography variant="body2" textAlign="center">
                                    All jewellery products and articles listed on this website are certified items.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2}>
                            <Box textAlign="center" mb={3}>
                                <Box display="inline-block">
                                    <img
                                        src="https://kjsjewellers.com/assets/img/why-2.png"
                                        alt="Safe & secure delivery"
                                        style={{ maxHeight: '50px', width: 'auto', marginBottom: '1rem' }}
                                    />
                                </Box>
                                <Typography variant="h6" color="#3e3e3e">Safe & secure delivery</Typography>
                                <Typography variant="body2" textAlign="center">
                                    All products purchased on this website are insured and shipped through sequel logistics.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2}>
                            <Box textAlign="center" mb={3}>
                                <Box display="inline-block">
                                    <img
                                        src="https://kjsjewellers.com/assets/img/why-3.png"
                                        alt="Transparency in price"
                                        style={{ maxHeight: '50px', width: 'auto', marginBottom: '1rem' }}
                                    />
                                </Box>
                                <Typography variant="h6" color="#3e3e3e">Transparency in price</Typography>
                                <Typography variant="body2" textAlign="center">
                                    All products listed have clear price breakup and thereby making it transparent.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2}>
                            <Box textAlign="center" mb={3}>
                                <Box display="inline-block">
                                    <img
                                        src="https://kjsjewellers.com/assets/img/why-4.png"
                                        alt="Certified diamonds"
                                        style={{ maxHeight: '50px', width: 'auto', marginBottom: '1rem' }}
                                    />
                                </Box>
                                <Typography variant="h6" color="#3e3e3e">Certified diamonds</Typography>
                                <Typography variant="body2" textAlign="center">
                                    All diamond products are certified either by IGI, SGL, GIA, and GIGJ.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2}>
                            <Box textAlign="center" mb={3}>
                                <Box display="inline-block">
                                    <img
                                        src="https://kjsjewellers.com/assets/img/why-5.png"
                                        alt="Jewellery purchase plan"
                                        style={{ maxHeight: '50px', width: 'auto', marginBottom: '1rem' }}
                                    />
                                </Box>
                                <Typography variant="h6" color="#3e3e3e">Jewellery purchase plan</Typography>
                                <Typography variant="body2" textAlign="center">
                                    Customers can enroll in a jewellery purchase plan by contacting KJS Jewellers at 0427-4916913.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2}>
                            <Box textAlign="center" mb={3}>
                                <Box display="inline-block">
                                    <img
                                        src="https://kjsjewellers.com/assets/img/why-6.png"
                                        alt="Customer support"
                                        style={{ maxHeight: '50px', width: 'auto', marginBottom: '1rem' }}
                                    />
                                </Box>
                                <Typography variant="h6" color="#3e3e3e">Customer support</Typography>
                                <Typography variant="body2" textAlign="center">
                                    Customers can reach KJS Jewellers at 0427-4916916 on all days of the week from 9:30 AM to 9:30 PM.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Grid marginBottom={3}
                container
                spacing={2}
                sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
                {images.map((image, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={index}
                    >
                        <Card
                            sx={{
                                borderRadius: 2,
                                boxShadow: 3,
                                transition: 'box-shadow 0.3s ease',
                                '&:hover': { boxShadow: 6 }
                            }}
                        >
                            <CardActionArea href={image.link}>
                                <Box
                                    sx={{
                                        overflow: 'hidden',
                                        borderRadius: 2
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: '100%',
                                            height: 'auto',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': { transform: 'scale(1.1)' }
                                        }}
                                        image={image.src}
                                        alt={`Instagram image ${index + 1}`}
                                    />
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Footer />
        </>
    )
}


export default Home
