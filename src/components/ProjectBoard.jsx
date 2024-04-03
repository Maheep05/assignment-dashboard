import { NewStoryBoardModal } from "./NewStoryBoardModal";
import { StoryBoardCard } from "./StoryBoardCard";
import { useState } from "react";
import img from '../assets/demoImg.jpg';

export function ProjectBoard() {
    const [showModal, setShowModal] = useState(false);

    function handleClick() {
        setShowModal(!showModal);
    }

    function onClose(){
        setShowModal(false);
    }

    const data = [{
        description: "AI Character Demo Storyboard",
        imageUrl: img,
    }]
    return (
        <div className="bg-white flex flex-col justify-center  rounded-lg">
            <div className="flex justify-between px-8 py-4 items-center">
                <div className="flex gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                    </svg>

                    <div className="flex flex-col">
                        <span className="text-lg font-bold font-lato-bold">Default Project</span>
                        <span className=" font-lato-bold text-gray-400">1 storyboard</span>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
            </div>

            <div className="p-4 flex flex-col lg:flex-row gap-3">
                {data.map((details, index) => (
                    <StoryBoardCard key={index} description={details.description} imageUrl={details.imageUrl} />
                ))}

                <div className="md:w-96 h-52 lg:h-96 rounded overflow-hidden border-2 bg-gray-100 border-gray-200 flex lg:flex-row flex-col justify-center items-center cursor-pointer" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#cccdc8" className="w-6 h-6 lg:w-14 lg:h-14 border-[#cccdc8] border-2 rounded-full">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                </div>

            </div>
                    { showModal && <NewStoryBoardModal onClose={onClose}/>} 
        </div>
    )
}