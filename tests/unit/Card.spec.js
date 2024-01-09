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

  it("card is rendered", () => {
    // Assert
    expect(wrapper.exists()).toBe(true);
  });

  /**
   * [] check card front - back state
   * [] check card color
   * [] check card symbol
   * [] check card value
   */
});
