<template>
  <div class="card">
    <img src="../../public/temp.png" class="map">
    <h1>{{ tempData.Name }}</h1>
    <div class="card-body">
      <p>{{tempData.BranchType}}</p>
      <p>{{tempData.Region}}</p>
      <p>{{tempData.District}}</p>
      <p>{{tempData.State}}</p>  

      <iframe src="https://www.google.com/maps/embed?pb=Kankinara,+West+Bengal" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
    </div>
  </div>  
</template>

<script>
export default {
  name: 'PostOffice',
  props: ['tempData'],
}
</script>

<style scoped>

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: #3A3030;
  border-radius: 8px;
  padding: 1rem;
  color: white;
  text-align: center;
}

.card .map {
  width: 100%;
  background-color: white;
  border-radius: .25rem;
}
.card h1 {
  font-size: clamp(1rem, 5vw, 2rem);
  font-weight: 700;
  letter-spacing: 2px;
}

.card .card-body {
  line-height: 1.3rem;
  font-weight: 500;
  font-size: clamp(.5rem, 5vw, 1rem);
}

</style>
