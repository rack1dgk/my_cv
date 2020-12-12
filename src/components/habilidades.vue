<template>
    <div class="mt-4 ml-4 mr-4">
        <h1 class="text-left font-bold">Habilidades</h1>
        <ul class="text-justify list-disc ist-inside bg-rose-200 ml-16 mr-16">
            <li 
            v-for="(item, index) in abilities" 
            :key="item.ability" class="mt-2" 
            :class="[ index == lengthAbilities ? 'mb-16' : '']">
                {{ item.ability}}
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: "habilidades",
    data(){
        return {
            abilities: [
                {ability: "Proactivo"},
                {ability: "Autodidacta"},
                {ability: "Adaptable"},
                {ability: "Trabajo en equipo"},
            ],
        }
    },
    computed: {
        lengthAbilities(){
            return this.abilities.length - 1
        }
    }

}
</script>