<template>
     <div class="form-conatiner">
        <label>Email:</label>
        <input type="email" name="email" v-model="email" class="form"/>
    </div>
    <div class="form-conatiner">
        <label>Code:</label>
        <input type="text" name="code" v-model="code" class="form"/>
    </div>
    <button @click="confirmSignup">
        Confirm email
    </button>
</template>

<script>
    import { Auth } from "aws-amplify";
    export default {
        name: "Confirm",
        data() {
            return {
                email: "",
                code: ""
            }
        },
        methods: {
            async confirmSignup(){

                console.log("confirmSignup", this.email, this.code)
                try {
                    const result = await Auth.confirmSignUp(this.email, this.code);
                    console.log("result:", result)
                    if(result){
                        navigateTo("/")
                    }
                } catch (error) {
                    console.log("confirm error:", error);
                }
            }
        }
    }
</script>

<style lang="css">
   .form{
    margin-left: .5rem;
   }
   .form-conatiner{
     margin: 1rem 0;
   }

</style>