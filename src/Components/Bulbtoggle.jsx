import React , {useState} from 'react'
import bulbon from  '../images/bulb-on.png'
import bulboff from  '../images/bulb-off.png'
import "./style.css"

function Bulbtoggle() {
    
    const [bulbState,bulbStateChange] = useState(true)
    
  
    const clickButton = () => {

        bulbStateChange(!bulbState)

        }
        return (
          <div className='bulbBox'>
            <img src={bulbState === true ? bulbon : bulboff} alt="" width={400}/>
            <button className="btn btn-dark btn-lg" onClick={clickButton}>Click Me!</button>
          </div>
        )
    }

  
  

export default Bulbtoggle
