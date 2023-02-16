import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
