import React, {useEffect, useState} from 'react';
import IconGithub from "../../assets/icons/github.png";
import IconLinkedin from "../../assets/icons/linkedin.png";
import IconMail from "../../assets/icons/mail.png";
import IconPhone from "../../assets/icons/phone.png";
import IconCv from "../../assets/icons/cv2.png";
import CV from "../../assets/pdfs/CV_Killian_Occelli.pdf"
import ReactTypingEffect from 'react-typing-effect';
import {TypeAnimation} from 'react-type-animation';

const ContainerHome = (props, test1, setTest1, test2, setTest2, test3, setTest3) => {

    useEffect(() => {
        setTimeout(() => {
            props.setTest1(true)
        }, 2040)
    }, [props.test1]);

    useEffect(() => {
        setTimeout(() => {
            props.setTest2(true)
        }, 4000)
    }, [props.test2]);

    useEffect(() => {
        setTimeout(() => {
            props.setTest3(true)
        }, 5700)
    }, [props.test3]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         props.setTest3(true)
    //     }, 5200)
    // }, [props.test3]);



    function PrintTable() {

        return (
            <>
                <div className={"table_ctn"}>
                    <p className={"table_line"}>+-------------------------------------------------------+</p>
                    <div className={"table_row"}>
                        |
                        <div className={"table_elem1"}>
                            &#160;Enterprises&#160;
                        </div>

                        |

                        <div className={"table_elem2"}>
                            &#160;Role&#160;
                        </div>
                        |
                        <div className={"table_elem3"}>
                            &#160;Job&#160;
                        </div>
                        |
                    </div>
                    <p className={"table_line"}>+-------------------------------------------------------+</p>

                    <div className={"table_row"}>
                        |
                        <div className={"table_elem1"}>
                            &#160;EPITECH&#160;
                        </div>
                        |
                        <div className={"table_elem2"}>
                            &#160;pre-MSC Master&#160;
                        </div>
                        |
                        <div className={"table_elem3"}>
                            &#160;cyber-security&#160;
                        </div>
                        |
                    </div>

                    <div className={"table_row"}>
                        |
                        <div className={"table_elem1"}>
                            &#160;SIG Enterprise&#160;
                        </div>
                        |
                        <div className={"table_elem2"}>
                            &#160;developer&#160;
                        </div>
                        |
                        <div className={"table_elem3"}>
                            &#160;mobile & web&#160;
                        </div>
                        |
                    </div>

                    <p className={"table_line"}>+-------------------------------------------------------+</p>
                </div>


                <div className={"table_ctn_mobile"}>
                    <table>
                        <thead>
                        <tr>
                            <th>
                                Enterprises
                            </th>
                            <th>
                                Role
                            </th>
                            <th>
                                Job
                            </th>
                        </tr>

                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                Epitech
                            </td>
                            <td>
                                pre-MSC Master
                            </td>
                            <td>
                                cyber-security
                            </td>
                        </tr>
                        <tr>
                            <td>
                                SIG
                            </td>
                            <td>
                                developer
                            </td>
                            <td>
                                mobile & web
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </>
        )
    }


    function PrintSocial() {

        return (
            <>
                <div className={"home_icon_body_ctn"}>
                    <div className={"home_icon_ctn"}>
                        <img alt={"Github icon"} src={IconGithub} className="home_icon"
                        />
                        <a href={"https://github.com/4illian"} target="_blank">github link</a>
                    </div>

                    <div className={"home_icon_ctn"}>
                        <img alt={"Linkedin icon"} src={IconLinkedin} className="home_icon"
                        />
                        <a href={"https://fr.linkedin.com/in/killian-occelli-5182ab20a?original_referer=https%3A%2F%2Fwww.google.com%2F"}
                           target="_blank">linkedin profile link</a>
                    </div>

                    <div className={"home_icon_ctn"}>
                        <img alt={"CV icon"} src={IconCv} className="home_icon"
                        />
                        <a href={CV} target="_blank">download my CV</a>
                    </div>

                    <div className={"home_icon_ctn"}>
                        <img alt={"Email icon"} src={IconMail} className="home_icon"
                        />
                        <span>killian.occelli@epitech.eu</span>
                    </div>

                    <div className={"home_icon_ctn"}>
                        <img alt={"Phone icon"} src={IconPhone} className="home_icon"
                        />
                        <span>07.88.76.51.76</span>
                    </div>

                </div>
            </>

        )
    }


    function PrintContrats() {
        return (
            <>
                <div>
                    <p className={"open_contrat"}>
                        Open for all freelance contracts,\n
                        <br/>
                        contact me for more details 😃</p>
                </div>
            </>
        )
    }


    // function PrintCommand(text, delay1, delay2) {
    //     return (
    //         <div className={"home_baseline"}>
    //             <span className={"container_title_arrow"}>[➜ </span>
    //             <span>
    //                 <i className={"container_repo"}>portfolio</i> <i className={"container_git"}>✗ </i>
    //                         <TypeAnimation
    //                             sequence={[
    //                                 '',
    //                                 // 4000,
    //                                 delay1,
    //                                 // 'availability',
    //                                 text,
    //                                 // 1200, // Waits 1.2s
    //                                 delay2
    //                             ]}
    //                             wrapper="span"
    //                             cursor={false}
    //                         />
    //                         </span>
    //         </div>
    //     )
    // }

    return (
        <>
            <div className={"container_home_header"}>
                <h1>
                    4illian
                </h1>
                <h2 className={"container_h2_web"}>
                    <span className={"container_title_arrow"}>[➜ </span><span
                    className={"container_title_span"}> Developer Mobile & Web <br/>
                    &#160;&#160;&#160;&#160;Master cyber-security</span>
                </h2>

                <h2 className={"container_h2_mob"}>
                    <span className={"container_title_arrow"}>[➜ </span><span
                    className={"container_title_span"}> Developer Mobile <br/>&#160;&#160;&#160;&#160;& Web <br/>
                    &#160;&#160;&#160;&#160;<i className={"master"}>Master cyber-security</i></span>
                </h2>
            </div>

            <div className={"container_home_body"}>
                <div>
                    <div className={"home_baseline"}>
                        <span className={"container_title_arrow"}>[➜ </span>
                        <span><i className={"container_repo"}>portfolio</i> <i className={"container_git"}>✗ </i>
                            <TypeAnimation
                                sequence={[
                                    '',
                                    1000,
                                    'current status',
                                    1300, // Waits 1.2s
                                ]}
                                wrapper="span"
                                cursor={false}
                            />
                        </span>

                    </div>

                    {
                        props.test1 === true ?
                            // PrintCommand("currentStatus", 1200, 0) &&
                            PrintTable()
                            :
                            <></>
                    }

                    {
                        props.test1 === true ?
                            <div className={"home_baseline"}>
                                <span className={"container_title_arrow"}>[➜ </span>
                                <span><i className={"container_repo"}>portfolio</i> <i
                                    className={"container_git"}>✗ </i>
                                     <TypeAnimation
                                         sequence={[
                                             '',
                                             800,
                                             'social networks',
                                             1200, // Waits 1.2s
                                         ]}
                                         wrapper="span"
                                         cursor={false}
                                     />
                                </span>
                            </div>
                            :
                            <></>
                    }

                    {
                        props.test2 === true ?
                            // PrintCommand("social networks", 1800, 1200) &&
                            PrintSocial()
                            :
                            <></>
                    }


                    {
                        props.test2 === true ?
                            <div className={"home_baseline"}>
                                <span className={"container_title_arrow"}>[➜ </span>
                                <span><i className={"container_repo"}>portfolio</i> <i
                                    className={"container_git"}>✗ </i>
                                     <TypeAnimation
                                         sequence={[
                                             '',
                                             800,
                                             'availability',
                                             1200, // Waits 1.2s
                                         ]}
                                         wrapper="span"
                                         cursor={false}
                                     />
                                </span>
                            </div>
                            :
                            <></>
                    }


                    {
                        props.test3 === true ?
                            PrintContrats()
                            :
                            <></>
                    }

                </div>
            </div>
        </>
    );
};

export default ContainerHome;
