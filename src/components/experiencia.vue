<template>
    <div class="mt-4 ml-4 mr-4">
        <h1 class="font-bold text-left">EXPERIENCIA LABORAL</h1>
        <ul class="text-justify list-disc list-inside bg-rose-200 ml-16 mr-16">
            <li v-for="item in experiences" :key="item.experience" class="mt-2">
                {{ item.experience }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'experiencia',
    data(){
        return {
            experiences: [
                { experience: "Programador Bankend ; desarrollo de sistemas web en python/Django manejando peticiones con Django Rest Framework, manejo de versiones con GitLab, desarrollo de páginas web con Django CMS y Bootstrap en JB Grupo empresarial desde Enero de 2020."},
                { experience: "Programador Jr ; desarrollador de aplicaciones web con php y Jquery, desarrollador de definiciones de estructuras de captura con el framework e-drake en validata servicios de captura s.a. de c.v., de Junio de 2019 a Enero de 2020."},
                { experience: "Practicipación en el concurso internacional de robótica Rumble 3 celebrado en el mes de octubre del año 2018."},
                { experience: "Desarrollador Backend y Frontend con java y Primefaces en Secretaría de Educación Pública del Estado de Puebla (proyecto llamado “SIIDEP” (Sistema Integral de Información del Docente del Estado de Puebla)) de Mayo a Agosto de 2018."},
                { experience: "Participación en el concurso de robótica Gerra de robots celebrado en el Instituto Politécnico Nacional en el mes de Noviembre del año 2017."},
                { experience: "Desarrollador Backend y Frontend con php y java script en Secretaría de Educación Pública del Estado de Puebla (proyecto llamado “Agenda SEP”) de Septiembre a Diciembre de 2017."},
            ]
        }
    }
}
</script>