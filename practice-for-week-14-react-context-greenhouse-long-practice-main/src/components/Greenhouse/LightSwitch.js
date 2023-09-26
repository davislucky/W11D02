import './LightSwitch.css';
import { useThemeContext } from '../../context/ThemeContext';


function LightSwitch() {
  const {themeName, setThemeName} = useThemeContext();
  // console.log(themeName)
  return (
      <div className={`light-switch ${themeName}`}>
        <div className="on" onClick={()=>setThemeName("day")}>DAY</div>
        <div className="off" onClick={()=>setThemeName("night")}>NIGHT</div>
      </div>
  );
}

export default LightSwitch;