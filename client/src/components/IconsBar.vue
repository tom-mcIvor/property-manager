<template>
    <div class="icon-group">
      <i class="fas fa-plus icon"></i>
      <i class="fas fa-sync-alt icon"></i>
  
      <div class="icon notification-icon">
        <i class="fas fa-question-circle"></i>
        <span class="badge">5</span>
      </div>
  
      <i class="fas fa-microphone icon highlighted"></i>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IconsBar',
  };
  </script>
  
  <style scoped>
  .icon-group {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .icon {
    font-size: 1.2rem;
    cursor: pointer;
    color: #333;
    position: relative;
  }
  
  .notification-icon {
    position: relative;
  }
  
  .badge {
    position: absolute;
    top: -6px;
    right: -10px;
    background-color: red;
    color: white;
    font-size: 0.6rem;
    border-radius: 50%;
    padding: 2px 6px;
  }
  
  .highlighted {
    background-color: #fddc7a;
    padding: 0.4rem;
    border-radius: 0.25rem;
  }
  </style>