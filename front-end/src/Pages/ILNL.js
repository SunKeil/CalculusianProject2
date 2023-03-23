import { Link } from "react-router-dom"
import  problem1 from "../Components/images/3. Integrals Leading to Natural Logarithms/Natural Logarithmic Example 1.png"
import  solution1 from  "../Components/images/3. Integrals Leading to Natural Logarithms/Natural Logarithmic Solution 1.png"
import  problem2  from "../Components/images/3. Integrals Leading to Natural Logarithms/Natural Logarithmic Example 2.png"
import  solution2 from  "../Components/images/3. Integrals Leading to Natural Logarithms/Natural Logarithmic Solution 2.png"
import  problem3  from "../Components/images/3. Integrals Leading to Natural Logarithms/Natural Logarithmic Example 3.png"
import  solution3 from  "../Components/images/3. Integrals Leading to Natural Logarithms/Natural Logarithmic Solution 3.png"
import  problem4  from "../Components/images/3. Integrals Leading to Natural Logarithms/Natural Logarithmic Example 4.png"
import  solution4 from  "../Components/images/3. Integrals Leading to Natural Logarithms/Natural Logarithmic Solution 4.png"


    let topicone = {
        title: "Integrals Leading to Natural Logarithms",
        objective: "Objective: At the end of this lesson, the students should be able to evaluate the integral of a fraction whose numerator is the differential of the denominator.",
        definition: "Definition: The integral of a fraction whose numerator is the differential of the denominator is equal to the logarithm of the denominator. ",
        formula:"Formula Natural Logarithmic.png",
        example: "Examples:",
        note: "If the integrand is a fraction whose degree of numerator is greater than or equal to the degree of the denominator, express the integrand into mixed expression before evaluating the integral.",
    }



const ILNL = ()=>{
return(
    <>
        <div className="container mt-5">
            <div className="limits-wrapper">
                <h2>{topicone.title}</h2>
                <p>{topicone.objective}</p>
            </div>
            <div className="limits-wrapper">
                <p>{topicone.definition}</p>
                <div className="limits-wrapper">
                    <h4>{topicone.example}</h4>
                </div>
                    <div className="col-4">
                        <img src={problem1} alt="sample1"/>
                    </div>
                    <div className="col-4">
                        <img src={solution1} alt="sample2"/>
                    </div>
                    <div className="col-4">
                        <img src={problem2} alt="sample3"/>
                    </div>
                    <div className="col-4">
                        <img src={solution2} alt="sample2"/>
                    </div>
                    <div className="col-4">
                        <img src={problem3} alt="sample3"/>
                    </div>
                    <div className="col-4">
                        <img src={solution3} alt="sample2"/>
                    </div>
                    <div className="col-4">
                        <img src={problem4} alt="sample3"/>
                    </div>
                    <div className="col-4">
                        <img src={solution4} alt="sample2"/>
                    </div>
            </div>
            <div className="limits-wrapper">
                    <h4>Note:</h4>
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

export default ILNL