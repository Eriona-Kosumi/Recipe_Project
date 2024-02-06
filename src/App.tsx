import { AuthContextProvider } from "./lib/context/AuthContext/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Routes as Route } from "./routes/Routes";
import 'semantic-ui-css/semantic.min.css'

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="w-full">
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
