import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/system';
import { Button, InputBase, Typography } from '@mui/material';
import { useState } from 'react';



function App() {
  const [navbarDropdownOpen, setNavbarDropdownOpen] = useState(false);
  return (
    <div style={{width:'100vw',}}>
      <Box
        sx={{
          width:'100vw',
          background: 'linear-gradient(164deg, rgba(2,0,36,1) 0%, rgba(9,9,128,1) 0%, rgba(0,212,255,1) 100%)',
          alignItems:'center',
          height:navbarDropdownOpen?185:75,
          display:'block',
          overflow:'hidden',
        }}
      >
        <Box
          sx={{
            alignItems:'center',
            display:'flex',
          }}
        >
          <Typography
            sx={{
              fontFamily:'Inter',
              color:'#fff',
              fontSize:{xs:20, md:30},
              padding:2,
              userSelect:'none',
            }}
          >
            Customer-Support-Bot | v1.0.0
          </Typography>

          <Box
            sx={{
              display:{xs:'none', md:'flex'},
              gap:4,
              ml:'auto',
              padding:2,
              mr:2,
            }}
          >
            <Typography
              sx={{
                fontFamily:'Inter',
                color:'#fff',
                fontSize:30,
                cursor:'pointer',
              }}
            >
              GitHub
            </Typography>

            <Typography
              sx={{
                fontFamily:'Inter',
                color:'#fff',
                fontSize:30,
                cursor:'pointer',
              }}
            >
              Credit
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize:30,
              ml:'auto',
              padding:2,
              color:'#fff',
              display:{xs:'flex', md:'none'},
            }}
            onClick={() => setNavbarDropdownOpen(!navbarDropdownOpen)}
          >
            ☰
          </Typography>
        </Box>

        <Box
          sx={{
            display:{xs:navbarDropdownOpen?'block':'none', md:'none'},
            opacity:navbarDropdownOpen?1:0,
            transition:'all .25s ease-out',
            padding:2,
            pt:0,
            alignItems:'center',
            justifyContent:'left',
          }}
        >
          <Typography
            sx={{
              fontFamily:'Inter',
              color:'#fff',
              fontSize:30,
              cursor:'pointer',
              mb:1,
            }}
          >
            GitHub
          </Typography>

          <Typography
            sx={{
              fontFamily:'Inter',
              color:'#fff',
              fontSize:30,
              cursor:'pointer',
            }}
          >
            Credit
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height:`calc(100vh - ${(navbarDropdownOpen?185:75)+50}px)`,
          backgroundColor:'#dcddf2',
        }}
      >
        hi
      </Box>

      <Box
        sx={{
          height:50,
          width:'100%',
          display:'flex'
        }}
      >
        <InputBase
          sx={{
            width:'100%',
            height:50,
            fontFamily:'Inter',
            padding:2,
            border:'1px solid #000',
          }}
          placeholder='Send Message'
        />
        <Button>
          Send
        </Button>
      </Box>

    </div>
  );
}

export default App;