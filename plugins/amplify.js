import { Amplify } from "@aws-amplify/core";
import config from "../src/aws-exports";
import { API, Auth } from "aws-amplify";

config.oauth["redirectSignIn"] = `${window.location.origin}/external-auth/`;
config.oauth["redirectSignOut"] = `${window.location.origin}/`;

export default defineNuxtPlugin(async (nuxtApp) => {
  if(process.client) {
    window.global = window;
    var exports = {};
  } 

  // Amplify.Logger.LOG_LEVEL = "DEBUG"
  // Amplify.configure({...config})
  API.configure({ ...config });
  Auth.configure({...config})
  nuxtApp.vueApp.use(Amplify);
});