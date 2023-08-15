<template>
    <div class="main-container">

        <p>Register</p>
         <div>
             <div class="form-conatiner">
                 <label>First Name:</label>
                 <input type="text" name="firstname" v-model="firstname" class="form"/>
             </div>
             <div class="form-conatiner">
                 <label>Last Name:</label>
                 <input type="text" name="lastname" v-model="lastname" class="form"/>
             </div>
             <div class="form-conatiner">
                 <label>Email:</label>
                 <input type="email" name="email" v-model="email" class="form"/>
             </div>
             <div class="form-conatiner">
                 <label>Password:</label>
                 <input type="password" name="password" v-model="password" class="form"/>
             </div>
 
             <div>
                 <button @click="signup">Sign up</button>
             </div>
 
             <div>
                 <hr/>
                 <button @click="federatedGoogleSignup()">Sign In with google</button>
             </div>
         </div>
    </div>
 </template>
 
 <script>
     import { Auth } from "aws-amplify";
     import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
     export default {
        name: 'Register',
        data() {
            return{
                firstname: "",
                lastname: "",
                email: "",
                password: "",
            }
        },
        methods: {
             async federatedGoogleSignup() {
                console.log("federatedGoogleSignup")
                 try{
                     const response = await Auth.federatedSignIn({
                         provider: CognitoHostedUIIdentityProvider.Google,
                     });
                 }catch(err) {
                 }
             },
 
             async signup() {
                 try {
                    const response = await Auth.signUp({
                        username: this.email,
                        password: this.password,
                        attributes: {
                            "custom:firstName": this.firstname,
                            "custom:lastName": this.lastname,
                        },
                    });

                    if(response){
                        navigateTo("/confirm-email");
                    }
                 } catch (err) {
                 }
             },
        },
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
 