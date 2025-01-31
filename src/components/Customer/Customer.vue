<template>
  <n-tabs  type="line" animated>
    <n-tab-pane name="oasis" tab="Create">
      <n-form
          ref="formRef"
          inline
          :label-width="80"
      >
        <n-grid :span="24" :x-gap="24">

          <n-form-item-gi :span="12" path="inputValue" label="Name">
            <n-input v-model:value="createModel.name"/>
          </n-form-item-gi>

          <n-form-item-gi :span="12" path="inputValue" label="Email">
            <n-input v-model:value="createModel.email"/>
          </n-form-item-gi>

          <n-form-item-gi :span="12" path="inputValue">
            <n-button @click="onCreateCustomer"> Create </n-button>
          </n-form-item-gi>

        </n-grid>
      </n-form>
    </n-tab-pane>

    <n-tab-pane name="the beatles" tab="Edit">
      <n-form
          ref="formRef"
          inline
          :label-width="80"
      >
        <n-grid :span="24" :x-gap="24">

          <n-form-item-gi :span="12" path="inputValue" label="Name">
            <n-input v-model:value="createModel.name"/>
          </n-form-item-gi>

          <n-form-item-gi :span="12" path="inputValue" label="Email">
            <n-input v-model:value="createModel.email"/>
          </n-form-item-gi>

          <n-form-item-gi :span="12" path="inputValue">
            <n-button @click="onCreateCustomer"> Edit </n-button>
          </n-form-item-gi>

        </n-grid>
      </n-form>
    </n-tab-pane>

    <n-tab-pane name="reviews" tab="List">
      <n-data-table
          ref="dataTableInst"
          :columns="columns"
          :data="customerList"
          :pagination="{ pageSize: 5 }"
      />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import {NButton, NDataTable, NForm, NFormItemGi, NGrid, NInput, NTabPane} from "naive-ui";
import {ref} from "vue";

const createModel = ref({ name: '', id: 0, email: '' })
const editModel = ref({ name: '', id: 0, email: '' })
const customerList = ref([])
const customerId = ref(0)

const columns = [
  {
    title: 'Id',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Email',
    key: 'email',
  },
]

const tabSelected = ref('')

const onCreateCustomer = () => {
  customerList.value.push({ ...createModel.value, id: customerId.value++ })

  createModel.value = { name: '', id: 0, email: '' }
  tabSelected.value = 2
}

const onUpdateTabValue = (value) => {
  tabSelected.value = value
}

</script>