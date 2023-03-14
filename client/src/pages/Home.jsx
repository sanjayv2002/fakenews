import React, { useState } from 'react';
import './Home.css';
import '../index.css';
import axios from 'axios';

const sendString = async(inputString) => {
    const response = await axios.post('https//localhost:5000', {
        text: inputString
    })
    return response.data
}

const Home = () => {

    window.addEventListener('scroll', ()=>{
        const f = document.getElementById('logo')
        f.classList.add('logo-reduced')
    })

    return (
        
        <div className="flex flex-col justify-center container-div mx-auto items-center">
            <h1 className="logo" id="logo">Dr.Det</h1>
            <p className="desc">A Tool for Fake News Detection</p>
            <textarea className="border border-solid border-slate-500 textarea" id="data" name="data" ></textarea>
            <div>
                <button className="rounded-md button my-10 mx-5" id="button">Submit</button>
                <button className="rounded-md button-clear my-10 mx-5" id="button-clear">Clear</button>
            </div>
            <div className="resultstyle px-10 rounded-full  ">
                <h1 className="my-10 result" id="result"></h1>
            </div>
        </div>
        
        
        
    )
}

export default Home;