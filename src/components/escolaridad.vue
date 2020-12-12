<template>
    <div class="mt-4 ml-4 mr-4">
        <h1 class="font-bold text-left">ESTUDIOS</h1>
        <ul class="text-justify list-disc list-inside bg-rose-200 ml-16 mr-16">
            <li v-for="item in studies" :key="item.level" class="mt-2" >
                {{ item.level }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "escolaridad",
    data(){
        return{
            studies: [
                {level: "Ingeniería en Tecnologías de la Información y Comunicación | Universidad Tecnológica de Puebla. (2017-2019)."},
                {level: "Técnico Superior Universitario en Tecnologías de la Información y Comunicación Área Sistemas | Universidad Tecnológica de Puebla (2015-2017)."},
            ],
        }
    },
}
</script>