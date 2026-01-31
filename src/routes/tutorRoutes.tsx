import { Route } from "@/types/routes.type";



export const tutorRoutes: Route[] = [
  {
    title: "Session Management",
    items: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "My Profile",
        url: "/tutorprofile",
      },
      {
        title: "Arrange Sessions",
        url: "/sessions",
      },
      {
        title: "Tutor Reviews",
        url: "/tutorReviews",
      },
    ],
  },
];