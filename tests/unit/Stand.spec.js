import { shallowMount } from "@vue/test-utils";
import Stand from "@/components/Buttons/Stand.vue";

describe("Stand button component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Stand);
  });

  it('emits "stand" event on button click', async () => {
    // Arrange
    await wrapper.find(".stand-btn").trigger("click");

    // Act
    await wrapper.vm.$nextTick();

    // Assert
    expect(wrapper.emitted().stand).toBeTruthy();
  });
});
