<template>
  <div class="icon-bar">
    <i class="fas fa-plus icon plain"></i>
    <i class="fas fa-sync-alt icon plain"></i>
    <span class="icon question">
      <i class="fas fa-question"></i>
      <span class="badge">5</span>
    </span>
    <span class="icon mic">
      <i class="fas fa-microphone"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'IconsBar',
};
</script>

<style scoped>
.icon-bar {
  display: flex;
  align-items: center;
  gap: 1.3rem;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  width: 32px;
  height: 32px;
  position: relative;
}

.icon.plain {
  color: #888;
  background: none;
  border-radius: 0.4rem;
}

.icon.plain:hover {
  color: #222;
}

.icon.question {
  background: #444;
  border-radius: 0.4rem;
  width: 32px;
  height: 32px;
  color: #fff;
  position: relative;
  justify-content: center;
}
.icon.question .fas {
  color: #fff;
  font-size: 1.15rem;
}
.badge {
  position: absolute;
  top: -7px;
  right: -7px;
  background: #e53935;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.10);
  z-index: 2;
}

.icon.mic {
  background: #fddc7a;
  border-radius: 0.4rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #f3e19a;
}
.icon.mic .fas {
  color: #222;
  font-size: 1.15rem;
}
</style>

