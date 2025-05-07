import Landing from "./pages/Landing";
import Policy from "./pages/Policy";
import Success from "./pages/Success";
import Root from "./pages/Root";
import CMS from "./pages/CMS";

import "./assets/globalStyles.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { useEffect } from "react";
import { insertPageLoad } from "./utils/supabase";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" index element={<Landing />} />
        <Route path="/personvern" element={<Policy />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cms" element={<CMS />} />
      </Route>
    )
  );

  useEffect(() => {
    const uid = localStorage.getItem("uuid") || uuidv4();
    localStorage.setItem("uuid", uid);
    insertPageLoad(uid);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
