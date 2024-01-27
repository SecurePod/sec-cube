import FlagRoundedIcon from '@mui/icons-material/FlagRounded'
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

interface SidebarMenu {
  title: string
  icon: JSX.Element
  path: string
}

export const menuItems: SidebarMenu[] = [
  {
    title: 'ホーム',
    icon: <HomeRoundedIcon />,
    path: '/',
  },
  {
    title: 'ダッシュボード',
    icon: <SpaceDashboardRoundedIcon />,
    path: '/dashboard',
  },
  {
    title: 'コース',
    icon: <FlagRoundedIcon />,
    path: '/course',
  },
]

export const subMenuItems: SidebarMenu[] = [
  {
    title: 'ヘルプ',
    icon: <HomeRoundedIcon />,
    path: '/',
  },
  // {
  //   title: 'ダッシュボード',
  //   icon: <SpaceDashboardRoundedIcon />,
  //   path: '/dashboard',
  // },
  // {
  //   title: 'コース',
  //   icon: <FlagRoundedIcon />,
  //   path: '/course',
  // },
]
