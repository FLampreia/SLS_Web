export async function apiFetch(url: string, options: RequestInit = {}) {
    const token = localStorage.getItem("access_token");

    const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
    };

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (response.status === 401) {
        // Token inválido ou expirado
        localStorage.clear();
        window.location.href = "/";
    }

    return response;
}
