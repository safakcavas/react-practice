import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
function Profile() {
  const {user, setUser} = useContext(UserContext);

  const [loading, setLoading]= useState(false)
  const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({id:1,username:'safakk', bio:'bio'})
            setLoading(false);
        },1500);    // butona basıldığından 1.5 saniye sonra degerleri belirtildigi gibi güncelle
        
    };

  return (
    <div>
    <button  onClick={handleLogin} > {loading ? "loading..." : "Login"} </button>
    <code>{JSON.stringify(user.username)}</code> 
    </div>
  );
}

export default Profile;
