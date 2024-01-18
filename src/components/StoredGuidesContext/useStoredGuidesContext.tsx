import { useContext } from "react";
import { StoredGuidesContext } from "./StoredGuidesContextProvider";

export const useStoredGuidesContext = () => {
    const storedGuidesValue = useContext(StoredGuidesContext);

    if (!storedGuidesValue) {
        throw new Error('useStoredGuidesContext must be used within a useStoredGuidesContextProvider');
    }

    return storedGuidesValue;
}