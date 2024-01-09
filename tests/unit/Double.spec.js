import { shallowMount } from "@vue/test-utils";
import Double from "@/components/Buttons/Double.vue";

describe("Double button component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Double);
  });

  it('emits "double" event on button click', async () => {
    // Arrange
    await wrapper.find(".double-btn").trigger("click");

    // Act
    await wrapper.vm.$nextTick();

    // Arrange
    expect(wrapper.emitted().double).toBeTruthy();
  });
});
