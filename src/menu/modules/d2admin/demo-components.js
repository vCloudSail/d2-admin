export default {
  path: '/d2admin/demo/components',
  title: '组件',
  icon: 'fa-puzzle-piece',
  children: [
    { path: '/d2admin/demo/components/index', title: '扩展组件', icon: 'fa-home' },
    {
      path: '/d2admin/demo/components/container',
      title: '布局容器',
      icon: 'fa-window-restore',
      children: [
        {
          title: '填充型',
          children: [
            { path: '/d2admin/demo/components/container/full', title: '基础',  },
            { path: '/d2admin/demo/components/container/full-slot', title: '插槽',  },
            { path: '/d2admin/demo/components/container/full-bs', title: '滚动优化',  }
          ]
        },
        {
          title: '隐形模式',
          children: [
            { path: '/d2admin/demo/components/container/ghost', title: '基础',  },
            { path: '/d2admin/demo/components/container/ghost-slot', title: '插槽',  },
            { path: '/d2admin/demo/components/container/ghost-bs', title: '滚动优化',  }
          ]
        },
        {
          title: '卡片型',
          children: [
            { path: '/d2admin/demo/components/container/card', title: '基础',  },
            { path: '/d2admin/demo/components/container/card-slot', title: '插槽',  },
            { path: '/d2admin/demo/components/container/card-bs', title: '滚动优化',  }
          ]
        },
        {
          title: '方法',
          children: [
            { path: '/d2admin/demo/components/container/api?bs=false', title: '滚动控制',  },
            { path: '/d2admin/demo/components/container/api?bs=true', title: '滚动控制 BS',  }
          ]
        }
      ]
    },
    {
      path: '/d2admin/demo/components/layout/grid',
      title: '高级布局',
      icon: 'fa-tasks',
      children: [
        { path: '/d2admin/demo/components/layout/grid', title: '拖拽位置和大小' },
        { path: '/d2admin/demo/components/layout/splitpane', title: '区域划分' }
      ]
    },
    {
      path: '/d2admin/demo/components/editor',
      title: '编辑器',
      icon: 'fa-pencil-square-o',
      children: [
        { path: '/d2admin/demo/components/editor-ueditor', title: 'UEditor', },
        { path: '/d2admin/demo/components/editor-quill', title: 'Quill',  }
      ]
    },
    {
      path: '/d2admin/demo/components/icon',
      title: '图标',
      icon: 'fa-star',
      children: [
        { path: '/d2admin/demo/components/icon/icon', title: '图标组件' },
        { path: '/d2admin/demo/components/icon/icon-svg', title: 'svg 图标组件' },
        { path: '/d2admin/demo/components/icon/select', title: '图标选择器' },
        { path: '/d2admin/demo/components/icon/select-svg', title: 'svg 图标选择器' },
        { path: '/d2admin/demo/components/icon/list', title: 'FontAwesome' }
      ]
    },
    {
      path: '/d2admin/demo/components/markdown',
      title: 'markdown 解析',
      icon: 'fa-file-text-o',
      children: [
        { path: '/d2admin/demo/components/markdown/source', title: '指定资源' },
        { path: '/d2admin/demo/components/markdown/url', title: '异步加载文件' }
      ]
    },
    { path: '/d2admin/demo/components/countup', title: '数字动画', icon: 'fa-motorcycle' },
    { path: '/d2admin/demo/components/highlight', title: '代码高亮显示', icon: 'fa-code' },
    { path: '/d2admin/demo/components/json-tree', title: 'JSON 展示', icon: 'fa-sitemap' }
  ]
}
