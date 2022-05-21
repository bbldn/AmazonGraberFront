<template>
  <a-spin :spinning="loadingRef" class="status-wrapper">
    <p>Процесс парсинга начался</p>
    <a-progress :percent="percent"/>
  </a-spin>
</template>

<script setup lang="ts">
import {ref, onMounted, computed, defineProps, onUnmounted} from 'vue';
import type {Task} from "app/domain/entity/Task";
import {container} from "app/inversify.config";
import {ParserRepository} from "app/application/repository/ParserRepository";

interface Props {
  onShowLoadingFormComponent: () => void,
}

const props = defineProps<Props>();

/* Service | Start */
const parserRepository = container.get(ParserRepository);
/* Service | End */

/* State | Start */
const loadingRef = ref<boolean>(true);
const taskRef = ref<Task | undefined>(undefined);
const timeoutId = ref<any>(undefined);
/* State | End */

/* Function | Start */
const calculatePercent = (task: Task): number => {
  const {total, progress} = task;
  if (0 === total) {
    return 0;
  }

  return parseFloat((100 * progress / total).toFixed(0));
};
/* Function | End */

/* Computed | Start */
const percent = computed(() => {
  if (taskRef.value) {
    return calculatePercent(taskRef.value);
  }

  return 100;
});
/* Computed | End */

/* Method | Start */
const getStatus = async () => {
  const task = await parserRepository.getStatus();

  loadingRef.value = false;
  taskRef.value = task;

  if (percent.value < 100) {
    timeoutId.value = setTimeout(getStatus, 2000);
  } else {
    props.onShowLoadingFormComponent();
  }
};
/* Method | End */

onMounted(getStatus);
onUnmounted(() => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value);
  }
})
</script>