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
				"<span
					class="txt-type joe-color"
					data-wait="2000"
					data-words='["A simple Vue frontend scaffolding for your Codeigniter Back-end . Developed by Jinesh Francisco"]'
				></span
				>"
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		console.log("Component mounted.");
	},
};
</script>
