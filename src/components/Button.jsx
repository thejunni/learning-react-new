import clsx from 'clsx';

const Button = ({ className = 'bg-sky-600', children, text, type = 'submit', ...props }) => {
    return (
        <button
            {...props}
            type={type}
            className={clsx(className, '[&>svg]:w-6 [&>svg]:h-6 [&>svg]:stroke-1 flex item-center gap-x-2 text-white px-4 py-2 rounded')}>
            {children || text}
        </button>
    );
};

export default Button;
