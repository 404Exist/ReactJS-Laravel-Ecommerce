import AdminLogin from "../components/admin/auth/AdminLogin";
import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";
import Login from "../components/frontend/auth/Login";
import Register from "../components/frontend/auth/Register";
import Home from "../components/frontend/Home";


export const adminRoutes = [
  { path: '/admin', exact: true, name: 'Admin'},
  { path: '/admin/login', exact: true, name: 'Login', guest:true, component: AdminLogin },
  { path: '/admin/dashboard', exact: true, name: 'Dashboard', auth:true, component: Dashboard },
  { path: '/admin/profile', exact: true, name: 'Profile', auth:true, component: Profile },
];

export const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/login', exact: true, name: 'Login', guest:true, component: Login  },
  { path: '/register', exact: true, name: 'Register', guest:true, component: Register  },
];