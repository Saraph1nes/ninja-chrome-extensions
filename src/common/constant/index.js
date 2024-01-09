const weekName = {
  1: '周一',
  2: '周二',
  3: '周三',
  4: '周四',
  5: '周五',
  6: '周六',
  7: '周日',
};

const GD_WEATHER_KEY = '7de0cf8ec1829412982c750abab175cb';
const IMG_MAP = {
  'fe-cd.ezrpro.work': 'https://fe-cd.ezrpro.work/static/logo.00a4fce8.svg',
  '192.168.12.240:3001': 'https://assets-img.ezrpro.com/pc/img/others/fabu.png',
  'demand.ezrpro.work': 'https://assets-img.ezrpro.com/pc/img/order/tpad.png',
  'fe-bm.ezrpro.work': 'https://assets-img.ezrpro.com/pc/img/others/zebra.png',
  'docs.ezrpro.work': 'https://assets-img.ezrpro.com/pc/img/order/zhile.png',
  'fe-monitor.ezrpro.work': 'https://assets-img.ezrpro.com/pc/img/order/chickadee.png',
  'fe-material.ezrpro.work': 'https://assets-img.ezrpro.com/pc/img/order/wlzx.png',
  'gitlab.ezrpro.in': 'https://assets-img.ezrpro.com/pc/img/order/gitlab.png',
  'exmail.qq.com': 'https://assets-img.ezrpro.com/pc/img/others/txMail.png',
  'bandmaster.ezrpro.in': 'https://assets-img.ezrpro.com/pc/img/others/chilun.png',
};

const EZR_TOOLS = [
  {
    title: '工蜂',
    img: 'https://fe-cd.ezrpro.work/static/logo.00a4fce8.svg',
    url: 'https://fe-cd.ezrpro.work/workbench/',
    desc: '驿氪前端应用管理平台',
    remark: '负责人：技术共享组',
  },
  {
    title: '发布系统',
    img: 'https://assets-img.ezrpro.com/pc/img/others/fabu.png',
    url: 'http://192.168.12.240:3001/#/',
    desc: '发布管理平台',
    remark: '负责人：当天运维值班人员',
  },
  {
    title: '玄武',
    img: 'https://assets-img.ezrpro.com/pc/img/order/tpad.png',
    url: 'https://demand.ezrpro.work/myWork/pendingList',
    desc: '迭代管理平台',
    remark: '负责人：曾云龙',
  },
  {
    title: '斑马',
    img: 'https://assets-img.ezrpro.com/pc/img/others/zebra.png',
    url: 'https://fe-bm.ezrpro.work/#/mini/wechat',
    desc: '小程序二维码管理平台',
    remark: '负责人：技术共享组',
  },
  {
    title: '知了',
    img: 'https://assets-img.ezrpro.com/pc/img/order/zhile.png',
    url: 'https://docs.ezrpro.work/workbench',
    desc: '驿氪知识库',
    remark: '负责人：王宇锋',
  },
  {
    title: '山雀',
    img: 'https://assets-img.ezrpro.com/pc/img/order/chickadee.png',
    url: 'https://fe-monitor.ezrpro.work/projectList',
    desc: '驿氪前端日志监控平台',
    remark: '负责人：杨柳',
  },
  {
    title: '物料',
    img: 'https://assets-img.ezrpro.com/pc/img/order/wlzx.png',
    url: 'https://fe-material.ezrpro.work/',
    desc: '驿氪物料中心',
    remark: '驿氪前端技术部物料中心',
  },
  {
    title: 'gitlab',
    img: 'https://assets-img.ezrpro.com/pc/img/order/gitlab.png',
    url: 'https://gitlab.ezrpro.in/',
    desc: '代码仓库',
    remark: '负责人：部门主管',
  },
  {
    title: '腾讯企业邮箱',
    img: 'https://assets-img.ezrpro.com/pc/img/others/txMail.png',
    url: 'https://exmail.qq.com/',
    desc: '驿氪工作邮箱',
    remark: '',
  },
  {
    title: 'bandmaster',
    img: 'https://assets-img.ezrpro.com/pc/img/others/chilun.png',
    url: 'http://bandmaster.ezrpro.in/',
    desc: '驿氪迭代系统',
    remark: '',
  },
  // {
  //   "title": "yapi接口管理",
  //   "img": "https://assets-img.ezrpro.com/pc/img/wx/YApi1.png",
  //   "url": "https://fe-mock.ezrpro.work/",
  //   "desc": "YApi 是高效、易用、功能强大的 api 管理平台",
  //   "remark": ""
  // },
  // {
  //   "title": "语雀（待废弃）",
  //   "img": "https://assets-img.ezrpro.com/pc/img/order/yqq.png",
  //   "url": "https://ezrpro.yuque.com/ezr/newbie",
  //   "desc": "驿氪知识体系",
  //   "remark": ""
  // },
  // {
  //   "title": "tpad（待废弃）",
  //   "img": "https://assets-img.ezrpro.com/pc/img/order/tpad.png",
  //   "url": "https://www.tapd.cn/company/participant_projects?from=left_tree2",
  //   "desc": "项目流程管理平台",
  //   "remark": ""
  // }
];

export { EZR_TOOLS, weekName, GD_WEATHER_KEY, IMG_MAP };
