import React, {useState} from 'react';
import "../stylesheets/rooter.css"
import IconUser from "../assets/icons/user.png"
import IconLanguages from "../assets/icons/languages.png"
import IconfourSquares from "../assets/icons/foursquares.png"
import IconProjects from "../assets/icons/projects.png"
import LogoK from "../assets/imgs/logo_k.png"

function Rooter(props, currentSelectedTab, setCurrentSelectedTab) {

    // const handleChange = (setter, value) => {
    //     setter(value);
    // };


    return (
        <div className={"rooter_ctn"}>
            <div className={"rooter_logo_ctn"}>
                <img src={LogoK} className={"rooter_logo"}/>
            </div>
            <div className={"rooter_icons_ctn"}>
                <a href={"#"}>
                    {props.currentSelectedTab === 0 ?
                        <img alt={"Home icon"} src={IconfourSquares} className="icon icon_foursquares icon_white"/>
                        :
                        <img alt={"Home icon"} src={IconfourSquares} className="icon icon_foursquares"
                             onClick={((e => {
                                 props.setCurrentSelectedTab(0)
                             }))}
                        />
                    }
                </a>
                <a href={"#"}>
                    {props.currentSelectedTab === 1 ?
                        <img alt={"Languages icon"} src={IconLanguages} className="icon icon_languages icon_white"/>
                        :
                        <img alt={"Languages icon"} src={IconLanguages} className="icon icon_languages"
                             onClick={((e => {
                                 props.setCurrentSelectedTab(1)
                             }))}
                        />
                    }
                </a>
                <a href={"#"}>
                    {props.currentSelectedTab === 2 ?
                        <img alt={"About icon"} src={IconUser} className="icon icon_user icon_white"/>
                        :
                        <img alt={"About icon"} src={IconUser} className="icon icon_user"

                             onClick={((e => {
                                 props.setCurrentSelectedTab(2)
                             }))}
                        />
                    }
                </a>
                <a href={"#"}>
                    {/*{props.currentSelectedTab === 3 ?*/}
                    {/*    <img alt={"Projects icon"} src={IconProjects} className="icon icon_projects icon_white"/>*/}
                    {/*    :*/}
                    {/*    <img alt={"Projects icon"} src={IconProjects} className="icon icon_projects"*/}
                    {/*         onClick={((e => {*/}
                    {/*             props.setCurrentSelectedTab(3)*/}
                    {/*         }))}*/}
                    {/*    />*/}
                    {/*}*/}
                </a>
            </div>
        </div>
    );
}

export default Rooter;
