import React from 'react';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

const CustomFooter = () => {
  return (
    <Footer container className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-auto border-t">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-6">
            <Link to="/" className="flex items-center">
              <span className="bg-purple-600 text-white px-2 py-1 rounded-lg font-bold mr-2">
                Bit
              </span>
              <span className="text-gray-900 dark:text-white font-semibold">Blogs</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" className="text-gray-900 dark:text-white" />
              <Footer.LinkGroup col>
                <Footer.Link as={Link} to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  About Us
                </Footer.Link>
                <Footer.Link as={Link} to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Contact
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-gray-900 dark:text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Github
                </Footer.Link>
                <Footer.Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-gray-900 dark:text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="border-gray-300 dark:border-gray-700" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Bit Blogs™"
            year={2024}
            className="text-gray-600 dark:text-gray-400"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={Facebook} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
            <Footer.Icon href="#" icon={Twitter} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
            <Footer.Icon href="#" icon={Instagram} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
            <Footer.Icon href="#" icon={Github} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;