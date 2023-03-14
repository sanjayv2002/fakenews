import React, { useState } from 'react';
import './Home.css';
import '../index.css';
import axios from 'axios';


const Home = () => {

    const [data, setData] = useState()
    const [text, setText] = useState()
    
    const sendString = async() => {
        const response = await axios.post('http://localhost:5000', {
            text: text
        })
        console.log(response)
        setData(response.data.label)
    //setData(response)
    }

    window.addEventListener('scroll', ()=>{
        const f = document.getElementById('logo')
        f.classList.add('logo-reduced')
    })
    // console.log(data)
    return (
        
        <div className="flex flex-col justify-center container-div mx-auto items-center">
            <h1 className="logo" id="logo">Dr.Det</h1>
            <p className="desc">A Tool for Fake News Detection</p>
            <textarea className="border border-solid border-slate-500 textarea" id="data" name="data" onChange={e => setText(e.target.value)}></textarea>
            <div>
                <button className="rounded-md button my-10 mx-5" id="button" onClick={sendString}>Submit</button>
                <button className="rounded-md button-clear my-10 mx-5" id="button-clear" onClick={(event) => {
                    const a = document.getElementById('data')
                    a.value = ''
                }}>Clear</button>
            </div>
    
            <div className="resultstyle px-10 rounded-full  ">
                <h1 className="my-10 result" id="result">{ data  === '0' ? 'True' : 'False' }</h1>
            </div>
        </div>
        
        
        
    )
}

export default Home;