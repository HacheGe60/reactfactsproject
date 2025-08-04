import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

function Container() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img src="./src/react-logo.png" alt="React logo" className="react-logo" />
      <nav>
        <ul className="nav-links">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <h1 className="main-title">Reason I am excited to learn React</h1>
      <ol className="main-list">
        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer if I know React</li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2024 Ziroll development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <>
      <Container />
    </>
  );
}

root.render(
  <Page />
);
