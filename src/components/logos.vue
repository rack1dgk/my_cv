<template>
    <div class="h-40 w-full mt-2">
        <div class="inline-block h-28 w-32 ml-4" v-for="item in routes_logos" :key="item.route_logo">
            <img :src="get_route(item.route_logo)" v-bind:alt="item.route_logo" class="h-full w-full object-cover"/>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'logos',
    data(){
        return{
            routes_logos: [
                {route_logo: "arduino.png"},
                {route_logo: "bootstrap.png"},
                {route_logo: "C_Sharp.png"},
                {route_logo: "css.png"},
                {route_logo: "Django.png"},
                {route_logo: "laravel.png"},
                {route_logo: "mysql.png"},
                {route_logo: "nodejs.png"},
                {route_logo: "Oracle.png"},
                {route_logo: "PHP.png"},
                {route_logo: "postgresql.png"},
                {route_logo: "postman.png"},
                {route_logo: "python.png"},
                {route_logo: "sql-server.png"},
                {route_logo: "tailwind.png"},
                {route_logo: "vue.png"},
                {route_logo: "github.png"},
                {route_logo: "GitLab.png"},
                ],
        }
    },
    methods: {
        get_route(route_name){
            var images = require.context('../assets/logos/', false, /\.png$/) 
            return images('./'+route_name)
        }
    }
}
</script>