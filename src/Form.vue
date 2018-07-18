<template>
  <div id="registration-form" class="contact-form">
    <!-- form title -->
    <h1 class="contact-form_title">Registration Form</h1>
    <div class="separator"></div>
    <div v-if="isSending" class="loading">Thank you! Your information has been collected.</div>

    <!-- registration form -->
    <form class="form" @submit="onSubmit">
      <!-- first name -->
      <input required name="firstName" v-model='contact.firstName' placeholder="First Name" type="text">
      <!-- last name -->
      <input required name="lastName" v-model='contact.lastName' placeholder="Last Name" type="text">
      <!-- email -->
      <input required name="email" v-model="contact.email" placeholder="E-mail" type="email">
      <!-- submit button -->
       <button class="button">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        email: '',
        firstName: '',
        lastName: '',
      },

      isSending: false
    }
  },

  methods: {
		/* Clear the form */
		clearForm() {
			for (let field in this.contact) {
				this.contact[field] = ''
			}
		},

		/* Handler for submit */
		onSubmit(evt) {
			evt.preventDefault();

			this.isSending = true;

			setTimeout(() => {
				// Build for data
				let form = new FormData();
				for (let field in this.contact) {
					form.append(field, this.contact[field]);
				}

				// Send form to request bin url
				this.$https.post('https://helios-request-bin.herokuapp.com/zw9by1zw', form).then((response) => {
					console.log(response);
					this.clearForm();
					this.isSending = false;
				}).catch((e) => {
					console.log(e)
				});

			}, 1000);
		}
	}
}
</script>

<style>
/* registration form styles */
.contact-form {
	font-family: 16px;
	margin: 0 auto;
	max-width: 800px;
	width: 100%;
}

/* registration form separator */
.contact-form .separator {
	border-bottom: solid 1px #ccc;
	margin-bottom: 15px;
}

/* registration form title */
.contact-form_title {
	color: #333;
	text-align: left;
	font-size: 28px;
}

/* registration form columns */
.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 16px;
}

/* registration form inputs */
.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
	border: solid 1px #e8e8e8;
	font-family: 'Roboto', sans-serif;
	padding: 10px 7px;
	margin-bottom: 15px;
	outline: none;
  font-size: 15px;
}

/* registration form button */
.contact-form .button {
	background: #4bc5e8;
	border: solid 1px #4bc5e8;
	color: white;
	cursor: pointer;
	padding: 10px 50px;
	text-align: center;
	text-transform: uppercase;
}

.contact-form .button:hover {
	background: #31b0d5;
	border: solid 1px #31b0d5;
}

/* registration form confirmation message */
.loading {
  padding: 20px;
  background-color: #d3d3d3;
  color: #008000;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
}
</style>
