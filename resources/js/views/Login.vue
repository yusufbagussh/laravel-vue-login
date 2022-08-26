<template>
    <div>
        <div class="wrapper" v-if="isAuthenticated == false">
            <div class="logo">
                <img
                    src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
                    alt=""
                />
            </div>
            <br />
            <div class="text-center mt-4 name">Login</div>
            <form class="p-4 mt-4" @submit.prevent="login">
                <div class="form-field d-flex align-items-center">
                    <span class="far fa-user"></span>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        v-model="form.email"
                    />
                </div>
                <div class="form-field d-flex align-items-center">
                    <span class="fas fa-key"></span>
                    <input
                        type="password"
                        name="password"
                        id="pwd"
                        placeholder="Password"
                        v-model="form.password"
                    />
                </div>
                <button type="submit" class="btn mt-3 text-white">Login</button>
            </form>
            <div class="text-center fs-6">
                <router-link to="/Registrasi">Sign up</router-link>
            </div>
        </div>
        <div v-else>
            <h2>Dashboard ....</h2>
            <button type="button" class="btn btn-dark" @click="logout">
                Logout
            </button>
        </div>
    </div>
</template>

<script>
import { reactive, inject, ref, onMounted } from "vue";
import axios from "axios";
export default {
    setup() {
        let cookies = inject("cookies");
        let isAuthenticated = ref(false);
        const form = reactive({
            email: "",
            password: "",
        });

        const login = async () => {
            let res = await axios.post("api/login", form);
            if (res.data.access_token) {
                cookies.set("access_token", res.data.access_token);
                isAuthenticated.value = true;
            }
        };

        const checkLogin = () => {
            if (cookies.get("access_token")) {
                isAuthenticated.value = true;
            }
        };

        const logout = () => {
            if (cookies.get("access_token")) {
                cookies.set("access_token", "");
                isAuthenticated.value = false;
            }
        };

        onMounted(checkLogin);

        return {
            form,
            login,
            isAuthenticated,
            logout,
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
