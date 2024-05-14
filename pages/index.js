import ListAlbums from "../components/ListAlbums"

export default function Home() {
  return (
    <div className="pt-28 md:pl-72 p-8">
      <ListAlbums title="Spotify Playlist"/>
      <ListAlbums title="Dormir"/>
      <ListAlbums title="Enfoque"/>
      <ListAlbums title="Estado de animo"/>
    </div>
  )
}

