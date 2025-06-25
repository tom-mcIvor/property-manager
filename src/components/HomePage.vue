<template>
  <div class="hero">
    <div class="hero-content">
      <h2>Property Operations & Maintenance Software</h2>
      <h1>End-to-end compliance and<br>maintenance management.</h1>
      <p>Stay on top of your property compliance and maintenance requests to keep your buildings in working order.</p>
      <div class="hero-buttons">
        <button class="primary">Book a Demo</button>
        <button class="secondary">View Interactive Demo</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed for now
</script>

<style scoped>
.hero {
  background: #fdfbee;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
}
.hero-content {
  text-align: center;
  max-width: 700px;
}
.hero h2 {
  font-size: 1.2rem;
  color: #222;
  font-weight: 400;
  margin-bottom: 1rem;
}
.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #111;
}
.hero p {
  color: #444;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
button.primary {
  background: #111;
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 600;
}
button.secondary {
  background: #fff;
  color: #111;
  border: 2px solid #111;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 600;
}
button.primary:hover, button.secondary:hover {
  opacity: 0.85;
}
</style> 