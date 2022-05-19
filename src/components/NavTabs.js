import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import clogo from '../images/clogo.jpeg';
import '../styles/home.css';

const pages = [{name:'Home', link: '/'}, {name:'Portfolio', link: '/portfolio'}];

const Home = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
        <div>
          <AppBar position="relative" className="navbar">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <a href="/"><img src= {clogo} alt="logo" className="navLogo"></img></a>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                  <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Link to={page.link}><Typography textAlign="center">{page.name}</Typography></Link>
                      </MenuItem>
                    ))}
                    <MenuItem>
                      <Link to="#contact">Contact</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to= "/Yang_Cheng_Resume.PDF" target="_blank">Resume</Link>
                    </MenuItem>
                  </Menu>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                     <Link to={page.link}>
                    <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page.name}
                    </Button>
                    </Link>
                  ))}
                  <Link to="#contact">
                    <Button
                      key="contact"
                      onClick= {handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Contact
                    </Button>
                  </Link>
                  <Link to="/Yang_Cheng_Resume.PDF" target="_blank">
                    <Button
                      key= "resume"
                      onClick= {handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Resume
                    </Button>
                  </Link>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
    )
}

export default Home;