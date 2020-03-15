module.exports = {
  siteMetadata: {
    title: 'Minh Son Nguyen',

    description: 'Website of Minh Son Nguyen - software developer working in Helsinki, Finland',
    author: '@nguymin4'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Minh Son Nguyen',
        short_name: 'nguymin4',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/zen_circle.png'
      }
    }
  ]
};
