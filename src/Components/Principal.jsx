import { Input } from "keep-react";
import { useLocalStorage } from "./Contexto";
import { ModalComponent } from "./ui/Modal";
import { Link } from "react-router-dom";
import { filterNotesByPriority } from "../Services/taskFilter";
import { useState, useMemo } from "react";

const Principal = ({ selectedDate }) => {

    const { localStorageData } = useLocalStorage();
    const task = Object.values(localStorageData);

    const [filterPriority, setFilterPriority] = useState("");

    const taskFilter = useMemo(() => {
        return filterNotesByPriority(task, filterPriority);
    }, [task, filterPriority]);

    const handleChangeFilterPriority = (e) => {
        setFilterPriority(e.target.value);
    };

    return (
        <>
            <section className="flex flex-col py-14 px-4 md:px-10 mx-4 md:mx-10 rounded-md border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">
                <header className="flex flex-col md:flex-row py-6 md:py-10 justify-between dark:text-white dark:bg-black">
                    <div className="mb-4 md:mb-0 md:w-1/2 md:pr-4">
                        <div className="flex flex-col font-light gap-2">
                            <h1>Welcome back!</h1>
                            <p>Here's a list of your tasks for this month!</p>
                        </div>
                        <div className="flex py-2">
                            <Input
                                type="text"
                                id="Description"
                                name="taskDescription"
                                className="w-full md:w-72 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none dark:text-white dark:bg-black"
                                placeholder="Filter by priority..."
                                value={filterPriority}
                                onChange={handleChangeFilterPriority}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <Link to="/Detalles" className="mb-4 md:mb-0">
                            <button type="button" className="ext-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add new task</button>
                        </Link>
                    </div>
                </header>

                <div className="bg-gray-200 py-2 rounded border border-black dark:border-white text-black dark:text-white dark:bg-black">
                    <div className="flex flex-row space-x-4 justify-around items-center text-start py-2 text-sm font-light font-sans">
                        <p className="font-bold">Icon</p>
                        <p className="font-bold">Title:</p>
                        <p className="font-bold">Description:</p>
                        <p className="font-bold">Status:</p>
                        <p className="font-bold">Priority:</p>
                    </div>
                </div>

                {taskFilter.map((task) => (
                    <div key={task.id} className="bg-gray-200 dark:bg-black py-4 rounded border border-black dark:border-white h-20">
                        <div className="flex flex-row space-x-4 justify-around items-center px-6 py-2  text-sm font-light font-sans  dark:text-white dark:bg-black ">
                            <div>
                                <p>{task.icon}</p>
                            </div>
                            <div>
                                <p>{task.taskName}</p>
                            </div>
                            <div>
                                <p>{task.description}</p>
                            </div>
                            <div>
                                <p>{task.status}</p>
                            </div>
                            <div>
                                <p>{task.priority}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {task.filter((task) => !taskFilter.includes(task)).map((task) => (
                    <div key={task.id} className="bg-gray-200 dark:bg-black py-4 rounded border border-black dark:border-white h-20">
                        <div className="flex flex-row space-x-4 justify-around items-center  py-2  text-sm font-light font-sans dark:text-white dark:bg-black">
                            <div>
                                <p>{task.icon}</p>
                            </div>
                            <div>
                                <p>{task.taskName}</p>
                            </div>
                            <div>
                                <p>{task.description}</p>
                            </div>
                            <div>
                                <p>{task.status}</p>
                            </div>
                            <div>
                                <p>{task.priority}</p>
                            </div>
                        </div>
                    </div>


                ))}
                <div className="flex flex-row justify-end py-10 gap-4">
                    <ModalComponent />
                </div>
            </section>
        </>
    );
};

export default Principal;
