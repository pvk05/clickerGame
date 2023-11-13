<script>
    import { writable } from "svelte/store";
    import { resources } from "./data.js";
	import { clickGain, upgrade, sel } from "./main.js"

	
</script>

<div id="content" class="bg-surface-300-600-token w-2/3 table-container">
	<table id="resourceTable" class=" table-hover">
		<tr class="">
			<th>
				<h2 id="resourceHeader">{$sel.header}</h2>
				<span id="resourceDescription">
					{$sel.description}
				</span>
				<br><br>
				<button 
				class="btn variant-ghost-primary" on:click={() => {clickGain()}}>Gain 1</button>
			</th>
		</tr>
		<tr class=" table-row">
			<td id="storageUpgradeBlock" class=" bg-surface-300-600-token variant-ghost-primary">
				<h3 class="h3">Storage Upgrade</h3>
				<p>Upgrade storage to <span id="nextStorageUpgradeAmount"></span></p>
				<p>Cost: <span id="nextStorageUpgradeCost"></span></p>
				<button on:click={() => {upgrade("storage")}} class="btn variant-ghost-primary">Upgrade Storage</button>
			</td>
		</tr>
		<tr class=" table-row">
			<td id="upgradeOneBlock" class=" bg-surface-300-600-token variant-ghost-primary">
				<h3 class="h3"><span id="upgradeOneName">{$sel.upgrades.one.name}</span>: <span id="upgradeOneAmount">{$sel.upgrades.one.bought}</span></h3>
				<p id="upgradeOneDescription">{@html $sel.upgrades.one.description}</p>
				<p>Cost: <span id="nextUpgradeOneCost">{$sel.upgrades.one.baseCost*($sel.upgrades.one.exp**$sel.upgrades.one.bought)}</span></p>
				<button on:click={() => {upgrade("one")}} class="btn variant-ghost-primary">Buy Upgrade</button>
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