// SSR компонент

import  { fetchNotes } from "@/lib/api";
import NotesClient from "./NotesClient";


export default async function NotesPage() {
  // Серверний запит
  const data = await fetchNotes({ page: 1, perPage: 12 });

  console.log('data', data)

  return <NotesClient initialData={data} />;
}