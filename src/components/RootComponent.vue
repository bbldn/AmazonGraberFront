<template>
  <div class="root-wrapper">
    <div class="root-content-wrapper">
      <a-tabs :destroyInactiveTabPane="true">
        <a-tab-pane key="1" tab="Добавить записи">
          <loading-component/>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Просмотреть записи">
          <product-table-component/>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoadingComponent from "app/components/RootComponent/LoadingComponent.vue";
import ProductTableComponent from "app/components/RootComponent/ProductTableComponent.vue";
</script>

<style scoped>
.root-wrapper {
  display: flex;
  height: 99vh;
  align-items: center;
  justify-content: center;
}

.root-content-wrapper {
  min-width: 380px;
  padding: 20px;
  border: 1px solid black;
}
</style>