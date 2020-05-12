<template>
	<div class="block">
		<div class="notification is-primary">
			<button class="delete"></button>
			Welcome to Vue Front End Scaffolding with Bulma css
		</div>
		<div class="message is-warning">
			<div class="message-header is-inverted">
				<p>Build on Top Codeigniter 3.1.11</p>
			</div>
			<div class="message-body">
				A simple Vue frontend scaffolding for your Codeigniter Back-end .
				<p>Developed by Jinesh Francisco</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		console.log("Component mounted.");
	}
};
</script>
