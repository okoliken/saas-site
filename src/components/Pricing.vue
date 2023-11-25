<template>
  <div class="mb-7">
    <table class="table-fixed">
      <tbody>
        <tr v-for="(plan, index) in plans" :key="index">
          <td class="relative">
            <div class="flex items-center justify-between px-4">
              <p class="text-[#1E252B] font-medium text-left">
                {{ plan.title }}
              </p>
              <div class="show-info cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  class="cursor-pointer"
                >
                  <path
                    d="M11.5 23C5.14855 23 0 17.8514 0 11.5C0 5.14855 5.14855 0 11.5 0C17.8514 0 23 5.14855 23 11.5C23 17.8514 17.8514 23 11.5 23ZM11.5 20.7C13.94 20.7 16.28 19.7307 18.0054 18.0054C19.7307 16.28 20.7 13.94 20.7 11.5C20.7 9.06001 19.7307 6.71995 18.0054 4.99462C16.28 3.26928 13.94 2.3 11.5 2.3C9.06001 2.3 6.71995 3.26928 4.99462 4.99462C3.26928 6.71995 2.3 9.06001 2.3 11.5C2.3 13.94 3.26928 16.28 4.99462 18.0054C6.71995 19.7307 9.06001 20.7 11.5 20.7ZM10.35 5.75H12.65V8.05H10.35V5.75ZM10.35 10.35H12.65V17.25H10.35V10.35Z"
                    fill="#B6B6B6"
                  />
                </svg>
                <div
                  class="absolute w-full max-w-[360px] py-2 px-6 bg-white shadow-2xl shadow-[#D9D9D9] z-40 top-14 left-[9rem] rounded-[10px] flex items-start justify-center info"
                >
                  <div class="arrow"></div>
                  <p
                    class="text-[14px] text-left text-[#9A9A9A] leading-[150.5%]"
                  >
                    Connect a custom domain, look professional online & build
                    your brand credibility.
                  </p>
                </div>
              </div>
            </div>
          </td>

          <td
            class="text-center"
            v-for="(item, index) in plan.options"
            :key="index"
          >
            <template v-if="typeof item === 'boolean'">
              <div class="flex w-full items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.4673 30.9346C24.0097 30.9346 30.9346 24.0097 30.9346 15.4673C30.9346 6.92496 24.0097 0 15.4673 0C6.92496 0 0 6.92496 0 15.4673C0 24.0097 6.92496 30.9346 15.4673 30.9346ZM15.2716 19.3892L21.271 13.2023L19.5627 11.5458L14.3839 16.8864L11.3381 13.987L9.69744 15.7106L13.5971 19.4227L14.4509 20.2355L15.2716 19.3892Z"
                    fill="#FD801B"
                  />
                </svg>
              </div>
            </template>
            <template v-else>
              <p>{{ item }}</p>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["plans"]);
</script>

<style scoped>
table {
  width: 100%;
  table-layout: fixed;
}

tr,
td {
  height: 75px;
  border: 1px solid #b6b6b666;
  text-align: center;
}

.arrow {
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #fff;
  border-left: 15px solid transparent;

  position: absolute;
  top: -24px;
  left: 125px;
}

.show-info:hover .info {
  display: block;
  transition: all 0.5s ease-in-out;
}

.info {
  display: none;
}

tr td:nth-child(3) {
  background: #d9d9d933;
}
</style>
