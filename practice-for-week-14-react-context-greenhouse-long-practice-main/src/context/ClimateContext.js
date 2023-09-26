// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { useContext, createContext, useState } from "react";


const ClimateContext = createContext();

export default function ClimateProvider (props) {
    const [temp, setTemp] = useState(50);
    // const [humidity, setHumidity] = useState(.4)

    return (
        <ClimateContext.Provider value={{temp, setTemp}}>
            {props.children}
        </ClimateContext.Provider>
    );
};

export const useClimateProvider = () => {
    return useContext(ClimateContext);
}