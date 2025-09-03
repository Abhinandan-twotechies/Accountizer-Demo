import { useEffect, useState } from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { useDispatch } from "react-redux";

function Pagination({ type, total, per_page }) {

    const dispatch = useDispatch();
    const [current, setCurrent] = useState(1);

    useEffect(() => {
        dispatch({ type, payload: new URLSearchParams({ page: current }) });
    }, [dispatch, current]);



    return (
        <>
            <div className=" w-full flex justify-end">
                <div className="flex items-center space-x-4 border border-gray-300  px-4 py-2 shadow-sm bg-blue">
                    <button
                        className="flex items-center gap-1 text-sm px-3 py-1 bg-white text-blue-600 border border-blue-600 rounded hover:bg-blue-100  "
                        onClick={() => setCurrent(prev => Math.max(prev - 1, 1))}
                    >
                        <GrFormPreviousLink className="text-lg" />
                        <span>Previous</span>
                    </button>

                    <p className={`text-sm font-medium text-gray-700  px-3 rounded-sm ${current === 1 ? 'bg-white' : 'bg-blue'}`}>1</p>
                    <p className={`text-sm font-medium text-gray-700 px-3 rounded-sm ${current === 2 ? 'bg-white' : 'bg-blue'}`}>2</p>
                    <button
                        className="flex items-center gap-1 text-sm px-3 py-1 bg-white text-blue-600 border border-blue-600 rounded hover:bg-blue-100  "
                        onClick={() => setCurrent(prev => Math.min(prev + 1, 2))}
                    >
                        <span >Next</span>
                        <GrFormNextLink className="text-lg" />
                    </button>
                </div>
            </div>

        </>
    )
}

export default Pagination;