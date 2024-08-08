
// ✅Array Destructuring(배열 분해)
// 값을 해체하고 꺼내고 선정하는 간편한 방식
// 배열이나 객체에 적용할 수 있음
// 해체해서 별개의 변수 형태로 만들 수 있음


const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

// 순서대로 값이 들어감
const [gold, silver, bronze, ...everyoneElse] = scores;

console.log(gold);
console.log(silver);
console.log(everyoneElse);


// ✅Object Destructuring(객체 분해)
// 배열 분해와 달리 순서를 따르지 않음

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// 객체의 값을 기반으로 한 새로운 변수를 생성
// const { email, firstName, lastName, city, bio } = user;

// 새로운 변수명 지정
const { born: birthYear, died: deathYear = "N/A" } = user;

// default값 설정 : died 변수는 user2에 없음
const { city, state, died = "N/A" } = user2;

// ✅ Param Destructuring(매개변수 분해)

// 일반적인 방법
// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// 구조 분해
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

// 매개변수 분해
function fullName({ firstName = "default", lastName = "default" }) {
    return `${firstName} ${lastName}`;
}

// 사용법 : fullName(user); user 객체명을 넣어줘야 함..! 이게 더 헷갈릴거 같은데..?

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

// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score }) => score >= 90)


movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})