"use client";
import React, { ReactNode, useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BsCart4 } from "react-icons/bs";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Logo } from "@repo/ui/logo";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = ({
  navigation,
}: {
  navigation: {
    name: string;
    href: string;
    current: boolean;
  }[];
}) => {
  const [token, setToken] = useState<string | null>("");
  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, []);

  function logoutHandler() {
    window.localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Logo classname="text-white" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {token == null && (
            <>
              <Link
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                href="/login"
              >
                Login
              </Link>
              <button className="bg-gray-800 p-1 text-gray-400 hover:text-white border-gray-400 hover:border-white border-spacing-2 border rounded-md mx-2 md:p-2 md:mx-2 hidden md:block">
                Create an account
              </button>
            </>
          )}

          {token && (
            <div className=" gap-2 flex">
              <a>
                <BsCart4 className=" text-slate-400 hover:text-white text-3xl cursor-pointer" />
              </a>
              <button
                className="bg-gray-800 p-1 text-gray-400 hover:text-white border-gray-400 hover:border-white border-spacing-2 border rounded-md mx-2 md:p-2 md:mx-2 hidden md:block"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
