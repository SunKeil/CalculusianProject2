import { Link } from "react-router-dom"
import formula from "../Components/images/4. Integration of Exponential Functions/Formula Exponential Functions.png"
import problem1 from "../Components/images/4. Integration of Exponential Functions/Exponential Functions Example 1.png"
import solution1 from  "../Components/images/4. Integration of Exponential Functions/Exponential Functions Solution 1.png"
import problem2 from "../Components/images/4. Integration of Exponential Functions/Exponential Functions Example 2.png"
import solution2 from  "../Components/images/4. Integration of Exponential Functions/Exponential Functions Solution 2.png"
import problem3 from "../Components/images/4. Integration of Exponential Functions/Exponential Functions Example 3.png"
import solution3 from  "../Components/images/4. Integration of Exponential Functions/Exponential Functions Solution 3.png"
let topicone = {
        title: "Integration of Exponential Functions",
        objective: "Objective: At the end of this lesson, the student is expected to evaluate the integral of exponential functions.",
        definition: "Definition: The basic formulas for the integration of exponential functions are:",
        formula:"Formula Exponential Functions.png",
        example: "Examples:"
} 

const IEF = ()=>{
return(
    <>
        <div className="container mt-5">
            <div className="limits-wrapper">
                <h2>{topicone.title}</h2>
                <p>{topicone.objective}</p>
            </div>
            <div className="limits-wrapper">
                <p>{topicone.definition}</p>
                <h4>Formula</h4>
                <img src={formula} alt="sample1"/>
                <h4>{topicone.example}</h4>
                <div className="col-4">
                    <img src={problem1} alt="sample1"/>
                </div>
                <div className="col-4">
                    <img src={solution1} alt="sample1"/>
                </div>
                <div className="col-4">
                    <img src={problem2} alt="sample1"/>
                </div>
                <div className="col-4">
                    <img src={solution2} alt="sample1"/>
                </div>
                <div className="col-4">
                    <img src={problem3} alt="sample1"/>
                </div>
                <div className="col-4">
                    <img src={solution3} alt="sample1"/>
                </div>
            </div>
            <div className="limits-wrapper">
                <p>{topicone.note}</p>
            </div>
            <Link to='/courses'>
                    <button className="btn-next float-end mb-5">Complete</button>
            </Link>
        </div>
    </>
    )
}

export default IEF