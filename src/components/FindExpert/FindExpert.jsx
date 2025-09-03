import { MdLocationPin } from "react-icons/md";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Card from "../UI/Card";
import Form from "../UI/Form";
import Pagination from "../UI/Pagination";
useSelector
function FindExpert() {

    const [expertsData, setExpertsData] = useState([]);

    const { experts, loading, error } = useSelector((state) => state.experts);

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(fetchExpertsStart());
        // dispatch({ type: 'FETCH-EXPERT', data: { current: 1 } });

    }, []);


    useEffect(() => {
        setExpertsData(experts.data)
    }, [experts])

    return (
        <div className="max-w-full h-auto mx-auto ">
            <div className="flex justify-between gap-2">


                <div className="w-[70%] mx-auto  flex flex-wrap gap-4 p-4">
                    {expertsData && expertsData.length > 0 ? (
                        expertsData.map((item, index) => (
                            <div
                                key={index}
                                className="border rounded-md border-gray-300 w-full md:w-[32%] min-h-[595px] shadow-md p-4"
                            >
                                <div className="flex justify-center mb-4">
                                    <img
                                        className="w-[345px] h-[270px]  bg-white rounded"
                                        src={item.avatar}
                                        alt="Profile"
                                    />
                                </div>

                                <div className="px-2 mb-4">
                                    <h2 className="text-xl font-semibold text-gray-800">{item.first_name}</h2>
                                    <p className="text-gray-600 border-b pb-2 border-gray-300 text-sm">{item.category.map(ctg => ctg.name).join(', ')}</p>
                                </div>

                                <div className="px-2 space-y-2 text-gray-700">
                                    <p className="flex items-center gap-2">
                                        <MdLocationPin className="text-xl text-red-500" />
                                        <span>{item.default_location.map((loc) => { return loc.name })}</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaGoogleScholar className="text-xl text-blue-500" />
                                        <span>{item.degrees.map((deg) => { return deg.name })}</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaToolbox className="text-xl text-green-600" />
                                        <span>Profession</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaLanguage className="text-xl text-purple-600" />
                                        <span>{item.languages.map((lng) => lng.name).join(', ')}</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <RiCompassDiscoverFill className="text-xl text-yellow-600" />
                                        <span>Navigation</span>
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="h-screen w-full flex justify-center items-center">
                            <div className="">

                                <img src="http://192.168.1.8:3000/static/media/loader.856031acc740289c0a09.gif" alt="" />
                                <p className="text-gray-500 min-h-500px">Loading...</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-[30%] p-4">
                    <Card className='w-full' />
                    <Form />
                </div>

            </div>
            <Pagination type={'FETCH-EXPERT'} total={experts?.total} per_page={experts?.per_page} />
        </div>
    )
}

export default FindExpert;