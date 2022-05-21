<template>
  <a-form
      :model="form"
      label-align="left"
      @finish="onSubmit"
      :label-col="{ span: 12 }"
      :wrapper-col="{ span: 12 }"
  >
    <a-form-item
        name="domain"
        label="https://amazon."
        :rules="[{required: true, message: 'Пожайлуста введите, начальную координату'}]"
    >
      <a-input placeholder="A1" v-model:value="form.domain"/>
    </a-form-item>

    <a-form-item
        name="start"
        label="Начальная координата"
        :rules="[{required: true, message: 'Пожайлуста введите, начальную координату'}]"
    >
      <a-input placeholder="A1" v-model:value="form.start"/>
    </a-form-item>

    <a-form-item
        name="finish"
        label="Конечная координата"
        :rules="[{required: true, message: 'Пожайлуста введите, конечную координату'}]"
    >
      <a-input placeholder="H1" v-model:value="form.finish"/>
    </a-form-item>

    <a-form-item
        name="file"
        label="Выберите xlsx файл"
        :rules="[{required: true, message: 'Пожайлуста загрузите xlsx файл'}]"
    >
      <a-upload
          :max-count="1"
          v-model:fileList="form.file"
          action="/parser/upload-excel"
          :before-upload="beforeUploadFile"
      >
        <a-button>Выберите файл</a-button>
      </a-upload>
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit">Загрузить</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">


import {defineProps, ref} from 'vue';
import {message} from "ant-design-vue";
import type {LoadingForm} from "app/domain/form/LoadingForm";
import {container} from "app/inversify.config";
import {ParserRepository} from "app/application/repository/ParserRepository";

interface Props {
  onShowStatusComponent: () => void,
}

const parserRepository = container.get(ParserRepository);

const props = defineProps<Props>();

const form = ref({
  start: '',
  finish: '',
  domain: 'com',
  file: undefined,
});

const onSubmit = async (e: LoadingForm) => {
  const {domain, start, finish, file} = e;
  if (!file) {
    return;
  }

  try {
    await parserRepository.startLoading({
      start: start,
      finish: finish,
      fileName: file[0].response,
      domain: `https://amazon.${domain}`,
    });

    props.onShowStatusComponent();
  } catch (e: any) {
    message.error(e);
  }
};

const beforeUploadFile = (file: File) => {
  if ('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' === file.type) {
    return true;
  }

  message.error('Можно загружать только xlsx файлы');

  return false;
};
</script>

<style scoped>

</style>