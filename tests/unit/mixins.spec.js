import { mount } from "@vue/test-utils";
import mixins from "@/mixins";

describe("mixins", () => {
  describe("calculate card value:", () => {
    test.each`
      card     | value
      ${"H10"} | ${"10"}
      ${"H8"}  | ${"8"}
      ${"H6"}  | ${"6"}
      ${"H4"}  | ${"4"}
      ${"H2"}  | ${"2"}
      ${"S9"}  | ${"9"}
      ${"S7"}  | ${"7"}
      ${"S5"}  | ${"5"}
      ${"S3"}  | ${"3"}
      ${"SA"}  | ${"A"}
      ${"HA"}  | ${"A"}
      ${"DA"}  | ${"A"}
      ${"CA"}  | ${"A"}
    `("card is $card value will be: $value", ({ card, value }) => {
      const wrapper = mount({
        template: "<div></div>",
        mixins: [mixins],
      });

      const actualResult = wrapper.vm.getCardValue(card);

      expect(actualResult).toBe(value);
    });
  });

  describe("calculate deck value", () => {
    test.each`
      deck                         | value
      ${["H10", "D8"]}             | ${18}
      ${["H10", "S2", "D8"]}       | ${20}
      ${["D7", "H10", "DA", "S3"]} | ${21}
      ${["H8", "D8", "S8", "C5"]}  | ${29}
    `("deck contains $deck, so value will be $value", ({ deck, value }) => {
      const wrapper = mount({
        template: "<div></div>",
        mixins: [mixins],
      });

      const actualResult = wrapper.vm.calcDeckValue(deck);

      expect(actualResult).toBe(value);
    });
  });
});
