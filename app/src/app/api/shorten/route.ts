import client from "../../../../lib/mongodb";

export async function POST(request: Request) {
    const { url } = await request.json();
    if (!url) {
        return new Response("Missing URL", { status: 400 });
    }

    const id = Math.random().toString(36).slice(2);

    await client
        .db("shortener")
        .collection("links")
        .insertOne({ id, url });

    const repsonse = {id: id};
    return new Response(JSON.stringify(repsonse));
}

