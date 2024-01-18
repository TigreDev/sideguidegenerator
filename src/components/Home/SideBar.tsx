import { useState } from 'react';
import { useStoredGuidesContext } from '../StoredGuidesContext/useStoredGuidesContext';
import { Button } from '../Button';
import { ArrowDownSVG } from './TriangleSVG';


function SideBar() {
    const { storedGuides, removeGuide, setCurrentGuide } = useStoredGuidesContext();
    const [isMapVisible, setIsMapVisible] = useState(true);

    const toggleMap = () => {
        setIsMapVisible((prev) => !prev);
    };

    return (
        <div className="flex flex-col h-auto gap-3 w-full md:w-[300px]">
            <div
                className="bg-black text-bold w-full rounded-[3px] text-white text-center cursor-pointer h-10 flex items-center justify-center select-none"
                onClick={toggleMap}
            >
                Saved decks
                <span className={`${isMapVisible ? 'rotate-180' : 'rotate-0'} inline-block`}>
                    <ArrowDownSVG />
                </span>
            </div>
            {isMapVisible && (
                <div className="flex flex-col gap-2 ">
                    {storedGuides.map((guide) => (
                        <div className="flex flex-row gap-3 h-8" key={`${guide.name}-container`}>
                            <Button className="w-full text-left px-4 text-ellipsis" key={guide.name} onClick={() => setCurrentGuide(guide)}>
                                {guide.name}
                            </Button>
                            <Button variant="warning" className="px-3" onClick={() => removeGuide(guide.name)}>
                                X
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SideBar;
