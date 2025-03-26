import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquareShare, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {authUser, logout} = useAuthStore();
  return (
    <header className="bg-base-100/80 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg">
      
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
            <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageSquareShare className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-lg font-bold">Whispr</h1>
            </Link>
          </div>

          {/* right side */}
          <div className="flex items-center gap-2">
            <Link
            to={"/settings"}
            className={`btn btn-sm gap=2 transition-colors`}>
              <Settings className="size-4" />
            </Link>
            

            {authUser && (
             <>
             <Link to={"/profile"} className={`btn btn-sm gap-2`}>
              <User className="size-5" />
              <span className="hidden sm:inline">Profile</span>
             </Link>

             <button
             onClick={logout}
             className="flex gap-2 items-center">
              <LogOut className="size-5" />
              <span className="hidden sm:inline">Logout</span>
             </button>
             </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar