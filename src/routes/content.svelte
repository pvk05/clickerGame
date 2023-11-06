<style>
/*#content {
    float: left;
    width: 750px;
}

	table {
    width: 100%;
}

tr {
    height: 50px;
    border: 2px solid black;
}*/
</style>

<script>
    import { clickedResource, resources } from "./data.js";
	import { upgrade } from "./main.js"
	let sel;

	clickedResource.subscribe((value) => {
		sel = resources[value]
		console.log("sel: ", sel.header)
	});

</script>

<div id="content" class="bg-surface-300-600-token w-2/3 table-container">
	<table id="resourceTable" class=" table-hover">
		<tr class="">
			<th>
				<h2 id="resourceHeader">{sel.header}</h2>
				<span id="resourceDescription">
					{sel.description}
				</span>
				<br><br>
				<button 
				class="btn" onclick="clickGain(selectedResource)">Gain 1</button>
			</th>
		</tr>
		<tr class=" table-row">
			<td id="storageUpgradeBlock">
				<h3 class="h3">Storage Upgrade</h3>
				<p>Upgrade storage to <span id="nextStorageUpgradeAmount"></span></p>
				<p>Cost: <span id="nextStorageUpgradeCost"></span></p>
				<button on:click={() => {upgrade("storage")}}>Upgrade Storage</button>
			</td>
		</tr>
		<tr class=" table-row">
			<td id="upgradeOneBlock" class="">
				<h3><span id="upgradeOneName"></span>: <span id="upgradeOneAmount">0</span></h3>
				<p id="upgradeOneDescription"></p>
				<p>Cost: <span id="nextUpgradeOneCost"></span></p>
				<button on:click={() => {upgrade("one")}}>Buy Upgrade</button>
			</td>
		</tr>
	</table>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
		ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
		mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class
		aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
		ligula in libero. Sed dignissim lacinia nunc. </p>
	<p>Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
		Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
		Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed
		lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa
		mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et
		ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. </p>
	<p>Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet.
		Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
		ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla
		facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam.
	</p>
</div>