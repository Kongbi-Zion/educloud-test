import { Amplify } from "@aws-amplify/core";
import config from "../src/aws-exports";

config.oauth["redirectSignIn"] = `${window.location.origin}/auth/`;
config.oauth["redirectSignOut"] = `${window.location.origin}/`;

export default defineNuxtPlugin(async (nuxtApp) => {
  if(process.client) {
    window.global = window;
    var exports = {};
  } 

  Amplify.configure({ ...config });
  nuxtApp.vueApp.use(Amplify);
});