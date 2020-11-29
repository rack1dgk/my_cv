<template>
    <header class="bg-green-400	max-w-full">
        <!-- <p>otros dastos</p> -->
        <datos></datos>
        <estudios/>

        <div class="inline-block h-48 w-48">
            <img src="../assets/logo.png" alt="My_image" class="h-full w-full object-cover mt-10" >
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
