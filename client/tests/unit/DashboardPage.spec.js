import { mount } from '@vue/test-utils'
import DashboardPage from '@/components/DashboardPage.vue'

describe('DashboardPage', () => {
  it('renders without crashing', () => {
    const wrapper = mount(DashboardPage)
    expect(wrapper.exists()).toBe(true)
  })
}) 