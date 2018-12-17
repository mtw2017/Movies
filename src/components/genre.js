export const genres = [
  { _id: "23oi3o2ij2i32oi3", name: "Action" },
  { _id: "23oi2o3i23ok2o3k", name: "Comedy" },
  { _id: "23oi2o32i4ok2o3k", name: "Drama" }
];

export function getGenres() {
  return genres.filter(g => g);
}
