const FormNoControlado = () => {
  return (
    <div>
      <h1>Fomurlario No Controlado</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          login(email, password);
        }}
      >
        <input
          type="text"
          name="email"
          placeholder="Ingrese Email"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          placeholder="Ingrese password"
          autoComplete="off"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const login = (email, password) => {
  if (email === "admin@gmail.com") alert("Login ok" + password);
  else alert("Login fail");
};
export default FormNoControlado;
