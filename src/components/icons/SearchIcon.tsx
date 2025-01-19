'use client';

const handleClick = () => {
    alert('Pesquisar clicado!');
};

export default function SearchIcon({className}: {className: string}) {
    
    return (
        <div className={className} onClick={handleClick}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_1316)">
                    <path d="M12.6875 21.875C17.7616 21.875 21.875 17.7616 21.875 12.6875C21.875 7.61338 17.7616 3.5 12.6875 3.5C7.61338 3.5 3.5 7.61338 3.5 12.6875C3.5 17.7616 7.61338 21.875 12.6875 21.875Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.1837 19.1843L24.4994 24.5" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_1316">
                        <rect width="28" height="28" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}