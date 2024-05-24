<template>
  <section class="hero">
    <h3>
      <span class="material-symbols-sharp">keyboard_backspace</span> Go to home
    </h3>
    <h1>about us</h1>
    <p>
      At AboutUs, we are a dynamic and innovative company committed to providing comprehensive information and valuable
      insights on a wide range of topics.
    </p>
  </section>

  <section class="about">
    <div class="left">
      <h1>Be clear and concise</h1>
      <p>Welcome to Steps Theme, where we believe that every journey begins with a single step. We are a dedicated team
        of professionals who are passionate about helping individuals and businesses take those crucial steps towards
        success. Our mission is to provide innovative solutions and support that propel our clients forward on their
        path to achieving their goals.</p>
    </div>
    <div class="right">
      <h1>1</h1>
      <p>Welcome to Steps Theme, where we believe that every journey begins with a single step. We are a dedicated team
        of professionals who are passionate about helping individuals and businesses take those crucial steps towards
        success. Our mission is to provide innovative solutions and support that propel our clients forward on their
        path to achieving their goals.</p>
    </div>
  </section>
  <section id="content">
    <div class="left">
      <h2>Make it inviting and engaging</h2>
      <p>We believe that understanding our clients' needs is the key to delivering exceptional results. We take the time
        to listen and learn about your vision, objectives, and challenges. By gaining a deep understanding of your
        requirements, we can tailor our strategies and solutions to meet your specific needs. Your success is our top
        priority, and we work closely with you every step of the way.

        In a rapidly evolving world, it's essential to stay ahead of the curve. At Steps Theme, we pride ourselves on
        our ability to think outside the box and provide creative and innovative solutions. Whether it's developing a
        unique branding strategy, designing an eye-catching website, or implementing a targeted marketing campaign, we
        strive to bring fresh ideas and approaches to the table.</p>
    </div>
    <div class="right">
      <img src="../assets/images/hh.webp" alt="">
    </div>
  </section>
  <section id="content">
    <div class="right">
      <img src="../assets/images/hhhhh.webp" alt="">
    </div>
    <div class="left">
      <h2>Keep it short and sweet</h2>
      <p>We believe that collaboration is the key to achieving outstanding results. We view our clients as partners,
        working together towards a shared goal. We foster a collaborative environment where open communication, mutual
        respect, and teamwork thrive. Through regular feedback and transparent processes, we ensure that our clients are
        actively involved in the decision-making process and are satisfied with the final outcome.

        Excellence is at the core of everything we do. We are committed to delivering high-quality services and
        exceeding our clients' expectations. Our team of skilled professionals maintains the highest standards of
        professionalism, attention to detail, and dedication to excellence. We strive for continuous improvement,
        regularly evaluating our processes and adopting best practices to provide the best possible outcomes for our
        clients.</p>
    </div>

  </section>
  <section class="about-end">
    <h1>About our services</h1>
    <p>Our mission is to empower individuals with knowledge and facilitate meaningful connections through our
      platform.We understand the importance of reliable and up-to-date information in today's fast-paced world.</p>


  </section>

  <section id="map">
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7961.463093049243!2d11.497602144141192!3d3.8676608888559763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf9fe498d987%3A0x18af274f04d8dae5!2sMelen%2C%20Yaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sde!4v1713956876329!5m2!1sfr!2sde"
        width="100%" height="450" style="border: 0" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
</template>


<script>
export default {
  name: "AboutView",
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
.about{
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: top;
  padding: 3rem 1rem;
}
.about .left, 
.about .right {
   width: 40%;
   padding: 2rem;
   

}
.about .left h1,
.about .right h1 {
 font-family: 'Poppins', sans-serif;
 font-size: 50px;
 color: black;
 padding: 1rem 0rem;
 font-weight: 900;

}
.about .right h1 {
  opacity: 0;

}
.about .left p,
.about .right p {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  color: black;
  padding: 1rem 0rem;
  font-weight: 400;

}
#content{
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 0rem 6rem;
}
#content .left, #content .right {
  width: 40%;
  margin: auto;
  padding: 1rem;
}
#content .left h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 35px;
  color: black;
  padding: 1rem 0rem;
  font-weight: 900;

}
#content .left p {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  color: black;
  padding: 1rem 0rem;
  font-weight: 400;

}
.about-end{
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  padding: 3rem 1rem;
  text-align: center;
}
.about-end h1{
    font-family: 'Poppins', sans-serif;
      font-size: 35px;
      color: black;
      padding: 1rem 0rem;
      font-weight: 900;
}


@media (max-width: 768px) {
  

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


</style>
