import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetComponent = () => (
    <Helmet>
        <title>Portfolio | Rodrigo Dias Noronha</title>

        <meta name="author" content="Rodrigo Dias Noronha" />

        <meta charSet="utf-8" />
        <meta name="content" content="Rodrigo Dias Noronha's portfolio" />
        <meta name="description" content="Rodrigo Dias Noronha's portfolio" />

        <meta name="twitter:card" content="summary" />
        <meta name={`twitter:site`} content="@saintsbr1967" />
        <meta
            name={`twitter:title`}
            content="Rodrigo Dias Noronha's portfolio"
        />
        <meta name={`twitter:creator`} content="roketman09" />
        <meta
            name={`twitter:description`}
            content={"Rodrigo Dias Noronha's portfolio"}
        />

        {/* Para o sistema Open Graph */}
        <meta
            property={`og:title`}
            content={"Rodrigo Dias Noronha's portfolio"}
        />
        <meta property={`og:url`} content={'https://rodrigodn.netlify.com/'} />
        <meta
            property={`og:type`}
            content={`Rodrigo Dias Noronha's portfolio`}
        />
        <meta
            property={`og:site_name`}
            content={"Rodrigo Dias Noronha's portfolio"}
        />

        <meta
            name={`og:description`}
            content={`Rodrigo Dias Noronha's portfolio`}
        />
        <link
            rel="icon"
            href="https://www.hawksearch.com/assets/45/44/45444989-b3d7-4fca-88ea-8a6c143c0285/developer-role-glow.png"
            sizes="16x16"
            type="image/png"
        />
    </Helmet>
);

export default HelmetComponent;
