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
                    < Link to="messages/new">New Message</Link>
                    {loggedInUser}
                    <Link to="/messages" onClick={logout}>Logout</Link>
                </>
               :
               <>
                    Guest
                    <Link to="/login">Login</Link>
                    <Link to="/login">Sign Up</Link>
               </>
                
            }
           
            

            
        </nav>
    )

}

export default Navigation