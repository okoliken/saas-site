<template>
  <div class="mb-7">
    <table>
      <tbody>
        <tr v-for="i in 12" :key="i">
          <td class="relative">
            <div class="flex items-center justify-center gap-x-16">
              <p class="text-[#1E252B] font-medium">Create website using AI</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
              >
                <path
                  d="M11.5 23C5.14855 23 0 17.8514 0 11.5C0 5.14855 5.14855 0 11.5 0C17.8514 0 23 5.14855 23 11.5C23 17.8514 17.8514 23 11.5 23ZM11.5 20.7C13.94 20.7 16.28 19.7307 18.0054 18.0054C19.7307 16.28 20.7 13.94 20.7 11.5C20.7 9.06001 19.7307 6.71995 18.0054 4.99462C16.28 3.26928 13.94 2.3 11.5 2.3C9.06001 2.3 6.71995 3.26928 4.99462 4.99462C3.26928 6.71995 2.3 9.06001 2.3 11.5C2.3 13.94 3.26928 16.28 4.99462 18.0054C6.71995 19.7307 9.06001 20.7 11.5 20.7ZM10.35 5.75H12.65V8.05H10.35V5.75ZM10.35 10.35H12.65V17.25H10.35V10.35Z"
                  fill="#B6B6B6"
                />
              </svg>
            </div>

            <div class="absolute hidden">
              <p>
                Connect a custom domain, look professional online & build your
                brand credibility.
              </p>
            </div>
          </td>
          <td>
            <p>20</p>
          </td>
          <td>
            <p>unlimited</p>
          </td>
          <td>
            <p>unlimited</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style scoped>
table {
  width: 100%;
  table-layout: fixed;
}


tr,
td {
  height: 88px;
  border: 1px solid #dddddd;
  text-align: center;
}
</style>
