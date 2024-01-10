import { shallowMount } from "@vue/test-utils";
import DeckValue from "@/components/DeckValue.vue";

describe("DeckValue component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DeckValue);
  });

  it("Should render the given value", async () => {
    // Arrange
    const value = 10;
    await wrapper.setProps({ deckValue: value });
    const elem = wrapper.find(".deck-counter");
    const expected = parseInt(elem.text(), 10);

    // Assert
    expect(expected).toBe(value);
  });
});
