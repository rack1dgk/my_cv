<template>
    <div class="-mt-12">
        <foto/>
        <logos/>
        <perfil/>
        <experiencia/>
        <escolaridad/>
        <habilidades/>
    </div>
</template>

<script>
import foto from "@/components/foto"
import logos from "@/components/logos"
import perfil from "@/components/perfil"
import experiencia from "@/components/experiencia"
import escolaridad from "@/components/escolaridad"
import habilidades from "@/components/habilidades"

export default {
    name: "my",
    components: {foto, logos, perfil, experiencia, escolaridad, habilidades},
    data(){

    },
}
</script>
