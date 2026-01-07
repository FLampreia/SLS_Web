import { useState } from "react";
import { login } from "../../services/auth.service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await login(email, password);
      console.log(data);
    } catch (error) {
      console.error("Erro no login:", error);
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
          Monitorização inteligente da produção pecuária
        </p>

        <form
          onSubmit={handleLogin}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-green-100"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
            Autenticação
          </h2>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="mb-7">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-2.5 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-600 transition disabled:opacity-50"
          >
            {loading ? "A autenticar..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
