export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <h1 className="text-4xl font-bold">SHRTNR</h1>
      </div>
      <div className="flex items-center space-x-4 flex-grow">
        <input
          type="text"
          className="w-96 p-4 text-lg text-black border border-gray-200 rounded-lg"
          placeholder="Link to shorten"
        />
        <button className="p-4 text-lg bg-blue-500 text-black rounded-lg">
          SHRTN
        </button>
      </div>
    </main>
  );
}
