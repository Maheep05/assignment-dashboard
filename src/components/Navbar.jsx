import { ProgressBar } from "./ProgressBar";

export function Navbar() {
    return (
        <div className="flex p-4 pr-0 items-center bg-white justify-between">
            <div className="flex gap-4 items-center">
                <span className="rounded-full bg-black border-2 font-bold h-12 w-12 text-white flex items-center justify-center text-2xl font-lato-bold">B</span>
                <span className="font-semibold text-3xl font-lato-bold">Project Dashboard</span>
            </div>
            <div className="flex justify-between gap-10">
                <div className="flex items-center gap-2 border-2 px-4 rounded-md w-96">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="grey" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input type="text" placeholder="Search my Storyboards" className="outline-none" />
                </div>
                <div className="bg-[#e9f5fb] flex  items-center gap-3 justify-center w-44  py-1  border-2 rounded-md border-[#c5e2f1]">
                    <ProgressBar />
                    <span className="font-lato-bold font-bold">Quick Start</span>
                </div>
                <span className="border-2 w-12 flex justify-center items-center rounded-full border-black font-lato-bold  bg-gradient-to-l from-[#f6c278] to-[#f9dbd6]">A</span>
                <div className=" bg-black rounded-l-full flex justify-center items-center w-12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                </div>

            </div>
        </div>
    )
}