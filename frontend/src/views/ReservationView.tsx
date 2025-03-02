import ReservationCard from "../components/ReservationCard";
import { getAllData, getOne, createData, updateData } from "../api.js";
import { useState, useEffect } from "react";

function ReservationView()
{
        // Data
        const [data, setData] = useState<any[]>([]);
        const [oneData, setOneData] = useState<any[]>([]);
        const [request, setRequest] = useState(true); // TRUE = POST, FALSE = UPDATE
        const [formData, setFormData] = useState("");

        // Modal
        const [modal, setModal] = useState(false);

        useEffect(() =>
        {
                fetchAllData();                
        }, [])
        
        async function fetchAllData()
        {
                const result = await getAllData();
                setData(result);
        }

        async function fetchOneData(dateValue: string)
        {
                const result = await getOne(dateValue);
                setOneData(result);                            
        }

        function handleModalChange()
        {
                if (modal)
                        setModal(false);
                else
                        setModal(true);
        }

        interface RequestResult
        {
                reservationFound: boolean;
        }
        interface Reservation
        {
                reservationDate: Date,
                isOccupied: boolean;
        }

        async function handleReservation(e: React.ChangeEvent<HTMLFormElement>)
        {
                e.preventDefault();
                const result = await fetchOneData(formData);                
                
                if (((oneData as unknown) as RequestResult).reservationFound == true)
                        {
                                if (((oneData as unknown) as Reservation).isOccupied == false)
                                {
                                        const result = await updateData(formData, true);
                                        console.log("Update result: " + result);
                                }
                                else
                                {
                                        console.log("Already have one reservation with that date!");
                                }                        
                        }
                        else
                        {
                                const result = await createData(formData);
                                console.log("Creation result: " + result);
                        }
                
        }

        function handleChange(e: React.ChangeEvent<HTMLInputElement>)
        {
                const dateValue = e.target.value;
                setFormData(dateValue);
        }

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
                                        <p className="text-left p-4 font-bold text-[#a6a6a6] flex">Mis reservaciones
                                                <button onClick={handleModalChange} className="flex pl-2">| Agregar 
                                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                                        viewBox="0 0 24 24" 
                                                        fill="currentColor" className="size-7 ml-1">
                                                        <path fillRule="evenodd" 
                                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                                                        clipRule="evenodd" />
                                                        </svg>
                                                </button>
                                        </p>
                                </div>
                                {                                        
                                        data?.length > 0 ?
                                        (                                                
                                                data?.map((item, i) =>
                                                {                                                                                                                                                                                                                         
                                                        return <ReservationCard key={i} dateValue={item?.reservationDate}/>
                                                })
                                        ) :
                                        (
                                                <p>Cargando...</p>
                                        )
                                }                                
                        </div>
                        {
                                modal ?
                                (
                                        <div className="absolute z-1 top-0 w-full h-full font-bold bg-black/30 backdrop-blur-sm">
                                                
                                                <div className="relative w-70 h-70 top-20 m-auto bg-white place-items-center">
                                                        <button onClick={handleModalChange}>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24" 
                                                                fill="currentColor" 
                                                                className="size-6">
                                                                <path 
                                                                fillRule="evenodd" 
                                                                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                                                </svg>
                                                        </button>
                                                        <div className="relative top-20">
                                                                <h2>Ingresa una fecha</h2>
                                                                <form onSubmit={handleReservation}>
                                                                        <input onChange={handleChange} type="date" required/>
                                                                        <br/><button>Reservar</button>
                                                                </form>
                                                        </div>
                                                </div>
                                        </div>
                                ) : null
                        }
                </>
        )
}

export default ReservationView;