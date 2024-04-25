import Add from "../assets/Iconos/Add_round_duotone.svg";
import { Link } from "react-router-dom";
import { useLocalStorage } from './Contexto';

const Principal = () => {
    const { localStorageData, deleteAllLocalStorageData } = useLocalStorage();

    const handleDeleteAll = () => {
        const isConfirmed = window.confirm("¿Estás seguro de que deseas eliminar todas las notas?");
        if (isConfirmed) {
            deleteAllLocalStorageData(); // Llamar a la función para eliminar todas las notas
        }
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
                    {Object.values(localStorageData).map(note => (
                        note && note.icon ? ( 
                            <div key={note.id} className="bg-gray-200 py-4 h-8/12 rounded-lg">
                                <Link to={{ pathname: "/Detalles", state: { selectedNote: note } }} className="flex flex-row items-center justify-between px-6">
                                    <div className="flex items-start gap-10">
                                        <div className="flex bg-white rounded-md h-10 w-10">
                                            <p className="flex justify-center text-3xl">{note.icon}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="flex justify-start text-center font-semibold text-2xl">{note.taskName}</h1>
                                            <p>{note.description}</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-center">
                                            <h2>{note.status}</h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ) : null
                    ))}
                </div>

                <div className="flex flex-row py-10 gap-4">
                    <button onClick={handleDeleteAll} className="w-28 h-10 rounded-xl bg-red-500 text-white">Delete All</button>
                </div>
            </article>
        </>
    );
}

export default Principal;
