import { Navigate, redirect } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bienvenidos a React Router" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// para redirecciones es mejor hacerlo desde servidor
export async function loader() {
  return redirect('/chat')
}

export default function Home() {
  return <Navigate to="/chat"></Navigate>

  // return (
  //   <div>
  //     <h1 className="text-4xl font-thin">Bienvenido a React Router!</h1>
  //   </div>
  // );
}
