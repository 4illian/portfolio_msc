import React, {useState} from 'react';
import "../stylesheets/container.css"
import {BrowserRouter, Route} from "react-router-dom";
import * as PropTypes from "prop-types";
import ContainerProfil from "../components/container.pages/container.profil";
import ContainerHome from "../components/container.pages/container.home";
import ContainerJobs from "../components/container.pages/container.jobs";


function Container(props, currentSelectedTab) {

    const [test1,setTest1] = useState(false)
    const [test2,setTest2] = useState(false)
    const [test3,setTest3] = useState(false)



    return (
        <div className={"container_ctn"}>
            <div className={"container_inner"}>



                {props.currentSelectedTab === 0 ?
                    <ContainerHome test1={test1} setTest1={setTest1} test2={test2} setTest2={setTest2} test3={test3} setTest3={setTest3}/>
                    :
                    <></>
                }

                {props.currentSelectedTab === 1 ?
                    <ContainerJobs/>
                    :
                    <></>
                }

                {props.currentSelectedTab === 2 ?
                    <ContainerProfil/>
                    :
                    <></>
                }

                {props.currentSelectedTab === 3 ?
                    <></>
                    :
                    <></>
                }


            </div>
        </div>
    );
}

export default Container;
