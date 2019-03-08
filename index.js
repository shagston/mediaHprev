const siteBanner = document.getElementById("site-banner");
const newReleaseContent = document.getElementById("new-release-content");
const topRatedContent = document.getElementById("top-rated-content");
const popularContent = document.getElementById("popular-content");
const movieInfo = document.getElementById("info");
const apiKey = "b6b3aaa39e9b8519d35c42addbdba973";
const apiToken = "6de283b0d2895accbd93b3c86b5a11bc";
const keyword = "captain marvel";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=" +
  apiKey +
  "&query=" +
  keyword;

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let res = data.results;
    console.log(res);

    let mainTitle = document.createElement("h1");
    let watchBtn = document.createElement("button");
    let mainOverview = document.createElement("p");
    let bgOverlay = document.createElement("div");

    mainTitle.innerHTML = res[0].title;
    watchBtn.innerHTML = "Watch now";
    mainOverview.innerHTML = res[0].overview;
    bgOverlay.classList.add("after");

    mainTitle.className = "main-movie-title";
    watchBtn.className = "watch-btn";
    mainOverview.className = "main-overview";
    bgOverlay.className = "after";

    siteBanner.appendChild(mainTitle);
    siteBanner.appendChild(mainOverview);
    siteBanner.appendChild(watchBtn);
    siteBanner.appendChild(bgOverlay);
  })
  .catch(err => {
    console.log(err);
  });



const upcomingUrl =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
  apiKey +
  "&language=ru&page=1";

fetch(upcomingUrl)
  .then(response => {
    return response.json();
  })
  .then((data) => {
    let res = data.results;
    console.log(res);
    for (var i = 0; i < 10; i++) {
      let newReleaseMovie = document.createElement("div");
      let newMovieTitle = document.createElement("h5");
      let newMovieImg = document.createElement("img");
      let newMovieInfo = document.createElement("p");

      //Give elements a class name
      newReleaseMovie.className = "movie";
      newMovieTitle.className = "movie-title";
      newMovieImg.className = "movie-img";
      newMovieInfo.ClassName = "movie-info";

      //fill in the elements
      newMovieTitle.innerHTML = res[i].title;

      newMovieInfo.innerHTML = res[i].overview;

      newMovieImg.src = "https://image.tmdb.org/t/p/w200" + res[i].poster_path;

      //append children to parent
      newReleaseMovie.appendChild(newMovieImg);
      newReleaseMovie.appendChild(newMovieTitle);
      newReleaseMovie.appendChild(newMovieInfo);
      newReleaseContent.appendChild(newReleaseMovie);
    }
  })

  .catch(err => {
    console.log(err);
  });

const latestUrl =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
  apiKey +
  "&language=ru&page=1";

fetch(latestUrl)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let res = data.results;
    console.log(res);
    for (var i = 0; i < 10; i++) {
      //Create elements
      let topRatedMovie = document.createElement("div");
      let topMovieTitle = document.createElement("h5");
      let topMovieImg = document.createElement("img");

      //Give elements a class name
      topRatedMovie.className = "movie";
      topMovieTitle.className = "movie-title";
      topMovieImg.className = "movie-img";

      //fill in the elements
      topMovieTitle.innerHTML = res[i].title;

      topMovieImg.src = "https://image.tmdb.org/t/p/w300" + res[i].backdrop_path;

      //append children to parent
      topRatedMovie.appendChild(topMovieImg);
      topRatedMovie.appendChild(topMovieTitle);
      topRatedContent.appendChild(topRatedMovie);
    }
  })
  .catch(err => {
    console.log(err);
  });

const popUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=" +
  apiKey +
  "&language=ru&page=1";

fetch(popUrl)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let res = data.results;
    console.log(res);
    for (var i = 0; i < 10; i++) {
      //Create elements
      let popularMovie = document.createElement("div");
      let popularMovieTitle = document.createElement("h5");
      let popularMovieImg = document.createElement("img");

      //give elements a classname
      popularMovie.className = "movie";
      popularMovieTitle.className = "movie-title";
      popularMovieImg.className = "movie-img";

      //fill in the elements
      popularMovieTitle.innerHTML = res[i].title;
      popularMovieImg.src =
        "https://image.tmdb.org/t/p/w200" + res[i].poster_path;

      //append popular section
      popularMovie.appendChild(popularMovieImg);
      popularMovie.appendChild(popularMovieTitle);
      popularContent.appendChild(popularMovie);
    }
  })
  .catch(err => {
    console.log(err);
  });


  const infoPlayer = "https://iframe.video/api/v2/movies?imdb=" + res[i].imdb + "&api_token=" + apiToken"
