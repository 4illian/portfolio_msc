import React, {useState} from 'react';
import IconArrow from "../../assets/icons/arrow.png";

import ContainerJobsOxykeeper from "./container.pages.jobs/container.jobs.oxykeeper";
import ContainerJobsItalian from "./container.pages.jobs/container.jobs.italian";
import {useEffect} from "react"

const ContainerJobs = (props, currentPage) => {


    let [jobIndex, setJobIndex] = useState(0)

    let jobsCount = 2

    // useEffect(() => {
    //     setJobIndex(jobIndex + 1)
    // }, [setJobIndex]);

    return (
        <>
            <h3 className={"container_title_page"}>Examples Jobs</h3>
            <div className={"contain_jobs_ctn"}>

                <div className={"container_arrow_back_ctn"} onClick={(e => {
                    if (jobIndex > 0)
                        setJobIndex(jobIndex - 1)
                })}>
                    {jobIndex === 0 ?
                        <img alt={"Previous Job"} src={IconArrow} className="container_arrow_back arrow_grey"
                        />
                        :
                        <img alt={"Previous Job"} src={IconArrow} className="container_arrow_back"
                        />
                    }

                </div>

                {
                    jobIndex === 0 ?
                        <ContainerJobsOxykeeper/>
                        :
                        <></>
                }

                {
                    jobIndex === 1 ?
                        <ContainerJobsItalian/>
                        :
                        <></>
                }


                <div className={"container_arrow_back_ctn"} onClick={(e => {
                    if (jobIndex < jobsCount -1)
                        setJobIndex(jobIndex + 1)
                })}>


                    {jobIndex === 1 ?
                        <img alt={"Next Job"} src={IconArrow} className="container_arrow_next arrow_grey"
                        />
                        :
                        <img alt={"Next Job"} src={IconArrow} className="container_arrow_next"
                        />
                    }

                </div>
            </div>
        </>
    );
};

export default ContainerJobs;
