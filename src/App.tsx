import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="profile-picture.jpg" className="App-profile-picture" alt="profile" />
        <h1 className="App-title">Welcome to My Website</h1>
        <p className="App-introduction">
          Hello! My name is [Your Name]. I am a [Your Profession] with a passion for [Your Interests]. 
          Welcome to my personal website where you can learn more about me and my work.
        </p>
      </header>
      <main className="App-main">
        <section className="App-section">
          <h2>About Me</h2>
          <p>
            I have been working in [Your Field] for [Number of Years] years. I specialize in [Your Specialization].
            In my free time, I enjoy [Your Hobbies].
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
            You can reach me at <a href="mailto:your.email@example.com">your.email@example.com</a>.
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
