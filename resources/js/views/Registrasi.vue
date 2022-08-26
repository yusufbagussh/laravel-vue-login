<template>
    <div>
        <div class="wrapper">
            <div class="text-center mt-4 name">Sign up</div>
            <form class="p-4 mt-4" @submit.prevent="store">
                <div class="form-field d-flex align-items-center">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Username"
                        v-model="form.name"
                    />
                </div>
                <div v-if="validation.name" class="mt-2 alert alert-danger">
                    {{ validation.name[0] }}
                </div>
                <div class="form-field d-flex align-items-center">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        v-model="form.email"
                    />
                </div>
                <div v-if="validation.email" class="mt-2 alert alert-danger">
                    {{ validation.email[0] }}
                </div>
                <div class="form-field d-flex align-items-center">
                    <input
                        type="password"
                        name="password"
                        id="pwd"
                        placeholder="Password"
                        v-model="form.password"
                    />
                </div>
                <div v-if="validation.password" class="mt-2 alert alert-danger">
                    {{ validation.password[0] }}
                </div>
                <div class="form-field d-flex align-items-center">
                    <input
                        type="password"
                        name="passwordConfirm"
                        id="pwdConf"
                        placeholder="Password Confirmation"
                        v-model="form.password_confirmation"
                    />
                </div>
                <div
                    v-if="validation.password_confirmation"
                    class="mt-2 alert alert-danger"
                >
                    {{ validation.password_confirmation[0] }}
                </div>
                <button class="btn mt-3" type="submit">Submit</button>
                <div class="text-center fs-6">
                <router-link to="/">Sign in</router-link>
            </div>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
    setup() {
        //state posts
        const form = reactive({
            name: "",
            email: "",
            user_role: 2,
            password: "",
            password_confirmation: "",
        });

        //state validation
        const validation = ref([]);

        //vue router
        const router = useRouter();

        //method store
        function store() {
            let name = form.name;
            let email = form.email;
            let password = form.password;
            let password_confirmation = form.password_confirmation;

            axios
                .post("api/register", {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: password_confirmation,
                })
                .then(() => {
                    //redirect ke login
                    router.push({
                        path: "/",
                    });
                })
                .catch((error) => {
                    //assign state validation with error
                    validation.value = error.response.data;
                });
        }

        //return
        return {
            form,
            validation,
            router,
            store,
        };
    },
};
</script>
<style>
.wrapper {
    max-width: 450px;
    min-height: 500px;
    margin: 30px auto;
    padding: 40px 30px 30px 30px;
    background-color: #ecf0f3;
    border-radius: 15px;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
}
.logo {
    width: 80px;
    margin: auto;
}

.logo img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3,
        8px 8px 15px #a7aaa7, -8px -8px 15px #fff;
}

.wrapper .name {
    font-weight: 7 00;
    font-size: 20pt;
    letter-spacing: 5px;
    padding-left: 10px;
    color: #555;
}

.wrapper .form-field input {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    background: none;
    font-size: 1.2rem;
    color: #666;
    padding: 10px 15px 10px 10px;
    /* border: 1px solid red; */
}

.wrapper .form-field {
    padding-left: 10px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
}

.wrapper .form-field .fas {
    color: #555;
}

.wrapper .btn {
    box-shadow: none;
    font-size: 15pt;
    width: 100%;
    height: 50px;
    background-color: #03a9f4;
    color: #fff;
    border-radius: 25px;
    box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
    letter-spacing: 1.7px;
}

.wrapper .btn:hover {
    background-color: #039be5;
}

.wrapper a {
    text-decoration: none;
    font-size: 0.8rem;
    color: #03a9f4;
}

.wrapper a:hover {
    color: #039be5;
}
</style>
