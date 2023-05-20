import fetchBuilder from "./utils";

const getSongs = async (uid) => {
    const songs = await fetchBuilder.get("/songs", uid);
    return songs;
}

export { getSongs };