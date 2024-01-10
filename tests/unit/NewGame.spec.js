import { shallowMount } from "@vue/test-utils";
import NewGame from "@/components/Buttons/NewGame.vue";

describe("NewGame button component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NewGame);
  });

  it('emits "newGame" event on button click', async () => {
    // Arrange
    await wrapper.find(".new-game-btn").trigger("click");

    // Act
    await wrapper.vm.$nextTick();

    // Arrange
    expect(wrapper.emitted().newGame).toBeTruthy();
  });
});
