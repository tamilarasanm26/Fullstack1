import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const items = [
  {
    id: 1,
    title: 'Aokili',
    description: '28 Feb 2023 | 06:23 PM',
    price: '+$13.00',
    imgSrc: 'src/assets/OIP.jpg',
    secondaryInfo: 'ID: 1030114',
  },
  {
    id: 2,
    title: 'Premium license',
    description: '28 Feb 2023 | 06:23 PM',
    price: '-$9.00',
    imgSrc: 'src/assets/OIP.jpg',
    secondaryInfo: 'ID: 2040115',
  },
  {
    id: 3,
    title: 'Premium license',
    description: '28 Feb 2023 | 06:23 PM',
    price: '+$20.00',
    imgSrc: 'src/assets/OIP.jpg',
    secondaryInfo: 'ID: 2040115',
  },
];

export default function ComplexGrid() {
  return (
    <Grid container spacing={4} sx={{ padding: 2, position: 'relative' }}>
      {/* Top-Left Text */}
      <Typography
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
         
          
          padding: '4px 8px',
          fontWeight: 'bold',
          borderRadius: 4,
        }}
      >
        Last Transactions
      </Typography>

      {/* Top-Right Text */}
      <Typography
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          
          color:  '#A7AFB2',
          padding: '4px 8px',
          fontWeight: 'bold',
          borderRadius: 4,
        }}
      >
        See All
      </Typography>
        
      {items.map((item) => (
        <Grid item xs={12} md={6} marginTop={10}key={item.id}>
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: '#fff',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Grid container spacing={2}>
              {/* Image Section */}
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt={item.title} src={item.imgSrc} />
                </ButtonBase>
              </Grid>

              {/* Details Section */}
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div" sx={{ color: item.price.startsWith('+') ? 'green' : 'red' }}>
                    {item.price}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    {item.secondaryInfo}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
