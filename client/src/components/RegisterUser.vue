<template lang="">
    <div>
        <h1>
            Register
        </h1>
        <input type="email" name="email" placeholder="email" v-model="email"/>
        <input type="password" name="password" placeholder="password" v-model="password"/>
        <button @click = "register"> Register </button>
    </div>
</template>
<script>
import Auth from '../services/Auth.js'
export default {
    data() {
        return {
            email : '',
            password : '',
        }
    },
    methods : {
        async register() {
            const response = await Auth.register({email : this.email,
                           password : this.password})
            console.log("this is in register");
            console.log(response.data)
        }
    }
}
</script>
<style lang="">
    
</style>