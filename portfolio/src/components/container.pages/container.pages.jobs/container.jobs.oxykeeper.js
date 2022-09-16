import React from 'react';
import OxyKeeperMobImg from "../../../assets/imgs/oxykeeper_mob.png";
import OxyKeeperDashImg from "../../../assets/imgs/oxykeeper_dashboard.png";

const ContainerJobsOxykeeper = () => {
    return (
        <>
            <div className={"container_jobs_data_ctn"}>
                <div>
                    <h4>OXY Keeper Project</h4>
                    <p>The OXY Keeper project consists of the creation of a mobile and web application for security
                        guards. It allows you to perform various tasks such as rounds or access controls. <br/>
                        The web
                        application makes it possible to interact with the database and visually manage the entire
                        application. A back in nodeJS has also been implemented.</p>
                </div>

                <div className={"contain_jobs_ctn_btm"}>
                    <div>
                        <div className={"container_project_image_ctn"}>
                            <img alt={"Project image"} src={OxyKeeperMobImg} className="container_project_image"
                            />
                            <p>Example of a mobile page allowing agents to perform rounds on a planned site. The
                                application displays the different points to check and interact with the agent.</p>
                        </div>
                    </div>
                    <div className={"trait_vertical"}/>

                    <div>
                        <div className={"container_project_image_ctn2"}>
                            <img alt={"Project image"} src={OxyKeeperDashImg} className="container_project_image"
                            />
                            <p>
                                Home page of the back office allowing to follow the various statistics and to
                                configure the various tools.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContainerJobsOxykeeper;
