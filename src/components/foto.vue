<template>
    <header class="bg-green-400	max-w-full h-auto">
        <!-- <p>otros dastos</p> -->
        <datos></datos>
        <estudios/>

        <div class="inline-block h-40 w-32">
            <img src="../assets/my.jpg" alt="My_image" class="h-full w-full object-cover mt-6abilities ml-8" >
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
