import { MdLocationPin } from "react-icons/md";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
useSelector
function FindExpert() {

    const [expertsData, setExpertsData] = useState([]);

    const { experts, loading, error } = useSelector((state) => state.experts);
    console.log(expertsData);


    useEffect(() => {
        setExpertsData(experts.data)
    }, [experts])

    return (
        <div className="max-w-full h-auto mx-auto border-2 border-purple-500">
            <div className="flex justify-between gap-2">


                <div className="w-[70%] mx-auto border-2 border-blue-500 flex flex-wrap gap-4 p-4">
                    {expertsData && expertsData.length > 0 ? (
                        expertsData.map((item, index) => (
                            <div
                                key={index}
                                className="border rounded-md border-gray-300 w-full md:w-[32%] min-h-[595px] shadow-md p-4"
                            >
                                <div className="flex justify-center mb-4">
                                    <img
                                        className="w-[345px] h-[270px] object-cover bg-white rounded"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
                                        alt="Profile"
                                    />
                                </div>

                                <div className="px-2 mb-4">
                                    <h2 className="text-xl font-semibold text-gray-800">{item.first_name}</h2>
                                    <p className="text-gray-600 border-b pb-2 border-gray-300">Subtitle</p>
                                </div>

                                <div className="px-2 space-y-2 text-gray-700">
                                    <p className="flex items-center gap-2">
                                        <MdLocationPin className="text-xl text-red-500" />
                                        <span>Location</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaGoogleScholar className="text-xl text-blue-500" />
                                        <span>Education</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaToolbox className="text-xl text-green-600" />
                                        <span>Profession</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaLanguage className="text-xl text-purple-600" />
                                        <span>Language</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <RiCompassDiscoverFill className="text-xl text-yellow-600" />
                                        <span>Navigation</span>
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No data found</p>
                    )}
                </div>





                <div className="w-[30%] border-2 border-green-500">
                    <h2>Right Area</h2>
                </div>
            </div>
        </div>
    )
}

export default FindExpert;