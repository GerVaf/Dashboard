import React from "react";

const SlideBar = () => {
  return (
    <div class=" h-[100vh] cursor-pointer">
      <div class="text-2xl font-bold h-24 flex justify-center items-center text-white bg-gradient-to-r from-[rgb(227,73,141)] to-[rgb(168,88,173)]">
        Here's Logo
      </div>

      <div class="text-gray-500 font-semibold text-xl flex flex-col gap-10 py-10 pl-5">
        <p class="flex text-[rgb(230,72,138)] border-r-4 border-[rgb(230,72,138)] items-center py-3 px-5 gap-10">
          <i class="fa-solid fa-chart-pie"></i>
          <span>Dashboard</span>
        </p>
        <p class="flex items-center py-3 hover:text-[rgb(230,72,138)] hover:border-r-4 hover:border-[rgb(230,72,138)] transition duration-300 px-5 gap-10">
          <i class="fa-solid fa-user"></i>
          <span>Customer</span>
        </p>
        <p class="flex items-center py-3 hover:text-[rgb(230,72,138)] hover:border-r-4 hover:border-[rgb(230,72,138)] transition duration-300 px-5 gap-10">
          <i class="fa-solid fa-ticket"></i>
          <span>Sale</span>
        </p>
        <p class="flex items-center py-3 hover:text-[rgb(230,72,138)] hover:border-r-4 hover:border-[rgb(230,72,138)] transition duration-300 px-5 gap-10">
          <i class="fa-solid fa-money-check-dollar"></i>
          <span>Payment</span>
        </p>
        <p class="flex items-center py-3 hover:text-[rgb(230,72,138)] hover:border-r-4 hover:border-[rgb(230,72,138)] transition duration-300 px-5 gap-10">
          <i class="fa-solid fa-users"></i>
          <span>Supplier</span>
        </p>
        <p class="flex items-center py-3 hover:text-[rgb(230,72,138)] hover:border-r-4 hover:border-[rgb(230,72,138)] transition duration-300 px-5 gap-10">
          <i class="fa-solid fa-money-bill-1-wave"></i>
          <span>Purchase</span>
        </p>
        <p class="flex items-center py-3 hover:text-[rgb(230,72,138)] hover:border-r-4 hover:border-[rgb(230,72,138)] transition duration-300 px-5 gap-10">
          <i class="fa-solid fa-arrow-rotate-left"></i>Return
        </p>
        <p class="flex items-center py-3 hover:text-[rgb(230,72,138)] hover:border-r-4 hover:border-[rgb(230,72,138)] transition duration-300 px-5 gap-10">
          <i class="fa-regular fa-user"></i>
          <span>Admin</span>
        </p>
      </div>
    </div>
  );
};

export default SlideBar;
