"use client";

export default function Checkbox_Custom({ isActive }: { isActive: boolean }) {
    return (
        <>
            <input type="checkbox" className="hidden" checked={isActive} onChange={()=> isActive} name="" id="" />
            <div
                className={`absolute left-auto right-3 ml-auto w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${isActive
                    ? "border-green-500 bg-green-500"
                    : "border-gray-300 bg-white"
                    }`}
            >
                {isActive && (
                    <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
        </>
    )
}