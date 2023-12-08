import { mount } from '@vue/test-utils';
import Card from '@/components/Card.vue';

describe('Card component', () => {
  it('card is rendered', () => {
    const wrapper = mount(Card, {
      propsData: {
        back: false,
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
