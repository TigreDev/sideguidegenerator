import { Honors } from "../Honors";
import GeneratorForm from "./GeneratorForm";
import SideBar from "./SideBar";

function Home() {

    return (
        <div className="min-h-screen relative bg-slate-600 flex flex-col items-center px-6 py-8 gap-6 ">
            <div className=" text-3xl md:text-6xl text-white font-extralight ">
                Side Guide Generator
            </div>
            <div className="flex w-full flex-col md:flex-row justify-center gap-6">
                <SideBar />
                <GeneratorForm />
            </div>
            <Honors />
        </div>
    );
}

export default Home;
