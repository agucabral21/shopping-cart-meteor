import React, { useState } from "react";
import { useLoggedUser } from "meteor/quave:logged-user-react";
import { Meteor } from "meteor/meteor";

export default Header = ({ cartProductsCount, onCartClick }) => {
  const { loggedUser, isLoadingLoggedUser } = useLoggedUser();

  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">Shopping Cart</h1>

      <button
        onClick={onCartClick}
        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-1 px-4 text-base font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
      >
        {cartProductsCount ?? 0} items in your Cart
      </button>

      {!isLoadingLoggedUser && loggedUser && (
        <div className="inline-flex">
          <p className="bg-gray-800  text-white font-bold py-1 px-4 rounded-l">
            User : {loggedUser.emails[0].address}
          </p>

          <button
            className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-1 px-4 rounded-r"
            onClick={() => Meteor.logout()}
          >
            Log Out
          </button>
        </div>
      )}
    </header>
  );
};
