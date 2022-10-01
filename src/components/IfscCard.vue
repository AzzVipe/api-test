<template>
  <div v-if="isShow" class="card">
    <h1>{{ branchData.BANK }}</h1>
    <div class="card-body">
      <p>{{branchData.BRANCH}}</p>
      <p>{{branchData.CENTRE}}</p>
      <p>{{branchData.DISTRICT}}</p>
      <p>{{branchData.STATE}}</p>  
      <p>{{branchData.CITY}}</p>  
    </div>
  </div>  
</template>

<script>

export default {
  name: 'IfscCard',
  props: ['branchData', 'isShow'],
}

</script>

<style scoped>

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background-color: #3A3030;
  border-radius: 8px;
  padding: 1rem;
  color: white;
}

.card h1 {
  font-size: clamp(1rem, 5vw, 2rem);
  font-weight: 700;
  letter-spacing: 2px;
}

.card .card-body {
  line-height: 2rem;
  font-weight: 500;
  font-size: clamp(.5rem, 5vw, 1rem);
}

</style>
