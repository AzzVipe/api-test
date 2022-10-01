<template>
  <div class="container">
    <MyButton @click="handlePincode" label="Pincode" class="p-button-secondary p-button-lg main-button"></MyButton>
    <MyButton @click="handleBankIFSC" label="Bank IFSC" class="p-button-lg main-button"></MyButton>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'HomeView',

  methods: {
    handlePincode() {
      this.$router.push('/pincode');
    },
    handleBankIFSC() {
      this.$router.push('/bank');
    }
  }
}

</script>
