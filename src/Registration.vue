<template>
  <div>
    <!-- attract loop -->
    <app-loop></app-loop>

    <!-- registration form -->
    <app-form></app-form>
  </div>
</template>

<script>
import Loop from './Loop.vue';
import Form from './Form.vue';

export default {
  components: {
    'app-loop': Loop,
    'app-form': Form,
  }
}
</script>
