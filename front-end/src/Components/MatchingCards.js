import {useState} from "react"
import Card from "./Card"


const MatchingCards = ()=>{
    const [items, setItems] =useState([
        {id:1, img: '/expo/Q2.png', stat: ""},
        {id:1, img: '/expo/Q2CorrectAnswer.png', stat: ""},
        {id:2, img: '/expo/Q3.png', stat: ""},
        {id:2, img: '/expo/Q3CorrectAnswer.png', stat: ""},
        {id:3, img: '/expo/Q4.png', stat: ""},
        {id:3, img: '/expo/Q4CorrectAnswer.png', stat: ""},
        {id:4, img: '/expo/Q5.png', stat: ""},
        {id:4, img: '/expo/Q5CorrectAnswer.png', stat: ""},
        {id:5, img: '/expo/Q6.png', stat: ""},
        {id:5, img: '/expo/Q6CorrectAnswer.png', stat: ""},
        {id:6, img: '/expo/Q7.png', stat: ""},
        {id:6, img: '/expo/Q7CorrectAnswer.png', stat: ""}
    ].sort(()=>Math.random()- 0.5))
    const [prev, setPrev] = useState(-1)
    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setPrev(-1)
        }else{
            items[current].stat ="wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(()=>{
                items[current].stat = ""
                items[prev].stat = ""
                setPrev(-1)
            }, 1000)
        }
    }
    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }
    return (
        <div className="container">
            <div className="grid-wrapper">
                <div className="wrapper-cards">
                {items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick}/>
                ))}
                </div>
            </div>
        </div>
        
        
    )
}

export default MatchingCards