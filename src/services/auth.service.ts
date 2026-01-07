export async function login(email: string, password: string) {
  const response = await fetch("http://127.0.0.1:8000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return response.json();
}

export async function signup(username: string, email: string, password: string, full_name: string) {
  const response = await fetch(
    'http://127.0.0.1:8000/api/v1/auth/signup',
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

  return{
    ok: response.ok,
    data: response.json()
  };

}
