<template>
    <div>
        <div class="wrapper">
            <div class="text-center mt-4 name">
                ini adalah Contact Me
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return
    }
}
</script>

<style lang="scss">
html,
body,
#app {
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    background: #ecf0f3;
}

.flex {
    display: flex;
    height: 100%;
    width: 100%;

    &--column {
        flex-direction: column;
    }

    &--align-center {
        align-items: center;
    }

    &--justify-center {
        justify-content: center;
    }
}

.logos {
    padding-top: 16px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 32px;
}

.title {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 16px;
    padding: 32px;

    .laravel {
        color: #ff291a
    }

    .vue {
        color: #41b883;
    }

    .plus {
        color: #35495e
    }

}
</style>
