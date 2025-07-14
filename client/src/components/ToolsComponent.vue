<template>
  <div class="tools-container">
    <div class="tools-item" @click="navigateToTool('arrears')">
      <div class="tool-icon arrears-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M8 4v4l3 3" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>
      </div>
      <div class="tool-content">
        <div class="tool-title">Arrears</div>
        <div class="tool-description">78 Arrears notices due.</div>
      </div>
    </div>

    <div class="tools-item" @click="navigateToTool('invoice-approvals')">
      <div class="tool-icon invoice-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <rect x="3" y="2" width="10" height="12" rx="1" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M6 6h4M6 8h4M6 10h2" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </div>
      <div class="tool-content">
        <div class="tool-title">Invoice Approvals</div>
        <div class="tool-description">All invoice approvals are up to date.</div>
      </div>
    </div>

    <div class="tools-item" @click="navigateToTool('tenant-late-fees')">
      <div class="tool-icon late-fees-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M8 4v4" stroke="currentColor" stroke-width="2"/>
          <circle cx="8" cy="11" r="1" fill="currentColor"/>
        </svg>
      </div>
      <div class="tool-content">
        <div class="tool-title">Late Fees</div>
      </div>
    </div>

    <div class="tools-item" @click="navigateToTool('maintenance')">
      <div class="tool-icon maintenance-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1l2 2-1 1 2 2-1 1 2 2-2 2-1-1-2 2-1-1-2 2L1 8l2-2 1 1 2-2 1 1 2-2z" stroke="currentColor" stroke-width="1" fill="none"/>
        </svg>
      </div>
      <div class="tool-content">
        <div class="tool-title">Maintenance</div>
        <div class="tool-description">You have no new maintenance requests.</div>
        <div class="tool-subdescription">All quotation responses are up to date.</div>
      </div>
    </div>

    <div class="tools-item" @click="navigateToTool('inspections')">
      <div class="tool-icon inspections-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M6 7l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>
      </div>
      <div class="tool-content">
        <div class="tool-title">Inspections</div>
        <div class="tool-description">All tenancy inspection notices are currently up to date.</div>
      </div>
    </div>

    <div class="tools-item" @click="navigateToTool('reminders')">
      <div class="tool-icon reminders-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M8 4v4l2 2" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>
      </div>
      <div class="tool-content">
        <div class="tool-title">Reminders</div>
        <div class="tool-description">My Reminders - create, update, view and delete reminders.</div>
      </div>
    </div>

    <div class="tools-item" @click="navigateToTool('insurance')">
      <div class="tool-icon insurance-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1l4 2v5c0 3-4 7-4 7s-4-4-4-7V3l4-2z" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>
      </div>
      <div class="tool-content">
        <div class="tool-title">Insurance Hub</div>
      </div>
    </div>

    <div class="tools-item" @click="navigateToTool('rent-reviews')">
      <div class="tool-icon rent-review-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <rect x="2" y="4" width="12" height="8" rx="1" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M5 7h6M5 9h4" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </div>
      <div class="tool-content">
        <div class="tool-title">Rent Review Hub</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateToTool(toolPath) {
  router.push(`/${toolPath}`);
}
</script>

<style scoped>
.tools-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
}

.tools-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
  background: #fff;
  border: 1px solid #f0f0f0;
}

.tools-item:hover {
  background: #f8f9fa;
}

.tool-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.arrears-icon {
  color: #e53e3e;
  background: #fed7d7;
}

.invoice-icon {
  color: #4a5568;
  background: #e2e8f0;
}

.late-fees-icon {
  color: #d69e2e;
  background: #faf089;
}

.maintenance-icon {
  color: #38a169;
  background: #c6f6d5;
}

.inspections-icon {
  color: #3182ce;
  background: #bee3f8;
}

.reminders-icon {
  color: #805ad5;
  background: #e9d8fd;
}

.insurance-icon {
  color: #d69e2e;
  background: #faf089;
}

.rent-review-icon {
  color: #4a5568;
  background: #e2e8f0;
}

.tool-content {
  flex: 1;
  min-width: 0;
}

.tool-title {
  font-weight: 600;
  font-size: 0.875rem;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.tool-description {
  font-size: 0.75rem;
  color: #4a5568;
  line-height: 1.3;
  margin-bottom: 0.125rem;
}

.tool-subdescription {
  font-size: 0.75rem;
  color: #718096;
  line-height: 1.3;
}
</style>