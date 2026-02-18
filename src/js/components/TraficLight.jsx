import React, { useState } from "react";

const TraficLight = () => {

    const [greenActive, setGreenActive] = useState(false);
    const [yelowActive, setYelowActive] = useState(false);
    const [redActive, setRedActive] = useState(false);
    let greenColor
    let yellowColor
    let redColor
    
    function changeGreenActive() {
        setGreenActive(!greenActive)
    }

    if (greenActive === false) {
        greenColor = "green"
    } if (greenActive === true) {
        greenColor = "blue";
        yellowColor = "yellow";
        redColor = "red"
    }

    function changeYellowActive() {
        setYelowActive(!yelowActive)
    }

    if (yelowActive === false) {
        yellowColor = "yellow"
    } if (yelowActive === true) {
        yellowColor = "blue";
        greenColor = "green";
        redColor = "red"
    }

    function changeRedLight() {
        setRedActive(!redActive)
    }

    if (redActive === false) {
        redColor = "red"
    } if (redActive === true) {
        redColor = "blue";
        greenColor = "green";
        yellowColor = "yellow"
    }




    return (
        <div className="container-fluid w-25 mt-5 py-2" style={{ backgroundColor: "black" }}>
            <div>
                <i onClick={() => changeGreenActive()} className="container rounded-circle"
                    style={{ backgroundColor: greenColor }}></i>
            </div>
            <div >
                <i onClick={() => changeYellowActive()} className="container rounded-circle container"
                    style={{ backgroundColor: yellowColor }}></i>
            </div>
            <div >
                <i onClick={() => changeRedLight()} className="container rounded-circle container"
                    style={{ backgroundColor: redColor }}></i>
            </div>
        </div>
    )
}

export default TraficLight