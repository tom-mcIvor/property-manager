import { mount } from '@vue/test-utils';
import HelloWorld from '../../src/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello Jest!';
    const wrapper = mount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
}); 