import {
  BanknotesIcon,
  UsersIcon,
  StarIcon,
  ClockIcon
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Pendapatan Perbulan",
    value: "Rp 5.000.000",
    footer: {
      label: "Rata-rata pendapatan perbulan",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Total Pelanggan",
    value: "50 Orang",
    footer: {
      color: "text-green-500",
      label: "Rata-rata pelanggan perbulan",
    },
  },
  {
    color: "gray",
    icon: StarIcon,
    title: "Penilaian Pelanggan",
    value: "4.8",
    footer: {
      color: "text-red-500",
      label: "Rata-rata penilaian pelanggan",
    },
  },
  {
    color: "gray",
    icon: ClockIcon,
    title: "Lama Menginap",
    value: "3.5 Hari",
    footer: {
      color: "text-green-500",
      label: "Rata-rata lama menginap pelanggan perbulan",
    },
  },
];

export default statisticsCardsData;
