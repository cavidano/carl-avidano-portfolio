import React, { Fragment } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

function LogoRedesign() {
    return (
        <Fragment>
            <div className="medium margin-y-5">
                <div className="grid grid--column-2 gap-2">
                    <figure>
                        <StaticImage
                            src="../../../images/cheetah-conservation-fund/ccf-logo-legacy.jpg"
                            alt=""
                            placeholder="dominantColor"
                            layout="fullWidth"
                        />
                        <figcaption class="container">
                            <p>Old CCF Logo</p>
                        </figcaption>
                    </figure>
                    <figure>
                        <StaticImage
                            src="../../../images/cheetah-conservation-fund/ccf-logo-redesign.jpg"
                            alt=""
                            placeholder="dominantColor"
                            layout="fullWidth"
                        />
                        <figcaption class="container">
                            <p>New CCF Logo</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </Fragment>
    );
};

export default LogoRedesign;