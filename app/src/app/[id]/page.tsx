import { redirect } from 'next/navigation'
import client from "../../../lib/mongodb";
import { unstable_cache } from "next/cache";

const getUrl = unstable_cache(async (id: string) => {
    const link = await client
        .db("shortener")
        .collection("links")
        .findOne({ id: id });
    if (!link) {
        return "/404";
    }
    return link.url;
}, ['shortener'], { revalidate: 60, tags: ['shortener'] })

export default async function Page({ params }: { params: { id: string } }) {
    const link = await getUrl(params.id);
    redirect(link);
}