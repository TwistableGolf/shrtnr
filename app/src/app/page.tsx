'use client';

import { FormEvent, useState } from "react";

export default function Home() {

  let [url, setUrl] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const url = formData.get('url')?.toString();
    // Validate url is valid ur
    if (!url || !url.match(/^https?:\/\/.+/)) {
      alert('Invalid URL')
      return
    }


    const response = await fetch('/api/shorten', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
    })

    // Handle response if necessary
    const data = await response.json()
    const fullUrl = `${window.location.origin}/${data.id}`
    const shortened = fullUrl.replace('www.', '');
    setUrl(shortened);
  }

  async function copyUrl() {
    await navigator.clipboard.writeText(url);
    alert('Copied to clipboard');
  }

  return (
    <main className="flex min-h-screen flex-col items-center sm:p-12 p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <h1 className="text-4xl font-bold">SHRTNR</h1>
      </div>
      <div className="flex flex-col justify-center flex-grow sm:w-1/2 w-full space-y-4">
        <form className="flex flex-col items-center space-y-4" onSubmit={onSubmit}>
          <input
            type="text"
            name="url"
            className="p-2 w-full  text-lg text-black border border-gray-200 rounded-lg"
            placeholder="Link to shorten"
          />
          <button className="p-1 text-lg hover:bg-white hover:text-black transition-all rounded-md outline outline-white outline-2">
            SHRTN
          </button>
        </form>

        {url && (
          <div className="flex justify-center">
            <p className="p-1">Your url is: {url}</p>
            <button
              className="p-1 ml-2 hover:bg-white hover:text-black transition-all rounded-md outline outline-white outline-2"
              onClick={copyUrl}>
              <span className="material-symbols-outlined flex justify-center">content_copy</span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
