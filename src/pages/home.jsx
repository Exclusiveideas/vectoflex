import construction from '../assets/construction.jpg';
import '../styles/homePage.css';

const ConstructionHomepage = () => {
  return (
    <div className="container">
      <header>
        <h1>Under Construction</h1>
      </header>
      <main>
        <section>
          <img src={construction} className='construction' />
          <div className="animated-text">
            <p>Welcome to our website!</p>
            <p>We are currently working on some updates.</p>
            <p>Stay tuned for the exciting changes coming soon!</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} VectoFlex. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ConstructionHomepage;