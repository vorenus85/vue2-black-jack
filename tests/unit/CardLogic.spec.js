import { symbols, values, deck } from "@/utils/cardLogic";

describe("Card logic", () => {
  it("symbols length is 4", () => {
    expect(symbols.length).toBe(4);
  });

  it("symbols contain S, H, D, C ", () => {
    const referenceSymbols = ["S", "H", "D", "C"];

    for (let index = 0; index < referenceSymbols.length; index++) {
      const element = referenceSymbols[index];
      expect(symbols.includes(element)).toBe(true);
    }
  });

  it("values contain 2, 3, 4, 5, 6, 7, 8, 9, 10, A, J, K, Q ", () => {
    const referenceValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];

    for (let index = 0; index < referenceValues.length; index++) {
      const element = referenceValues[index];
      expect(values.includes(element)).toBe(true);
    }
  });

  it("values length is 13", () => {
    expect(values.length).toBe(13);
  });

  it("deck length is 52", () => {
    expect(deck().length).toBe(52);
  });
});
