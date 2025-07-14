<template>
  <div>
    <div class="event-card maintenance">
      <div class="event-dot maintenance"></div>
      <div class="event-main">
        <div class="event-title">Maintenance <span class="event-date">3/04/2025</span></div>
        <div class="event-property">Property: 34 Queen St</div>
        <div class="event-tenancy">Tenancy: Marsland - Head Lease</div>
      </div>
    </div>
    <div class="event-card inspection">
      <div class="event-dot inspection"></div>
      <div class="event-main">
        <div class="event-title">Inspection <span class="event-date">3/04/2025</span></div>
        <div class="event-property">Property: 34 Queen St</div>
        <div class="event-tenancy">Tenancy: Smartechnologies</div>
      </div>
    </div>
    <div class="event-card anniversary">
      <div class="event-dot anniversary"></div>
      <div class="event-main">
        <div class="event-title">Property Anniversary <span class="event-date">1/01/2005</span></div>
        <div class="event-property">Property: 219 Moore Street</div>
      </div>
      <div class="event-overdue-bar"></div>
    </div>
  </div>
</template>

<script setup>
// TodaySidebarCards stub for DashboardPage.vue
</script>

<style scoped>
.event-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  border: 1px solid #ededed;
  padding: 0.8rem 1rem 0.7rem 0.7rem;
  display: flex;
  align-items: flex-start;
  position: relative;
  min-height: 70px;
  margin-bottom: 0;
}
.event-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 0.3em;
  margin-right: 0.8em;
  flex-shrink: 0;
}
.event-dot.maintenance { background: #2d5c88; }
.event-dot.inspection { background: #3b7c3b; }
.event-dot.anniversary { background: #222; }
.event-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}
.event-title {
  font-weight: 600;
  color: #222;
  font-size: 1rem;
  margin-bottom: 0.1em;
}
.event-date {
  color: #888;
  font-weight: 400;
  font-size: 0.97em;
  margin-left: 0.4em;
}
.event-property {
  color: #444;
  font-size: 0.97em;
}
.event-tenancy {
  color: #888;
  font-size: 0.95em;
}
.event-overdue-bar {
  position: absolute;
  right: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: #e74c3c;
  border-radius: 0 8px 8px 0;
}
</style> 