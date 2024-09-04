import { env } from "process";
import client from "../../../../lib/mongodb";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export async function POST(request: Request) {
    const { url } = await request.json();
    if (!url) {
        return new Response("Missing URL", { status: 400 });
    }

    const length = env.ID_LENGTH;
    if (!length) {
        return new Response("Missing ID_LENGTH", { status: 500 });
    }

    const lengthNumber = parseInt(length);

    let id = "";
    for (let i = 0; i < lengthNumber; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    await client
        .db("shortener")
        .collection("links")
        .insertOne({ id, url });

    const repsonse = {id: id};
    return new Response(JSON.stringify(repsonse));
}

