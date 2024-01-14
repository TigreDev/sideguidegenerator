import { MatchupTable } from "../../MatchupTable";
import { useGeneratorForm } from "../../hooks/useGeneratorForm";
import GeneratorForm from "./GeneratorForm";

function Home() {
    const { colorSchema, guideOutput } = useGeneratorForm()

    return (
        <div className="min-h-screen bg-slate-600 flex flex-col items-center px-6 py-8 gap-6 ">
            <div className=" text-3xl md:text-6xl text-white font-extralight ">
                Side Guide Generator
            </div>
            <GeneratorForm />
            {guideOutput && <MatchupTable matchups={guideOutput} colorSchema={colorSchema} />}
        </div>
    );
}

export default Home;
