import X from "../assets/Iconos/close_ring_duotone.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Input } from 'keep-react'
import { useLocalStorage } from "./Contexto";
import { useLocationService } from "../Services/locationService";

function Detalles() {

    const [selectedIcon, setSelectedIcon] = useState('');
    const { location, navigate } = useLocationService();
    const { localStorageData, updateLocalStorageData } = useLocalStorage();

    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        taskName: '',
        description: '',
        status: '',
        priority: ''
    });

    useEffect(() => {
        if (location.state && location.state.selectedNote) {
            setForm(location.state.selectedNote);
        }
    }, [location.state]);

    const handleChange = (event, field) => {
        const value = event.target.value;
        setForm(prevState => ({
            ...prevState,
            [field]: value
        }));
    };
    const handleSaveData = () => {
        // Validar entrada
        if (!form.taskName.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                taskName: "Task name is required",
            }));
            return;
        }

        if (!form.description.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                description: "Description is required",
            }));
            return;
        }

        // Restablecer errores si la validación es exitosa
        setErrors({});

        const id = uuidv4();
        const newNote = { ...form, id };

        // Guardar la nota actualizada
        updateLocalStorageData(newNote);
        navigate("/");
    };

    const handleDelete = (id) => {
        const updatedData = { ...localStorageData };
        delete updatedData[id];
        updateLocalStorageData(updatedData); 
        navigate("/");
    };

    const handleIconChange = (e) => {
        const icon = e.target.value;
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
            setForm(prevState => ({
                ...prevState,
                icon: storedIcon
            }));
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

                <section className="flex flex-col py-10 px-10 justify-center items-start">
                    <form className="flex justify-center items-center">
                        <label className="text-sm font-bold text-gray-600">
                            Task Name
                            <Input
                                type="text"
                                id="name"
                                className={`w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none ${errors.taskName && "border-red-500"}`}
                                placeholder="Enter a task"
                                value={form.taskName}
                                onChange={(e) => {
                                    handleChange(e, 'taskName');
                                    setErrors((prevErrors) => ({ ...prevErrors, taskName: "" }));
                                }}
                            />
                            {errors.taskName && <p className="text-red-500 text-xs mt-1">{errors.taskName}</p>}
                        </label>
                    </form>

                    <div>
                        <form className="flex justify-center items-center py-6">
                            <label className="text-sm font-bold text-gray-600">
                                Description
                                <Input
                                    type="text"
                                    id="Description"
                                    name="taskDescription"
                                    className={`w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none ${errors.description && "border-red-500"}`}
                                    placeholder="Enter a task description"
                                    value={form.description}
                                    onChange={(e) => {
                                        handleChange(e, 'description');
                                        setErrors((prevErrors) => ({ ...prevErrors, description: "" }));
                                    }}
                                />
                                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                            </label>
                        </form>
                    </div>

                    <div>
                        <h2>Selected Icon: {selectedIcon}</h2>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter an icon"
                                value={selectedIcon}
                                onChange={handleIconChange}
                                className="border border-gray-300 rounded-md px-2 py-1"
                            />
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
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Won’t Do">Won’t Do</option>
                            <option value="Canceled">Canceled</option>

                        </select>
                    </section>


                    <section>
                        <h3 className="text-xs font-bold text-gray-600 pt-10">Priority</h3>
                        <select
                            className="w-full h-full border-none focus:outline-none"
                            value={form.priority}
                            onChange={(e) => handleChange(e, 'priority')}
                        >
                            <option value="" disabled hidden>Select Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </section>

                    <Link to="/">
                        <div className="flex flex-row py-10 gap-6">
                            <button onClick={handleDelete} className="w-28 h-10 rounded-xl bg-red-600 text-white">Delete</button>
                            <button onClick={handleSaveData} className="w-28 h-10 rounded-xl bg-blue-500 text-white">Save</button>
                        </div>
                    </Link>

                </section>
            </article>
        </>
    );
}

export default Detalles;