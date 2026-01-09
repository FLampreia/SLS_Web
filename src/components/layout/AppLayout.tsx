import { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";

interface AppLayoutProps {
    children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="h-screen w-screen flex overflow-hidden bg-gray-100">
            {/* Desktop sidebar */}
            <div className="hidden md:flex">
                <Sidebar />
            </div>

            {/* Mobile sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <Sidebar mobile onClose={() => setSidebarOpen(false)} />
                </div>
            )}

            {/* Content */}
            <div className="flex-1 flex flex-col">
                {/* Mobile topbar */}
                <header className="flex items-center gap-3 bg-green-700 px-4 py-3 shadow md:hidden text-white">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Abrir menu"
                        title="Abrir menu"
                    >
                        <Menu size={26} />
                    </button>
                    <span className="font-semibold">SmartLiveStock</span>
                </header>

                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
