import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import PropertiesPage from './components/PropertiesPage.vue'
import HomePage from './components/HomePage.vue'
import DashboardPage from './components/DashboardPage.vue'
import TenanciesPage from './components/TenanciesPage.vue'

// Property Management components
import TenanciesDropdownItem from './components/TenanciesDropdownItem.vue'
import RentReviewsDropdownItem from './components/RentReviewsDropdownItem.vue'
import MaintenanceDropdownItem from './components/MaintenanceDropdownItem.vue'
import ComplianceDropdownItem from './components/ComplianceDropdownItem.vue'
import InsuranceDropdownItem from './components/InsuranceDropdownItem.vue'
import InspectionsDropdownItem from './components/InspectionsDropdownItem.vue'

// Accounting components
import IncomeExpensesDropdownItem from './components/IncomeExpensesDropdownItem.vue'
import InvoiceIntelligenceDropdownItem from './components/InvoiceIntelligenceDropdownItem.vue'
import ArrearsDropdownItem from './components/ArrearsDropdownItem.vue'
import ReLeasedPayDropdownItem from './components/ReLeasedPayDropdownItem.vue'
import InvoiceApprovalsDropdownItem from './components/InvoiceApprovalsDropdownItem.vue'
import OwnerFeesDropdownItem from './components/OwnerFeesDropdownItem.vue'
import TenantLateFeesDropdownItem from './components/TenantLateFeesDropdownItem.vue'

// Reporting components
import GeneralDropdownItem from './components/GeneralDropdownItem.vue'
import ReportBuilderDropdownItem from './components/ReportBuilderDropdownItem.vue'
import InsightsDropdownItem from './components/InsightsDropdownItem.vue'

const routes = [
  { path: '/', component: DashboardPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/properties', component: PropertiesPage },
  { path: '/tenancies', component: TenanciesPage },
  
  // Property Management routes
  { path: '/rent-reviews', component: RentReviewsDropdownItem },
  { path: '/maintenance', component: MaintenanceDropdownItem },
  { path: '/compliance', component: ComplianceDropdownItem },
  { path: '/insurance', component: InsuranceDropdownItem },
  { path: '/inspections', component: InspectionsDropdownItem },
  
  // Accounting routes
  { path: '/income-expenses', component: IncomeExpensesDropdownItem },
  { path: '/invoice-intelligence', component: InvoiceIntelligenceDropdownItem },
  { path: '/arrears', component: ArrearsDropdownItem },
  { path: '/re-leased-pay', component: ReLeasedPayDropdownItem },
  { path: '/invoice-approvals', component: InvoiceApprovalsDropdownItem },
  { path: '/owner-fees', component: OwnerFeesDropdownItem },
  { path: '/tenant-late-fees', component: TenantLateFeesDropdownItem },
  
  // Reporting routes
  { path: '/general', component: GeneralDropdownItem },
  { path: '/report-builder', component: ReportBuilderDropdownItem },
  { path: '/insights', component: InsightsDropdownItem },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
