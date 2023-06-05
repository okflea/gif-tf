"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { signUpUserWithEmailAndPassword, getCurrentUser } from "./../firebase/auth.js";

function SignUpForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });

  const onFormDataChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormDataSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
    } else {
      await signUpUserWithEmailAndPassword(formData.email, formData.password);
      router.push("/");
    }
  };

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        router.replace("/");
      }
    });
  }, [router]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-white transform hover:scale-110 transition-all duration-500">
      Sign Up
      </h1>
      <div>
        <div>
          <label htmlFor="email" className="font-semibold text-slate-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id=""
            value={formData["email"]}
            onChange={onFormDataChange}
            className="bg-gray-700 text-white font-bold rounded-lg p-3 mt-2 block"
          />
        </div>
        <div>
          <label htmlFor="password" className="font-semibold text-slate-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id=""
            value={formData["password"]}
            onChange={onFormDataChange}
            className="bg-gray-700 text-white font-bold rounded-lg p-3 mt-2 block"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="font-semibold text-slate-600">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id=""
            value={formData["confirmPassword"]}
            onChange={onFormDataChange}
            className="bg-gray-700 text-white font-bold rounded-lg p-3 mt-2 block"
          />
        </div>
        <button
          type="button"
          onClick={onFormDataSubmit}
          className="bg-gray-700 text-white font-bold rounded-lg p-3 mt-2 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition-all duration-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
