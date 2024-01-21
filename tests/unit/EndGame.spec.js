import { shallowMount } from "@vue/test-utils";
import EndGame from "@/components/EndGame.vue";

describe("Game result tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(EndGame, {
      propsData: { dealerPoints: 0, playerPoints: 0 },
    });
  });

  it("component renders correctly", () => {
    // Arrange
    const rootEl = wrapper.find(".game-result");
    const dealerPoints = wrapper.find(".dealer-points");
    const playerPoints = wrapper.find(".player-points");
    const winnerEl = wrapper.find(".winner-is");
    const newGameBtn = wrapper.findComponent({ ref: "new-game-btn" });

    // Assert
    expect(rootEl.exists()).toBe(true);
    expect(dealerPoints.exists()).toBe(true);
    expect(playerPoints.exists()).toBe(true);
    expect(winnerEl.exists()).toBe(true);
    expect(wrapper.vm.dealerPoints).toEqual(0);
    expect(wrapper.vm.playerPoints).toEqual(0);
    expect(wrapper.vm.theWinnerIs).toEqual("Player");
    expect(newGameBtn.exists()).toBe(true);
  });

  it("set props correctly", async () => {
    // Arrange
    const options = { dealerPoints: 21, playerPoints: 19 };
    await wrapper.setProps({ ...options });
    await wrapper.vm.$nextTick();
    const dealerPoints = wrapper.find(".dealer-points").text();
    const playerPoints = wrapper.find(".player-points").text();

    // Assert
    expect(parseInt(dealerPoints, 10)).toBe(options.dealerPoints);
    expect(parseInt(playerPoints, 10)).toBe(options.playerPoints);
  });

  test.each`
    dealerPoints | playerPoints | expectedResult
    ${21}        | ${19}        | ${"Dealer"}
    ${18}        | ${22}        | ${"Dealer"}
    ${19}        | ${15}        | ${"Dealer"}
    ${21}        | ${25}        | ${"Dealer"}
    ${19}        | ${21}        | ${"Player"}
    ${22}        | ${18}        | ${"Player"}
    ${15}        | ${19}        | ${"Player"}
    ${25}        | ${21}        | ${"Player"}
  `(
    "calc game winner correctly dealerPoints is: $dealerPoints, playerPoints is : $playerPoints, the winner is: $expectedResult",
    async ({ dealerPoints, playerPoints, expectedResult }) => {
      // Arrange
      const options = { dealerPoints, playerPoints };

      await wrapper.setProps({ ...options });
      await wrapper.vm.$nextTick();
      const winnerIs = wrapper.find(".winner-is").text();

      expect(winnerIs).toBe(expectedResult);
    }
  );
});
