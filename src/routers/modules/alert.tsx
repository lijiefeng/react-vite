import {RouteObject} from "../interface"
import History from '@/views/alarm/history'
import Management from '@/views/alarm/management'
// 外部链接模块
const alertRouter: Array<RouteObject> = [
  {
    meta: {
			title: "告警" 
		},
    children : [
      {
        path : "/alert/management",
        element: <History />,
        meta: {
          requiresAuth: true,
          title: "告警事件",
          key: "management"
        }
      },
      {
        path : "/alert/history",
        element: <Management/>,
        meta: {
          requiresAuth: true,
          title: "告警历史",
          key: "history"
        }
      },
    ]
  },
];

export default alertRouter;
