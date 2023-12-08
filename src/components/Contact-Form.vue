<template>
  <div class="mt-12">
    <form
      @submit.prevent="
        () => sendMessageToAPI(contact_support.email, contact_support.message)
      "
    >
      <div class="flex items-start flex-col mb-6">
        <label class="mb-4" for="email">Your email</label>
        <input
          v-model="contact_support.email"
          class="px-6 outline-none"
          placeholder="Enter your email"
          type="email"
          required
        />
      </div>
      <div class="flex items-start flex-col">
        <label class="mb-4" for="email">Your message</label>
        <textarea
          v-model="contact_support.message"
          required
          class="px-4 py-6 lg:px-6 lg:py-6 outline-none"
          placeholder="Enter an topic like “broken link”"
        ></textarea>
      </div>
      <button type="submit" class="mt-7 text-white">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const contact_support = ref({
  email: "",
  message: "",
});

function sendMessageToAPI(email: string, message: string) {
  // API endpoint
  const apiUrl = "https://api.smartbloks.ai/support/message";

  // Request payload
  const payload = {
    email: email,
    message: message,
  };

  // Fetch options
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers if needed
    },
    body: JSON.stringify(payload),
  };

  // Send the POST request
  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Handle the API response data
      console.log("API Response:", data);
    })
    .catch((error) => {
      // Handle errors during the request
      console.error("Error:", error);
    });
}
</script>

<style scoped>
input {
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  border-radius: 16.397px 0px 16.397px 16.397px;
  background: #efefef;
}

textarea {
  width: 100%;
  height: 120px;
  flex-shrink: 0;
  border-radius: 16.397px 0px 16.397px 16.397px;
  background: #efefef;
}

button {
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    #1e252b 3.92%,
    #fd801b 53.25%,
    rgba(30, 37, 43, 0) 108%
  );
  width: 100%;
  height: 50px;
  flex-shrink: 0;
}

@media (min-width: 1024px) {
  input {
    width: 592.328px;
    height: 97.393px;
    flex-shrink: 0;
    border-radius: 16.397px 0px 16.397px 16.397px;
    background: #efefef;
  }

  textarea {
    width: 592.328px;
    height: 272.701px;
    flex-shrink: 0;
    border-radius: 16.397px 0px 16.397px 16.397px;
    background: #efefef;
  }

  button {
    border-radius: 10px;
    background: linear-gradient(
      90deg,
      #1e252b 3.92%,
      #fd801b 53.25%,
      rgba(30, 37, 43, 0) 108%
    );
    width: 593px;
    height: 78px;
    flex-shrink: 0;
  }
}
@media (min-width: 2560px) {
  input {
    width: 1000px;
    height: 97.393px;
    flex-shrink: 0;
    border-radius: 16.397px 0px 16.397px 16.397px;
    background: #efefef;
  }

  textarea {
    width: 1000px;
    height: 272.701px;
    flex-shrink: 0;
    border-radius: 16.397px 0px 16.397px 16.397px;
    background: #efefef;
  }

  button {
    border-radius: 10px;
    background: linear-gradient(
      90deg,
      #1e252b 3.92%,
      #fd801b 53.25%,
      rgba(30, 37, 43, 0) 108%
    );
    width: 1000px;
    height: 78px;
    flex-shrink: 0;
  }
}
</style>
