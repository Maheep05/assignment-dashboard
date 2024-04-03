export function Username({ username }) {
    const firstLetter = username.charAt(0);

    return (
        <div className=" flex gap-6 items-center">
           <span className="border-2 font-bold flex justify-center text-center items-center h-10 w-10 rounded-full border-black text-xl  bg-gradient-to-l from-[#f6c278] to-[#f9dbd6]">{firstLetter}</span>
            <span className="text-lg  md:text-2xl lg:text-3xl font-lato-bold font-bold">{username}</span>
        </div>
    )
}
