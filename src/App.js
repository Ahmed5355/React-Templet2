import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Home,Profile} from './pages/index'
import {Header,Container,Footer} from './component/index'
const App = () =>{
    return(
        <>
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>

            
        </>
    )
}
export default App;