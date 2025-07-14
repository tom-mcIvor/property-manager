import { mount } from '@vue/test-utils'
import OverdueButton from '@/components/OverdueButton.vue'

describe('OverdueButton', () => {
  it('renders the count', () => {
    const wrapper = mount(OverdueButton, { props: { count: 10, active: false } })
    expect(wrapper.text()).toContain('10')
  })

  it('emits click event', async () => {
    const wrapper = mount(OverdueButton, { props: { count: 1, active: false } })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('applies active class', () => {
    const wrapper = mount(OverdueButton, { props: { count: 1, active: true } })
    expect(wrapper.classes()).toContain('active')
  })
}) 