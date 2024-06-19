const movieData: { movies: {
  title: string;
  year: number;
  genre: string;
  director: {
    name: string;
    age: number;
    nationality: string;
  };
  cast: {
    name: string;
    role: string;
    age: number;
    awards: string[];
  }[];
  ratings: {
    imdb: number;
    rottenTomatoes: number;
    metacritic: number;
  };
  boxOffice: {
    budget: number;
    gross: number;
  };
}[] } = {
  movies: [
    {
      title: "The Great Adventure",
      year: 2021,
      genre: "Action",
      director: {
        name: "John Doe",
        age: 45,
        nationality: "American",
      },
      cast: [
        {
          name: "Alice Johnson",
          role: "Protagonist",
          age: 30,
          awards: ["Best Actress 2021"],
        },
        {
          name: "Bob Smith",
          role: "Antagonist",
          age: 40,
          awards: ["Best Villain 2021"],
        },
      ],
      ratings: {
        imdb: 7.8,
        rottenTomatoes: 85,
        metacritic: 75,
      },
      boxOffice: {
        budget: 150000000,
        gross: 450000000,
      },
    },
    {
      title: "Mystery in the Woods",
      year: 2019,
      genre: "Thriller",
      director: {
        name: "Jane Roe",
        age: 38,
        nationality: "British",
      },
      cast: [
        {
          name: "Charlie Brown",
          role: "Detective",
          age: 35,
          awards: ["Best Actor 2019"],
        },
        {
          name: "Dana White",
          role: "Suspect",
          age: 28,
          awards: ["Best Supporting Actress 2019"],
        },
      ],
      ratings: {
        imdb: 6.9,
        rottenTomatoes: 78,
        metacritic: 68,
      },
      boxOffice: {
        budget: 80000000,
        gross: 120000000,
      },
    },
    {
      title: "Love in Paris",
      year: 2020,
      genre: "Romance",
      director: {
        name: "Pierre Dupont",
        age: 50,
        nationality: "French",
      },
      cast: [
        {
          name: "Emily Clark",
          role: "Lover",
          age: 27,
          awards: ["Best Newcomer 2020"],
        },
        {
          name: "Henry Evans",
          role: "Lover",
          age: 32,
          awards: [],
        },
      ],
      ratings: {
        imdb: 7.2,
        rottenTomatoes: 82,
        metacritic: 70,
      },
      boxOffice: {
        budget: 50000000,
        gross: 150000000,
      },
    },
  ],
};

export default function App(): JSX.Element {

  const titlesAndAwards: { movieTitle: string; movieAwards: string[] }[] = []; 
  let awards: string[] = []; 

  const displayFunction = (): void => {
    
    for (let i in movieData.movies) {
      const movie = movieData.movies[i];  

      for (let j in movie.cast) { 
        const movieCast = movie.cast[j]; 
        if (movieCast.awards.length > 0){ 
          awards = awards.concat(movieCast.awards);
          }
       } 
        if (awards.length > 0) {
          titlesAndAwards.push({
              movieTitle: movie.title,
              movieAwards: awards
          }); 

      }
  }    
  }
  displayFunction()

  return (

  );
};