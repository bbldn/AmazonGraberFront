<template>
  <StatusComponent v-if="'status' === selectedComponentRef" :on-show-form="onShowForm"/>
  <LoadingFormComponent v-else/>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import LoadingFormComponent from "app/components/RootComponent/LoadingComponent/LoadingFormComponent.vue";
import StatusComponent from "app/components/RootComponent/LoadingComponent/StatusComponent.vue";

const selectedComponentRef = ref<string>('status');

const onShowForm = () => selectedComponentRef.value = 'loading';

</script>

<style scoped>

</style>