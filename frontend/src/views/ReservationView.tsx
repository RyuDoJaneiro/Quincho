function ReservationView()
{
        return (
                <>
                        <div className="absolute z-1 top-40 left-10 w-50 h-60 rounded-sm bg-white">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" fill="currentColor"
                                className="size-40 m-auto mt-5">
                                <path 
                                fillRule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                clipRule="evenodd" />
                                </svg>
                                <h1 className="text-center mt-2 font-bold">Lautaro</h1>
                        </div>
                        <div className="absolute z-1 top-40 left-70 w-250 h-100 rounded-sm bg-white">
                                <div className="w-full h-15 border-b-3 border-[#e3e3e3]">
                                        <p className="text-left p-4 font-bold text-[#a6a6a6]">Mis reservaciones</p>
                                </div>
                        </div>
                </>
        )
}

export default ReservationView;