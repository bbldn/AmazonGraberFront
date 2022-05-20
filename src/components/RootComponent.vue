<template>
  <div class="root-wrapper">
    <div class="root-content-wrapper">
      <a-tabs>
        <a-tab-pane key="1" tab="Добавить записи">
          <LoadingComponent/>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Просмотреть записи">
          Привет
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LoadingComponent from "app/components/RootComponent/LoadingComponent.vue";

export default defineComponent({
  components: {LoadingComponent},
});
</script>

<style scoped>
.root-wrapper {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.root-content-wrapper {
  min-width: 380px;
  padding: 20px;
  border: 1px solid black;
}
</style>