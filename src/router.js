import MainLayout from "./layouts/MainLayout";
import AdminCourse from "./pages/Admin";
import AdminAddCourse from "./pages/Admin/AdminAddCourse";
import AdminAddInstructor from "./pages/Admin/AdminAddInstructor";
import AdminInstructor from "./pages/Admin/AdminInstructor";
import CourseDetail from "./pages/CourseDetail";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyCourses from "./pages/MyCourses";
import Signup from "./pages/Signup";
import Study from "./pages/Study";
import Teachers from "./pages/Teachers";
import AdminChapter from "./pages/Admin/AdminChapter";

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
    path: "/chitietkhoahoc/:id",
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
  {
    path: "/admincourse",
    component: AdminCourse,
    layout: null,
  },
  {
    path: "/addcourse",
    component: AdminAddCourse,
    layout: null,
  },
  {
    path: "/admininstructor",
    component: AdminInstructor,
    layout: null,
  },
  {
    path: "/addinstructor",
    component: AdminAddInstructor,
    layout: null,
  },
  {
    path: "/adminchapter/:id",
    component: AdminChapter,
    layout: null,
  },
];
