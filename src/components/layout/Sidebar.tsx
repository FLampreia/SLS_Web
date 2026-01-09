import { Home, Video, ClipboardClock, Users, Settings, LogOut, X } from "lucide-react";
import { MenuItem } from "../navigation/MenuItem";
import LogoutButton from "./LogoutButton";

interface SidebarProps {
    mobile?: boolean;
    onClose?: () => void;
}

export function Sidebar({ mobile = false, onClose }: SidebarProps) {
    return (
        <aside
            className={`bg-green-700 text-white flex flex-col ${mobile ? "w-full h-full" : "w-64"
                }`}
        >
            <div className="flex items-center justify-between px-6 py-5 text-2xl font-bold border-b border-green-600">
                SmartLiveStock
                {mobile && (
                    <button
                        onClick={onClose}
                        aria-label="Fechar menu"
                        title="Fechar menu"
                    >
                        <X size={26} />
                    </button>
                )}
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                <MenuItem icon={<Home size={20} />} label="Home" />
                <MenuItem icon={<Video size={20} />} label="Contagens" />
                <MenuItem icon={<ClipboardClock size={20} />} label="Histórico" />
                <MenuItem icon={<Users size={20} />} label="Gerir Equipa" />
                <MenuItem icon={<Settings size={20} />} label="Definições" />
            </nav>

            <div className="p-4 border-t border-green-600">
                <LogoutButton />
            </div>
        </aside>
    );
}
