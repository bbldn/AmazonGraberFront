<template>
  <StatusComponent
      v-if="'status' === selectedComponentRef"
      :on-show-loading-form-component="onShowLoadingFormComponent"
  />
  <LoadingFormComponent v-else :on-show-status-component="onShowStatusComponent"/>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import LoadingFormComponent from "app/components/RootComponent/LoadingComponent/LoadingFormComponent.vue";
import StatusComponent from "app/components/RootComponent/LoadingComponent/StatusComponent.vue";

const selectedComponentRef = ref<string>('status');

const onShowStatusComponent = () => selectedComponentRef.value = 'status';
const onShowLoadingFormComponent = () => selectedComponentRef.value = 'loading';

</script>

<style scoped>

</style>