import X from "../assets/Iconos/close_ring_duotone.svg";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./Contexto";
import { v4 as uuidv4 } from 'uuid';


function Detalles() {
    const { localStorageData, updateLocalStorageData } = useLocalStorage();
    const location = useLocation();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState({
        taskName: '',
        description: '',
        status: '',
        icon: ''
    });

    useEffect(() => {
        if (location.state && location.state.selectedNote) {
            setForm(location.state.selectedNote);
            setIsEditing(true);
        }
    }, [location.state]);

    useEffect(() => {
        if (localStorageData) {
            setForm(localStorageData);
        }
    }, [localStorageData]);

    const handleChange = (event, field) => {
        const value = event.target.value;
        setForm(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleSaveData = () => {
        const id = uuidv4(); // Generar ID único
        const newNote = { ...form, id }; // Agregar el ID a la nota
        updateLocalStorageData(newNote); // Guardar la nueva nota
        alert('Nueva nota creada.');
        navigate("/");
    };

    const handleDelete = (id) => {
        const updatedData = { ...localStorageData };
        delete updatedData[id]; // Eliminar la nota con el ID proporcionado
        setLocalStorageData(updatedData);
        alert('Información borrada.');
        navigate("/");
    };

    const iconos = ["👨🏻‍💻", "💬", "🏋️‍♂️", "☕", "📚", "⏰"];
    const [selectedIcon, setSelectedIcon] = useState('');

    const handleIconSelect = (icon) => {
        setSelectedIcon(icon);
        setForm(prevState => ({
            ...prevState,
            icon: icon
        }));
    };

    useEffect(() => {
        const storedIcon = localStorage.getItem('selectedIcon');
        if (storedIcon) {
            setSelectedIcon(storedIcon);
        }
    }, []);

    return (
        <>
            <header className="flex justify-around items-center py-10 px-10">
                <h1 className="flex text-2xl font-medium">Task Details</h1>
                <div className="flex justify-center bg-white">
                    <Link to="/">
                        <img src={X} alt="" className="flex bg-red-500 rounded-md h-10 w-10 justify-center" />
                    </Link>
                </div>
            </header>

            <article className="flex justify-center items-center">
                <section className="flex flex-col py-10 px-10 items-start">
                    <form className="flex justify-center items-center">
                        <label className="text-xs font-bold text-gray-600">
                            Task Name
                            <div className="flex py-6">
                                <input
                                    className=" py-4 px-60 w-full  border rounded-xl text-gray-600 focus:border-blue-900 focus:outline-none"
                                    placeholder="Enter a task"
                                    value={form.taskName}
                                    onChange={(e) => {
                                        handleChange(e, 'taskName');
                                    }}
                                />
                            </div>
                        </label>
                    </form>

                    <div>
                        <form className="flex justify-center items-center py-6">
                            <label className="text-xs font-bold text-gray-600">
                                Description
                                <div className="flex py-4">
                                    <input
                                        className="py-10 px-60 w-full border border-blue-900 rounded-xl text-gray-600 focus:border-blue-900 focus:outline-none"
                                        placeholder="Enter a short description"
                                        value={form.description}
                                        onChange={(e) => handleChange(e, 'description')}
                                    />
                                </div>
                            </label>
                        </form>
                    </div>

                    <div>
                        <h2>Selected Icon: {selectedIcon}</h2>
                        <div>
                            {iconos.map((icono, index) => (
                                <span
                                    key={index} // Utiliza el índice como clave
                                    style={{ fontSize: '24px', cursor: 'pointer' }}
                                    className={`w-10 h-10 bg-gray-300 inline-flex items-center justify-center rounded-lg mx-2 hover:bg-yellow-500 ${selectedIcon === icono ? 'hover:bg-yellow-500' : ''}`}
                                    onClick={() => {
                                        handleIconSelect(icono);
                                        localStorage.setItem('selectedIcon', icono);
                                    }}
                                >
                                    {icono}
                                </span>
                            ))}
                        </div>
                    </div>

                    <section>
                        <h3 className="text-xs font-bold text-gray-600 pt-10">Status</h3>
                        <select
                            className="w-full h-full border-none focus:outline-none"
                            value={form.status}
                            onChange={(e) => handleChange(e, 'status')}
                        >
                            <option value="" disabled hidden>Select Status</option>
                            <option value="in_progress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="wont_do">Won’t Do</option>
                        </select>
                    </section>

                    <Link to={{
                        pathname: "/",
                        state: form
                    }}>
                        <div className="flex flex-row py-10 gap-4">
                            <button onClick={handleDelete} className="w-28 h-10 rounded-xl bg-gray-300 text-white">Delete</button>
                            <button onClick={handleSaveData} className="w-28 h-10 rounded-xl bg-blue-500 text-white">Save</button>
                        </div>
                    </Link>

                </section>
            </article>
        </>
    );
}

export default Detalles;