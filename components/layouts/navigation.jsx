import Link from "next/link";
import { useEffect, useState } from "react";
import data from "../../lib/data";
import Button from "../button";
import Image from "next/image";
export default function Navigation({ children, page }) {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= 70);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    var navbar = $("#mainnavigationBar");
    navbar.toggleClass("bg-nav");
  };

  return (
    <>
        <header class="sticky top-0 right-0 w-full py-4 overflow-hidden se-grid z-top bg-red-500">
            <div class="col-span-3 col-start-1">
                <Link
                    class=" [&_svg]:w-auto w-auto  block"
                    href="/"
                    title="<?php wp_title(); ?>"
                >
                    <Image src={data.navigation.logo} alt="Logo" width={100} height={100} />
                </Link>
        </div>
        <div class="relative -col-start-1 z-top -col-end-1">
            <ul className="flex gap-4">
                {data.navigation.items.map((link, i) => (
                    <li key={i} className="my-auto">
                        <Link
                            href={`${link.link}`}
                            className={`nav-link ${
                                (page?.slug === "index"
                                ? "home"
                                : page?.slug?.toLowerCase()) === link.text.toLowerCase()
                                ? "active border-b" // Add bg-primary class if the user is on the current page
                                : ""
                            }`}
                        >
                            {link.text}
                        </Link>
                    </li>
                ))}
                <li class="ml-4">
                    <Button variant="primary" href={'/'}>
                        {data.navigation.button.text}
                    </Button>
                </li>
          </ul>
        </div>
      </header>
    </>
  );
}
