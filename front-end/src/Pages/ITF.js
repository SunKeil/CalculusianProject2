
import { Link } from "react-router-dom"
 import  problem1  from "../Components/images/5. Integrals of Trigonometric Functions/Trigonometric Functions Example 1.png"
 import  solution1 from  "../Components/images/5. Integrals of Trigonometric Functions/Trigonometric Functions Solution 1.png"
 import  problem2  from "../Components/images/5. Integrals of Trigonometric Functions/Trigonometric Functions Example 2.png"
 import  solution2 from  "../Components/images/5. Integrals of Trigonometric Functions/Trigonometric Functions Solution 2.png" 
import formula from "../Components/images/5. Integrals of Trigonometric Functions/Formula Trigonometric Functions.png"
import additionalformula from "../Components/images/5. Integrals of Trigonometric Functions/Additional Formula Trigonometric Functions.png"
import proofing from "../Components/images/5. Integrals of Trigonometric Functions/Proofing Trigonometric Functions.png"
import proofingsolution from "../Components/images/5. Integrals of Trigonometric Functions/Proofing Trigonometric Functions Solution .png"
let topicone = {
        title: "Integrals of Trigonometric Functions",
        objective: "Objective: 1.   At the end of this lesson, the student is expected to derive the formulas for the integrals of trigonometric functions.",
        objective2:"2.  Evaluate integrals of trigonometric functions.",
        definition: "Definition: From the formulas for the differentiation of trigonometric functions we derive the following formulas.",
        example: "Examples:",
        

}



const ITF = ()=>{
return(
<>
    <div className="container mt-5">
    <div className="limits-wrapper">
                    <h2>{topicone.title}</h2>
                    <p>{topicone.objective}</p>
                    <p>{topicone.objective2}</p>
                </div>
                <div className="limits-wrapper">
                    <p>{topicone.definition}</p>
                    <h4>Formula</h4>
                    <img src={formula} alt='formula'/>
                    <h4>Additional Formulas</h4>
                    <img src={additionalformula} alt='formulas'/>
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
                    <h4>Proofing</h4>
                    <img src={proofing} alt="proofing"/>
                </div>
                <img src={proofingsolution} alt="solutionproofing"/>
    </div>
                <Link to='/courses'>
                    <div className="container">
                    <button className="btn-next float-end mb-5">Complete</button>
                    </div>
                </Link>
</>
)
}

export default ITF