import Add from "../assets/Iconos/Add_round_duotone.svg"
import { Link } from "react-router-dom"
import { useLocalStorage } from './Contexto';
import { useState } from "react"


const Principal = () => {

    const { localStorageData } = useLocalStorage();
    const [selectedNote, setSelectedNote] = useState(null); // Estado para la nota seleccionada

    const handleNoteClick = (index) => {
        setSelectedNote(localStorageData[index]); // Guarda la nota seleccionada
    };

    return (
        <>
            <article className="flex flex-col items-center justify-center py-4 gap-10">

                <Link to="/Detalles" className="flex flex-row bg-orange-200 py-4 w-5/12 h-18 rounded-lg items-center justify-between px-6">
                    <div className="flex flex-1 items-start gap-10">
                        <div className="flex bg-yellow-500 rounded-md h-10 w-10 justify-center">
                            <img src={Add} alt="" className="flex w-6 justify-center" />
                        </div>
                        <h1 className="flex justify-center items-center text-center font-semibold text-2xl">Add new task</h1>
                    </div>
                </Link>


                <div className="flex flex-col gap-4">
                    {localStorageData.length > 0 ? (
                        localStorageData.slice(0).reverse().map((task, index) => (
                            <div key={index} onClick={() => handleNoteClick(index)}>
                            <Link key={index} to="/Detalles" className="flex flex-row bg-gray-200 py-4 h-8/12 rounded-lg items-center justify-between px-6">
                                <div className="flex items-start gap-10">
                                    <div className="flex bg-white rounded-md h-10 w-10">
                                        <p className="flex justify-center text-3xl">{task.icon}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="flex justify-start text-center font-semibold text-2xl">{task.taskName}</h1>
                                        <p>{task.description}</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-center">
                                        <h2>{task.status}</h2>
                                    </div>
                                </div>
                            </Link>
                            </div>
                        ))
                    ) : (
                        <p>No hay notas guardadas.</p>
                    )}
                </div>

              

            </article>

        </>
    );


}

export default Principal;