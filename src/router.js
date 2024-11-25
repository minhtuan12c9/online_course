import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyCourses from "./pages/MyCourses";
import Teachers from "./pages/Teachers";
import Study from "./pages/Study";
import Header from "./components/Header";

export const mainRouters = [
  {
    path: "/",
    component: Home,
    layout: MainLayout,
  },
  {
    path: "/khoahoc",
    component: Courses,
    layout: MainLayout,
  },
  {
    path: "/chitietkhoahoc",
    component: CourseDetail,
    layout: MainLayout,
  },
  {
    path: "/dangnhap",
    component: Login,
    layout: null,
  },
  {
    path: "/dangky",
    component: Signup,
    layout: null,
  },
  {
    path: "/khoahoccuatoi",
    component: MyCourses,
    layout: MainLayout,
  },
  {
    path: "/giangvien",
    component: Teachers,
    layout: MainLayout,
  },
  {
    path: "/hoc",
    component: Study,
    layout: null,
  },
];
