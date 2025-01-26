<template>
  <n-form
      ref="formRef"
      inline
      :label-width="80"
  >
    <n-grid :span="24" :x-gap="24">
      <n-form-item-gi :span="12" path="inputValue" label="GRE Score">
        <n-input v-model:value="model.gre"/>
      </n-form-item-gi>

      <n-form-item-gi :span="12" path="inputValue" label="TOEFEL Score">
        <n-input v-model:value="model.toefel"/>
      </n-form-item-gi>

      <n-form-item-gi :span="12" path="inputValue" label="SOP">
        <n-input v-model:value="model.sop"/>
      </n-form-item-gi>

      <n-form-item-gi :span="12" path="inputValue" label="LOR">
        <n-input v-model:value="model.lor"/>
      </n-form-item-gi>

      <n-form-item-gi :span="12" path="inputValue" label="CGPA">
        <n-input v-model:value="model.cgpa"/>
      </n-form-item-gi>

      <n-form-item-gi :span="12" path="inputValue" label="University rating">
        <n-input v-model:value="model.uniRating"/>
      </n-form-item-gi>

      <n-form-item-gi :span="12" @click="onPredict">
        <n-button @click="openModal" size="large">
          Predict
        </n-button>
      </n-form-item-gi>

      <n-form-item-gi :span="12" path="inputValue" label="Posted a research">
        <n-switch v-model:value="model.research"/>
      </n-form-item-gi>
    </n-grid>
  </n-form>
  <n-modal
      class="custom-card"
      v-model:show="isModalOpen"
      preset="dialog"
      size="huge"
      aria-modal="true"
      title="Dialog">
    <template #header>
      <div>Prediction finished</div>
    </template>
    <n-card>
      <h2>
        Chance to be admitted to the university is: <n-tag :type="getTagType(predictedData)" size="large" :bordered="false"> {{ predictedData }} </n-tag>
      </h2>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">

import {reactive, ref} from "vue";
import type {TableModel} from "@/type.ts";
import {NModal} from "naive-ui";
import {PredictionService} from "@/services/PredictionService.ts";
import {Mapper} from "@/mapper.ts";

const model = reactive({
  gre: '',
  toefel: '',
  sop: '',
  lor: '',
  cgpa: '',
  research: false,
  uniRating: ''
} as TableModel);

const getTagType = (probability: number) => {
  if (probability < 0.6) {
    return "error"
  }
  else if (probability < 0.8) {
    return "warning"
  }
  else if (probability > 0.8) {
    return "success"
  }
}

const onPredict = () => {
  PredictionService.predict(Mapper.mapInverse([model])[0])
      .then((res) => {
        predictedData.value = res.data;
      })
}

const predictedData = ref(0);
const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true;
}

</script>