const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function login(email: string, password: string) {
  const response = await fetch(
    `${API_BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const data = await response.json();

  return {
    status: response.status,
    data
  };
}

export async function signup(username: string, email: string, password: string, full_name: string) {
  const response = await fetch(
    `${API_BASE_URL}/auth/signup`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        email,
        password,
        full_name
      }),
    }
  );

  const data = await response.json();

  return {
    status: response.status,
    data
  };
}

export async function logout() {
  const token = localStorage.getItem("access_token");

  try {
    await fetch(
      `${API_BASE_URL}/auth/logout`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error("Erro ao chamar endpoint de logout:", error);
  } finally {
    // Limpa tokens do localStorage
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }
}

