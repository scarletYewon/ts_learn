// 함수의 파라미터에 타입을 정의하는 방식
function sum(a : number , b : number) {
    return a + b;
};
sum(10,20);

// 함수의 반환 값에 타입을 정의하는 방식
function add() : number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function minus(a : number, b : number) : number {
    return a - b;
}

// 함수 파라미터를 제한하는 특성이 있음
function div(a : number , b : number) : number {
    return a / b;
};
// div(10,20,30,40);  == > 30,40은 에러 발생
// div(10); == > 두번째 파라미터가 없어서 에러 발생

// 함수의 옵셔널 파라미터
function log(a : string, b ?: string) {

}
log('hello world');
log('hello ts', 'abc');

// function log(a : string, b : string) {
      //이런함수는 b 파라미터에 맞는 타입의 변수가 꼭 존재해야함
// }
