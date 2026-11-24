<script setup>
import { onMounted, ref } from 'vue';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CommandMenuPlayground from './CommandMenuPlayground';

const container = ref(null);

onMounted(() => {
  ReactDOM.createRoot(container.value).render(
    React.createElement(CommandMenuPlayground)
  );
});
</script>

<template>
  <div ref="container"></div>
</template>
