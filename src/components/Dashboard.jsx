import { Navbar } from "./Navbar";
import { ProjectBoard } from "./ProjectBoard";
import { Username } from "./Username";

export function Dashboard() {
    return (
        <div className="bg-[#f5f6f0] ">
            <Navbar />

            <div className="flex flex-col gap-4 md:flex-row justify-between md:items-center p-10 text-center md:p-14">
                <Username username={"Adam Cooper Team"} />
                <button className="px-6 py-2 bg-black text-white font-semibold text-lg  md:text-2xl font-lato-bold rounded-lg">New Project</button>
            </div>

            <div className="px-10">
                <ProjectBoard />
            </div>

            <div className="fixed bottom-10 right-4 bg-gray-800 text-white p-4 rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>

            </div>

        </div>
    )
}