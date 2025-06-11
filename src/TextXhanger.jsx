import React from 'react'
import { useState , useEffect } from 'react'

const TextXhanger = () => {
    const text = ["Hi, I am Mayank","Hi, I am Mayank","Hi, I am Mayank","Hi, I am Mayank" ];
    const [currentText, setCurrentText] = useState("");
    const [endValue, setendValue] = useState(true);
    const [ isForward , setIsForWard] = useState(true);

    const [index, setIndex] = useState(0);
    useEffect(()=>{
      const intervalId = setInterval(()=>{
        setCurrentText(text[index].substring(0, endValue));
        if(isForward){
            setendValue((prev) => prev+1);
        }else{
            setendValue((prev)=> prev -1 );
        }
        if(endValue > text[index].length+10){
            setIsForWard(false)
        }
        if(endValue < 2.1){
            setIsForWard(true);
            setIndex((prev)=>prev& text.length)
        }
      }, 40)
      return () => clearInterval(intervalId)
    }, [endValue, isForward, index, text])
  return (
    <div className="transition ease-in duration-300">
      {currentText}
    </div>
  )
}

export default TextXhanger
