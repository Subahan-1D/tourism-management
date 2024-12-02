import React from "react";
import { doLogOut } from "../../../_actions";
const LogOut = () => {
  return (
    <div>
      <form action={doLogOut}>
        <button class="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded">
          <span>Logout</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default LogOut;
