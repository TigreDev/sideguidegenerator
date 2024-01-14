import GeneratorForm from "./GeneratorForm";
import { useStoredGuidesContext } from '../StoredGuidesContext/useStoredGuidesContext';

function Home() {
    const { storedGuides, removeGuide } = useStoredGuidesContext()
    console.log(storedGuides);

    return (
        <div className="min-h-screen bg-slate-600 flex flex-col items-center px-6 py-8 gap-6 ">
            <div className=" text-3xl md:text-6xl text-white font-extralight ">
                Side Guide Generator
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="w-full md:w-[300px] h-8 flex flex-row">
                    {storedGuides.map((guide) => (
                        <>
                            <button className={` bg-orange-600 text-white font-bold w-full mx-3 `} key={guide.name} onClick={() => console.log(guide.info)}>
                                {guide.name}
                            </button>
                            <button className="bg-red-500 text-white font-bold px-2" onClick={() => removeGuide(guide.name)}>X</button>
                        </>
                    ))}
                </div>


                <GeneratorForm />
            </div>
        </div>
    );
}

export default Home;
