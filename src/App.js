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
      MissionUtils.Console.print(error?.message ?? "");
      throw error;
    }
  }
}

class StringCalculator {
  static add(input) {
    if (input === "") return 0;

    const { delimiters, numbersPart } = this.#parseDelimiter(input);
    const tokens = this.#split(numbersPart, delimiters);

    const numbers = tokens.map((t) => Number(t));
    return numbers.reduce((acc, n) => acc + n, 0);
  }

  static #parseDelimiter(input) {
    return { delimiters: [",", ":"], numbersPart: input };
  }

  static #split(str, delimiters) {
    const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`[${delimiters.map(esc).join("")}]`, "g");
    return str.split(pattern);
  }
}

export default App;
