import client from "../../../../../lib/mongodb";
import { redirect } from "next/navigation";

export async function GET(request: Request,{ params }: { params: { id: string } }) {
    let id = params.id;
    const link = await client
        .db("shortener")
        .collection("links")
        .findOne({ id });
    if (!link) {
        return new Response("Not found", { status: 404 });
    }
    return(link.url);
}