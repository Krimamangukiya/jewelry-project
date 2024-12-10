import React, { useState } from "react";
import { Box, Button, Typography, Card, CardMedia, CardContent, CardActions, Grid, IconButton, Container, } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import Footer from './Footer'
const ShopPage = () => {
    const products = [
        {
            id: 1,
            name: "Gold-Plated Gold Stone-Studded Set",
            price: 150000,
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuzfc1TnRVFdNqZ1NsagtGZq38DcM9cXm_OqF0sm2p2odW4L5T7JiSdphunjy24AugklNwxmN_ULdkvKLZgRv5T_YtchnU&usqp=CAY",
        },
        {
            id: 2,
            name: "Stainless Steel Rose Gold Plated Butterfly",
            price: 100000,
            image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/7/77560f5DY-BNG-17216_1.jpg?rnd=20200526195200&tr=w-1080",
        },
        {
            id: 3,
            name: "Yellow Gold Ring with Precious stones",
            price: 20000,
            image: "https://static.vecteezy.com/system/resources/previews/022/899/918/non_2x/jewelry-ring-with-diamonds-and-precious-stones-ai-generated-free-photo.jpg",
        },
        {
            id: 4,
            name: "Leaf Design American and Stones Gold",
            price: 60230,
            image: "https://i.ytimg.com/vi/l0FQxeFn5Bg/maxresdefault.jpg",
        },
        {
            id: 5,
            name: "Minakshi Meenakari Gold Necklace",
            price: 139400,
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSai6RvwEJtlz63cz2yQBMpXlxy1dJnq1zPNqwITmK06MwTQUO_5Jlbx6aXqkKmqdzP58VPkfaQse57sVtCJgcZmntoozIeiguPcbhQyvUV",
        },
        {
            id: 6,
            name: "Occasions Necklace Set with Red Stone",
            price: 180000,
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIHSeO9kHTimu_qI3rs1FerUy-PAy9Mmd-AF6pPdqpTz_bY2JXPekkrbnvdE6sgJQcXB-hBmARQzB1LSd_gV-qOgZs__mZSVImrKkSNxU",
        },
        {
            id: 7,
            name: "Imitation Stones Fancy Studded Necklace",
            price: 700000,
            image: "https://shop.southindiajewels.com/wp-content/uploads/2022/10/Rich-Stones-Studded-Necklace-1-scaled.jpg",
        },
        {
            id: 8,
            name: "Stylish Fancy Studs Necklece Set",
            price: 900000,
            image: "https://i.pinimg.com/736x/40/c7/c1/40c7c1f43839ded7dda19e570fa5f7a4.jpg",
        },
        {
            id: 9,
            name: "Blossom in Motion Diamond Studs Earring",
            price: 204290,
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-JLkLE8eh8x-S83iY4mDBPoY8IGW6P7GhWnwnePR16_7JgPLGYbGCoMLUAJMBkXzU2lQmY6ndOsU8X3OFDIbR4sDQBd6P2E6b56TwJOQRJKnAu9gZHiCyag&usqp=CAE",
        },
        {
            id: 10,
            name: " Flower Design Antique Earring 172291",
            price: 83000,
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRSSD9q-vtHvf0sRCXyjlCvj-3qlMXEojaejCYYqat_HwLRmtoUwOsspuRtvDT4-qokJc2sspHxNr90mlDMtuHBUcwpwnuU4g5zOZyC_yo&usqp=CAE",
        },
        {
            id: 11,
            name: "Pearl Necklace Set Made in 22k Gold GNS",
            price: 610100,
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTk1ollIga2Q8fO-IjY_NIhDX5rIvp3V7DcFF8iZB3OkxDI8SL2s6ytWpdMgAjxnEXI-Hdms-B-f9v8N0zCTAWwvJezSFdN60X7Kyv622o&usqp=CAE",
        },
        {
            id: 12,
            name: "Lakshmi Design Hand Painted Terracotta",
            price: 290999,
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRdrPjP5PJe8b_CytjJdPOlP1lhGNu9TOtjxaNNnkVMIp9DmXx29NjFE5So0d1_WB9kXJIVHu9LWMdFUlp-CxsSnGuH0tiUs1fBIyanhQJt&usqp=CAE",
        },
        {
            id: 13,
            name: "Multicolor Kavisha Antique Jewellery Set",
            price: 740050,
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRebDrnxzm-Jd-BSUSBJ10A3W7ekB2gYj_X8vPV1WrzVWFWzup8_NAjLbKKHLc07Xjerdj3IewhiI9dbwtTrjq2hp3v3QQdDUl0iZCvHG4&usqp=CAE",
        },
        {
            id: 14,
            name: "Gold Necklace Gift Set Cubic Zirconia Gold",
            price: 289900,
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT4iHs02-YKNn6hV4jus00INAIF0jgXBizY1svQh3UoXe9FmWEFdQoZpCbrZvrbLBFN80DIvyh6b7LqnbOc-eUwI_1k_8Fnkg&usqp=CAY",
        },
        {
            id: 15,
            name: "Sunlit Splendor Necklace Earring Set",
            price: 152602,
            image: "https://aashirwadjewellers.com/wp-content/uploads/2024/04/Untitled-design.png",
        },
        {
            id: 16,
            name: "Jewellery Vithisa Nagas Necklace Set",
            price: 426800,
            image: "https://www.theamethyststore.com/cdn/shop/files/AMS-102-6019_4.jpg?v=1716026283&width=900",
        },
    ];
    const [cart, setCart] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    const addToCart = (product) => {
        if (!cart.some((item) => item.id === product.id)) {
            setCart([...cart, product]);
        }
    };
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };
    const toggleLike = (product) => {
        if (likedProducts.includes(product.id)) {
            setLikedProducts(likedProducts.filter((id) => id !== product.id));
        } else {
            setLikedProducts([...likedProducts, product.id]);
        }
    };
    return (
        <>
            <Box
                sx={{
                    backgroundImage: "url(https://avatars.mds.yandex.net/i?id=7b97f3e57a348e945c20726a9e832e3e88cb9982-5601751-images-thumbs&n=13)",
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
                    Shop
                </Box>
            </Box>
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <Card
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    overflow: "hidden",
                                }}
                            >
                                <Box
                                    sx={{
                                        overflow: "hidden",
                                        position: "relative",
                                        "&:hover img": {
                                            transform: "scale(1.1)", 
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={product.image}
                                        alt={product.name}
                                        sx={{
                                            width: "100%",
                                            height: 200,
                                            objectFit: "cover",
                                            transition: "transform 0.3s ease",
                                        }}
                                    />
                                </Box>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="primary"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        ₹{product.price}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "space-between" }}>
                                    <Button
                                        onClick={() => addToCart(product)}
                                        variant="contained"
                                        sx={{
                                            textTransform: "none",
                                            backgroundColor: "#F47745",
                                            "&:hover": { backgroundColor: "#F47745" },
                                        }}
                                    >
                                        Add to Cart
                                    </Button>
                                    <IconButton
                                        onClick={() => toggleLike(product)}
                                        sx={{ color: likedProducts.includes(product.id) ? "red" : "grey" }}
                                    >
                                        {likedProducts.includes(product.id) ? (
                                            <FavoriteIcon />
                                        ) : (
                                            <FavoriteBorderIcon />
                                        )}
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box
                    sx={{
                        mt: 5,
                        p: 3,
                        backgroundColor: "#f9f9f9",
                        borderRadius: 2,
                        boxShadow: 2,
                        marginBottom: "30px",
                    }}
                >
                    <Typography variant="h5" sx={{ color: "#3e3e3e", mb: 2, fontWeight: 'bold' }}>
                        Shopping Cart
                    </Typography>
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    p: 2,
                                    mb: 1,
                                    borderRadius: 1,
                                    backgroundColor: "#fff",
                                    boxShadow: 1,
                                }}
                            >
                                <Box>
                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        ₹{item.price}
                                    </Typography>
                                </Box>
                                <IconButton
                                    onClick={() => removeFromCart(item.id)}
                                    sx={{ color: "#F47745" }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        ))
                    ) : (
                        <Typography color="text.secondary">
                            Your cart is empty. Start adding items!
                        </Typography>
                    )}
                </Box>
            </Container>
            <Footer />
        </>
    );
};
export default ShopPage;