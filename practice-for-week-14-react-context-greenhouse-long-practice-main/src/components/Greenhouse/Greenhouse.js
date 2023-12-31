import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useThemeContext } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';


function Greenhouse() {
  const {themeName, setThemeName} = useThemeContext();
  console.log(themeName)
  return (
      <section>
        <img  className='greenhouse-img'
              src={themeName === "day" ? dayImage : nightImage}
              alt='greenhouse' 
        />
        <LightSwitch />
        <ClimateStats />
      </section>
  );
}

export default Greenhouse;