<template>
  <div>
    <!-- Hamburger Menu -->
    <button class="hamburger" :class="{ 'open': menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <div v-if="menuOpen" class="hamburger-menu">
      <a href="#home" class="menu-link">Back to Top</a>
      <a href="#samples" class="menu-link">Samples</a>
      <a href="#about" class="menu-link">About</a>
      <a href="#testimonials" class="menu-link">Testimonials</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>

<style lang="scss">
  .hamburger {
    position: fixed;
    top: 20px;
    right: 5px;
    width: 36px;
    height: 36px;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    cursor: pointer;
    padding: 6px;

    @media (min-width: 1000px) {
      right: 24px;
    }
  }

  .hamburger .bar {
    display: block;
    height: 4px;
    width: 100%;
    background: #fff;
    border-radius: 2px;
    margin: 3px 0;
    transition: all 0.3s ease-in-out;
    transform-origin: center;
  }

  /* Animation for hamburger to X */
  .hamburger.open .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.open .bar:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }

  .hamburger.open .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .hamburger-menu {
    position: fixed;
    top: 64px;
    right: 24px;
    background: #222;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    z-index: 999;
    padding: 12px 0;
  }

  .menu-link {
    color: #fff;
    text-decoration: none;
    padding: 12px 32px;
    font-size: 18px;
    transition: background 0.2s;
  }
  
  .menu-link:hover {
    background: #444;
  }
</style>