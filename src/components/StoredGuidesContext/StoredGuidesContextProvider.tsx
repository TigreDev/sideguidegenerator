import { ReactNode, createContext, useState } from "react";


export type StoredGuidesType = {
    name: string,
    info: string
}

export type StoredGuidesContextType = {
    storedGuides: StoredGuidesType[],
    addGuide: (guide: StoredGuidesType) => void,
    removeGuide: (name: string) => void,
    getGuideByName: (name: string) => void,
    updateGuide: (guide: StoredGuidesType) => void,
    error: string | null,
    showError: (error: string) => void;
    removeError: () => void;
}

export const StoredGuidesContext = createContext<StoredGuidesContextType | null>(null)

const findGuideByName = (guideName: string, storedGuides: StoredGuidesType[]) => storedGuides.filter(storedGuide => storedGuide.name === guideName);

export const StoredGuidesContextProvider = ({ children }: { children: ReactNode }) => {
    const [error, setError] = useState<string | null>(null)
    const [storedGuides, setStoredGuides] = useState<StoredGuidesType[]>([]);

    const addGuide = (guide: StoredGuidesType) => {
        const existGuide = findGuideByName(guide.name, storedGuides);
        if (existGuide) {
            setError('Name of the guide is already used.');
        }
        setStoredGuides(storedGuides => [...storedGuides, guide]);
    }

    const removeGuide = (guideName: string) => {
        const existGuide = findGuideByName(guideName, storedGuides);
        if (!existGuide) {
            setError('Name of the guide doesnt exist');
        }
        setStoredGuides(storedGuides => storedGuides.filter(currentGuide => currentGuide.name === guideName));
    }

    const getGuideByName = (guideName: string) => {
        const existGuide = findGuideByName(guideName, storedGuides);
        if (!existGuide) {
            setError('Name of the guide doesnt exist');
        }
        return storedGuides.find(storeGuide => storeGuide.name === guideName)
    }

    const updateGuide = (guide: StoredGuidesType) => {
        const existGuide = findGuideByName(guide.name, storedGuides);
        if (!existGuide) {
            setError('Name of the guide doesnt exist');
        }
        setStoredGuides(storedGuides => storedGuides.map(currentGuide => currentGuide.name === guide.name ? guide : currentGuide))
    }

    const showError = (error: string) => setError(error);
    const removeError = () => setError(null);

    return (
        <StoredGuidesContext.Provider value={{
            storedGuides,
            addGuide,
            removeGuide,
            getGuideByName,
            updateGuide,
            error,
            showError,
            removeError
        }}>
            {children}
        </StoredGuidesContext.Provider>
    )
}