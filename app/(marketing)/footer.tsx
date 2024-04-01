import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="hidden lg:flex h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="/assets/flags/es.svg"
            height="32"
            width="40"
            alt="Spanish"
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="/assets/flags/br.svg"
            height="32"
            width="40"
            alt="Portuguese"
            className="mr-4 rounded-md"
          />
          Portuguese
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="/assets/flags/fr.svg"
            height="32"
            width="40"
            alt="French"
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="/assets/flags/de.svg"
            height="32"
            width="40"
            alt="German"
            className="mr-4 rounded-md"
          />
          German
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="/assets/flags/jp.svg"
            height="32"
            width="40"
            alt="Japanese"
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="/assets/flags/uk.svg"
            height="32"
            width="40"
            alt="English"
            className="mr-4 rounded-md"
          />
          English
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
