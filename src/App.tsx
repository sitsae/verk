import Landing from "./pages/Landing";
import Policy from "./pages/Policy";
import Success from "./pages/Success";
import Root from "./pages/Root";

import "./assets/globalStyles.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" index element={<Landing />} />
        <Route path="/personvern" element={<Policy />} />
        <Route path="/success" element={<Success />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
