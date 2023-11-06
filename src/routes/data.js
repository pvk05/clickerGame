
import { writable } from "svelte/store";

export let clickedResource = writable(0);

clickedResource.subscribe((value) => {
    console.log("value: ", value)
}) 

/*export function test(res){
    clickedRe = res
    console.log(clickedRe)
}*/

export let playerData = {
    
}

export let resources = [
    {
        amount: 0,
        storage: 64,
        rate: 0/100,
        upgrades:{
            storage:{
                current:0,
                stages:[64, 128, 256, 512, 1024]
            },
            one:{
                name: "one",
                description: "",
                bought: 0,
                baseCost: 20,
                exp: 1.5,
                adds: 1,
            }
        },
        header: "Resource",
        description: "Adipisicing eiusmod est dolore id dolor. Elit id ex non amet. Aliquip non est id occaecat consequat labore culpa veniam nisi in sint. Aute voluptate anim occaecat fugiat ut duis labore veniam aute laboris anim enim."
    },
    {
        amount:0,
        storage: 64,
        rate: 0/100,
        upgrades:{
            storage:0,
            one:{
                name: "Solar panel",
                description: "Gains energy from the sun <br>Produces 1 energy per second",
                bought: 0,
                baseCost: 20,
                exp: 1.5,
                adds: 1,
            }
        },
        header: "Energy",
        description: "Energy: Adipisicing eiusmod est dolore id dolor. Elit id ex non amet. Aliquip non est id occaecat consequat labore culpa veniam nisi in sint. Aute voluptate anim occaecat fugiat ut duis labore veniam aute laboris anim enim."
    },
    {
        amount:0,
        storage: 64,
        rate:0/100,
        upgrades:{
            storage:0,
            one:{
                name: "Woodcutter",
                description: "Make an axe for your woodcutter. <br>Produces 1 wood per second",
                bought: 0,
                baseCost: 20,
                exp: 1.5,
                adds: 1,
            }
        },
        header: "Wood",
        description: "Wood: Adipisicing eiusmod est dolore id dolor. Elit id ex non amet. Aliquip non est id occaecat consequat labore culpa veniam nisi in sint. Aute voluptate anim occaecat fugiat ut duis labore veniam aute laboris anim enim."
    },
    {
        amount:0,
        storage: 64,
        rate:0/100,
        upgrades:{
            storage:0,
            one:{
                name: "Bucket",
                description: "Make a bucket. <br>Produces 1 water per second",
                bought: 0,
                baseCost: 20,
                exp: 1.5,
                adds: 1,
            }
        },
        header: "Water",
        description: "Water: Adipisicing eiusmod est dolore id dolor. Elit id ex non amet. Aliquip non est id occaecat consequat labore culpa veniam nisi in sint. Aute voluptate anim occaecat fugiat ut duis labore veniam aute laboris anim enim."
    },
]