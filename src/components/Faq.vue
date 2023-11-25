<script setup lang="ts">
import { reactive } from "vue";
// @ts-ignore
import { Collapse } from "vue-collapsed";
import { QnA } from "../utils/faq";
import Close from "./icons/close.vue";
import Open from "./icons/open.vue";

const questions = reactive(
  QnA.map(({ title, answer }, index) => ({
    title,
    answer,
    isExpanded: index === 0,
  }))
);

function handleAccordion(selectedIndex: number) {
  questions.forEach((_, index) => {
    questions[index].isExpanded =
      index === selectedIndex ? !questions[index].isExpanded : false;
  });
}
</script>

<template>
  <article class="Wrapper w-full lg:max-w-[870.632px] 2xl:max-w-[67rem] font-Inter px-10 lg:px-0">
    <div
      v-for="(question, index) in questions"
      :key="question.title"
      class="Section !border-b !border-[#1E252B] py-2"
    >
      <div class="flex items-center justify-between">
        <button
          :class="[
            'Panel',
            {
              Active: question.isExpanded,
            },
          ]"
          @click="() => handleAccordion(index)"
        >
          {{ question.title }}
        </button>

        <Open
          @click="() => handleAccordion(index)"
          class="cursor-pointer"
          v-if="!question.isExpanded"
        />
        <Close
          @click="() => handleAccordion(index)"
          class="cursor-pointer"
          v-if="question.isExpanded"
        />
      </div>

      <Collapse class="my-4" as="section" :when="question.isExpanded">
        <p
          class="CollapseContent text-[#667085] text-md lg:text-[18px] leading-[27.207px]"
        >
          {{ question.answer }}
        </p>
      </Collapse>
    </div>
  </article>
</template>

<style scoped>
:root {
  --AccentColor: #41b883;
  --ForegroundColor: #c5c5c5;
  --ForegroundColorLight: #929292;
  --BackgroundColor: #1a1a1a;
  --BackgroundAlternateColor: #242424;
}

.Panel {
  width: 100%;
  font-size: 1rem;
  color: var(--ForegroundColor);
  text-align: left;
  font-weight: 600;
}

.Panel:hover {
  color: var(--AccentColor);
}

.Active {
  color: var(--AccentColor);
}

.Wrapper {
  margin-bottom: 50px;
}

.Section {
  background: var(--BackgroundAlternateColor);
  width: 100%;
  border-top: 1px solid var(--ForegroundColorLight);
  margin: 0;
}

.Section:last-of-type {
  border-bottom: 1px solid var(--ForegroundColorLight);
}

.Section button {
  width: 100%;
  padding: 20px 10px;
  border: none;
  background: none;
  cursor: pointer;
}

.CollapseContent {
  padding: 0 10px 10px;
  margin: 0;
}

@media (min-width: 640px) {
  main {
    width: 600px;
  }

  .Panel {
    font-size: 1.125rem;
  }

  .Section button {
    padding: 25px 10px;
  }

  .Collapse p {
    padding: 0 20px 20px;
    margin: 0;
    color: var(--ForegroundColorLight);
  }
}
</style>
