<template>
    <div class="inline-block text-left h-96 w-96 text-black mb-6 divide-x-4 divide-x-reverse divide-blue-700">
        <div v-for="(item, index) in personal_data" :key="item.personal">
            <a v-if="index == 0 && index != length_personal_data()" class="block font-bold">{{item.personal}}</a>
            <a v-if="index != 0 && index != length_personal_data()" class="block">{{item.personal}}</a>
            <a v-if="index == length_personal_data()" class="block italic pr-8">{{item.personal}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'datos',
    data(){
        return {
            personal_data: [
                { personal: "Raul Bautista Arroyo"},
                { personal: "26 años"},
                { personal: "Puebla, Pue."},
                { personal: "Tel: (222)-5-03-44-37"},
                { personal: "Cel: 22-11-17-64-42"},
                { personal: "Email: raulba4@gmail.com"}

            ],
        }
    },
    methods: {
        length_personal_data(){
            return this.personal_data.length - 1
        }
    }
}
</script>