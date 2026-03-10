import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Box,Card,CardActions,CardContent,CardMedia,Container,Grid,IconButton,Typography,} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ProductList(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (err) {
      setError('Failed to load products. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (err) {
      setError('Failed to delete product. Please try again.');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Simple Card List
      </Typography>

      {error && (
        <Box sx={{mb: 3,p: 2,borderRadius: 2,bgcolor: 'error.light',color: 'error.contrastText',}}>
          <Typography variant="body2">{error}</Typography>
        </Box>
      )}

      {loading ? (<Typography align="center">Loading products...</Typography>) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{height: '100%',display: 'flex',flexDirection: 'column',boxShadow: 3,borderRadius: 3,}}>
                <CardMedia component="img" height="200" image={product.imageUrl} alt={product.name}/>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{product.description}</Typography>
                  <Typography variant="subtitle1" color="primary">${product.price}</Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'flex-end',px: 2,pb: 2,}}>
                  <IconButton aria-label="delete product" color="error" onClick={() => handleDelete(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}

          {!loading && products.length === 0 && !error && (
            <Grid item xs={12}>
              <Box textAlign="center" py={4}>
                <Typography variant="body1">No products available.</Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      )}
    </Container>
  );
};

