<template>
  <section class="hero">
    <h3>
      <span class="material-symbols-sharp">keyboard_backspace</span> Go to home
    </h3>
    <h1>Contact US</h1>
    <p>
      With that in mind, we strive to deliver accurate, trustworthy, and
      engaging content to our users. Our team of experts, researchers, and
      writers work tirelessly to curate high-quality articles, guides, and
      resources that cover various domains such as technology, science, health,
      business, and more.
    </p>
  </section>
  <section class="contact">
    <div class="container">
      <div class="row input-container">
        <div class="col-xs-12">
          <div class="styled-input wide">
            <input type="text" required />
            <label>Name</label>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="styled-input">
            <input type="text" required />
            <label>Email</label>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="styled-input" style="float: right">
            <input type="text" required />
            <label>Phone Number</label>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="styled-input wide">
            <textarea required></textarea>
            <label>Message</label>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="btn-lrg submit-btn">Send Message</div>
        </div>
      </div>
    </div>
  </section>
  <section id="map">
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7961.463093049243!2d11.497602144141192!3d3.8676608888559763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf9fe498d987%3A0x18af274f04d8dae5!2sMelen%2C%20Yaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sde!4v1713956876329!5m2!1sfr!2sde"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>


<script>
export default {
  name: "ContactView",
  data() {
    return {};
  },
  components: {},
};
</script>
<style scoped>
.hero {
  padding: 10rem;
  background-color: black;
  font-family: "Poppins", sans-serif;
  color: #fff;
}
.hero h3 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.8rem 0rem;
  font-size: 16px;
  font-weight: 600;
}
.hero h3 span {
  border: 1px solid #fff;
  padding: 0.8rem;
  border-radius: 100px;
  margin-right: 0.8rem;
}
.hero h1 {
  padding: 0.8rem 0rem;
  font-size: 40px;
  font-weight: 900;
}
.hero p {
  padding: 0.8rem 0rem;
  font-size: 18px;
  font-weight: 400;
  max-width: 500px;
}
.contact {
  background-color: #f2f7fa;
  padding: 3rem 0rem;
}

h4 {
  font-family: "Roboto", sans-serif, "arial";
  font-weight: 400;
  font-size: 20px;
  color: #000;
  line-height: 1.5;
}

/* ///// inputs /////*/

input:focus ~ label,
textarea:focus ~ label,
input:valid ~ label,
textarea:valid ~ label {
  font-size: 0.75em;
  color: #999;
  top: -5px;
  -webkit-transition: all 0.225s ease;
  transition: all 0.225s ease;
}

.styled-input {
  float: left;
  width: 293px;
  margin: 1rem 0;
  position: relative;
  border-radius: 4px;
}

@media only screen and (max-width: 768px) {
  .styled-input {
    width: 100%;
  }
}

.styled-input label {
  color: #999;
  padding: 1.3rem 30px 1rem 30px;
  position: absolute;
  top: 10px;
  left: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  pointer-events: none;
}

.styled-input.wide {
  width: 650px;
  max-width: 100%;
}

input,
textarea {
  padding: 20px;
  border: 0;
  width: 100%;
  font-size: 1rem;
  background-color: #fff;
  color: white;
  border-radius: 4px;
}

input:focus,
textarea:focus {
  outline: 0;
}

input:focus ~ span,
textarea:focus ~ span {
  width: 100%;
  -webkit-transition: all 0.075s ease;
  transition: all 0.075s ease;
}

textarea {
  width: 100%;
  min-height: 15em;
}

.input-container {
  width: 650px;
  max-width: 100%;
  margin: 20px auto 25px auto;
}

.submit-btn {
  padding: 17px 35px;
  border-radius: 60px;
  display: inline-block;
  background-color: orange;
  color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06), 0 2px 10px 0 rgba(0, 0, 0, 0.07);
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
  font-family: "Poppins", sans-serif;
}

.submit-btn:hover {
  transform: translateY(1px);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.09);
}

@media (max-width: 768px) {
  .submit-btn {
    width: 50%;
    text-align: center;
    margin-left: 1rem;
  }
  input,
  textarea {
    width: 420px !important;
  }
  .hero {
    padding: 7rem 1rem;
  }
  .hero h1 {
    font-size: 35px;
  }
  .hero h3 {
    font-size: 17px;
  }
  .hero p {
    font-size: 16px;
  }
}

input[type="checkbox"] + label {
  color: #ccc;
  font-style: italic;
}

input[type="checkbox"]:checked + label {
  color: #f00;
  font-style: normal;
}
</style>
