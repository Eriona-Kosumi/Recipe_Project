import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Routes as Route } from "./routes/Routes";
import "semantic-ui-css/semantic.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./lib/context/AuthContext/AuthContextProvider";

function App() {
  const queryClient = new QueryClient();
  return (
    <div style={{ backgroundImage: `url(../src/assets/img/img1.jpg)` }} className=" w-full mb-10">
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <BrowserRouter>
            <Route />
          </BrowserRouter>
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
