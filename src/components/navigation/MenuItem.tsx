interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

export function MenuItem({ icon, label, onClick }: MenuItemProps) {
    return (
        <button
            onClick={onClick}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-600 transition text-left"
            aria-label={label}
            title={label}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}
