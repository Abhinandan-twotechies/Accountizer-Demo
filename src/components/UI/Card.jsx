import Button from "./Button";

function Card() {
    return (
        <>
            <div className=" border border-gray-200 rounded-md box-shadow p-4 flex flex-col justify-between gap-5 w-[90%] ">
                <div>
                    <img src="https://accountizer.ca/static/media/help.34a6acc22a90a1c0941c07ff0ebbdc2a.svg" alt="" />
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-semibold">Need Help</h1>
                    <p>Not sure which expert is right for you? Our team will review your request and recommend the best match</p>
                </div>
                <div>
                    <Button >Get Help !</Button>
                </div>
            </div>
        </>
    )
}

export default Card;