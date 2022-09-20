export default {
  path: '/d2admin/demo/plugins',
  title: '插件',
  icon: 'fa-plug',
  children: [
    { path: '/d2admin/demo/plugins/index', title: '插件', icon: 'fa-home' },
    {
      path: '/d2admin/demo/plugins/import',
      title: '导入',
      icon: 'fa-download',
      children: [
        { path: '/d2admin/demo/plugins/import/csv', title: 'csv' },
        { path: '/d2admin/demo/plugins/import/xlsx', title: 'xlsx' }
      ]
    },
    {
      path: '/d2admin/demo/plugins/export',
      title: '导出',
      icon: 'fa-upload',
      children: [
        { path: '/d2admin/demo/plugins/export/table', title: '表格' },
        { path: '/d2admin/demo/plugins/export/txt', title: '文本' }
      ]
    },
    { path: '/d2admin/demo/plugins/clipboard-polyfill', title: '剪贴板访问', icon: 'fa-clipboard' },
    { path: '/d2admin/demo/plugins/day', title: '日期计算', icon: 'fa-clock-o' },
    { path: '/d2admin/demo/plugins/js-cookie', title: 'Cookie 读写', icon: 'fa-asterisk' }
  ]
}
