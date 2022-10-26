module.exports = ({ env }) => ({
  url: env("https://beee-beauty.herokuapp.com/"),
  proxy: true,
  app:{
    keys:env.array('APP_KEYS',['INyJ6+raDz6tL6CkBpVARQ==,VxTD4rkUxt/cJQ7ZFrXysA==,5yinqKYvn3sraZLE/qQBAQ==,eY1ImnQs0rLSfG3N16SyQg==']),
  }
});
