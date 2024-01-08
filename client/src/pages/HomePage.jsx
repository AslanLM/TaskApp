import React from 'react';
import '../components/design/Home.css';
import { Link } from 'react-router-dom';
import FirstImg from '../assets/1img.png';
import SecondImg from '../assets/2img.png';
import TasksSS1 from '../assets/tasksAppSS1.jpg';
import TasksSS2 from '../assets/tasksAppSS2.jpg';
import Footer from '../components/Footer';

const HomePage = () => {

 return (
    <main>
    <section className="hero">
      <div className='welcome'>
        <span>Welcome to your To-Do List!</span>
      </div>
      <div className='text-reveal'>
        <h1>Your Task Hub
          <img key={1}  className='img-hero' src={FirstImg} alt="HeroImg" />
          <img key={2}  className='img-hero2' src={SecondImg} alt="HeroImg" />
        Solution</h1>
      </div>
      <div className='text-reveal'>
        <h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width='80' height='30'>
              <path d="m -10 15 l 38 0 m -15 10 c 5 5 0 0 15 -10 m -15 -10 c 5 -5 0 0 15 10 m -5 10 c 8 5 0 0 15 -10 m -15 -10 c 8 -5 0 0 15 10" fill='transparent' stroke=' #007A8D' strokeWidth="2" transform="scale(4)"/>
            </svg>
        Organize your tasks effortlessly</h1>

      </div>
      <div className='text-reveal'>
        <h1>Take Control and <Link to='/login' className='btn'>Get Started</Link> Today</h1>
      </div>
    </section>

    <section className='how-it-works'>
      <h1>How it Works</h1>
      <div className='step1'>
        <div className='hiw-info'>
          <h2>Add New Tasks</h2>
          <p>Easily add new tasks to your to-do list. Provide titles and descriptions to keep your tasks organized and detailed.</p>
        </div>
        <div className='hiw-img'><img key={3} src={TasksSS1} alt="tasks app SS" /></div>
      </div>
      <div className='step2'>
        <div className='hiw-info2'>
          <h2>Manage Your Tasks</h2>
          <p>Effortlessly manage your tasks on the dashboard. Edit existing tasks or mark them as completed. Delete tasks you no longer need.</p>
        </div>
        <div className='hiw-img2'><img key={4} src={TasksSS2} alt="tasks app SS" /></div>
      </div>
    </section>

    <Footer/>

    </main>
  );
};

export default HomePage;