<template>
  <Carousel :breakpoints="breakpoints" :wrap-around="true" class="h-full">
    <Slide v-for="i in 3" :key="i" class="lg:w-[585.544px] w-full mb-24 !py-12">
      <div class="carousel__item lg:ml-8 relative">
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
              alt="love"
            />
          </div>
        </div>
        <div class="bg-white z-20 relative rounded-[18.008px]">
          <div
            class="p-4 w-full max-w-lg h-full lg:h-[333.15px] relative pt-10 px-6"
          >
            <p
              class="text-[#1E252B] text-[16px] leading-[32.13px] tracking-[-0.36px] font-Manrope text-justify"
            >
              Igor started creating websites years ago, going on to learn coding
              and mastering his creativity to build websites for other
              businesses, helping him make over $800,000 on UpWork, creating
              websites. He now manages his own team who does all the work while
              expands his web development agency online.
            </p>

            <div class="flex items-center gap-x-6 mt-6">
              <p class="text-[24px] font-Manrope text-[#1E252B] font-bold">
                Goody. Wilson
              </p>
              <p
                class="text-[17px] font-light text-[#595F64] leading-[28.915px] tracking-[-0.36px]"
              >
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>
        <div
          class="hidden lg:block lg:w-[505px] h-[333px] rounded-[18.008px] absolute top-20 left-6 z-10 card-shadow"
        ></div>
      </div>
    </Slide>

    <template #addons>
      <Pagination class="!mt-14" />
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
    snapAlign: "center",
  },
  2560: {
    itemsToShow: 4.5,
    snapAlign: "center",
  },
});
</script>


<style scoped>
.card-shadow {
  border-radius: 24.558px;
  border: 1.228px solid rgba(255, 255, 255, 0.36);
  background: rgba(253, 128, 27, 0.11);
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>