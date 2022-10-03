<template>
  <div class="container">
    <div class="header grid grid-nogutter">
      <span class="p-float-label">
        <InputText v-on:keyup.enter="fetchData" class="p-inputtext-sm" id="pincode" type="text" v-model="pincode" />
        <label for="pincode">Pincode</label>
      </span>
      <MyButton @click="fetchData" label="Submit" class="p-button-secondary submit-button"></MyButton>
    </div>
    <DiviDer/>
    <DataTable v-if="postOffices.length != 0" :value="postOffices" :paginator="true" :rows="10" v-model:selection="selectedPO">
      <template #header>
        <p>Total {{ postOffices.length }} Postoffices </p>
      </template>
      <TableColumn selectionMode="multiple" style="width: 3rem" :exportable="false"></TableColumn>
      <TableColumn :sortable="true" field="Name" header="Name" style="min-width:14rem"></TableColumn>
      <TableColumn :sortable="true" field="BranchType" header="Branch Type" style="min-width:14rem"></TableColumn>
      <TableColumn :sortable="true" field="Circle" header="Circle" style="min-width:14rem"></TableColumn>
      <TableColumn :sortable="true" field="District" header="District" style="min-width:14rem"></TableColumn>
      <TableColumn :sortable="true" field="Division" header="Division" style="min-width:14rem"></TableColumn>
    </DataTable>
  </div>
</template>

<script>

  export default {
    name: 'PinCode',

    data() {
      return {
        postOffices: [],
        selectedPO: [],
        pincode: "",
      }
    },

    methods: {
      fetchData() {
        const api = `https://api.postalpincode.in/pincode/${this.pincode}`;
        fetch(api)
        .then(res => res.json())
        .then(temp => {
          this.postOffices = temp[0].PostOffice;
          console.log(this.postOffices[0]);
        });
      },
    },
  }
</script>

<style scoped>

</style>
