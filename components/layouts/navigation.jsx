import Link from "next/link";
import { useEffect, useState } from "react";
import data from "../../lib/data";
import Button from "../button";
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
          <a
            class=" [&_svg]:w-auto w-auto  block"
            href="<?php echo se_get_localized_home_url(); ?>"
            title="<?php wp_title(); ?>"
          >
            <img src={data.navigation.logo} alt="Nav-Logo" />
          </a>
        </div>
        <div class="relative -col-start-1 z-top -col-end-1">
          <ul className="flex gap-4">
            {data.navigation.items.map((link, i) => (
              <li key={i} className="nav-item">
                <Link
                  href={`${link.link}`}
                  className={`nav-link ${
                    (page?.slug === "index"
                      ? "home"
                      : page?.slug?.toLowerCase()) === link.text.toLowerCase()
                      ? "active"
                      : ""
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-none d-lg-block">
            <div className="nav-item">
              <Button variant="primary" href={'/'}>
                {data.navigation.button.text}
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
