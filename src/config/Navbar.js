import {
  Homebar,
  HomebarCaro,
  HomebarMan,
  HomebarManzil,
  HomebarMaxsulot,
  HomebarTex,
  HomebarToifa,
} from "../assets/images/Icons";

export const Navbar = [
  {
    key: "",
    to: "/buyurtmalar",
    name: "order",
    icon: <Homebar />,
  },
  {
    key: "",
    to: "/customers",
    name: "customers",
    icon: <HomebarMan />,
  },
  {
    key: "",
    to: "/toifalar",
    name: "category",
    icon: <HomebarToifa />,
  },
  {
    key: "",
    to: "/mahsulotlar",
    name: "product",
    icon: <HomebarMaxsulot />,
  },
  {
    key: "",
    to: "/texnologiyalar",
    name: "texhnology",
    icon: <HomebarTex />,
  },
  {
    key: "",
    to: "/manzil",
    name: "location",
    icon: <HomebarManzil />,
  },
  {
    key: "",
    to: "/carousel",
    name: "carousel",
    icon: <HomebarCaro />,
  },
];
