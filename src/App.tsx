import React from 'react';
// import mypic from '../public/mypic.JPG';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={mypic} className="App-profile-picture" alt="profile" /> */}
        <h1 className="App-title">吉田和司</h1>
        <p className="App-introduction">
       こんにちは
        </p>
      </header>
      <main className="App-main">
        <section className="App-section">
          <h2>About Me</h2>
          <p>
            成蹊大学理工学部システムデザイン学科3年(現在休学中)

          </p>
        </section>
        <section className="App-section">
          <h2>Projects</h2>
          <p>
            Here are some of my recent projects:
          </p>
          <ul>
            <li>Project 1 - A brief description of Project 1.</li>
            <li>Project 2 - A brief description of Project 2.</li>
            <li>Project 3 - A brief description of Project 3.</li>
          </ul>
        </section>
        <section className="App-section">
          <h2>Contact</h2>
          <p>
            You can reach me at <a href="mailto:your.email@example.com">ka.yoshida0424@gmail.com</a>.
          </p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
