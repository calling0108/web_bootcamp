// ✅ 콜 스택 : JS 해석기가 사용하는 메커니즘, 여러 함수를 호출하는 스크립트에서 해당 위치를 추적한다. 그래서 JS가 위치를 알 수 있고 책 속의 손가락 같은 것(위치가 어디있는지 확인하는 손가락).

const multiply = (a, b) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);

isRightTriangle(3, 4, 5);