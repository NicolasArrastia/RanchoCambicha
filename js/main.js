const app = new Vue({
    el : '#app',
    data : {
        links:{
            network:{
                name:'redes',
                src:'#network'
            },
            gallery:{
                name:'galería',
                src:'#gallery'
            },
            rent:{
                name:'alquilar',
                src:'#rent'
            }
        },
        houses:{
            frida:{
                name:'Frida',
                price:2500,
                capacity:5,
                includes:[
                    'Baño incluído',
                    'Cama matrimonial, cama marinera e individual',
                    'Salón SUM incluído'
                ],
                photos:[
                    'img/frida.jfif',
                    'img/frida (2).jfif',
                    'img/frida y dandy.jfif'
                ],
                link:'https://wa.me/5491169142449?text=Quisiera%20alquilar%20en%20Frida'
            },
            dandy:{
                name:'Dandy',
                price:3000,
                capacity:5,
                includes:[
                    'Baño incluído',
                    'Cama matrimonial, cama marinera e individual',
                    'Salón SUM incluído'
                ],
                photos:[
                    'img/dandy.jfif',
                    'img/dandy (2).jfif',
                    'img/dandy (3).jfif',
                    'img/frida y dandy.jfif'
                ],
                link:'https://wa.me/5491169142449?text=Quisiera%20alquilar%20en%20Dandy'
            },
            rancho:{
                name:'Rancho',
                price:3500,
                capacity:3,
                includes:[
                    'Baño completo en suit',
                    'Somier 2 plazas y una cama individual',
                    'TV led Directv',
                    'Aire acondicionado',
                    'Cocina privada',
                    'Casa en altura y vista al campo'
                ],
                photos:[
                    'img/rancho.jfif',
                    'img/rancho (2).jfif',
                    'img/rancho (3).jfif',
                    'img/rancho (4).jfif',
                    'img/rancho (5).jfif',
                    'img/rancho (6).jfif'
                ],
                link:'https://wa.me/5491169142449?text=Quisiera%20alquilar%20en%20Rancho'
            }
        },
        photoView:'',
        photoViewer:false,
        headerMenu:false,
        window:{
            width:0
        },
        SUM:{
            includes:[
                'Cocina',
                'Microondas',
                'Horno eléctrico',
                'Zona cine',
                'Lavarropas',
                'Futones',
                'Billar Pool',
                'Ping Pong',
                'Parrilla',
                'Heladera'
            ]
        },
        ranchophotos:{
            sum:{
                name:'Salón SUM',
                translate:true,
                photos:[
                    'img/salón sum.jfif',
                    'img/salón sum (2).jfif',
                    'img/salón sum (3).jfif',
                    'img/salón sum (4).jfif',
                    'img/salón sum (5).jfif',
                    'img/salón sum (6).jfif'
                ]
            },
            ranchocambicha:{
                name:'Rancho Cambicha',
                translate:false,
                photos:[
                    'img/rancho cambicha.jpg',
                    'img/rancho cambicha.jfif',
                    'img/rancho cambicha (2).jfif',
                    'img/rancho cambicha (3).jfif',
                    'img/rancho cambicha (4).jfif',
                    'img/rancho cambicha (5).jfif',
                    'img/rancho cambicha (6).jfif'
                ]
            }
        }
    },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
            if(this.window.width > 500){
                this.headerMenu = true
            }
            else{
                this.headerMenu=false
            }
        },
        localRedirect(){
            if(this.window.width <= 500){
                this.headerMenu = false
            }
        }
    }
});