import React from 'react';
import Main from '../components/Main';
import About from '../components/About';

const App: React.FC = () => {
  return (
    <main className='bg-gradient-to-b from-[#121212] to-[#1E1E1E] md:px-[12rem] md:py-10'>
      <Main />
      <About />
    </main>
  )
}

export default App;
