import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import logo from './pin.png';
import './App.css';

export type VoyageProps = {
  portOfLoading?: string;
  portOfDischarge?: string;
  departureTime?: string;
  arrivalTime?: string;
};

function App(props: VoyageProps) {
  const { 
    portOfLoading= "Karlshamn",
    portOfDischarge= "Klaipeda",
    departureTime= "08:00:00", //Change
    arrivalTime= "13:00:00", //Change
  } = props;
  
  const [getPin, setPin] = useState(Number);

  const currentTime = "12:00:00"; //Change
  const totalTime = moment.duration(moment(arrivalTime,"HH:mm:ss").diff(moment(departureTime,"HH:mm:ss")))
  const ellapsedTime = moment.duration(moment(arrivalTime, "HH:mm:ss").diff(moment(currentTime, "HH:mm:ss")));
  const ellapsedTimeRatio = 100 - (ellapsedTime.asMilliseconds() * 100 / totalTime.asMilliseconds())

  let containerRef = useRef<HTMLElement>();
  useEffect(()=> {
    let stages = containerRef.current?.childNodes.length;
    if (stages) {
      const total = stages.valueOf()
      const progressFill = Math.floor((ellapsedTimeRatio * total) / 100 );
      const final = progressFill - 1
      setPin(final)
    }
   
  }, [])
  
  let container = containerRef.current?.childNodes[getPin];
  const pinImage = document.createElement("img");
  pinImage.setAttribute("src", logo);
  pinImage.setAttribute("height", "200px");
  container?.appendChild(pinImage)

  return (
    <div className="App">
        <div className="information-container">
          <p>Start time: {departureTime.toLocaleString()}</p>
          <p>End time: {arrivalTime.toLocaleString()}</p>
          <p>Current time: {currentTime.toLocaleString()} </p>
          <p>Total journey: {totalTime.asHours()}h</p>
        </div>
      
        <div >
              
          <div ref={containerRef} className="progress-container">
            <div className='pin-container'>
              <svg height="40" width="40">
                <circle cx="20" cy="20" r="20" fill="#345370"/>
              </svg>  
            </div>

            <div className='pin-container'>
              <svg height="25" width="25">
                <circle cx="8" cy="8" r="8" fill={ellapsedTimeRatio >= 14 ? "#345370" : "#83a2c0"} />
              </svg>
            </div>

            <div className='pin-container'>
              <svg height="25" width="25">
                <circle cx="8" cy="8" r="8" fill={ellapsedTimeRatio >= 21 ? "#345370" : "#83a2c0"} />
              </svg>
            </div>

            <div className='pin-container'>
              <svg height="25" width="25">
                <circle cx="8" cy="8" r="8" fill={ellapsedTimeRatio >= 28 ? "#345370" : "#83a2c0"} />
              </svg>
            </div>

            <div className='pin-container'>
              <svg height="25" width="25">
                <circle cx="8" cy="8" r="8" fill={ellapsedTimeRatio >= 35 ? "#345370" : "#83a2c0"} />
              </svg>
            </div>

            <div className='pin-container'>
              <svg height="25" width="25">
                <circle cx="8" cy="8" r="8" fill={ellapsedTimeRatio >= 42 ? "#345370" : "#83a2c0"} />
              </svg>
            </div>
            
            <div className='pin-container'>
              <svg height="25" width="25">
                <circle cx="8" cy="8" r="8" fill={ellapsedTimeRatio >= 50 ? "#345370" : "#83a2c0"} />
              </svg>
            </div>

            <div className='pin-container'>
              <svg height="25" width="25">
                <circle cx="8" cy="8" r="8" fill={ellapsedTimeRatio >= 57 ? "#345370" : "#83a2c0"} />
              </svg>
            </div>

            <div className='pin-container'>
              <svg height="25" width="25">
                <circle cx="8" cy="8" r="8" fill={ellapsedTimeRatio >= 64 ? "#345370" : "#83a2c0"} />
              </svg>
            </div>

            <div className='pin-container'>
              <svg height="25" width="25">
                <circle cx="8" cy="8" r="8" fill={ellapsedTimeRatio >= 71 ? "#345370" : "#83a2c0"} />
              </svg>
            </div>

            <div className='pin-container'>
              <svg height="25" width="25">
                <circle cx="8" cy="8" r="8" fill={ellapsedTimeRatio >= 78 ? "#345370" : "#83a2c0"} />
              </svg>
            </div>

            <div className='pin-container'>
              <svg height="25" width="25">
                <circle cx="8" cy="8" r="8" fill={ellapsedTimeRatio >= 85 ? "#345370" : "#83a2c0"} />
              </svg>
            </div>

            <div className='pin-container'>
              <svg height="25" width="25">
                <circle cx="8" cy="8" r="8" fill={ellapsedTimeRatio >= 92 ? "#345370" : "#83a2c0"} />
              </svg>
            </div>

            <div className='pin-container'>
              <svg height="40" width="40">
                <circle cx="20" cy="20" r="20" fill={ellapsedTimeRatio >= 100 ? "#345370" : "#83a2c0"} />
              </svg>  
            </div>
          </div>

        </div>

        <div className='location-container'>
          <p>{portOfLoading}</p>
          <p>{portOfDischarge}</p>
        </div>
    </div>
  );
}

export default App;


