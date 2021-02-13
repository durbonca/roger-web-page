import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import Card from './components/Card'

function App() {
  return (
    <div>
    <div className="w-full md:w-1/2 mx-auto">
      <div className="flex flex-col align-middle">
      <header className="mt-5 flex flex-col">
        <img src={logo} className="self-center w-40" alt="logo" />
        <div className="social | flex justify-between w-1/2 mx-auto mt-5">
            <a className="p-2 text-purple-600" href="https://www.instagram.com/terapias.tesai/">
              <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
            <a className="p-2 text-blue-600" href="https://www.facebook.com/Terapias-Tesai-349527419494747">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
            </a>
            <a className="p-2 text-green-600" href="https://wa.me/+56944054585">
              <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
            </a>
            
        </div>
      </header>
      <main>
        Main content here

        <Card
            img_src="@/assets/img.jpg" 
            title="Servicio"
            description="breve descripcion" 
            price="25$"
        />
      </main>
      </div>
    </div>
    <footer className="w-full bg-gray-500 text-yellow-50 text-center p-5">
      Tseai Therapy 2021 <FontAwesomeIcon icon={faCopyright}/>
    </footer>
  </div>
  );
}

export default App;
