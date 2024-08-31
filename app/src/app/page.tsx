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
    setUrl(`${window.location.origin}/${data.id}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <h1 className="text-4xl font-bold">SHRTNR</h1>
      </div>
      <div className="flex flex-col justify-center space-y-4 flex-grow">
        <form className="flex items-center space-x-4" onSubmit={onSubmit}>
          <input
            type="text"
            name="url"
            className="w-96 p-4 text-lg text-black border border-gray-200 rounded-lg"
            placeholder="Link to shorten"
          />
          <button className="p-4 text-lg bg-blue-500 text-black rounded-lg">
            SHRTN
          </button>
        </form>
        {url && (
          <div className="flex justify-center">
            Your url is: {url}
          </div>
        )}
      </div>
    </main>
  );
}
