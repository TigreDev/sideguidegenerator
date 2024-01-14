import { ChangeEvent, useState } from "react";
import { Matchup, getMatchups } from "../utils/tablegenerator";

export const useGeneratorForm = () => {
    const [guideOutput, setGuideOutput] = useState<Matchup[]>();
    const [guideText, setGuideText] = useState("");
    const [colorSchema, setColorSchema] = useState("default");

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