/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Portfolio | Rodrigo Dias Noronha',
        author: 'Rodrigo Dias Noronha',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `RodrigoDN`,
                short_name: `rodrigodn`,
                start_url: `/`,
            },
        },

        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: true,
            },
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-offline`,
    ],
};
