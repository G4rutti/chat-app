import Formulario from "./components/Form"

const Login = () => {
  return (
    <div className="flex h-[100vh]">
        <Formulario />
        <div className="hidden w-full bg-slate-300 shadow-custom-inset md:block"></div>
    </div>
  )
}

export default Login