<template>
  <n-config-provider style="height: 100%" :theme="darkTheme">
    <n-card title="Chance to be admitted to the University" style="margin-bottom: 16px; height: 100%">
      <h3>Model precision: <n-tag type="info">{{ modelPrecision }}</n-tag></h3>
      <n-tabs type="line" animated>
        <n-tab-pane name="oasis" tab="Single prediction">
          <single-prediction />
        </n-tab-pane>
        <n-tab-pane name="the beatles" tab="Bulk prediction">
          <bulk-prediction />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-config-provider>
</template>

<script setup lang="ts">

import {darkTheme} from 'naive-ui'
import SinglePrediction from "@/components/SinglePrediction.vue";
import BulkPrediction from "@/components/BulkPrediction/BulkPrediction.vue";
import {onMounted, ref} from "vue";
import {PredictionService} from "@/services/PredictionService.ts";

const modelPrecision = ref(0)

onMounted(() => {
  PredictionService.getScore()
      .then(res => {
        modelPrecision.value = res.data
      })
})

</script>