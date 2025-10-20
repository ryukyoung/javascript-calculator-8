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

    if (!numbersPart || numbersPart.trim() === "") {
      throw new Error("[ERROR] 입력된 숫자가 없습니다.");
    }

    const tokens = this.#split(numbersPart, delimiters);

    if (tokens.length === 0) {
      throw new Error("[ERROR] 입력된 숫자가 없습니다.");
    }

    const numbers = tokens.map((t) => this.#parsePositiveInt(t));
    return numbers.reduce((acc, n) => acc + n, 0);
  }

  static #parseDelimiter(input) {
    const m1 = input.match(/^\/\/(.)\r?\n([\s\S]+)$/);
    if (m1) {
      const [, custom, rest] = m1;
      return { delimiters: [",", ":", custom], numbersPart: rest };
    }
    const m2 = input.match(/^\/\/(.)(\\n)([\s\S]+)$/);
    if (m2) {
      const [, custom, , rest] = m2;
      return { delimiters: [",", ":", custom], numbersPart: rest };
    }
    return { delimiters: [",", ":"], numbersPart: input };
  }

  static #split(str, delimiters) {
    const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`[${delimiters.map(esc).join("")}]`, "g");
    const parts = str.split(pattern);

    if (parts.some((p) => p === "")) {
      throw new Error("[ERROR] 구분자 사용이 올바르지 않습니다.");
    }
    return parts;
  }

  static #parsePositiveInt(token) {
    if (!/^\d+$/.test(token)) {
      throw new Error("[ERROR] 입력된 값이 올바르지 않습니다.");
    }
    const n = Number(token);
    if (!Number.isSafeInteger(n)) {
      throw new Error("[ERROR] 입력된 값이 너무 큽니다.");
    }
    if (n <= 0) {
      throw new Error("[ERROR] 양의 정수만 입력할 수 있습니다.");
    }
    return n;
  }
}

export default App;
