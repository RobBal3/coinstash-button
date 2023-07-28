const Button = ({
                    text,
                    size = 'md',
                    color = 'blueLight',
                    isLoading = false,
                    disabled = false
                }) => {
    const baseClasses = `flex items-center justify-center border rounded-full`;
    const colorClasses = {
        blueLight: 'text-white bg-[#5C5BD5] border-[#5C5BD5] hover:bg-transparent hover:text-[#5C5BD5]',
        red: 'text-white bg-red-400 border-red-400 hover:bg-transparent hover:text-[#5C5BD5]',
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-2 text-base',
        lg: 'px-16 py-2 text-lg',
        xlg: 'px-32 py-2 text-xl'
    };

    const buttonClass = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]}`;

    return (
        <button
            className={buttonClass}
            disabled={ isLoading || disabled }
        >
            {isLoading ? (
                <svg
                    className="animate-spin h-6 w-6 mr-3 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v.01M12 8v.01M4.93 19.07A9 9 0 1119.07 4.93 9 9 0 014.93 19.07z"
                    />
                </svg>
            ) : (
                text
            )}
        </button>
    );
};

export default Button;
