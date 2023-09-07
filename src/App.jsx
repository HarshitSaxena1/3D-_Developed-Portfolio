import { BrowserRouter} from "react-router-dom";
import{About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components';

const App=()=> {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar />
    <Hero />
    </div>
    <div className="px-40">
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    </div>
    
    <div className="relative z-0 px-40">
    <Contact />
    <StarsCanvas />
    </div>
    </div>
    </BrowserRouter>
    
  )
}

export default App
