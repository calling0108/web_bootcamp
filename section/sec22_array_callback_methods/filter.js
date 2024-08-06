// ✅Filter
// 요소로 구성된 배열에서 필터링을 하거나 부분 집합을 모아 새 배열을 만드는데 사용됨
// 원본 배열을 바꾸지는 않음

// 콜백을 전달해서 참/거짓 반환하고(불리언 함수) 그 콜백이 어떤 요소에 대해 true값을 반환하면 그 요소는 마지막에 만들어지는 필터링된 배열에 추가됨

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


numbers.filter( n => {
    return n < 10
})

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const goodMovies = movies.filter(movie => movie.score > 80);

const badMovies = movies.filter(movie => movie.score < 70);

const recentMovies = movies.filter(m => m.year > 2000);

// 들여쓰기도 가능
movies
    .filter(m => m.score > 80)
    .map(m => m.title);