import React from 'react';

const Contact = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="name">Name:</label>
          <input className="border p-2 w-full" type="text" id="name" name="name" />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">Email:</label>
          <input className="border p-2 w-full" type="email" id="email" name="email" />
        </div>
        <div>
          <label className="block mb-1" htmlFor="message">Message:</label>
          <textarea className="border p-2 w-full" id="message" name="message"></textarea>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;