<template>
  <Carousel :breakpoints="breakpoints" class="h-full lg:py-12">
    <Slide v-for="i in 3" :key="i" class="lg:w-[585.544px] mt-24 pb-6">
      <div class="carousel__item lg:ml-8">
        <div
          class="flex items-center justify-center relative z-50 transform translate-y-6"
        >
          <div
            class="flex items-center gap-x-4 border rounded-[80.525px] w-[126.424px] p-1 bg-white"
          >
            <img
              class="w-[55.279px]"
              src="../assets/landing_page/avatar.png"
              alt="avatar"
            />
            <img
              class="w-[55.279px]"
              src="../assets/landing_page/love.png"
              alt=""
            />
          </div>
        </div>
        <div class="bg-white z-20 relative">
          <div class="p-4 lg:w-[505.128px] h-full lg:h-[333.15px] relative pt-10 px-6">
            <p
              class="text-[#1E252B] text-[18.008px] leading-[32.13px] tracking-[-0.36px] font-Manrope text-justify"
            >
              Igor started creating websites years ago, going on to learn coding
              and mastering his creativity to build websites for other
              businesses, helping him make over $800,000 on UpWork, creating
              websites. He now manages his own team who does all the work while
              expands his web development agency online.
            </p>

            <div class="flex items-center gap-x-6 mt-6">
              <p class="text-[24.31px] font-Manrope text-[#1E252B] font-bold">
                Goody. Wilson
              </p>
              <p
                class="text-[17.827px] font-light text-[#595F64] leading-[28.915px] tracking-[-0.36px]"
              >
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>
        <div
          class="hidden lg:block lg:w-[505.128px] h-[333.15px] rounded-[18.008px] absolute top-20 right-3 z-10 card-shadow"
        ></div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";


const breakpoints = ref({
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
});
</script>

<style scoped>
.card-shadow {
  border-radius: 22.939px;
  border: 1.147px solid rgba(255, 255, 255, 0.36);
  background: rgba(30, 37, 43, 0.24);
}
</style>
