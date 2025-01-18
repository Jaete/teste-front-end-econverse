interface BlockButtonProps {
    text: string
}

export default function BlockButton({text}: BlockButtonProps){
    return(
        <button>
            {text}
        </button>
    );
}