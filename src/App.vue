<template>
  <n-config-provider style="height: 100%" :theme="darkTheme">
    <n-card title="Chance to be admitted to the University" style="margin-bottom: 16px; height: 100%">
      <n-tabs type="line" animated>
        <n-tab-pane name="oasis" tab="Single prediction">
          <single-prediction @on-predict="onSinglePredict" />
        </n-tab-pane>
        <n-tab-pane name="the beatles" tab="Bulk prediction">
          Hey Jude
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-config-provider>
</template>

<script setup lang="ts">

import {darkTheme} from 'naive-ui'
import SinglePrediction from "@/components/SinglePrediction.vue";

const onSinglePredict = (model) => {
  console.log(model)
}

</script>