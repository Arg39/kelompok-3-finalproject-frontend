import {
  HomeIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import { Tables, Transaksi, Table, Home } from "@/pages/dashboard";
import { GrLogout, GrTransaction } from "react-icons/gr";
 

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Daftar",
        path: "/daftar",
        subpages: [
          {
            name: "Daftar Gedung",
            path: "/Gedung",
            element: <Table />,
          },
          {
            name: "Daftar Mitra",
            path: "/Mitra",
            element: <Tables />,
          },
        ],
      },
      {
        icon: <GrTransaction {...icon} />,
        name: "Transaksi Sewa",
        path: "/rent",
        element: <Transaksi />,
      },
      {
        icon: <GrLogout {...icon} />,
        name: "Keluar",
        path: "/logout", 
        element: null, 
      },
    ],
  },
];

export default routes;
