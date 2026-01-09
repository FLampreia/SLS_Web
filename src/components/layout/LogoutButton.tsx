import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth.service";

export default function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/", { replace: true }); // Redireciona para login
    };

    return (
        <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white hover:text-red-400"
            title="Terminar Sessão"
            aria-label="Terminar Sessão"
        >
            <LogOut size={20} />
            Terminar Sessão
        </button>
    );
}
