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

  it("should initialize a new game", async () => {
    const wrapper = mount({
      template: "<div></div>",
      mixins: [mixins],
    });

    const mockedShuffledDeck = ["H10", "C10", "D10", "S10"];

    // Mock $store and other necessary dependencies
    wrapper.vm.$store = {
      dispatch: jest.fn(),
    };

    const mockedPullCardToDealer = jest.fn();
    mockedPullCardToDealer.mockReturnValue("pullCardToDealer");
    const mockedPullCardToPlayer = jest.fn();
    mockedPullCardToPlayer.mockReturnValue("pullCardToPlayer");

    // Mock setTimeout
    jest.useFakeTimers();

    let setTimeoutSpy = jest.spyOn(window, "setTimeout");

    // Call the method you want to test
    wrapper.vm.initNewGame(mockedShuffledDeck);

    // Advance timers to simulate asynchronous code
    jest.runAllTimers();

    // Assertions for $store.dispatch calls
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
      "changeGameMode",
      "player"
    );
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith("emptyDealerDeck");
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
      "setDealerDeckSum",
      0
    );
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith("emptyPlayerDeck");
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
      "setPlayerDeckSum",
      0
    );
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
      "createDeck",
      mockedShuffledDeck
    );

    expect(setTimeoutSpy).toHaveBeenCalledTimes(4);

    /*
    // Assertions for setTimeout calls
    expect(setTimeout).toHaveBeenNthCalledWith(
      1,
      expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
        "pullCardToDealer"
      ),
      125
    );
    expect(setTimeout).toHaveBeenNthCalledWith(
      2,
      expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
        "pullCardToPlayer"
      ),
      250
    );
    expect(setTimeout).toHaveBeenNthCalledWith(
      3,
      expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
        "pullCardToDealer"
      ),
      375
    );
    expect(setTimeout).toHaveBeenNthCalledWith(
      4,
      expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
        "pullCardToPlayer"
      ),
      500
    );
    */
  });
});
