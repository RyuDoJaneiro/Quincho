function ReservationCard({dateValue} : {dateValue: string})
{
        return (
                <div className="bg-cover p-5 m-5 border-4 border-[#a6a6a6] rounded-md flex">                        
                        <p className="font-bold">{dateValue}</p>
                        <button>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6 relative left-190">
                                <path 
                                d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                </svg>
                        </button>
                        <button>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                className="size-6 relative left-195">
                                <path 
                                fillRule="evenodd" 
                                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                        </button>
                </div>
        )
}

export default ReservationCard;