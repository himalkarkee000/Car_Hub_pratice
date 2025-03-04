import Link from "next/link";
import Image from "next/image";

import React from "react";
import {CustomButton} from "@/components"

const Navbar = () => {
  return (

      <header className="w-full absolute z-10 m-2">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain"/>
          </Link>
          <CustomButton
            title="Sign in"
            btnType = "button"
            containerStyles="bg-primary-blue rounded-full bg-white min-w-[100px]"

          />
        </nav>
      </header>

  )
}

export default Navbar;
