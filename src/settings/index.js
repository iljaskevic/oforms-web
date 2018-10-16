export default {
  apiUrl: 'http://yoursite.com/api/',
};

const siteConfig = {
  siteName: 'oForms',
  siteIcon: 'ion-flash',
  footerText: 'oForms ©2018',
};
const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};
const language = 'english';

const jwtConfig = {
  fetchUrl: '/api/',
  secretKey: 'secretKey',
};

export { siteConfig, language, themeConfig, jwtConfig };
