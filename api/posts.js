import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://amankumar.ghost.io',
    key: '3b8d385f8802c12b4f66025fbc',
    version: "v2"
});

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all",
            include: "tags,authors"
        })
        .catch(err => {
            console.error(err);
        })
}