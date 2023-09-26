import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import ThemeProvider, { useThemeContext } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';


function Greenhouse() {
  const {themeName, setThemeName} = useThemeContext();
  console.log(themeName)
  return (
    <ThemeProvider >

      <section>
        <img  className='greenhouse-img'
              src={themeName === "day" ? dayImage : nightImage}
              alt='greenhouse' 
        />
        <LightSwitch />
        <ClimateStats />
      </section>

    </ThemeProvider>
  );
}

export default Greenhouse;