
import { Link } from "react-router-dom"
import formula from "../Components/images/1. Integration of Power Rule/FormulaPowerRule.png"
import problem1 from "../Components/images/1. Integration of Power Rule/PowerRuleExample1.png"
import solution1 from  "../Components/images/1. Integration of Power Rule/PowerRuleSolution1.png"
import problem2 from "../Components/images/1. Integration of Power Rule/PowerRuleExample2.png"
import solution2 from  "../Components/images/1. Integration of Power Rule/PowerRuleSolution2.png"

let topicone = 
    {
        title: "Integration of Power Rule",
        objective: "At the end of this lesson, the students should be able to derive and apply the power rule of integration.",
        definition: "The power rule of integration is one of the rules of integration and that is used to find the integral (in terms of a variable, say x) of powers of x. To apply the power rule of integration, the exponent of x can be any number (positive, 0, or negative) just other than -1.",
        
        example: "Examples:",
        note: "We cannot integrate ∫ (1/x) dx using the power rule by writing it as ∫ x-1 dx. Because, if we apply the power rule for this, we get x0/0 + C. But x0/0 is not defined. So the power rule of integration cannot be applied just when the exponent is -1. Note that ∫ (1/x) dx = ln x + C.",
    }
        


const Limits = ()=>{
    return(
        <>
            <div className="container mt-5 limit-main-wrapper">
                <div className="limits-wrapper">
                    <h2>{topicone.title}</h2>
                    <p>{topicone.objective}</p>
                </div>
                <div className="limits-wrapper">
                    <p>{topicone.definition}</p>
                    <h4>Formula</h4>
                    <img src={formula} alt='formula'/>
                    <div className="limits-wrapper">
                        <h4>{topicone.example}</h4>
                    </div>
                        <div className="col-4">
                            <img src={problem1} alt="sample1"/>
                        </div>
                        <div className="col-4">
                            <img src={solution1} alt="sample3"/>
                        </div>
                        <div className="col-4">
                            <img src={problem2} alt="sample2"/>
                        </div>
                        <div className="col-4">
                            <img src={solution2} alt="sample2"/>
                        </div>
                </div>
                <div className="limits-wrapper">
                    <h4>Note:</h4>
                    <p>{topicone.note}</p>
                </div>
                <Link to='/courses'>
                    <button className="btn-next float-end mb-5">Complete</button>
                </Link>
            </div>
        </>
        )
}

export default Limits