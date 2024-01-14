import { StoredGuidesContextProvider } from "./components/StoredGuidesContext/StoredGuidesContextProvider";
import Home from "./components/Home/Home";


function App() {

  return (
    <StoredGuidesContextProvider>

      <Home />
    </StoredGuidesContextProvider>
  );
}

export default App;
