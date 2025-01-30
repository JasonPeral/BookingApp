import React from 'react';

function ContactPage() {
    return (
        <div className="max-w-md mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Contact Us</h2>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" required
                           className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" required
                           className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" id="phone" name="phone"
                           className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="query" className="text-sm font-medium text-gray-700">Query</label>
                    <textarea id="query" name="query" rows="4" required
                              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <button type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Send
                </button>
            </form>
        </div>
    );
}

export default ContactPage;
