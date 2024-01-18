import { mount } from "@vue/test-utils";
import mixins from "@/mixins";

describe("mixins", () => {
  it("should calculate card value correctly", () => {
    const wrapper = mount({
      template: "<div></div>",
      mixins: [mixins],
    });

    // Call the getCardValue method with a test card
    const cardValue = wrapper.vm.getCardValue("H10");

    // Add your assertions here based on the expected behavior
    expect(cardValue).toBe("10");
  });
});
