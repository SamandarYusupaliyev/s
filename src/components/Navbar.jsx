import { useSelector } from "react-redux"
import { store } from "../app/store"
import { LuShoppingCart } from "react-icons/lu";

function Navbar() {
  const {total} = useSelector ((store)=>store.products);
  return (
    <div className="navbar bg-base-100 py-4 mb-10">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-end">
        <div className="indicator">
        <div className="indicator">
          <span className="indicator-item bade badge-secondary">{total}</span> 
          <button className="m-1">
          <LuShoppingCart className="h-6 w-6" />
          </button>
        </div>
        </div>
    </div>
  </div>
  )
}

export default Navbar