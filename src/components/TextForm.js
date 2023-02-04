import React,{useState} from 'react'

export default function TextForm(props) {
    const handlUppClick =()=>{
        
        console.log("Button clicked For Upper")
        setText(text.toUpperCase())
        props.showAlert("Coverted To UpperCase","success")
    }
    const handllowClick =()=>{
        
        console.log("Button clicked For Lower")
        setText(text.toLowerCase())
        props.showAlert("Coverted To LowerCase","success")

    }
    const handlOnChange =(event)=>{
        
        console.log("Button change")
        setText(event.target.value)
    }
    const handlclrClick =()=>{
        setText("")
        console.log("Text Cleared");
    }
    const handlvowcClick =()=>{
     
      let as = text.toLowerCase().trim('').split('a').length
      let es = text.toLowerCase().trim('').split('e').length
      let is = text.toLowerCase().trim('').split('i').length
      let os = text.toLowerCase().trim('').split('o').length
      let us = text.toLowerCase().trim('').split('u').length
      let count=as+es+is+os+us;
      setvow(count-5);
      
    }
    const fon = document.getElementById('myBox') 
    let gl=100;
    let bold = true
    const handlinfClick =()=>{
      
      console.log(fon.innerHTML)
      setText(fon.innerHTML)
      if (gl < 500 ){
        gl+=5
      }
      fon.style.fontSize=`${gl}%`
  }
    const handldcfClick =()=>{
      
      
      console.log(fon.innerHTML)
      setText(fon.innerHTML)
      if (gl>80) {
        
        gl-=5
      }
      fon.style.fontSize=`${gl}%`
  }

     const handlboldClick =()=>{
      
      if(bold === true){
        fon.style.fontWeight="Bold"
        setText(fon.innerHTML)
        bold=false
      }
      else{
        fon.style.fontWeight="normal"
        setText(fon.innerHTML)
        bold=true
      }
    }

    const handlCopy = () =>{
            fon.select();
            navigator.clipboard.writeText(fon.value)
    }
    const handlExtraSpace =()=>{
      const te = text.split(/[ ]+/)
      setText(te.join(" "))
    }
    const [text,setText] = useState('');
    const [vow,setvow] = useState(0);
  return (
    <>
    <div className='container' style={{color: props.mode==="dark"?"white":"#665e5e"}}>
              <h2 className='my-3'>{props.heading}</h2>
              <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"":"#665e5e",color: props.mode==="dark"?"black":"white"}}  id="myBox" value={text} onChange={handlOnChange} rows="8"></textarea>
              <button className='btn btn-primary mx-2 my-2' onClick={handlUppClick}>Convert To UpperCase</button>
              <button className='btn btn-primary mx-2 my-2' onClick={handllowClick}>Convert To LowerCase</button>
              <button className='btn btn-primary mx-2 my-2' onClick={handlclrClick}>Clear</button>
              <button className='btn btn-primary mx-2 my-2' onClick={handlvowcClick}>Vowels Count</button>
              <button className='btn btn-primary mx-2 my-2' onClick={handlinfClick}>Font Increase</button>
              <button className='btn btn-primary mx-2 my-2' onClick={handldcfClick}>Font Decrease</button>
              <button className='btn btn-primary mx-2 my-2' onClick={handlboldClick}>Bold</button>
              <button className='btn btn-primary mx-2 my-2' onClick={handlCopy}>Copy</button>
              <button className='btn btn-primary mx-2 my-2' onClick={handlExtraSpace}>Remove ExtraSpace</button>
              
    </div>
    <div className="container my-2" style={{color: props.mode==="dark"?"white":"#665e5e"}}>
      <h2>Text Summary</h2>
      <p>{text.trim('').split(' ').length} words, {text.length} character</p>
      <p>It takes {0.008*text.split(" ").length } minutes to read </p>
      <p>Vowels Count is :{vow}</p>
      <h2>Preview</h2>
      <p >{text.length>0?text:"Enter Text To Preview"}</p>
    </div>
    </>
  ) 
}
