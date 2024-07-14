import { LayoutGestionProducto } from "@/layout/LayoutGestionProducto";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserForm } from "./users/UserForm";
import { Button } from "@/components/ui/button";
import { UserPage } from "./users/UserPage";

export const ConfigPage = () => {
  return (
    <LayoutGestionProducto>
      <Routes>
        <Route path="/usuario/crear" element={<UserForm />} />
        <Route path="/usuario" element={<UserPage />} />
        <Route path="/*" element={<ConfigContentPage />} />
      </Routes>
    </LayoutGestionProducto>
  );
};

const ConfigContentPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => navigate("/config/usuario")}
        className="mt-24 font-bold"
      >
        Usuarios
      </Button>
    </div>
  );
};
