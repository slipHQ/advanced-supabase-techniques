import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='grid w-1/4 grid-cols-1 gap-6 mx-4 '>
      <div className='col-6 form-widget'>
        <p className='text-2xl font-bold'>jammer</p>
        <p className='description'>
          {" "}
          Sign in via magic link with your email below
        </p>
        <div>
          <input
            className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50'
            type='email'
            placeholder='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            type='button'
            className='inline-flex items-center px-3 py-2 my-4 text-sm font-medium leading-4 text-yellow-700 bg-yellow-100 border border-transparent rounded-md hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            disabled={loading}
          >
            <span>{loading ? "Loading" : "Send magic link"}</span>
          </button>
          {/* <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            className='block button'
            disabled={loading}
          >
            <span>{loading ? "Loading" : "Send magic link"}</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
