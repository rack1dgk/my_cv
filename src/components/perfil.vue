<template>
    <div class="mt-2 ml-4 mr-4">
        <h2 class="font-bold text-left">PERFIL</h2>
        <p class="text-justify">{{ perfil}}</p>
    </div>
</template>

<script>
export default {
    name: 'perfil',
    data(){
        return{
            perfil: "Desarrollador Back End con C#, Java, php, python, primefaces, laravel, django, django rest framework ; manejo de los siguientes CMS, wordpress, joomla, django cms ; manejo de los siguientes frameworks de diseño, bootstrap, tailwind , sweet alert, font awesome; desarrollo de Front End con JavaScript, Vue js, JQuery; manejo de los gestores de versiones GitHub, GitLab. "
            ,
        }
    }
}
</script>