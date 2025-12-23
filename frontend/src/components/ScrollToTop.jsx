import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
       fixed bottom-6 right-6 z-50
        h-11 w-11 rounded-full
        bg-[#ff6347] text-white
        shadow-lg
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:bg-[#e5533d]

        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
