import React from "react";

const BananaFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="bg-hightLight text-center py-4 mt-20 flex flex-col items-center justify-center pt-10 pb-10"
      style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
    >
      <h2 className="text-3xl font-bold  text-lightBeige">
        🍌 Thanks for visiting! Don&apos;t slip up—scroll back to the top!
      </h2>
      <button
        onClick={scrollToTop}
        className="mt-10 bg-black hover:bg-lightBeige text-white font-bold py-2 px-4  hover:text-black transition-all duration-300 rounded-full shadow-md"
      >
        Go Banana! 🍌
      </button>
    </footer>
  );
};

export default BananaFooter;
