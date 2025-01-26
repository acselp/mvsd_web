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

      <n-form-item-gi :span="12" path="inputValue" label="Posted a research">
        <n-switch v-model:value="model.research"/>
      </n-form-item-gi>

      <n-form-item-gi :span="12" @click="onPredict">
        <n-button size="large">
          Predict
        </n-button>
      </n-form-item-gi>
    </n-grid>
  </n-form>
</template>

<script setup lang="ts">

import {reactive} from "vue";

const emit = defineEmits(['on-predict'])

const model = reactive({
  gre: '',
  toefel: '',
  sop: '',
  lor: '',
  cgpa: '',
  research: false
});

const onPredict = () => {
  emit('on-predict', model);
}

</script>