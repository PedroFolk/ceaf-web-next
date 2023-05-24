import links from "@/constants";
import Routes from "../Routes/AppRoutes";
import Cont from "./components/cont";
import Footer from "./components/footer";
import Header from "./components/header";

import { useState } from "react";

export default function App() {
  const [authUser, setAuth] = useState<boolean>(false);
  return <Routes/>
}
