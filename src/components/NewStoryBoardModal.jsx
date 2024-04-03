import React, { useState } from 'react';

export function NewStoryBoardModal({ onClose }) {
    const [storyboardName, setStoryboardName] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [switchPosition, setSwitchPosition] = useState(false);

    function handleSubmit(){
       console.log("Submitted")
    };

    function handleSwitch(){
        setSwitchPosition(!switchPosition);
    };


    const options = [
        { value: 'landscape-16-9', label: 'Landscape 16:9' },
        { value: 'portrait-9-16', label: 'Portrait 9:16' },
        { value: 'square-1-1', label: 'Square 1:1' },
    ];

   
    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const isSubmitDisabled = storyboardName.trim() === '';

    return (
        <div className="fixed z-10 inset-0 overflow-y-hidden">
            <div className="flex items-center justify-center min-h-screen text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>


                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

                    <div className="bg-white flex flex-col justify-center gap-6 p-4">

                        <div className='flex justify-between  items-center'>
                            <span className='text-lg lg:text-3xl font-bold'>New Storyboard</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="grey" className="w-8 h-8 md:w-10 md:h-10 bg-[#e9eae8] rounded-full border-2 border-[#e9eae8] p-1 cursor-pointer" onClick={onClose} >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </div>

                        <div className="">
                            <label className="block text-sm font-medium text-gray-700">Storyboard Name</label>
                            <input type="text" name="storyboardName" id="input1" value={storyboardName} onChange={(e) => setStoryboardName(e.target.value)} placeholder='eg. Default Project StoryBoard' className="mt-1 p-3 block w-full shadow-sm  sm:text-sm border-2 border-gray-300 rounded-md" />
                        </div>

                        <div className="">
                            <label htmlFor="options" className="block text-sm font-medium text-gray-700">Frame Size</label>
                            <select id="options" name="options" value={selectedOption} onChange={handleDropdownChange} className="mt-1 p-3 block w-full shadow-sm  sm:text-sm border-2 border-gray-300 rounded-md">
                                {options.map((option, index) => (
                                    <option key={index} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>


                    </div>

                    <hr />

                    <div className="py-5 px-4  md:py-6 md:px-8 flex flex-col gap-4 sm:flex-row justify-between items-center">
                        <div className='flex  gap-2 items-center justify-center'>
                            <button type="button" onClick={handleSwitch} className='relative inline-block h-4 w-10 rounded-full border-2 border-black focus:outline-none transition-transform ease-in-out duration-300'>
                                <span className={`absolute top-[2px] w-2 h-2 rounded-full bg-black shadow-md transform ${switchPosition ? 'translate-x-2' : '-translate-x-4'}`}></span>
                            </button>
                            <span className='font-semibold text-sm md:text-base'>AI Assistant</span>
                        </div>

                        <button type="button" onClick={handleSubmit} disabled={isSubmitDisabled} className={`${isSubmitDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-black'}  justify-center px-4 py-2 text-sm font-medium rounded-md text-white focus:outline-none`}>
                            Create Storyboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
