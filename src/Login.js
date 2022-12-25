import "tailwindcss/tailwind.css"

function Login() {
  return (
    <div className={"flex flex-col justify-between w-screen h-screen bg-black"}>
      <div className={"m-auto"}>
        {/*<input className={"h-10 w-55"}/>*/}
        {/*<button*/}
        {/*  className={"transition ease-in-out duration-200 px-4 py-2 h-10 font-bold bg-brand hover:bg-brand-dark"}>LOGIN*/}
        {/*</button>*/}
        <div className={"flex flex-col"}>
          <div className={"text-white font-extrabold text-7xl mb-4"}><span className={"text-brand"}>R04</span>LAB</div>
          <div className={"place-content-between text-neutral-500 font-mono text-justify"}
               style={{textAlignLast: "justify", textJustify: "auto"}}>
            C O M I N G &nbsp; S O O N
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;