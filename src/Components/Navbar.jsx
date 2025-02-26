import React, { useState } from 'react';
import { Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = {
    'About Us': [
      'About Securico',
      'Why Securico',
      'Chairman\'s Message',
      'Our Management Team',
      'Our Journey',
      'Our Clients',
      'iMonitor India'
    ],
    'Products': {
      'Wired Intruder Alarms': {
        'Control Panels': [
          'IP Series',
          'GSM Based',
          'PSTN Based',
          'Multicomm Series',
          'Panels Without Inbuilt Communication'
        ],
        'Keypads': [],
        'Sensors': [],
        'Sounders & Flashers': [],
        'Modules': [],
        'Accessories': []
      },
      'Wireless Intruder Alarms': [],
      'Auto Dialers': [],
      'Automation Systems': [],
      'Cables': [],
      'Fire Alarm Systems': [],
      'Video Door Phones': [],
      'CCTV Surveillance System': [],
      'Remote Monitoring Application': [],
      'Routers': []
    },
    'Solutions': [],
    '24X7 Monitoring': [
      'Central Monitoring',
      'Monitoring Services'
    ],
    'Partner With Us': [
      'Join Our Team',
      'Become Our Channel Partner',
      'Become A Dealer'
    ],
    'Resources': [
      'Blogs',
      'FAQ',
      'White Papers',
      'Videos',
      'Crime News',
      'Upcoming Webinars'
    ],
    'News': [],
    'Contact Us': []
  };

  const renderSubmenu = (items) => {
    if (Array.isArray(items)) {
      return (
        <div className="bg-white border rounded-lg shadow-lg py-2">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
            >
              {item}
            </a>
          ))}
        </div>
      );
    }

    return (
      <div className="bg-white border rounded-lg shadow-lg py-2">
        {Object.entries(items).map(([title, subItems]) => (
          <div key={title} className="group/submenu relative">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 flex justify-between items-center"
            >
              {title}
              {Object.keys(subItems).length > 0 && <span className="ml-2">›</span>}
            </a>
            {Object.keys(subItems).length > 0 && (
              <div className="absolute left-full top-0 w-56 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300">
                {renderSubmenu(subItems)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center ">
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800 transform hover:scale-110 transition-transform duration-200">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transform hover:scale-110 transition-transform duration-200">
            <Twitter size={18} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transform hover:scale-110 transition-transform duration-200">
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transform hover:scale-110 transition-transform duration-200">
            <Instagram size={18} />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="text-red-600" size={20} />
          <span className="text-red-600 font-semibold">+91-129-4270000</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center py-8">
          {/* Logo */}
          <div className="flex-shrink-0 mb-4 lg:mb-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <img 
              src="./images/logo.png" 
              alt="Securico" 
              className="h-16"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:w-full lg:justify-between space-x-8">
            <div className="flex space-x-8">
              {Object.entries(menuItems).slice(0, 4).map(([title, items]) => (
                <div key={title} className="relative group">
                  <button className="text-gray-800 hover:text-red-600 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-red-600 transition-colors duration-200">
                    {title} {(Array.isArray(items) ? items.length > 0 : Object.keys(items).length > 0) && <span>+</span>}
                  </button>
                  {(Array.isArray(items) ? items.length > 0 : Object.keys(items).length > 0) && (
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {renderSubmenu(items)}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex space-x-8">
              {Object.entries(menuItems).slice(4).map(([title, items]) => (
                <div key={title} className="relative group">
                  <button className="text-gray-800 hover:text-red-600 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-red-600 transition-colors duration-200">
                    {title} {(Array.isArray(items) ? items.length > 0 : Object.keys(items).length > 0) && <span>+</span>}
                  </button>
                  {(Array.isArray(items) ? items.length > 0 : Object.keys(items).length > 0) && (
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {renderSubmenu(items)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden rounded-md p-2 text-gray-800 hover:text-red-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Object.entries(menuItems).map(([title, items]) => (
              <div key={title} className="relative">
                <button className="w-full text-left px-3 py-2 text-gray-800 hover:text-red-600 text-sm font-medium">
                  {title} {(Array.isArray(items) ? items.length > 0 : Object.keys(items).length > 0) && <span>+</span>}
                </button>
                {(Array.isArray(items) ? items.length > 0 : Object.keys(items).length > 0) && (
                  <div className="pl-4">
                    {Array.isArray(items) ? (
                      items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                        >
                          {item}
                        </a>
                      ))
                    ) : (
                      Object.entries(items).map(([subTitle]) => (
                        <a
                          key={subTitle}
                          href="#"
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                        >
                          {subTitle}
                        </a>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;