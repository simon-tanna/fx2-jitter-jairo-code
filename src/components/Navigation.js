import { Link } from "react-router-dom"

const Navigation = ({loggedInUser, activateUser}) => {
    const logout = (e) => {
        e.preventDefault()
        activateUser("")
    }
    
    return (
        <nav>
            {/* using Link as a react dom component. Use to= instead of href*/}
            <Link to="/messages">Home</Link>
            <Link to="/about">About</Link>
            { loggedInUser ?
                <>  
                    {loggedInUser}
                    <a href="/" onClick={logout}>Logout</a>
                </>
               :
               <>
                    Guest
                    <a href="/">Login</a>
                    <a href="/">Sign Up</a>
               </>
                
            }
           
            

            
        </nav>
    )

}

export default Navigation