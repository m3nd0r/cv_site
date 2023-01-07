import React, { useState } from 'react'

// import all the components
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'


const App = () => {

  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('dark'))
  const getTheme = (theme) => {
    setCurrentTheme(theme)
  };
  return (
    <>
    <div className="wrapper" data-theme={currentTheme}>
      <About onClick={getTheme}/>
      <Experience />
    </div>
    <Footer />

    </>
  );
}

export default App