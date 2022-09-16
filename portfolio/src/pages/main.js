import React, {useState} from 'react';
import "../stylesheets/home.css"
import Rooter from "./rooter";
import Container from "./container";

function Main() {

    const [start, setStart] = useState(true);

    const [currentLine, setCurrentLine] = useState("")
    const [currentUserEntry, setCurrentUserEntry] = useState("")

    const [currentSelectedTab, setCurrentSelectedTab] = useState(0)


    return (
        <div className={"main_ctn"}>
            <Rooter className={"main_rooter"} currentSelectedTab={currentSelectedTab} setCurrentSelectedTab={setCurrentSelectedTab} />
            <div className={"separateBottom"}/>
            <Container className={"main_container"} currentSelectedTab={currentSelectedTab} />
        </div>
    );
}

export default Main;
