import { ChangeEvent, useState } from "react";
import { Matchup, getMatchups } from "./utils/tablegenerator";
import { MatchupTable } from "./MatchupTable";

function App() {
  const [guideText, setGuideText] = useState("")
  const [guideOutput, setGuideOutput] = useState<Matchup[]>();

  const handleProcessor = () => {
    const matchups = getMatchups(guideText);
    setGuideOutput(matchups);
    console.log(matchups)
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setGuideText(e.target.value)
  }

  return (
    <div className="min-h-screen bg-slate-600 flex flex-col items-center px-6 py-8 gap-6 ">
      <div className=" text-3xl md:text-6xl text-white ">
        Side Guide Generator
      </div>
      <textarea className="w-full min-h-32 md:min-h-96 md:w-[550px] px-4 py-2 overflow-y-scroll" value={guideText} onChange={handleChange} />
      <button className=" w-20 py-2 shadow-md bg-yellow-200 rounded-[3px]" onClick={handleProcessor}>Try</button>
      {guideOutput && <MatchupTable matchups={guideOutput} />}
    </div>
  );
}

export default App;
