// import * as generesAPI from "./fakeGenreService";

const movies = [
  {
    _id: "123423423423",
    title: "Terminator",
    genre: { _id: "23oi3o2ij2i32oi3", name: "Action" },
    numberInStock: "6",
    dailyRentalPrice: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "12342we423423",
    title: "Run",
    genre: { _id: "1231231we23123", name: "Literal" },
    numberInStock: "2",
    dailyRentalPrice: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "14r42we423423",
    title: "Die Hard",
    genre: { _id: "16y231we23123r", name: "Comedy" },
    numberInStock: "4",
    dailyRentalPrice: 2.0,
    publishDate: "2018-01-13T09:03:28.809Z"
  },
  {
    _id: "12342we424t23",
    title: "RambleIII",
    genre: { _id: "23oi3o2ij2i32oi3", name: "Action" },
    numberInStock: "9",
    dailyRentalPrice: 1.5,
    publishDate: "2018-11-03T19:04:28.809Z"
  },
  {
    _id: "12342we4t5t23",
    title: "Gone Girl",
    genre: { _id: "1231231we23123", name: "Literal" },
    numberInStock: "6",
    dailyRentalPrice: 2.5,
    publishDate: "2018-11-03T19:04:28.809Z"
  },
  {
    _id: "123t4we424t23",
    title: "Big Bang",
    genre: { _id: "16y231we23123r", name: "Comedy" },
    numberInStock: "$9",
    dailyRentalPrice: 1.5,
    publishDate: "2018-11-03T19:04:28.809Z"
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}
