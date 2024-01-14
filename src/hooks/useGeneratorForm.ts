import { ChangeEvent, useEffect, useState } from "react";
import { Matchup, getMatchups } from "../utils/tablegenerator";
import { useStoredGuidesContext } from "../components/StoredGuidesContext/useStoredGuidesContext";

export const useGeneratorForm = () => {
    const [guideOutput, setGuideOutput] = useState<Matchup[]>();
    const [guideText, setGuideText] = useState("");
    const [colorSchema, setColorSchema] = useState("default");
    const { currentGuide, setCurrentGuide } = useStoredGuidesContext()

    useEffect(() => {
        if (!currentGuide) {
            return;
        }
        setGuideText(currentGuide.info)
        setCurrentGuide(null);

    }, [currentGuide]);

    const generateOutput = () => {
        if (guideText === "") {
            setGuideOutput(undefined)
            return;
        }
        const matchups = getMatchups(guideText);
        setGuideOutput(matchups);
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setGuideText(e.target.value)
    }

    return {
        guideText,
        setGuideText,
        guideOutput,
        colorSchema,
        setColorSchema,
        generateOutput,
        handleChange,
    }
}