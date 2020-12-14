<template>
    <header class="bg-green-400	max-w-full h-auto">
        <!-- <p>otros dastos</p> -->
        <datos></datos>
        <estudios/>

        <div class="inline-block h-40 w-32">
            <img src="../assets/my.jpg" alt="My_image" class="h-full w-full object-cover mt-6 md:mt-4 sm:mt2 ml-8" id="foto" >
        </div>
    </header>
</template>

<script>
import datos from '@/components/datos'
import estudios from '@/components/estudios'
export default {
    name: 'foto',
    components: {datos, estudios},
    data(){

    }
}
</script>

<style scoped>
@media (max-width: 1024px){
    #foto {
        margin-top: -40px !important;
        margin-left: -5px !important;
    }
}
@media (max-width: 544px){
    #foto {
        margin-top: -20px !important;
        margin-left: -5px !important;
    }
}
@media (max-width: 320px){
    #foto {
        margin-top: 20px !important;
        margin-left: -5px !important;
    }
}
@media (max-width: 280px){
    #foto {
        margin-top: 15px !important;
        margin-left: -5px !important;
    }
}
</style>
