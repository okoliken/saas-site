<template>
  <input
    class="px-6 lg:px-10 w-full lg:max-w-[44rem] h-[65px] lg:h-[4.6rem] outline-none appearance-none placeholder:text-[1.1rem] placeholder:font-light"
    type="text"
    id="input"
    placeholder=""
  />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Typewriter from "typewriter-effect/dist/core";

let typewriter: any;

onMounted(() => {
  var input = document.getElementById("input") as HTMLInputElement;

  var customNodeCreator = function (character: string) {
    // Add character to input placeholder
    input.placeholder = input.placeholder + character;

    // Return null to skip internal adding of dom node
    return null;
  };

  typewriter = new Typewriter(input, {
    delay: 40,
    deleteSpeed: 4,
    onCreateTextNode: customNodeCreator,
  });

  typewriter
    .typeString("What type of website do you want to create?")
    .pauseFor(1000)
    .start();
});
</script>
