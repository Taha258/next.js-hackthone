import React from 'react';

const Footer = () => {
  return (
    <footer className="container mx-auto bg-white border-t border-gray-200 pt-12 pb-8 sm:pt-16 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div className="space-y-6">
            <h3 className="text-gray-800 font-bold text-lg">About</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Bussiness Relation
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-gray-800 font-bold text-lg">Community</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Invite a friend
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-gray-800 font-bold text-lg">Socials</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 border-t border-gray-200 pt-8 sm:pt-12 flex flex-col sm:flex-row justify-between items-center text-gray-600">
          <p>&copy; 2022 MORENT. All rights reserved</p>
          <div className="flex space-x-6 sm:space-x-8 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-800 transition-colors">
              Privacy &amp; Policy
            </a>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Terms &amp; Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;