# NavBar

~~~JavaScript
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">   

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">   

          <div className="flex items-center">
            <div className="text-white font-bold">Your Logo</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:underline">Features</a>
            <a href="#" className="text-white hover:underline">Pricing</a>
            <a href="#" className="text-white hover:underline">About</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"   
 xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </div>   

      {isOpen && (
        <div className="md:hidden">
          <div className="bg-gray-800 p-4">
            <a href="#" className="block text-white py-2">Features</a>
            <a href="#" className="block text-white py-2">Pricing</a>
            <a href="#" className="block text-white py-2">About</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
~~~