import React, { useState } from 'react'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
const urls = [
  {
    name: 'Bein Sports 1',
    url: "https://cdn2.crichd.pro/embed2.php?id=bein11&q=Bein Sports 1 English",
  },
  {
    name: 'Sky Sports Main Event',
    url: "https://cdn2.crichd.pro/embed2.php?id=skysp1&q=Sky Sports Main Event",
  },
  {
    name: 'SkySports',
    url: "https://cdn2.crichd.pro/embed2.php?id=skyfb&q=Sky Sports Football",
  },
  {
    name: 'SuperSport',
    url: "https://cdn2.crichd.pro/embed2.php?id=supersp9&q=SuperSport Premier League",
  },
];


function App() {

  const [activeChannel, setActiveChannel] = useState(0);
  return (
    <div className='h-screen bg-gray-50 '>
      <Sidebar urls={urls} activeChannel={activeChannel} setActiveChannel={setActiveChannel} />
      <div className='md:mt-5 mb-auto'>
        <iframe frameBorder="0" marginHeight="0" marginWidth="0" height="520" src={urls[activeChannel].url} name="iframe_a" scrolling="no" width="100%">Your Browser Do not Support Iframe</iframe>
      </div>
      <Footer />
    </div>
  )
}

export default App