import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

function SEO({ description, title }) {
  const siteMetadata = useSiteMetadata();
  const siteTitle = `${title} | ${siteMetadata.title}`;
  const siteDescription = description || siteMetadata.description;

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="og:description" content={siteDescription} />
      <meta name="og:title" content={siteTitle} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:title" content={siteTitle} />
    </>
  );
}

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SEO;
