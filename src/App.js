import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="./assets/fb-icon.png" alt="facebook" />
        <img src="./assets/twit-icon.png" alt="twitter" />
        <img src="./assets/gp-icon.png" alt="google+" />
        <img src="./assets/insta-icon.png" alt="insta" />
        <img src="./assets/flic-icon.png" alt="flickr" />
        <img src="./assets/pint-icon.png" alt="pinterest" />
        <img src="./assets/rss-icon.png" alt="rss" />
        <img src="./assets/mail-icon.png" alt="mail" />
      </header>
      <main>
        <p>
        <img src="./assets/choco-pizza.png" alt="chocolate-pizza" id="choco-pizza" />
          <descriptParagraph par1='p1' body='Choco'/>
        </p>
        <p>
          <recipeParagraph par2='p2' body='Pizza'/>
        </p>
        </main>
        <footer>
        <img src="./assets/small-logo.png" alt="small knife/fork" id="footer-pic" />
        </footer>
    </div>
  );
}

export default App;
