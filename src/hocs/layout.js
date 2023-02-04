import { Fragment } from "react"
import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar"


const Layout = (props) =>{
    return(
        <Fragment>
            <div id="page-top">                             
                <Navbar />
                    {props.children}
                <Footer />        
            </div>            
        </Fragment>         	            
    )
}

export default Layout;