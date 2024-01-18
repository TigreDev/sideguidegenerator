import { MatchupTable } from "../../MatchupTable";
import { useGeneratorForm } from "../../hooks/useGeneratorForm";
import { placeholderText } from "../../utils/const";
import { Button } from "../Button";
import { PrintButton } from "../PrintButton/PrintButton";
import { SaveDeckForm } from "../SaveDeckForm/SaveDeckForm";

function GeneratorForm() {
    const { guideText, handleChange, setColorSchema, generateOutput, setGuideText, colorSchema, guideOutput } = useGeneratorForm();

    return (
        <div className="flex flex-col items-center gap-6 ">
            <SaveDeckForm guide={guideText} />
            <textarea className="w-full min-h-32 md:min-h-96 md:w-[550px] px-2 py-2 overflow-y-scroll rounded-[3px]" value={guideText} onChange={handleChange} id='guideText' placeholder={placeholderText} />
            <div className="flex flex-row gap-4 ">
                <button className="bg-gray-200 rounded-full min-w-10 min-h-10 hover:bg-gray-300 " onClick={() => setColorSchema("grays")} />
                <button className="bg-gradient-to-r from-red-300 to-green-300 rounded-full min-w-10 min-h-10 hover:bg-gradient-to-r hover:from-red-400 hover:to-green-400" onClick={() => setColorSchema("default")} />
                <Button className="w-20 py-2" onClick={generateOutput}>Generate</Button>
                <Button className="w-20 py-2" onClick={() => setGuideText("")}>Clear text</Button>
                <PrintButton className="w-20 py-2" disabled={!guideOutput} />
            </div>
            <div >
                {guideOutput && <MatchupTable matchups={guideOutput} colorSchema={colorSchema} />}
            </div>
        </div>
    );
}

export default GeneratorForm;
