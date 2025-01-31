<template>
  <n-config-provider style="height: 100%" :theme="darkTheme">
    <n-card title="Mongo DB CRUD" style="margin-bottom: 16px; height: 100%">
      <n-tabs type="line" animated>
        <n-tab-pane name="oasis" tab="Customer">
          <customer />
        </n-tab-pane>

        <n-tab-pane name="the beatles" tab="Restaurants">
          <restaurant />
        </n-tab-pane>

        <n-tab-pane name="reviews" tab="Reviews">
          <review />
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
import Customer from "@/components/Customer/Customer.vue";
import Restaurant from "@/components/Restaurant/Restaurant.vue";
import Review from "@/components/Review/Review.vue";

const modelPrecision = ref(0)

onMounted(() => {
  PredictionService.getScore()
      .then(res => {
        modelPrecision.value = res.data
      })
})

</script>