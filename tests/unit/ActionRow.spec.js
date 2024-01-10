import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import ActionRow from "@/components/Layout/ActionRow.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const actualGameModeMock = jest.fn();
actualGameModeMock.mockReturnValue("player");

const store = new Vuex.Store({
  actions: {
    pullCardToPlayer: jest.fn(),
    changeGameMode: jest.fn(),
  },
  getters: {
    actualGameMode: actualGameModeMock,
  },
});

describe("ActionRow component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ActionRow, { localVue, store });
  });

  it("should render component", () => {
    const elem = wrapper.find(".action-row");
    expect(elem.exists()).toBe(true);
  });

  test.each`
    btn          | btnRef
    ${"Split"}   | ${"split-btn"}
    ${"Double"}  | ${"double-btn"}
    ${"Stand"}   | ${"stand-btn"}
    ${"Hit"}     | ${"hit-btn"}
    ${"NewGame"} | ${"new-game-btn"}
  `("should render $btn button with $btnRef", ({ btnRef }) => {
    const btn = wrapper.findComponent({ ref: btnRef });
    expect(btn.exists()).toBe(true);
  });

  it('should by clicking on Hit button should dispatch "pullCardToPlayer" event', async () => {
    const btn = wrapper.findComponent({ ref: "hit-btn" });
    const storeDispatch = jest.spyOn(wrapper.vm.$store, "dispatch");
    await btn.trigger("click");
    wrapper.vm.$nextTick(() => {
      expect(storeDispatch).toHaveBeenCalledWith("pullCardToPlayer");
    });
  });

  it('should by clicking on Stand button should dispatch "changeGameMode" event with "dealer" param', async () => {
    const btn = wrapper.findComponent({ ref: "stand-btn" });
    const storeDispatch = jest.spyOn(wrapper.vm.$store, "dispatch");
    await btn.trigger("click");
    wrapper.vm.$nextTick(() => {
      expect(storeDispatch).toHaveBeenCalledWith("changeGameMode", "dealer");
    });
  });
});
