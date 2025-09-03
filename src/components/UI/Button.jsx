function Button({ children = 'Button text', color = '', ...props }) {
    return (
        <>
            <div className={`p-1 ${color == 'red' ? 'bg-red-500' : 'bg-blue'} w-full text-center rounded-md`}>
                <button className="p-1 w-full text-white font-semibold" {...props}>{children}</button>
            </div>
        </>
    )
}
export default Button;
