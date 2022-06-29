import React from 'react'
import {
  Container,Grid,Box,Link,Typography
} from '@mui/material'
import styles from './Footer.module.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return <footer stye={{bottom:0}}>
    <Box pax={{xs:3, sm:10}} py={{xs:3, sm:10}} bgcolor="text.secondary" color="white">
      <Container maxWidth="lg">
        <Grid container spacing={5} style={{textAlign:'center'}}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}><Typography>Actualité</Typography></Box>
            <Box>
              <Link href="infosan" color="inherit" style={{textDecoration:'none'}}><Typography>Infosan</Typography></Link>
            </Box>
            <Box>
              <Link href="st" color="inherit" style={{textDecoration:'none'}}><Typography>ST</Typography></Link>
            </Box>
            <Box>
              <Link href="revu" color="inherit" style={{textDecoration:'none'}}><Typography>Révu</Typography></Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}><Typography>Nous suivre</Typography></Box>
            <Box>
              <Link href="#" color="inherit" style={{textDecoration:'none'}}><Typography> Facebook<FacebookIcon /> </Typography> </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" style={{textDecoration:'none'}}><Typography> Twitter<TwitterIcon /> </Typography></Link>
            </Box> 
            <Box>
              <Link href="#" color="inherit" style={{textDecoration:'none'}}><Typography> Instagram<InstagramIcon /> </Typography></Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box>
              <Link href="forum" color="inherit" style={{textDecoration:'none'}}>
              <img
            src={process.env.PUBLIC_URL + './static/logo/logo_mini.png'}
            alt=''
            srcset=''
            className={styles.logo}
          />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{xs:5, sm:10}} pb={{xs:5, sm:0}} >
          <Typography>Santé &copy; {new Date().getFullYear()}  &reg; contacts@santecovid</Typography>
        </Box>
      </Container>
    </Box>
  </footer>
}

export default Footer
