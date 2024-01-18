import { StoredGuidesContextProvider } from "./components/StoredGuidesContext/StoredGuidesContextProvider";
import Home from "./components/Home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <StoredGuidesContextProvider>
      <Home />
      <ToastContainer closeOnClick hideProgressBar pauseOnHover={false} />
    </StoredGuidesContextProvider>
  );
}

export default App;
