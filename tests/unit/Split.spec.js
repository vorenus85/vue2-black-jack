import { shallowMount } from "@vue/test-utils";
import Split from "@/components/Buttons/Split.vue";

describe("Split button component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Split);
  });

  it('emits "split" event on button click', async () => {
    // Arrange
    await wrapper.find(".split-btn").trigger("click");

    // Act
    await wrapper.vm.$nextTick();

    // Assert
    expect(wrapper.emitted().split).toBeTruthy();
  });
});
