import X from "../assets/Iconos/close_ring_duotone.svg"
import Time from "../assets/Iconos/Time_atack_duotone.svg"
import Done from "../assets/Iconos/Done_round_duotone.svg"
import { useState, useEffect } from "react";
import DetallesGuardados from "./DetallesGuardados";

function Detalles() {

    const [selectedStatus, setSelectedStatus] = useState('');

    const [form, setForm] = useState({
        taskName: '',
        description: '',
        icon: '',
        status: '',
    });

    const handleSave = () => {
        const { taskName, description, icon, status } = form;
        const formData = { taskName, description, icon, status };
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Información guardada con éxito.');
    };

    // Función para manejar el clic en el botón de borrar
    const handleDelete = () => {
        // Borrar la información del localStorage
        localStorage.removeItem('formData');
        alert('Información borrada.');
    };

    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            setForm(JSON.parse(storedData));
        }
    }, []);

    const handleChange = (event, field) => {
        const value = event.target.value;
        setForm(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(form));
    }, [form]);


    const iconos = ["👨🏻‍💻", "💬", "🏋️‍♂️", "☕", "📚", "⏰"];

    const [selectedIcon, setSelectedIcon] = useState('');

    // Nombre de la clave para el localStorage
    const localStorageKey = 'selectedIcon';

    // Función para manejar el cambio de icono seleccionado
    const handleIconSelect = (icon) => {
        setSelectedIcon(icon);
        // Guardar el icono seleccionado en localStorage
        localStorage.setItem(localStorageKey, icon);
    };

    // Efecto para cargar el icono seleccionado al cargar la página
    useEffect(() => {
        // Recuperar el icono seleccionado desde localStorage
        const storedIcon = localStorage.getItem(localStorageKey);
        if (storedIcon) {
            setSelectedIcon(storedIcon);
        }
    }, []);


    return (
        <>

            <header className="flex justify-around items-center py-6 px-10">
                <h1 className="flex text-2xl font-medium">Task Details</h1>
                <div className="flex justify-center bg-white">
                    <img src={X} alt="" className="flex bg-red-500 rounded-md h-10 w-10 justify-center" />
                </div>
            </header>

            <article className="flex justify-center items-center">

                <section className="flex flex-col py-10 px-10 items-start">
                    <form className="flex justify-center items-center">
                        <label className="block  text-xs font-bold text-gray-600">
                            Task Name
                            <div className="flex py-6">
                                <input
                                    className=" py-4 px-60 w-full border rounded-xl text-gray-600 focus:border-blue-900 focus:outline-none"
                                    placeholder="Enter a task"
                                    value={form.taskName}
                                    onChange={(e) => handleChange(e, 'taskName')}
                                />
                            </div>
                        </label>
                    </form>


                    <div>
                        <form className="flex justify-center items-center py-6">
                            <label className="block  text-xs font-bold text-gray-600">
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
                            {/* Renderizar la lista de iconos */}
                            {iconos.map((icono, index) => (
                                <span
                                    key={index}
                                    style={{ fontSize: '24px', cursor: 'pointer' }}
                                    className={`w-10 h-10 bg-gray-300 inline-flex items-center justify-center rounded-lg mx-2 hover:bg-yellow-500 ${selectedIcon === icono ? 'hover:bg-yellow-500' : ''}`}
                                    onClick={() => handleIconSelect(icono)}
                                >
                                    {icono}
                                </span>
                            ))}
                        </div>
                    </div>

                    <section>
                        <h3 className="text-xs font-bold text-gray-600 pt-10">Status</h3>
                        <ul className="grid grid-cols-2 gap-4 py-6">
                            <li>
                                <div className="flex rounded-md w-72 h-12 justify-start py-4 border border-gray-400">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-yellow-500 rounded-md h-10 w-10 flex items-center justify-center mx-1">
                                            <img src={Time} alt="Clock" />
                                        </div>
                                        <h1 className="font-semibold text-base">In Progress</h1>
                                    </div>
                                    <select
                                        className="w-full h-full border-none focus:outline-none"
                                        value={selectedStatus === 'in_progress' ? 'in_progress' : ''}
                                        onChange={() => setSelectedStatus('in_progress')}
                                    >
                                        <option value="" disabled hidden>Select Status</option>
                                        <option value="in_progress">X</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div className="flex rounded-md w-72 h-12 justify-start py-4 border border-gray-400">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-green-500 rounded-md h-10 w-10 flex items-center justify-center mx-1">
                                            <img src={Done} alt="Check" className="w-6 h-6" />
                                        </div>
                                        <h1 className="font-semibold text-base">Completed</h1>
                                    </div>
                                    <select
                                        className="w-full h-full border-none focus:outline-none"
                                        value={selectedStatus === 'completed' ? 'completed' : ''}
                                        onChange={() => setSelectedStatus('completed')}
                                    >
                                        <option value="" disabled hidden>Select Status</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div className="flex rounded-md w-72 h-12 justify-start py-4 border border-gray-400">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-red-500 rounded-md h-10 w-10 flex items-center justify-center mx-1">
                                            <img src={X} alt="Delete" className="w-6 h-6" />
                                        </div>
                                        <h1 className="font-semibold text-base">Won’t do</h1>
                                    </div>
                                    <select
                                        className="w-full h-full border-none focus:outline-none"
                                        value={selectedStatus === 'wont_do' ? 'wont_do' : ''}
                                        onChange={() => setSelectedStatus('wont_do')}
                                    >
                                        <option value="" disabled hidden>Select Status</option>
                                        <option value="wont_do">Won’t Do</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <div className="flex flex-row py-10 gap-4">
                        <button onClick={handleDelete} className="w-28 h-10 rounded-xl bg-gray-300 text-white">Delete</button>
                        <button onClick={handleSave} className="w-28 h-10 rounded-xl bg-blue-500 text-white">Save</button>
                    </div>
                    <DetallesGuardados formData={form} />
                </section>
            </article>
        </>

    );
}

export default Detalles;