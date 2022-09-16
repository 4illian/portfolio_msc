import React from 'react';
import "../../stylesheets/container.css"
import userImg from "../../assets/imgs/user.jpg"
import IconKotlin from "../../assets/icons/kotlin.png";
import IconJava from "../../assets/icons/java.png";
import IconReact from "../../assets/icons/react.png";
import IconNodejs from "../../assets/icons/nodejs.png";
import IconSql from "../../assets/icons/sql.png";
import IconPython from "../../assets/icons/python.png";

const ContainerProfil = () => {
    return (
        <>
            <h3 className={"container_title_page"}>Profil</h3>
            <div className={"container_profil_ctn"}>
                <div className={"container_profil__ctn_picture"}>
                    <img src={userImg} className={"container_profil_picture"}/>
                </div>

                <div className={"container_profil_description"}>
                    <h4 className={"container_profil_description_name"}>OCCELLI Killian</h4>

                    <p>Mobile & web developer, I completed a bac+2 at Epitech as a web integrator developer. Currently
                        doing a master's degree at the same school. I am programming connected objects and following a
                        course in cyber-security. I am always available for freelance contracts!</p>
                </div>
            </div>

            <div className={"trait"}/>

            <div>
                <h4>DevTools</h4>

                <div className={"container_devtools_ctn"}>
                    <div className={"container_devtools_item_ctn"}>
                        <img alt={"Kotlin icon"} src={IconKotlin} className="container_devtools_logo"
                        />
                        <h5>Kotlin</h5>
                        <span>Kotlin's standard library depends on the Java Class Library</span>
                    </div>

                    <div className={"container_devtools_item_ctn"}>
                        <img alt={"Java icon"} src={IconJava} className="container_devtools_logo"
                        />
                        <h5>Java</h5>
                        <span>Native Android technology</span>
                    </div>


                    <div className={"container_devtools_item_ctn"}>
                        <img alt={"React icon"} src={IconReact} className="container_devtools_logo"
                        />
                        <h5>React</h5>
                        <span>Framework Javascript for front-end development</span>
                    </div>

                    <div className={"container_devtools_item_ctn"}>
                        <img alt={"NodeJS icon"} src={IconNodejs} className="container_devtools_logo"
                        />
                        <h5>NodeJS</h5>
                        <span>Framework Javascript for back-end development</span>
                    </div>


                    <div className={"container_devtools_item_ctn"}>
                        <img alt={"SQL icon"} src={IconSql} className="container_devtools_logo"
                        />
                        <h5>SQL</h5>
                        <span>Language to interact with SQL databases</span>
                    </div>


                    <div className={"container_devtools_item_ctn"}>
                        <img alt={"Python icon"} src={IconPython} className="container_devtools_logo"
                        />
                        <h5>Python</h5>
                        <span>For algorithms and other micro-services</span>
                    </div>

                </div>
            </div>


        </>
    );
};

export default ContainerProfil;
