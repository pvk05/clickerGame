<script>
    import { clickedResource } from './main.js'
    import { resources } from "./data.js"
    
</script>

<div class=" w-1/3">
    <table class="table">
        {#each resources as resource}
            <tr class=" border-y-2 border-surface-300-600-token" on:click={() => {clickedResource.set(resources.indexOf(resource))} }>
                <td class="table-cell py-2 px-4">
                    <i class="fa-brands fa-github fa-2x" />
                </td>
                <td class="table-cell py-2 px-4">
                    <span>{resource.header}</span>
                </td>
                <td class="table-cell py-2 px-4">
                    <span id="{resource.rate}PSec">0</span>/Sec
                </td>
                <td class="table-cell py-2 px-4">
                    <span id="{resource.amount}Amount"> 0 </span>
                    /
                    <span id="{resource.storage}Storage"> 64 </span>
                </td>
            </tr>
        {/each}
    </table>
</div>
