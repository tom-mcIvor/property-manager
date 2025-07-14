import { mount } from '@vue/test-utils'
import InsightsDropdownItem from '@/components/InsightsDropdownItem.vue'

describe('InsightsDropdownItem', () => {
  it('renders Insights text', () => {
    const wrapper = mount(InsightsDropdownItem)
    expect(wrapper.text()).toContain('Insights')
  })

  it('applies active class when active', () => {
    const wrapper = mount(InsightsDropdownItem, { props: { active: true } })
    expect(wrapper.classes()).toContain('active')
  })
}) 