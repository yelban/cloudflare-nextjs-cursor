import { getAlbums } from "../shared/api";
import Album from "../shared/components/Album";

export default async function AlbumPage() {
  const albums = await getAlbums();
  return (
    <div>
      {albums.map((album) => (
        <Album key={album.album} album={album} />
      ))}
    </div>
  );
}
