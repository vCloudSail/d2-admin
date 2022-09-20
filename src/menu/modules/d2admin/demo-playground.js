export default {
  path: '/d2admin/demo/playground',
  title: '功能',
  icon: 'fa-flask',
  children: [
    { path: '/d2admin/demo/playground/index', title: '功能', icon: 'fa-home' },
    {
      title: 'svg 菜单图标',
      icon: 'svg-icon-d2-admin',
      children: [
        { title: 'add', icon: 'svg-icon-add' },
        { title: 'alarm', icon: 'svg-icon-alarm' },
        { title: 'camera', icon: 'svg-icon-camera' },
        { title: 'history', icon: 'svg-icon-history' },
        { title: 'like', icon: 'svg-icon-like' },
        { title: 'love', icon: 'svg-icon-love' },
        { title: 'message', icon: 'svg-icon-message' },
        { title: 'notice', icon: 'svg-icon-notice' },
        { title: 'search', icon: 'svg-icon-search' },
        { title: 'share', icon: 'svg-icon-share' },
        { title: 'star', icon: 'svg-icon-star' },
        { title: 'user', icon: 'svg-icon-user' }
      ]
    },
    {
      title: '空菜单演示',
      icon: 'fa-folder-o',
      children: [
        {
          title: '正在开发 1',
          children: [{ title: '正在开发 1-1' }, { title: '正在开发 1-2' }]
        },
        { title: '正在开发 2' },
        { title: '正在开发 3' }
      ]
    },
    {
      path: '/d2admin/demo/playground/frame',
      title: '内嵌网页',
      icon: 'fa-globe',
      children: [
        { path: '/d2admin/demo/playground/frame/d2-doc', title: 'D2Admin 中文文档', icon: 'svg-icon-d2-admin' },
        { path: '/d2admin/demo/playground/frame/html', title: '静态 HTML', icon: 'fa-code' },
        { path: '/d2admin/demo/playground/frame/report', title: '构建分析', icon: 'fa-pie-chart' }
      ]
    },
    {
      title: '新窗口打开链接',
      icon: 'fa-link',
      children: [
        { path: 'https://github.com/d2-projects/d2-admin', title: 'D2Admin Github', icon: 'fa-github' },
        { path: 'https://juejin.im/user/57a48b632e958a006691b946/posts', title: '掘金', icon: 'fa-globe' },
        { path: 'https://my.oschina.net/u/3871516', title: '开源中国', icon: 'fa-globe' },
        { path: 'https://www.zhihu.com/people/fairy-ever/activities', title: '知乎', icon: 'fa-globe' },
        { path: 'https://segmentfault.com/blog/liyang-note-book', title: 'segmentfault 专栏', icon: 'fa-globe' },
        { path: 'http://www.fairyever.com/', title: 'www.fairyever.com', icon: 'fa-globe' }
      ]
    },
    {
      path: '/d2admin/demo/playground/store',
      title: '全局状态管理',
      icon: 'fa-bolt',
      children: [
        { path: '/d2admin/demo/playground/store/page', title: '多标签页控制', icon: 'fa-window-restore' },
        { path: '/d2admin/demo/playground/store/menu', title: '菜单控制', icon: 'fa-bars' },
        { path: '/d2admin/demo/playground/store/size', title: '全局尺寸', icon: 'fa-font' },
        { path: '/d2admin/demo/playground/store/ua', title: '浏览器信息', icon: 'fa-info-circle' },
        { path: '/d2admin/demo/playground/store/gray', title: '灰度模式', icon: 'fa-eye' },
        { path: '/d2admin/demo/playground/store/fullscreen', title: '全屏', icon: 'fa-arrows-alt' },
        { path: '/d2admin/demo/playground/store/theme', title: '主题', icon: 'fa-diamond' },
        { path: '/d2admin/demo/playground/store/transition', title: '页面过渡开关', icon: 'fa-toggle-on' }
      ]
    },
    {
      path: '/d2admin/demo/playground/page-cache',
      title: '页面缓存',
      icon: 'fa-hdd-o',
      children: [
        { path: '/d2admin/demo/playground/page-cache/on', title: '开启缓存' },
        { path: '/d2admin/demo/playground/page-cache/off', title: '关闭缓存' },
        { path: '/d2admin/demo/playground/page-cache/params/1', title: '带参路由缓存 1' },
        { path: '/d2admin/demo/playground/page-cache/params/2', title: '带参路由缓存 2' }
      ]
    },
    {
      path: '/d2admin/demo/playground/page-argu',
      title: '参数传递和留存',
      icon: 'fa-assistive-listening-systems',
      children: [
        { path: '/d2admin/demo/playground/page-argu/send', title: '发送' },
        { path: '/d2admin/demo/playground/page-argu/get/username-from-menu?userid=userid-from-menu', title: '接收' }
      ]
    },
    {
      path: '/d2admin/demo/playground/db',
      title: '数据持久化',
      icon: 'fa-database',
      children: [
        { path: '/d2admin/demo/playground/db/all', title: '总览', icon: 'fa-table' },
        { path: '/d2admin/demo/playground/db/public', title: '公共存储', icon: 'fa-users' },
        { path: '/d2admin/demo/playground/db/user', title: '私有数据', icon: 'fa-user' },
        { path: '/d2admin/demo/playground/db/page-public', title: '路由存储', icon: 'fa-file-o' },
        { path: '/d2admin/demo/playground/db/page-user', title: '私有路由存储', icon: 'fa-file-o' },
        { path: '/d2admin/demo/playground/db/page-snapshot-public', title: '路由快照', icon: 'fa-file' },
        { path: '/d2admin/demo/playground/db/page-snapshot-user', title: '私有路由快照', icon: 'fa-file' }
      ]
    },
    {
      path: '/d2admin/demo/playground/log',
      title: '日志',
      icon: 'fa-bullseye',
      children: [
        { path: '/d2admin/demo/playground/log/log', title: '日志记录', icon: 'fa-dot-circle-o' },
        { path: '/d2admin/demo/playground/log/error', title: '错误捕捉', icon: 'fa-bug' },
        { path: '/d2admin/demo/playground/log/ajax', title: 'Ajax 错误', icon: 'fa-bug' },
        { path: '/d2admin/demo/playground/log/console', title: '控制台日志', icon: 'fa-lightbulb-o' }
      ]
    },
    {
      path: '/d2admin/demo/playground/add-routes',
      title: '动态添加路由',
      icon: 'fa-plus-square',
      children: [{ path: '/d2admin/demo/playground/add-routes/routes', title: '添加页面', icon: 'fa-file-o' }]
    },
    { path: '/d2admin/demo/playground/env', title: '环境信息', icon: 'fa-exclamation-circle' },
    { path: '/d2admin/demo/playground/locales', title: '国际化', icon: 'fa-language' }
  ]
}
