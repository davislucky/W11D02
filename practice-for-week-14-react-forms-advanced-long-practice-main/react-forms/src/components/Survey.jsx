import surveyData from "../_assets/sample.json";
import { useSurveyContext } from "../context/SurveyContext"; 

export function Survey () {
    const {surveyResp, setSurveyResp} = useSurveyContext();
    console.log(surveyResp)
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
                            checked={String(option.value) === surveyResp[0] ? true : false}
                            onChange={(e) => setSurveyResp({...surveyResp, 0: e.currentTarget.value})}
                            key={option.value}
                            />{`${option.text}`}
                        </>
                    );
                   })} 
                </label>
                <br />
                <br />
                <label>{surveyData.questions[1].stem}
                   {surveyData.questions[1].options.map(option =>{
                    return (
                        <>
                            <br />
                            <input type="radio" 
                            name="1"
                            value={option.value} 
                            checked={String(option.value) === surveyResp[1] ? true : false}
                            onChange={(e) => setSurveyResp({...surveyResp, 1: e.currentTarget.value})}
                            key={option.value}
                            />{`${option.text}`}
                        </>
                    );
                   })} 
                </label>
                <br />
                <br />
                <label>{surveyData.questions[2].stem}
                   <textarea name="" cols="30" rows="10"
                   value={surveyResp[2]}
                   onChange={(e)=> setSurveyResp({...surveyResp, 2: e.currentTarget.value})
                   }></textarea>
                </label>
                <br />
                <br />
                <label>{surveyData.questions[5].stem}
                   <input type="text" 
                   name="email" 
                   value={surveyResp[5]}
                   onChange={(e)=> setSurveyResp({...surveyResp, 5: e.currentTarget.value})}
                   />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}