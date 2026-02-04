import { Route } from "@/types/routes.type";



export const studentRoutes: Route[] = [
  {
    title: "Sessions",
    items: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Booked Sessions",
        url: "/myBookings",
      },
    ],
  },
];