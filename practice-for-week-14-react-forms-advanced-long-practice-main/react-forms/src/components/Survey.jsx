import surveyData from "../_assets/sample.json";
import { useState } from "react";

export function Survey () {

    const [surveyResp, setSurveyResp] = useState({
        0: 3,
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: ""
    })

    return (
        <>
            <h1>Sample Survey</h1>
            <h3>{surveyData.description}</h3>
            <h3>{surveyData.instructions}</h3>
            <form action=""> 
                <label>{surveyData.questions[0].stem}
                   {surveyData.questions[0].options.map(option =>{
                    return (
                        <>
                            <br />
                            <input type="radio" 
                            name="0"
                            value={option.value} 
                            checked={option.value === surveyResp[0] ? true : false}
                            onChange={(e) => setSurveyResp({...surveyResp, 0: e.currentTarget.value})}
                            />{`${option.text}`}
                        </>
                    );
                   })} 
                </label>
            </form>
        </>
    )
}