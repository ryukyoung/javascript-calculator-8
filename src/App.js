// src/App.js
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");
      const raw = await MissionUtils.Console.readLineAsync("");
      const input = raw?.trim() ?? "";

      const result = StringCalculator.add(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      // 일단 최소 처리(다음 단계에서 [ERROR] 포맷/throw 정교화)
      MissionUtils.Console.print(error?.message ?? "");
      throw error;
    }
  }
}

class StringCalculator {
  static add(_input) {
    // 초기 골격: 일단 항상 0 반환
    return 0;
  }
}

export default App;
