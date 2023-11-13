import { writable } from "svelte/store";
import { resources } from "./data.js"


export let clickedResource = writable(0);
export let sel = writable(resources[0]);

clickedResource.subscribe((value) => {
    console.log("value: ", value)
    sel.set(resources[value])
}) 

export function upgrade(what) {
    console.log(what)
}

export function clickGain() {
    console.log("clickGain")
}