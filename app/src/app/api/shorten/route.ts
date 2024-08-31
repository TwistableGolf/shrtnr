export async function POST(request: Request) {
    const { url } = await request.json();
    const response = await fetch("https://api.shrtco.de/v2/shorten", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), {
        headers: {
        "Content-Type": "application/json",
        },
    });
}