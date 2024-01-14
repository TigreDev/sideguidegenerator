import GeneratorForm from "./GeneratorForm";
import { useStoredGuidesContext } from '../StoredGuidesContext/useStoredGuidesContext';
import { Button } from "../Button";

function Home() {
    const { storedGuides, removeGuide, setCurrentGuide } = useStoredGuidesContext()

    return (
        <div className="min-h-screen relative bg-slate-600 flex flex-col items-center px-6 py-8 gap-6 ">
            <div className=" text-3xl md:text-6xl text-white font-extralight ">
                Side Guide Generator
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="flex flex-col h-auto gap-3">
                    <div className="bg-black text-bold w-full rounded-[3px] text-white text-center">
                        Saved decks
                    </div>
                    <div className="w-full md:w-[300px] flex flex-col gap-2" >
                        {storedGuides.map((guide) => (
                            <div className="flex flex-row gap-3" key={`${guide.name}-container`}>
                                <Button className="w-full" key={guide.name} onClick={() => setCurrentGuide(guide)}>
                                    {guide.name}
                                </Button>
                                <Button variant="warning" className="px-3" onClick={() => removeGuide(guide.name)}>X</Button>
                            </div>
                        ))}
                    </div>
                </div>
                <GeneratorForm />
            </div>

        </div>
    );
}

export default Home;
