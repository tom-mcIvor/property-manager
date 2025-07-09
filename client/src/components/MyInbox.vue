<template>
  <div class="gmail-inbox-wrapper">
    <aside class="gmail-sidebar">
      <button class="compose-btn">Compose</button>
      <nav class="sidebar-nav">
        <button class="sidebar-link active">Inbox <span class="count">3</span></button>
        <button class="sidebar-link">Sent</button>
        <button class="sidebar-link">Drafts</button>
        <button class="sidebar-link">Spam</button>
        <button class="sidebar-link">Trash</button>
      </nav>
    </aside>
    <main class="gmail-main">
      <div class="gmail-toolbar">
        <input type="checkbox" />
        <button class="toolbar-btn"><span class="material-icons">refresh</span></button>
        <button class="toolbar-btn"><span class="material-icons">more_vert</span></button>
      </div>
      <div class="gmail-email-list">
        <div class="gmail-email-row unread">
          <input type="checkbox" />
          <span class="star material-icons">star_border</span>
          <span class="sender">Google</span>
          <span class="subject">Welcome to Gmail <span class="snippet">- Get started with your new inbox.</span></span>
          <span class="date">Apr 8</span>
        </div>
        <div class="gmail-email-row">
          <input type="checkbox" />
          <span class="star material-icons">star_border</span>
          <span class="sender">Vue Team</span>
          <span class="subject">Vue 3.0 Released <span class="snippet">- Check out the new features!</span></span>
          <span class="date">Apr 7</span>
        </div>
        <div class="gmail-email-row unread">
          <input type="checkbox" />
          <span class="star material-icons">star</span>
          <span class="sender">GitHub</span>
          <span class="subject">Repository Update <span class="snippet">- Your pull request was merged.</span></span>
          <span class="date">Apr 6</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// No logic for now; static Gmail mockup
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.gmail-inbox-wrapper {
  display: flex;
  background: #f6f8fc;
  min-height: 500px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  overflow: hidden;
  font-family: 'Roboto', Arial, sans-serif;
  border: 2px solid #d0d7de;
}
.gmail-sidebar {
  width: 210px;
  background: #fff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0.5rem 1.2rem 1.2rem;
  gap: 1.5rem;
}
.compose-btn {
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 0.7rem 1.8rem;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(25,118,210,0.08);
  transition: background 0.18s;
}
.compose-btn:hover {
  background: #1356a2;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.sidebar-link {
  background: none;
  border: none;
  color: #222;
  font-size: 1.05rem;
  text-align: left;
  padding: 0.6rem 1rem 0.6rem 0.7rem;
  border-radius: 0 24px 24px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: background 0.18s, color 0.18s;
  position: relative;
}
.sidebar-link.active, .sidebar-link:hover {
  background: #e8f0fe;
  color: #1976d2;
}
.sidebar-link .count {
  background: #e53935;
  color: #fff;
  font-size: 0.85em;
  border-radius: 12px;
  padding: 0.1em 0.7em;
  margin-left: auto;
}
.gmail-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.gmail-toolbar {
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  padding: 0.5rem 1.2rem;
  gap: 0.5rem;
}
.toolbar-btn {
  background: none;
  border: none;
  color: #444;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  transition: background 0.2s;
}
.toolbar-btn:hover {
  background: #f0f0f0;
}
.gmail-email-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
}
.gmail-email-row {
  display: flex;
  align-items: center;
  padding: 0.7rem 1.2rem;
  border-bottom: 1px solid #f0f0f0;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.15s;
  gap: 0.7rem;
}
.gmail-email-row:last-child {
  border-bottom: none;
}
.gmail-email-row.unread {
  background: #e8f0fe;
  font-weight: 600;
}
.gmail-email-row:hover {
  background: #f4f8fd;
}
.gmail-email-row input[type="checkbox"] {
  margin-right: 0.7rem;
}
.star {
  color: #e3b800;
  font-size: 1.3em;
  margin-right: 0.7rem;
  cursor: pointer;
  transition: color 0.18s;
}
.star:hover {
  color: #ffd600;
}
.sender {
  min-width: 110px;
  max-width: 160px;
  font-weight: 500;
  color: #222;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.subject {
  flex: 1;
  min-width: 0;
  color: #222;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.snippet {
  color: #888;
  font-weight: 400;
  margin-left: 0.3em;
}
.date {
  min-width: 60px;
  text-align: right;
  color: #666;
  font-size: 0.98em;
  margin-left: 1.2rem;
}
</style> 