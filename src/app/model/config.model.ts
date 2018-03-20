// 配置信息
let host = window.location.hostname.split('.')[0];
let isDebug = (host === '192') || (host === '127') || (host === 'localhost') || (host === '');
let htmlUrl = isDebug ? '' : 'http://q.letwx.com/app/ngdemo';
export default {
  isDebug: isDebug,   // 是否为调试状态
  htmlUrl: htmlUrl,
  apiopenid: '',  // 微信端openid
  apitoken: '', // 微信端token
  scope: 'snsapi_userinfo', // snsapi_base,snsapi_userinfo
  uid: 11,
  shareInfo: {
    title: '法派1855微商城，美味新鲜送到家',
    desc: '微信订购蛋糕，同城配送免邮哦',
    link: htmlUrl,
    imgUrl: htmlUrl + '/assets/images/share_show.jpg'
  }
}