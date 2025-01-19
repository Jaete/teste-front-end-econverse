interface InputProps {
    type: string,
    placeholder: string,
    className: string,
    innerText?: string
}

export default function Input({className, type, placeholder, innerText}: InputProps){
    return (
        <>
            <input className={className} type={type} placeholder={placeholder}></input>
        </>
    )
}