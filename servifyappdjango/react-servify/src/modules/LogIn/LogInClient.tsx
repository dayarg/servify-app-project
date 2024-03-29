import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Mudanza from "../../assets/img/mudanza-banner.jpg";
import BasicDrawer from "../../components/Drawer/BasicDrawer";
import { useState } from "react";


interface LogInClientProps {
  Correo_electronico: string;
  password: string;
}

const LogInClient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LogInClientProps>({
    Correo_electronico:"",
    password:"",
  });

  const handleClick = () => {
    fetch("http://127.0.0.1:8000/core/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Hacer algo con la respuesta de la API, si es necesario
        const userName = data.user;
        const userId = data.id;
        const message = data.message;
        navigate("/start-page", { state: { userName, userId, message } });
      })
      .catch((error) => console.error(error));
  };
  const handleChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  /* const handleClick = () => {
    // Lógica de inicio de sesión
      navigate("/start-page");

  }; */

  return (
    <div className="flex flex-col">
      <BasicDrawer />
      <div className="h-screen w-full flex">
        <div className="mx-auto sm:w-1/2 mt-24">
          <h1 className="font-bold text-h2 text-center p-6 mb-10 text-primary">
            Iniciar Sesión
          </h1>
          <div className="px-14">
            <div className="mb-14">
              <Input
                label={"Correo electrónico"}
                type={"email"}
                placeholder={"Ingresa tu correo electrónico"}
                value={formData.Correo_electronico}
                onChange={(value) => handleChange("Correo_electronico", value)}
              />
            </div>

            <div className="mb-14">
              <Input
                label={"Contraseña"}
                type={"password"}
                placeholder={"Ingresa la contraseña"}
                value={formData.password}
                onChange={(value) => handleChange("password", value)}
              />
            </div>
            <div className="mt-2 w-32 mx-auto">
              <Button
                id="BtnNext"
                children="Ingresar"
                onClick={handleClick}
                theme="primary"
                type="submit"
              />
            </div>
            <div className="mt-10 mx-auto text-center">
              <span className="text-primary">¿No tienes una cuenta? </span>
              <a href={"/register-client"} className="text-secondary">
                Registrate
              </a>
            </div>
          </div>
        </div>
        <div className="hidden mt-6 md:w-1/2 md:block" >
          <img
            src={Mudanza}
            alt="plomero banner"
            className="w-screen h-screen float-right"
          />
        </div>
      </div>
    </div>
  );
};

export default LogInClient;
