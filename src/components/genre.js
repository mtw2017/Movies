export const genres = [
  { _id: "23oi3o2ij2i32oi3", name: "Action" },
  { _id: "16y231we23123r", name: "Comedy" },
  { _id: "1231231we23123", name: "Literal" }
];

export function getGenres() {
  return genres.filter(g => g);
}
