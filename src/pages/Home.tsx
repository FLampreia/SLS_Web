import { AppLayout } from "../components/layout/AppLayout";

export default function Home() {
    return (
        <AppLayout>
            <h1 className="text-3xl font-bold mb-4">Bem-vindo</h1>
            <p className="text-gray-700">
                Esta é a página inicial do SmartLiveStock.
            </p>
        </AppLayout>
    );
}
