import { shallowMount } from "@vue/test-utils";
import Hit from "@/components/Buttons/Hit.vue";

describe("Hit button component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Hit);
  });

  it('emits "hit" event on button click', async () => {
    // Arrange
    await wrapper.find(".hit-btn").trigger("click");

    // Act
    await wrapper.vm.$nextTick();

    // Assert
    expect(wrapper.emitted().hit).toBeTruthy();
  });
});
