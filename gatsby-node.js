exports.onCreatePage = ({ page, actions }) => {
  if (page.path === '/') {
    // eslint-disable-next-line
    page.matchPath = '/';
    actions.createPage(page);
  }
};
