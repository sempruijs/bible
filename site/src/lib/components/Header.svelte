<script lang="ts">
    const { toggle  } = $props<{
      toggle: () => void;
    }>();
</script>
<header class="flex items-center justify-between px-4 py-2 bg-gray-100 shadow">
  <!-- Sidebar toggle button -->
  <button
    onclick={toggle}
    class="text-gray-600 hover:text-gray-800 focus:outline-none" aria-label="Toggle sidebar">
    <!-- Hamburger icon -->
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
         viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  </button>

  <!-- Title -->
  <h1 class="text-xl font-semibold text-gray-800">bijbel</h1>

  <!-- GitHub link -->
  <a href="https://github.com/sempruijs/bible" target="_blank" class="text-gray-600 hover:text-gray-800" aria-label="GitHub">
    <!-- GitHub icon -->
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.29 3.438 9.773 8.205 11.387.6.111.82-.261.82-.577
      0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757
      -1.089-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.809 1.304 3.495.997
      .108-.774.42-1.304.762-1.604-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.381 1.236-3.221
      -.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005
      2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.12 3.176.77.84
      1.236 1.911 1.236 3.221 0 4.61-2.804 5.625-5.475 5.921.429.372.81 1.102.81 2.222
      0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 22.27 24 17.79 24
      12.5c0-6.63-5.37-12-12-12z"/>
    </svg>
  </a>
</header>
