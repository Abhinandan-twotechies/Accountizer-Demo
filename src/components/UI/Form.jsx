import { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";

const SelectBox = ({ label, placeholder, options = [], onChange, value }) => {
    return (
        <div className="mt-1 mb-2">
            <label className="block text-sm font-medium mb-1">{label}</label>
            <select
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue"
            >
                <option value="" disabled>{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

function Form() {
    const dispatch = useDispatch();

    // Redux state
    const location = useSelector((state) => state.experts.location);
    const category = useSelector((state) => state.experts.category);
    const serviceType = useSelector((state) => state.experts.serviceType);
    const pricingType = useSelector((state) => state.experts.pricingType);

    // Dropdown data
    const [locationData, setLocationData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [serviceData, setServiceData] = useState([]);
    const [pricingData, setPricingData] = useState([]);

    // Selected values
    const [selectedCategoryId, setSelectedCategoryId] = useState("");
    const [selectedLocationId, setSelectedLocationId] = useState("");
    const [selectedServiceId, setSelectedServiceId] = useState("");
    const [selectedPriceId, setSelectedPriceId] = useState("");


    const [keyWord, setKeyWord] = useState('');

    // function handle search 
    function handleSearch(e) {
        e.preventDefault();
        const filters = {
            search: keyWord,
            location_id: selectedLocationId,
            category_id: selectedCategoryId,
            service_id: selectedServiceId,
            price_id: selectedPriceId,

        }
        dispatch({ type: "FETCH-EXPERT", payload: new URLSearchParams(filters) })
    }
    // function 

    // Load data from Redux store into component state
    useEffect(() => {
        setLocationData(location.data);
        setCategoryData(category.data);
        setServiceData(serviceType[selectedCategoryId]?.data || []);
        setPricingData(pricingType.data);
    }, [location, category, serviceType, pricingType]);
    // console.log(serviceData, serviceType)
    // Initial fetch on mount
    useEffect(() => {
        dispatch({ type: "FETCH-BY-LOCATION" });
        dispatch({ type: "FETCH-BY-CATEGORY" });
        dispatch({ type: "FETCH-BY-PRICING-TYPE" });

    }, [dispatch,]);

    return (
        <div className="p-2 w-[90%]">
            <form onSubmit={(e) => { handleSearch(e) }}>
                {/* Keyword search input */}
                <div className="mt-1 mb-2">
                    <label htmlFor="keyword-category" className="block text-sm font-medium">
                        Search by keyword
                    </label>
                    <div className="flex w-full rounded-md border border-gray-300  focus-within:border-blue transition">
                        <input
                            id="keyword-category"
                            type="text"
                            value={keyWord}
                            onChange={(e) => setKeyWord(e.target.value)}
                            placeholder="Search by keyword"
                            className="flex-grow px-3 py-1 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Location dropdown */}
                <SelectBox
                    label="Search by expert's location"
                    placeholder="Select location"
                    value={selectedLocationId}
                    onChange={(id) => setSelectedLocationId(id)}
                    options={locationData?.map((loc) => ({
                        label: loc.name,
                        value: loc.id
                    }))}
                />

                {/* Category dropdown */}
                <SelectBox
                    label="Search by category"
                    placeholder="Select category"
                    value={selectedCategoryId}
                    onChange={(id) => {
                        if (serviceType[id]) {
                            setServiceData(serviceType[id]?.data)
                            setSelectedCategoryId(id);
                            return
                        }
                        setSelectedCategoryId(id);
                        dispatch({ type: "FETCH-BY-SERVICE-TYPE", payload: { id } });
                    }}
                    options={categoryData?.map((ctg) => ({
                        label: ctg.name,
                        value: ctg.id
                    }))}
                />

                {/* Service Type dropdown */}
                <SelectBox
                    label="Search by service type"
                    placeholder="Select service type"
                    value={selectedServiceId}
                    onChange={(id) => setSelectedServiceId(id)}
                    options={serviceData?.map((srv) => ({
                        label: srv.name,
                        value: srv.id
                    }))}
                />

                {/* Pricing Type dropdown */}
                <SelectBox
                    label="Search by pricing type"
                    placeholder="Select pricing type"
                    value={selectedPriceId}
                    onChange={(id) => {
                        setSelectedPriceId(id);

                    }}
                    options={pricingData?.map((prc) => ({
                        label: prc.name,
                        value: prc.id
                    }))}
                />

                {/* Remove Filters */}
                <div className="mt-2 mb-2">
                    <Button>Remove Filters</Button>
                </div>

                {/* Search */}
                <div className="mt-2 mb-2">
                    <Button>Search</Button>
                </div>
            </form>
        </div>
    );
}

export default Form;
