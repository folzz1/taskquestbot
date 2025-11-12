export function Button({ children, onClick, className = '', variant = 'default', size = 'md', type = 'button' }) {
    const base =
        'inline-flex items-center justify-center font-medium rounded-xl transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variants = {
        default: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
        outline: 'border border-neutral-400 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:border-neutral-700',
        ghost: 'text-blue-600 hover:bg-blue-50 dark:text-blue-400',
    }

    const sizes = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-3 text-lg',
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}
        >
            {children}
        </button>
    )
}