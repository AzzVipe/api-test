<template>
	<main>
		<section class="menu">
			
		</section>
		<section class="container">
			
		</section>
	</main>
</template>

<script>

export default {
	name: 'EmployeeList',
}

</script>

<style scoped>
	main {
		display: flex;
		min-height: 100vh;	
		flex-direction: row;
	}

	main .menu {
		flex-basis: 15%;
		width: 100%;
	}

	main .container {
		flex-basis: 85%;
		width: 100%;
		background-color: lightblue;
	}

</style>