import { createContext, useContext, useState } from "react";


const SurveyContext = createContext();

export default function SurveyProvider(props) {
    const [surveyResp, setSurveyResp] = useState({
        0: "2",
        1: "2",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: ""
    })
    return (
        <SurveyContext.Provider value={{surveyResp, setSurveyResp}}>
            {props.children}
        </SurveyContext.Provider>
    )
}

export const useSurveyContext = () => {
    return useContext(SurveyContext)
}

