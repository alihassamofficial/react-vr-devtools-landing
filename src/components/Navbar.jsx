import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navItems } from "../constants/index";
import logo from "../assets/logo.png";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-lg border-b border-neutral-700/80 sticky top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={logo} className="h-12 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white active:text-orange-500 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className={`size-6 ${
                mobileMenuOpen ? "text-orange-500" : "text-white"
              }`}
            />
          </button>
        </div>
        <ul className="hidden lg:flex lg:gap-x-12">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-sm/6 font-semibold text-white hover:text-orange-500 transition duration-300 ease-in-out"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex lg:flex-1 justify-end space-x-6 items-center">
          <a
            href="#"
            className="text-sm/6 font-semibold border rounded-md py-2 px-3 "
          >
            Sign in
          </a>
          <a
            href="#"
            className="text-sm/6 font-semibold  rounded-md p-2 px-3 bg-gradient-to-tr from-orange-500 to-orange-800  hover:bg-gradient-to-bl hover:from-orange-800 hover:to-orange-500 transition duration-300 ease-in-out"
          >
            Create Account
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden "
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-8 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:text-orange-500 transition duration-300 ease-in-out"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
