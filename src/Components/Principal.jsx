import Time from "../assets/Iconos/Time_atack_duotone.svg"
import Done from "../assets/Iconos/Done_round_duotone.svg"
import X from "../assets/Iconos/close_ring_duotone.svg"
import Add from "../assets/Iconos/Add_round_duotone.svg"
import { Link } from "react-router-dom"

function Principal() {
    return (
        <>
            <article className="flex flex-col items-center justify-center py-4 gap-10">

            <Link to="/Detalles">
                <div className="flex flex-row bg-yellow-300 py-4 w-5/12 h-20 rounded-lg items-center justify-between px-6">
                    <div className="flex flex-1 items-start gap-10">
                        <div className="flex  bg-white rounded-md h-10 w-10">
                            <p className="flex justify-center text-3xl">⏰</p>
                        </div>
                        <h1 className="flex justify-center items-center text-center font-semibold text-2xl">Task in Progress</h1>
                    </div>
                    <div className="flex bg-yellow-400 rounded-md h-10 w-10 justify-center">
                        <img src={Time} alt="" className="flex w-6 justify-center" />
                    </div>
                </div>
                </Link>

                <div className="flex flex-row bg-green-300 py-4 w-5/12 h-20 rounded-lg items-center justify-between px-6">
                    <div className="flex flex-1 items-start gap-10">
                        <div className="flex  bg-white rounded-md h-10 w-10">
                            <p className="flex justify-center text-3xl">🏋️‍♂️</p>
                        </div>
                        <h1 className="flex justify-center items-center text-center font-semibold text-2xl">Task Completed</h1>
                    </div>
                    <div className="flex bg-green-400 rounded-md h-10 w-10 justify-center">
                        <img src={Done} alt="" className="flex w-6 justify-center" />
                    </div>
                </div>

                <div className="flex flex-row bg-red-200 py-4 w-5/12 h-20 rounded-lg items-center justify-between px-6">
                    <div className="flex flex-1 items-start gap-10">
                        <div className="flex  bg-white rounded-md h-10 w-10">
                            <p className="flex justify-center text-3xl">☕</p>
                        </div>
                        <h1 className="flex justify-center items-center text-center font-semibold text-2xl">Task Won’t Do</h1>
                    </div>
                    <div className="flex bg-red-500 rounded-md h-10 w-10 justify-center">
                        <img src={X} alt="" className="flex w-6 justify-center" />
                    </div>
                </div>

                <div className="flex flex-row bg-gray-200 py-4 w-5/12 h-28 rounded-lg items-center justify-between px-6">
                    <div className="flex flex-1 items-start gap-10">
                        <div className="flex bg-white rounded-md h-10 w-10">
                            <p className="flex justify-center text-3xl">📚</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="flex justify-start text-center font-semibold text-2xl">Task To Do</h1>
                            <p>Work on a Challenge on devChallenge.io, learn TypeScript.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row bg-orange-200 py-4 w-5/12 h-20 rounded-lg items-center justify-between px-6">
                    <div className="flex flex-1 items-start gap-10">
                        <div className="flex bg-yellow-500 rounded-md h-10 w-10 justify-center">
                            <img src={Add} alt="" className="flex w-6 justify-center" />
                        </div>
                        <h1 className="flex justify-center items-center text-center font-semibold text-2xl">Add new task</h1>
                    </div>
                </div>


            </article>

        </>
    );


}

export default Principal;