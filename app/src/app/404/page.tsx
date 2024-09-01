export default async function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-24">
            <div className="flex flex-col justify-center items-center z-10 w-full max-w-5xl text-sm lg:flex">
                <h1 className="text-4xl font-bold">404 - Link Not Found</h1>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4 flex-grow">
                <p className="text-lg">The link you are looking for does not exist.</p>
                <a className="p-1 hover:bg-white hover:text-black transition-all rounded-md outline outline-white outline-2" href="/">Go back home</a>
            </div>

        </main>
    );
}