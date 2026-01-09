import { useState } from "react";
import { signup } from "../services/auth.service";
import { useNavigate } from 'react-router-dom';



export default function SignUp() {
    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { status, data } = await signup(username, email, password, fullName);

            if (status >= 200 && status < 300) {
                // Sucesso
                console.log("Registo bem-sucedido:", data);
                alert("Conta criada com sucesso!");
                navigate("/"); // 🔹 redireciona para login
            } else {
                // Erro
                console.warn("Falha no registo:", data);
                alert(data.message || "Erro desconhecido");
            }
        } catch (error) {
            console.error("Erro na chamada de registo:", error);
            alert("Ocorreu um erro ao comunicar com o servidor");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-green-700 via-green-500 to-emerald-400">
            <div className="w-full max-w-md px-6 sm:px-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-3 tracking-wide">
                    SmartLiveStock
                </h1>
                <p className="text-center text-green-100 mb-8 sm:mb-10 text-sm sm:text-base">
                    Crie a sua conta para monitorizar a produção pecuária
                </p>

                <form
                    onSubmit={handleSignUp}
                    className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-green-100"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
                        Criar Conta
                    </h2>

                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Escolha um nome de utilizador"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                            Nome Completo
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            placeholder="Digite o seu nome completo"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Digite o seu email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Escolha uma palavra-passe segura"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-2.5 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-600 transition disabled:opacity-50"
                    >
                        {loading ? "A registar..." : "Criar Conta"}
                    </button>

                    <p className="text-sm text-center text-gray-600 mt-4">
                        Já tens conta?{" "}
                        <button
                            type="button"
                            className="text-green-700 font-semibold hover:underline"
                            onClick={() => navigate('/')}
                        >
                            Login
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}
