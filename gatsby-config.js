module.exports = {
  siteMetadata: {
    title: 'Minh Son Nguyen',

    description: 'Minh Son Nguyen - Data Engineer - Helsinki, Finland',
    author: '@nguymin4'
  },
  plugins: [
    'gatsby-plugin-sass',
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
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        mode: 'async',
        enableListener: true,
        preconnect: ['https://fonts.gstatic.com'],
        web: [{
          name: 'Open Sans',
          file: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap'
        }]
      }
    }
  ]
};
