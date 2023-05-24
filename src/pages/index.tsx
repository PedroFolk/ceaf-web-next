import Routes from "../Routes/AppRoutes";

import { useState } from "react";

export default function App() {
  const [authUser, setAuth] = useState<boolean>(false);
  return <Routes/>
}
