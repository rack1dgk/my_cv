<template>
    <div 
        class="inline-block text-left text-black h-24 ml-32 sm:ml-16 mr-16 sm:mr-0 font-bold text-2xl align-middle"
        id="Ing"
    >
        <p class="">{{ studies }}</p>
    </div>
</template>

<script>
export default {
    name: 'estudios',
    data(){
        return {
            studies: "Ingeniería en Tecnologías de la Información y comunicación"
        }
    }
}
</script>

<style scoped>
@media (max-width: 544px){
    #Ing {
        margin-left: 2px !important;
        margin-right: 2px !important;
        margin-bottom: 10px !important;
    }
}
@media (max-width: 360px){
    #Ing {
        margin-left: 48px !important;
        margin-right: -5px !important;
        margin-bottom: 30px !important;
    }
}

@media (max-width: 280px){
    #Ing {
        margin-left: 48px !important;
        margin-right: -12px !important;
        margin-bottom: 30px !important;
    }
}
</style>