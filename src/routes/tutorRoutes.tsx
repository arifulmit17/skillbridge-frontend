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
        title: "My Availability",
        url: "/availability",
      },
      {
        title: "Arrange Sessions",
        url: "/createSession",
      },
      {
        title: "My Sessions",
        url: "/mySessions",
      },
      {
        title: "Student's Reviews",
        url: "/tutorReviews",
      },
    ],
  },
];