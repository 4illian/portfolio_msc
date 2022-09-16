import React from 'react';
import ItalianDesignImg from "../../../assets/imgs/ducati.png"

const ContainerJobsItalian = () => {
    return (
        <>
            <div className={"container_jobs_data_ctn"}>
                <div>
                    <h4>Italian Design Project</h4>
                    <p>The Italian Design project was born from an entrance exam for Epitech. This showcase site had to
                        be modern, responsive and completely in the spirit of the brand. A color code was used and
                        particular attention was paid to the fluidity of navigation (among other things thanks to the
                        vector format).</p>
                </div>

                <div className={"contain_jobs_ctn_btm_italian"}>
                    <div>
                        <img alt={"Italian design image"} src={ItalianDesignImg}
                             className="contain_jobs_ctn_btm_italian_img"
                        />
                    </div>

                    <div className={"contain_jobs_ctn_btm_italian_p"}>
                        <p>

                            Home page of the showcase site allowing a redirection, highlighting the novelties of the
                            brand and its events. The design work was done before the creation of the first lines of
                            code. <br/>
                            I'm very clearly writing anything just to make lines, indeed, it's just a model made at the
                            base with HTML and CSS. Combined with a bit of PHP to import elements and avoid code
                            redundancy. So. So PHP, a nice language, as long as the frameworks stay away from the
                            projects. Medium hot for the symfony after, Enzo. you abuse.
                        </p>
                    </div>


                </div>
            </div>
        </>
    );
};

export default ContainerJobsItalian;
