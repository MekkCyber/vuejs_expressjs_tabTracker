<template>
    <div>
        la plupart des éléments de la vie sont bons {{message}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            message : "toi t'es pas malade"
        }
    },
    method : {
        add () {
            return "this is add"
        }
    }
}
</script>