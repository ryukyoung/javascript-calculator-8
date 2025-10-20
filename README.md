# javascript-calculator-precourse

## 기능 목록

- 빈 문자열 입력 시 `0`을 반환한다.
- 기본 구분자(쉼표 `,`, 콜론 `:`)로 분리해 합을 계산한다.
- 커스텀 구분자(`//X\n` 또는 리터럴 `//X\\n`)를 파싱하여 합을 계산한다.
- 구분자 오용(연속/선두/후미) 시 `[ERROR]`로 시작하는 메시지와 함께 예외를 발생한다.
- 양수가 아닌 값(0, 음수, 소수, 비숫자, 안전 정수 범위 초과) 입력 시 `[ERROR]`로 시작하는 메시지와 함께 예외를 발생한다.
- 입출력은 `@woowacourse/mission-utils`의 `Console.readLineAsync()`와 `Console.print()`를 사용한다.
- 프로그램 실행의 시작점은 `App.js`의 `run()`이다. `process.exit()`는 사용하지 않는다.
- 출력 형식은 `결과 : N`를 따른다.
