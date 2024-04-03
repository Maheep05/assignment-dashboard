export function StoryBoardCard({ imageUrl , description }) {
    return (
        <div className="max-w-sm rounded overflow-hidden border-2 border-gray-200 ">
            <img className="w-full" src={imageUrl} alt="Card" />
            <div className="px-6 py-4">
                <p className="font-semibold text-lg  md:text-2xl lg:text-3xl font-lato-bold whitespace-normal break-words">{description}</p>
                <div className="text-gray-400 text-base">updated on 19 march 2024</div>
            </div>
        </div>
    )
}