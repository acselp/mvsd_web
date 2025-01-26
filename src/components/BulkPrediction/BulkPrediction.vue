<template>
  <n-space vertical :size="12">
    <n-radio-group v-model:value="dataType">
      <n-radio-button value="test">
        Use test data
      </n-radio-button>
      <n-radio-button value="train">
        Use train data
      </n-radio-button>
    </n-radio-group>
    <n-input placeholder="Search" @input="onInput" />
    <n-data-table
        ref="dataTableInst"
        :columns="schema.columns"
        :data="dataToShow"
        :pagination="schema.pagination"
    />
  </n-space>
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

import {getTableSchema} from "@/components/BulkPrediction/table-schema.ts";
import {onMounted, ref, watch} from "vue";
import {PredictionService} from "@/services/PredictionService.ts";
import {Mapper} from "@/mapper.ts";
import type {TableModel} from "@/type.ts";
import {NInput, NModal} from "naive-ui";

const onPredict = (model: TableModel) => {
  PredictionService.predict(Mapper.mapInverse([model])[0])
      .then((res) => {
        predictedData.value = res.data
        openModal()
      })
}

const predictedData = ref(0);
const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true;
}

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

const schema = getTableSchema(onPredict);

const data = ref<TableModel[]>([] as TableModel[]);
const dataToShow = ref<TableModel[]>([] as TableModel[]);
const dataType = ref('test');

const onInput = (query: string) => {
  dataToShow.value = data.value.filter(x => {
    if (query === "") return true;
    let result = false;
    Object.keys(x).forEach((key) => {
      if (!result && x[key].toString().includes(query)) {
        result = true
      }
    })

    return result;
  })
}

watch(dataType, () => {
  if (dataType.value === "test") {
    PredictionService.getAllTest()
        .then((res) => {
          data.value = Mapper.map(res.data);
          dataToShow.value = Mapper.map(res.data);
        })
  }
  else if (dataType.value === "train") {
    PredictionService.getAllTrain()
        .then((res) => {
          data.value = Mapper.map(res.data);
          dataToShow.value = Mapper.map(res.data);
        })
  }
})

onMounted(() => {
  PredictionService.getAllTest()
      .then((res) => {
        data.value = Mapper.map(res.data);
        dataToShow.value = Mapper.map(res.data);
      })
})

</script>