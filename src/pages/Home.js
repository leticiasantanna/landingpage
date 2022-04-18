import gessinunesID from "../assets/gessinunesID.png";

import "../styles/home.scss";

export function Home() {
  return (
    <div className="home-page">
      {
        //<header>Talk with me! / Classes / </header>
      }

      <main>
        <h1>Welcome to Ms. Gessi!</h1>

        <p>Hello, I'm Gessi and I teach english for many ages!</p>
        <p>I live in São Luís, MA, but I'm from Pernambuco.</p>

        <img src={gessinunesID} alt="logo Gessi" />
      </main>

      <div className="footer">
        <footer>
          <ul>
            Talk with me
            <li>Whatsapp</li>
            <li>Instagram</li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
