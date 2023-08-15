<template>
    <p>You are logged in</p>
    <p>{{ userData }}</p>

    <button @click="signOut()">sign out</button>
</template>

<script>
    import { Auth, Hub } from "aws-amplify";
    export default {
        data(){
            return {
                user: null,
                userData: {}
            }
        },

        methods:{
            async signOut(){
                const result = await Auth.signOut();
                if(result){
                    navigateTo("/");
                }
            }
        },

        async mounted(){
            Hub.listen('auth', async (data) => { 
                if(data.payload.event === 'signIn') {
                    this.user = await Auth.currentAuthenticatedUser();
                    this.userData = this.user.attributes
                    console.log("user", this.user);
                }
            })
        },

        async created(){
            const user = await Auth.currentAuthenticatedUser();
            console.log("user:", user)
            this.userData = user.attributes
        }
    }
</script>
