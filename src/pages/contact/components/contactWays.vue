<template>
      <div class="contactMe__wrapper">
          <div class="contactMe__header">
            <h1 class="text-center">Want to contact Xin(Alan) Ning?</h1>
            <h2  class="text-center">Here are few ways to get in touch with me.</h2>
          </div>
          <div id="app">
            <h2  class="text-center">Feeling well?</h2>
            <h5  class="text-center">(Then fill this out and I will get back to you.)</h5>
            <form class="contactMe__form js--form form" v-on:submit.prevent="validateBeforeSubmit">
              <div class="contactMe__form--line contactMe__form--line-effect">
                <input name="firstName" v-model="form.firstName" v-validate="'required|alpha'" 
                :class="{'input': true, 'contactMe__form--danger': errors.has('firstName') }" type="text" placeholder="First Name" id="firstName">
                <div v-show="errors.has('firstName')" class="validate">
                 <span v-show="errors.has('firstName')" class="contactMe__form--error">{{ errors.first('firstName') }}</span>
                </div>
                <!-- <label for="firstName">First Name</label> -->
              </div>
              <div class="contactMe__form--line contactMe__form--line-effect">
                <input name="lastName" v-model="form.lastName" v-validate="'required|alpha'" 
                :class="{'input': true, 'contactMe__form--danger': errors.has('lastName') }" type="text" placeholder="Last Name" id="lastName">
                <div v-show="errors.has('lastName')" class="validate">
                  <span v-show="errors.has('lastName')" class="contactMe__form--error">{{ errors.first('lastName') }}</span>
                </div>
                <!-- <label for="lastName">Last Name</label> -->
              </div>
              <div class="contactMe__form--line contactMe__form--line-effect">
                <input name="email" v-model="form.email" v-validate="'required|email'" data-vv-delay="1000" 
                :class="{'input': true, 'contactMe__form--danger': errors.has('email') }" type="text" placeholder="Email" id="email">
                <div v-show="errors.has('email')" class="validate">
                 <span v-show="errors.has('email')" class="contactMe__form--error" data-vv-delay="1000">{{ errors.first('email') }}</span>
                </div>
                <!-- <label for="email">Email</label> -->
              </div>
              <div class="contactMe__form--line contactMe__form--line-effect">
                <input name="phone" v-model="form.phone" v-validate="'numeric'" 
                :class="{'input': true, 'contactMe__form--danger': errors.has('phone') }" type="text" placeholder="Phone Number" id="phone">
                <div v-show="errors.has('phone')" class="validate">
                  <span v-show="errors.has('phone')" class="contactMe__form--error" >{{errors.first('phone')}}</span>
                </div>
               <!-- <label class="label" for="phone">Phone</label> -->
              </div>
              
              <div class="contactMe__form--line">
                <!-- <label for="description" name="description" class="label-underline">Project Description</label> -->
                <textarea name="message" rows="4" v-model="form.description" v-validate="'required|alpha_spaces'" 
                :class="{'input': true, 'contactMe__form--danger-box': errors.has('description') }" placeholder="Message"></textarea>
                <div v-show="errors.has('message')"  class="validate">
                  <span v-show="errors.has('message')" class="contactMe__form--error">{{errors.first('message')}}</span>
                </div>
              </div>
              <div class="contactMe__form--submit">
                <button>Submit</button>
              </div>
            </form>           
        </div>
        <div class="other ">
          <h2 class="text-center">Prefer Other Methods?</h2>
          <h5 class="text-center">(I have those too.)</h5>
          <b-row>
            <b-col class="text-center" ><a href="https://www.facebook.com/jxnx888"  class="iconfont">&#xe66e;</a></b-col>
            <b-col class="text-center" ><a href="https://www.linkedin.com/in/xin-ning-28818b115/"  class="iconfont">&#xe60c; </a></b-col>
            <b-col class="text-center" ><a style="font-size:.5rem" href="tel:17710730729"  class="iconfont">&#xe617;</a></b-col>
            <b-col class="text-center"><a style="font-size:.5rem" href="mailto:ningxin1989@hotmail.com"  class="iconfont">&#xe62f;</a></b-col>
          </b-row>
       
           
            
         
          <div></div>
          <div></div>
          </div>
 
    </div>
 </template>

<script>
export default {
  name: "contactWays",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: ""
      }
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log(this.form);
        } else {
          this.$el
            .querySelector(
              '[data-vv-id="' + this.$validator.errors.items[0].id + '"]'
            )
            .scrollIntoView(false);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.contactMe__wrapper {
  .contactMe__header {
    .text-center {
      padding: 5px 0;
    }

    h1 {
      font-size: 0.4rem;
    }

    h2 {
      font-size: 0.3rem;
    }
  }

  #app {
    width: 95%;
    padding-top: 20px;
    margin: 0 auto;

    h2 {
      font-size: 0.3rem;
    }

    h5 {
      padding-bottom: 10px;
    }

    .contactMe__form--line {
      font-family: 16px;
      max-width: 600px;

      .validate {
        margin-bottom: 15px;

        span {
          color: red;
          margin-bottom: 10px;
        }
      }

      input, textarea {
        font-family: 16px;
        margin: 0 auto;
        max-width: 600px;
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        margin: 5px 0;
        padding-left: 5px;
        border: 1px solid #000;
        border-radius: 10px;
      }

      textarea {
        height: 2rem;
      }
    }

    .contactMe__form--submit {
      button {
        width: 100%;
        background: #e05c5c;
        outline: none;
        border: none;
        border-radius: 10px;
        color: #FFF;
        padding: 10px 0;
        margin: 10px 0;
        font-size: 1em;
        text-transform: uppercase;
        transition: 0.3s ease;
        cursor: pointer;
      }
    }
  }

  .other {
    .col, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9 {
      height: 0.8rem;
      line-height: 0.8rem;
      margin: 10px 0;
    }

    .iconfont {
      font-size: 0.6rem;
    }

    .iconfont {
      font-size: 0.6rem;

      a {
        height: 0.8rem;
        line-height: 0.8rem;
        margin: 10px 0;
      }
    }
  }
}
</style>
