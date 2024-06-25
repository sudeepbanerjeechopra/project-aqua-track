
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import css from './WaterProgressBar.module.css';



function ValueLabelComponent(props) {
  const { children, value, open } = props;
 

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={`${value}%`} arrow 
   
    >
      {children}
    </Tooltip>
  );
}

const WaterProgressBar = () => {
  const [value, setValue] = useState(67);

  
  return (
    <div className={css.container}>
      <div className={css.title}>Today</div>
      <Box sx={{ width: '100%', m: 0, p: 0  }}>
        <Slider
          value={value}
          valueLabelDisplay="auto"
          components={{ ValueLabel: ValueLabelComponent }}
          onChange={() => {}}
          sx={{
            m: 0,
            p: 0,
            color: 'var(--accent)',
            '@media (pointer: coarse)': {
              p: '0 !important', // Видаляє падінг у медіа-запитах
            },
            '& .MuiSlider-thumb': {
              borderRadius: '16px',
              width: '12px',
              height: '12px',
              color: 'white',
              border: '1px solid var(--accent)',
            },
            '& .MuiSlider-rail': {
              color: 'var(--light-gray)',
              backgroundColor: 'var(--light-gray)',
            },
            '& .MuiSlider-valueLabel': {
              backgroundColor: 'var(--accent)',
              color: 'white',
              borderRadius: '8px',
              padding: '4px 4px',
            },
          }}
        />
         <div className={css.percentBar}>
        <a>0%</a>
        <a className={css.fifty}>50%</a>
        <a>100%</a>
      </div>
      </Box>
     
    </div>
  );
};

export default WaterProgressBar;
