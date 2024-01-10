import { mount } from "@vue/test-utils";

import Card from "@/components/Card.vue";

describe("Card component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Card, {
      propsData: {
        back: false,
      },
    });
  });

  it("should card is rendered", () => {
    // Assert
    expect(wrapper.exists()).toBe(true);
  });

  it("should rendered the front side", () => {
    const front = wrapper.find(".front");

    // Assert
    expect(front.exists()).toBe(true);
  });

  it("should rendered the back side", async () => {
    // Arrange
    await wrapper.setProps({ back: true });
    const back = wrapper.find(".back");

    // Assert
    expect(back.exists()).toBe(true);
  });

  describe("check card symbol, value and color", () => {
    const cases = [
      ["C10", ".clubs", ".black", "10"],
      ["H10", ".hearts", ".red", "10"],
      ["D10", ".diamonds", ".red", "10"],
      ["S10", ".spades", ".black", "10"],
    ];
    test.each(cases)(
      "card %p use %p symbol, its color is %p, show %p value",
      async (card, cardSymbol, cardColor, cardValue) => {
        await wrapper.setProps({ card });
        await wrapper.vm.$nextTick();
        const frontClass = wrapper.find(`.front`);
        const value = wrapper.find(".card-value");
        expect(frontClass.exists()).toBe(true);
        expect(wrapper.find(`${cardSymbol}`).exists()).toBe(true);
        expect(wrapper.find(`${cardColor}`).exists()).toBe(true);
        expect(value.text()).toBe(cardValue);
      }
    );
  });
});
