<template>
    <p>Login</p>
    <div class="form-conatiner">
        <label>Email:</label>
        <input type="email" name="email" v-model="email" class="form"/>
    </div>
    <div class="form-conatiner">
        <label>Password:</label>
        <input type="password" name="password" v-model="password" class="form"/>
    </div>
   <button @click="login">
      Sign in
   </button>

   <p>
    Don't have an account? <NuxtLink to="/register">Register</NuxtLink>
   </p>
   
   <div>
        <hr/>
        <button @click="federatedGoogleSignup">Sign In with google</button>
    </div>

</template>

<script>
   import { Auth } from "aws-amplify";
   export default {
       name: "Confirm",
       data() {
           return {
               email: "",
               password: ""
           }
       },
        methods: {
            async login() {
                try {
                    const user = await Auth.signIn(this.email, this.password);
                    if(user){
                        navigateTo("/auth");
                    }
                } catch (error) {
                    console.log("error:", error)
                }
            },

            async federatedGoogleSignup() {
                 try{
                     const response = await Auth.federatedSignIn({
                         provider: CognitoHostedUIIdentityProvider.Google,
                     });
                 }catch(err) {
                 }
             },
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