import Header from "../Compoments/Header/Header"
import Footer from "../Compoments/Footer/Footer"
import { BrowserRouter } from "react-router-dom"
import Rotas from "../Rotas/Rotas.jsx"
const Layout = () => {
 return (

        <div>
            <BrowserRouter> 
            <Header/>
            <Rotas/>
            <Footer/>
            </BrowserRouter>    
        </div>
    
    )

}


    export default Layout
    