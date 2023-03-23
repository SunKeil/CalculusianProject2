import { Link } from "react-router-dom"
import  formula from"../Components/images/6. Integrals of Inverse Trigo Functions/Formula ITF.png"
import  problem1 from "../Components/images/6. Integrals of Inverse Trigo Functions/ITF Example 1.png"
import  solution1 from "../Components/images/6. Integrals of Inverse Trigo Functions/ITF Solution 1.png"
import  problem2 from "../Components/images/6. Integrals of Inverse Trigo Functions/ITF Example 2.png"
import  solution2 from "../Components/images/6. Integrals of Inverse Trigo Functions/ITF Solution 2.png" 
import  problem3 from "../Components/images/6. Integrals of Inverse Trigo Functions/ITF Example 3.png"
import  solution3 from "../Components/images/6. Integrals of Inverse Trigo Functions/ITF Solution 3.png"



let topicone = {
    title: "Integrals of Inverse Trigonometric Functions",
    objective: "Objective: At the end of this lesson, the student is expected to:",
    objective1: "1.Evaluate integrals of trigonometric functions.",
    objective2: "2.Obtain the indefinite integral formulas of the inverse trigonometric functions from its derivative.",
    objective3: "3.Evaluate integrals leading to inverse trigonometric functions.",
    definition: "Definition: From the formulas for the differentiation of inverse trigonometric functions, we derive the following formulas of integration.",
    example: "Examples:",
    

}



const IITF = ()=>{
return(
<>
    <div className="container mt-5">
        <div className="limits-wrapper">
            <h2>{topicone.title}</h2>
            <p>{topicone.objective}</p>
            <p>{topicone.objective1}</p>
            <p>{topicone.objective2}</p>
            <p>{topicone.objective3}</p>
        </div>
        <div className="limits-wrapper">
            <p>{topicone.definition}</p>
            <h2>Formulas</h2>
            <img src={formula} alt="sample1"/>
            <div className="row">
                <div className="col-6 ">
                    <h4>Problem 1</h4>
                    <img src={problem1} alt="sample1"/>
                    <div className="">
                    <img src={solution1} alt="sample1 " className=""/>
                    </div>
                </div>
                <div className="col-6 ">
                    <h4>Problem 2</h4>
                    <img src={problem2} alt="sample1"  className=""/>
                    <div className="">
                    <img src={solution2} alt="sample1 " className=""/>
                </div>
                </div>
                
                </div>
                <div className="">
                    <h4>Problem 3</h4>
                     <img src={problem3} alt="sample1" className="img-fluid"/>
                     <div className="col-4">
                    <img src={solution3} alt="sample1"/>
                    </div>
                </div>
                
        </div>
        <Link to='/courses'>
                    <button className="btn-next float-end mb-5">Complete</button>
                </Link>
    </div>
</>
)
}

export default IITF