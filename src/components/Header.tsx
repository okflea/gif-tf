"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getCurrentUser, signOutUser } from "../firebase/auth"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()

  const [user, setUser] = useState(null);


  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);


  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="glass fixed top-0 z-50 w-screen">
      <nav className="container mx-auto px-4 py-6 md:flex md:justify-between md:items-center">
        <div className='flex justify-between items-center'>
          <Link href="/" className="text-xl font-bold text-white hover:text-gray-200">
            <div className="flex items-center flex-shrink-0 mr-6">
              <span className="font-bold text-xl tracking-tight ml-2 transform hover:scale-110 transition-all duration-500">GifStash</span>
            </div>
          </Link>
          <button
            type="button"
            className="block md:hidden text-gray-500 hover:text-white focus:text-white focus:outline-none transform hover:scale-110 transition-all duration-500"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 5.293a1 1 0 0 1 1.414 0L12 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414L13.414 13l6.293 6.293a1 1 0 1 1-1.414 1.414L12 14.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L10.586 13 4.293 6.707a1 1 0 0 1 0-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${isMenuOpen ? '' : 'hidden'} md:block md:items-center w-full md:w-auto`}
        >
          <div className="text-sm mt-4 md:flex-grow flex justify-end items-center">
            <Link href="/discover" className="font-semibold block md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4">
              Discover
            </Link>
            <Link className="block font-semibold md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4" href="/favourites">
              Favourites
            </Link>

            <div>
              {user ? (
                <div
                  className="block font-semibold cursor-pointer md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
                  onClick={async () => {
                    await signOutUser();
                    window.location.reload();
                  }}
                > SignOut </div>
              ) : (
                <Link className="block font-semibold md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4" href="/signin"> Login </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
