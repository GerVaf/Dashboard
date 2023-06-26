import React from "react";

const Nav = () => {
  return (
    <div class="flex  justify-between bg-white px-5 py-4 shadow-xl">
      <div class="text-[rgb(230,72,138)] text-3xl">
        <i class="fa-solid fa-bars"></i>
      </div>

      <div class="flex gap-5 text-lg items-center">
        <i class="fa-solid fa-gear"></i>
        <i class="fa-solid fa-bell"></i>
        <img
          class="w-10 h-10 rounded-full"
          src="https://i.pinimg.com/736x/98/69/d4/9869d4ea2d00c8e16768a08dc46baca2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
