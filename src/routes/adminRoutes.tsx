import { Route } from "@/types/routes.type";



export const adminRoutes: Route[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "All Sessions",
        url: "/allSession",
      },
      {
        title: "All Tutors",
        url: "/allTutor",
      },
      {
        title: "All Users",
        url: "/allUser",
      },
      {
        title: "Categories",
        url: "/categories",
      },
    ],
  },
  
];