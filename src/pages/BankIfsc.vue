<template>
	<div class="container flex-column">
		<div class="header">
			<span class="p-float-label">
				<InputText v-on:keyup.enter="fetchData" class="p-inputtext-sm" id="bankifsc" type="text" v-model="ifsccode" />
				<label for="bankifsc">Bank IFSC</label>
			</span>
			<MyButton @click="fetchData" label="Submit" class="submit-button"></MyButton>
		</div>
		<DiviDer/>
		<DataTable v-if="branchData.length != 0" :value="branchData" :paginator="true" :rows="10" v-model:selection="selectedBr">
			<template #header>
				<p>Total {{ branchData.length }} Branches </p>
			</template>
			<TableColumn selectionMode="multiple" style="width: 3rem" :exportable="false"></TableColumn>
			<TableColumn :sortable="true" field="BRANCH" header="Branch" style="min-width:16rem"></TableColumn>
			<TableColumn :sortable="true" field="CENTRE" header="Centre" style="min-width:16rem"></TableColumn>
			<TableColumn :sortable="true" field="DISTRICT" header="District" style="min-width:16rem"></TableColumn>
			<TableColumn :sortable="true" field="STATE" header="State" style="min-width:16rem"></TableColumn>
			<TableColumn :sortable="true" field="CONTACT" header="Contact" style="min-width:16rem"></TableColumn>
		</DataTable>
	</div>
</template>

<script>

	export default {
		name: 'BankIfsc',

		data() {
			return {
				ifsccode: "",
				branchData: [],
				selectedBr: [],
				flag: false,
			}
		},

		methods: {
			fetchData() {
				const api = `https://ifsc.razorpay.com/${this.ifsccode}`;
				fetch(api)
				.then(res => res.json())
				.then(temp => {
					console.log(temp);
					this.branchData[0] = temp;
					this.flag = true;
				});
			},
		},
	}

</script>

<style>	
</style>