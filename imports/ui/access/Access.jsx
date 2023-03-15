import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { RoutePaths } from "../router/RoutePaths";
import { useNavigate } from "react-router-dom";
import { ErrorAlert } from "../common/ErrorAlert";

export const Access = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [isSignUp, setIsSignUp] = useState(false);

  const signUp = (e) => {
    e.preventDefault();
    Accounts.createUser({ email, password }, (err) => {
      if (err) {
        console.error("Error creating user", err);
        setError(err);
        return;
      }
      navigate(RoutePaths.CLIENT_VIEW);
    });
  };

  const signIn = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        console.error("Error signing in the user", err);
        setError(err);
        return;
      }
      navigate(RoutePaths.CLIENT_VIEW);
    });
  };

  return (
    <div>
      <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">Shopping Cart</h1>
      </header>
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center">
        <h3 className="px-3 py-2 text-lg text-base font-medium">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h3>
        {error && <ErrorAlert message={error.reason || "Unknown error"} />}
        <form className="mt-6 flex flex-col">
          <div className="flex flex-col space-y-4">
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex justify-center py-3">
            {isSignUp && (
              <button
                onClick={signUp}
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              >
                Sign Up
              </button>
            )}
            {!isSignUp && (
              <button
                onClick={signIn}
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              >
                Sign In
              </button>
            )}
          </div>

          <div className="flex justify-center py-3">
            <a
              className="inline-flex  justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "I already have an account"
                : "I want to create an account"}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
