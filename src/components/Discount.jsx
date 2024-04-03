import React, { useState, useEffect } from 'react';

export function Discount() {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [minutes, seconds]);

    return (
        <div className="bg-[#f9deb3]  items-center flex p-3 gap-2  h-14">
            <div className="bg-[#f6c67a] rounded-lg h-8 flex w-44 items-center justify-center p-2 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5a481f" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                </svg>

                <span className="text-[#5a481f] font-lato-bold text-[8px] md:text-sm lg:text-base font-medium lg:font-bold">One-Time Offer</span>
            </div>
            <span className="font-lato-bold font-bold text-[8px] md:text-sm lg:text-base">Your AI Storyboarding Bundle Discount expires in</span>
            <span className="text-[#d48391] p-1 font-medium lg:font-bold bg-[#fae7c7] border-2 text-[8px] md:text-sm lg:text-base border-[#fae7c7] rounded-lg font-lato-bold">
                {`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`} 
            </span>
            <span className="bg-[#ea9aa3] text-black border-2 p-1 text-[8px] md:text-sm lg:text-base  border-[#ea9aa3] font-bold rounded-lg font-lato-bold cursor-pointer">Claim Discount</span>
        </div>
    );
}
