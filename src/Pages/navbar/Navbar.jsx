import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import LogoImg from '../images/logo.jpg'
// import LogoImg from '../../../public/images/logo.jpg'

import Theme from './Theme'
import { Link, useLocation } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { FaCartPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { MdOutlineFavorite } from "react-icons/md";

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Shop', to: '/shop' },
  { name: 'About', to: '/about' },
  { name: 'Contact Us', to: '/contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Navbar() {
  const cart = useSelector((state) => state.Cart || [])
  const favoriteproduct = useSelector((state) => state.Favorite || [])


  const location = useLocation()
  return (
    <Disclosure as="nav" className="bg-gray-800  sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className='flex flex-1 items-center justify-start gap-4'>
            {/* Logo */}
            <div className="flex shrink-0 items-center">

              <Link to='/' className=' capitalize font-semibold max-sm:text-xl text-3xl text-white'><span className='text-primary'>Furni</span>Tech	</Link>
            </div>
            {/* Mobile Menu Button */}
            <div className=" relative inset-y-0 left-0 flex justify-start items-center md:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 border-gray-300 border text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>

            {/* Links */}
            <div className="hidden sm:ml-6 md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      location.pathname === item.to ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>


          {/* User Actions */}
          <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* theme btn */}
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <Theme />

            </button>
            {/* cart */}
            <div>
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <Link to='/cart'>

                  <FaCartPlus className='size-7' />
                  <span className="padge absolute text-primary font-bold -top-1 -right-1 bg-white rounded-full px-2  ">{cart.length}</span>
                </Link>
              </button>

            </div>
            {/* favorite */}
            <div>
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <Link to='/favorite'>

                  <MdOutlineFavorite className='size-7' />
                  <span className="padge absolute text-primary font-bold -top-1 -right-1 bg-white rounded-full px-2  ">{favoriteproduct.length}</span>
                </Link>
              </button>

            </div>

            {/* Profile Dropdown */}
            <Menu as="div" className="relative ml-3">
              {/* عندما يكون المستخدم مسجل الدخول */}
              <SignedIn>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <UserButton />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                  <MenuItem>
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Your Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" onClick={() => clerk.signOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </SignedIn>

              {/* عندما يكون المستخدم غير مسجل الدخول */}
              <SignedOut>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <img
                    alt="Guest Profile"
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                  <MenuItem>
                    <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Login
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Register
                    </Link>
                  </MenuItem>
                </MenuItems>
              </SignedOut>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              className='flex flex-col'
            >
              <Link
                key={item.name}
                to={item.to}
                className={classNames(
                  location.pathname === item.to ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium',
                )}
              >
                {item.name}
              </Link>
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
