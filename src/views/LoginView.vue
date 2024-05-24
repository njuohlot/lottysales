<template>
    <section>

        <div class="row">
            <div class="col-75">
                <div class="container">
                    <form action="/action_page.php">

                        <div class="row">
                            <div class="col-50">
                                <label for="email"> Email</label>
                                <input type="text" id="email" name="email" placeholder="john@example.com">
                                <label for="pass">Your Password</label>
                                <input type="password" id="pass" name="pass" placeholder="test@gmail.com">


                            </div>

                            <input type="submit" value="Login" class="btn">

                        </div>
                    </form>
                </div>
            </div>

        </div>


        <p>Do not have an Account <router-link to="/register">Register</router-link></p>
    </section>
</template>


<script>


export default {
    name: 'LoginView',
    data() {
        return {

        }
    },
    components: {

    }
}

</script>
<style scoped>
section {
    padding: 10rem 0;
    width: 30%;
    margin: auto;
}


* {
    box-sizing: border-box;

}

.row {
    display: -ms-flexbox;
    /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap;
    /* IE10 */
    flex-wrap: wrap;
    margin: 0 -16px;
    background-color: #fff;
    font-family: 'Poppins'
}

section p {
    display: block;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    padding: 1.5rem;
}

.col-25 {
    -ms-flex: 25%;
    /* IE10 */
    flex: 25%;
}

.col-50 {
    -ms-flex: 50%;
    /* IE10 */
    flex: 50%;
}

.col-75 {
    -ms-flex: 75%;
    /* IE10 */
    flex: 75%;
}

.col-25,
.col-50,
.col-75 {
    padding: 0 16px;
}

.container {
    background-color: #fff;
    padding: 5px 20px 15px 20px;
}

input[type=text] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    font-family: 'Poppins';
}

input[type=password] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    font-family: 'Poppins';
}

input:focus {
    outline: none;
}

label {
    margin-bottom: 10px;
    display: block;
    font-family: 'Poppins';
}

.icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
}

.btn {
    background-color: #EDA024;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
}

.btn:hover {
    background-color: #000;
}

a {
    color: #2196F3;
}

hr {
    border: 1px solid lightgrey;
}

span.price {
    float: right;
    color: grey;
}


@media (max-width: 800px) {


    .col-25 {
        margin-bottom: 20px;
    }

    section {

        width: 90%;

    }
}

@media (max-width: 1200px) {

    section {

        width: 90%;

    }
}
</style>
