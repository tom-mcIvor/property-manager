import { mount } from '@vue/test-utils'
import TodayButton from '@/components/TodayButton.vue'

describe('TodayButton', () => {
  it('renders the count', () => {
    const wrapper = mount(TodayButton, { props: { count: 5, active: false } })
    expect(wrapper.text()).toContain('5')
  })

  it('emits click event', async () => {
    const wrapper = mount(TodayButton, { props: { count: 1, active: false } })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('applies active class', () => {
    const wrapper = mount(TodayButton, { props: { count: 1, active: true } })
    expect(wrapper.classes()).toContain('active')
  })
}) 