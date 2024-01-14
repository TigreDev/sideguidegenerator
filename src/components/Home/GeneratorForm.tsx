import { MatchupTable } from "../../MatchupTable";
import { useGeneratorForm } from "../../hooks/useGeneratorForm";
import { placeholderText } from "../../utils/const";

function GeneratorForm() {
    const { guideText, handleChange, setColorSchema, generateOutput, setGuideText } = useGeneratorForm()

    return (
        <>
            <textarea className="w-full min-h-32 md:min-h-96 md:w-[550px] px-4 py-2 overflow-y-scroll" value={guideText} onChange={handleChange} id='guideText' placeholder={placeholderText} />
            <div className="flex flex-row gap-4">
                <button className="bg-gray-200 rounded-full min-w-10 min-h-10 hover:bg-gray-300 " onClick={() => setColorSchema("grays")} />
                <button className="bg-gradient-to-r from-red-300 to-green-300 rounded-full min-w-10 min-h-10 hover:bg-gradient-to-r hover:from-red-400 hover:to-green-400" onClick={() => setColorSchema("default")} />
                <button className=" w-20 py-2 shadow-md bg-yellow-200 rounded-[3px]" onClick={generateOutput}>Generate</button>
                <button className=" w-20 py-2 shadow-md bg-yellow-200 rounded-[3px]" onClick={() => setGuideText("")}>Clear text</button>
            </div>
        </>
    );
}

export default GeneratorForm;