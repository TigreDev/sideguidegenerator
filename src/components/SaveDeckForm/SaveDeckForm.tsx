import { ChangeEvent, useState } from "react";
import { useStoredGuidesContext } from "../StoredGuidesContext/useStoredGuidesContext";
import { useEffect } from "react";
import { Button } from "../Button";

export const SaveDeckForm = ({ guide }: { guide: string }) => {
    const [deckName, setDeckName] = useState<string>("");
    const { addOrUpdateGuide, showError, currentGuide } = useStoredGuidesContext();

    const handleSave = () => {
        if (deckName === "") {
            return showError('Name should not be empty')
        }
        addOrUpdateGuide({
            info: guide,
            name: deckName
        })
    }

    useEffect(() => {
        if (!currentGuide) {
            return;
        }
        setDeckName(currentGuide.name)

    }, [currentGuide]);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDeckName(e.target.value)
    }

    return (<div className="flex flex-row shadow-md w-full">
        <input type="text" value={deckName} onChange={handleChange} className="px-2 rounded-l-[3px] w-full" placeholder="Deck name" />
        <Button className="w-20 py-2 rounded-l-none" onClick={handleSave}>Save</Button>
    </div>)
}