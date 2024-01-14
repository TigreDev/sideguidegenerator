import { ReactNode, createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';


export type StoredGuidesType = {
    name: string,
    info: string
}

export type StoredGuidesContextType = {
    storedGuides: StoredGuidesType[],
    addOrUpdateGuide: (guide: StoredGuidesType) => void,
    removeGuide: (name: string) => void,
    getGuideByName: (name: string) => StoredGuidesType | void,
    error: string | null,
    showError: (error: string) => void;
    removeError: () => void;
    currentGuide: StoredGuidesType | null;
    setCurrentGuide: (guide: StoredGuidesType | null) => void
}

export const StoredGuidesContext = createContext<StoredGuidesContextType | null>(null)

const findGuideByName = (guideName: string, storedGuides: StoredGuidesType[]) => storedGuides.find(storedGuide => storedGuide.name === guideName);

export const StoredGuidesContextProvider = ({ children }: { children: ReactNode }) => {
    const [error, setError] = useState<string | null>(null)
    const [storedGuides, setStoredGuides] = useState<StoredGuidesType[]>(
        JSON.parse(localStorage.getItem("storedGuides") || "[]")
    );
    const [currentGuide, setCurrentGuide] = useState<StoredGuidesType | null>(null);


    const addOrUpdateGuide = (guide: StoredGuidesType) => {
        const existGuide = findGuideByName(guide.name, storedGuides);
        if (existGuide) {
            return setStoredGuides(storedGuides => storedGuides.map(currentGuide => currentGuide.name === guide.name ? guide : currentGuide))
        }
        return setStoredGuides(storedGuides => [...storedGuides, guide]);
    }

    const removeGuide = (guideName: string) => {
        const existGuide = findGuideByName(guideName, storedGuides);
        if (!existGuide) {
            return setError('Name of the guide doesnt exist');
        }
        return setStoredGuides(storedGuides => storedGuides.filter(currentGuide => currentGuide.name !== guideName));
    }

    const getGuideByName = (guideName: string) => {
        const existGuide = findGuideByName(guideName, storedGuides);
        if (!existGuide) {
            return setError('Name of the guide doesnt exist');
        }
        return storedGuides.find(storeGuide => storeGuide.name === guideName)
    }

    const showError = (error: string) => setError(error);
    const removeError = () => setError(null);

    useEffect(() => {
        localStorage.setItem("storedGuides", JSON.stringify(storedGuides));
    }, [storedGuides]);

    useEffect(() => {
        if (!error) {
            return;
        }

        toast(error, {
            onClose: removeError
        });
    }, [error]);

    return (
        <StoredGuidesContext.Provider value={{
            storedGuides,
            addOrUpdateGuide,
            removeGuide,
            getGuideByName,
            error,
            showError,
            removeError,
            currentGuide,
            setCurrentGuide,
        }}>
            {children}
        </StoredGuidesContext.Provider>
    )
}