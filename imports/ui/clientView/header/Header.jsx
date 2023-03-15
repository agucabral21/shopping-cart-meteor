import React, { useState } from "react";
import { useLoggedUser } from "meteor/quave:logged-user-react";
import { Meteor } from "meteor/meteor";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

export default Header = ({ cartProductsCount, onCartClick }) => {
  const { loggedUser, isLoadingLoggedUser } = useLoggedUser();

  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between ">
      <h1 className="text-xl font-bold">Shopping Cart</h1>

      {!isLoadingLoggedUser && loggedUser && (
        <div className="flex justify-between items-center">
          <div className="inline-flex">
            <p className="bg-gray-800  text-white font-bold py-1 px-4 rounded-l flex justify-between items-center">
              <FaUserAlt className="mx-1"> </FaUserAlt>
              <a className="mx-1">{loggedUser.emails[0].address}</a>
            </p>

            <button
              className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-1 px-4 rounded-r"
              onClick={() => Meteor.logout()}
            >
              LogOut
            </button>
          </div>
          <button
            onClick={onCartClick}
            className="ml-3 inline-flex justify-center text-center inline-flex items-center rounded-md border border-transparent bg-indigo-600 py-1 px-4 text-base font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            <FaShoppingCart className="mx-1"> </FaShoppingCart>
            <a className="mx-1">{cartProductsCount ?? 0}</a>
          </button>
        </div>
      )}
    </header>
  );
};
