import { useSurveyContext } from "../context/SurveyContext";
import surveyData from '../_assets/sample.json'

export default function Results () {
    const {surveyResp, setSurveyResp} = useSurveyContext();
    console.log(surveyResp[0])
    return (
        <>
            <p>{surveyData.questions[0].options[(parseInt(surveyResp[0])-1)].text}</p>
            <p>{surveyData.questions[1].options[(parseInt(surveyResp[1])-1)].text}</p>
            <p>{surveyResp[2]}</p>
            <p>{surveyResp[5]}</p>

        </>
    )
}