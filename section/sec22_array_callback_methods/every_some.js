
// 불리언 메서드로 참/거짓을 반환

// ✅every
// 모든 요소가 참이어야 참이 나옴
// 하나라도 조건 미충족 시 거짓이 나옴
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]


exams.every(score => score >= 75);

// ✅some
// 요소 중 하나 또는 일부가 테스트를 통과하는지 여부를 테스트
// 전체가 아닌 하나 이상인지를 봄

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
        year: 2010
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

movies.some(movie => movie.year > 2015);