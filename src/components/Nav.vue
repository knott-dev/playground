<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { useDarkGlobal } from '../utils'

const isDark = useDarkGlobal()

const toggleDark = useToggle(isDark)
</script>

<template>
  <nav class="bg-shade-onyx-4 shadow select-none">
    <div class="margin-x-auto padding-2 flex justify-between items-center">
      <div class="flex items-center justify-between">
        <div class="">
          <svg width="30" height="auto" viewBox="0 0 135.467 135.467" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="prefix__a"><stop offset="0" stop-color="#e3fc06"/><stop offset="1" stop-color="#28ff1c"/></linearGradient><linearGradient xlink:href="#prefix__a" id="prefix__b" x1="-31.851" y1="191.585" x2="-28.833" y2="191.585" gradientUnits="userSpaceOnUse" gradientTransform="rotate(135 54.604 203.893)"/></defs><path fill="none" paint-order="markers fill stroke" d="M.002-.003H135.47v135.468H.002z"/><path d="M125.445 152.469l-1.764 2.3-2.65-2.445 2.394-1.875z" fill="url(#prefix__b)" paint-order="markers fill stroke" transform="translate(-1033.042 -1365.778) scale(9.26592)"/><path d="M4.403 87.622L20.749 66.3l24.545 22.661-22.175 17.376z" fill="#4d4d4d" paint-order="markers fill stroke"/><path d="M78.296 28.893c2.632 1.94 6.401 5.244 8.372 7.344l3.584 3.815 5.789-5.415c6.954-6.505 13.679-8.738 20.655-6.86 9.578 2.582 14.897 9.399 14.897 19.099 0 6.858-1.248 9.48-7.716 16.2l-4.974 5.166 5.151 5.588c5.981 6.489 7.539 9.97 7.539 16.841 0 10.586-9.027 19.434-19.816 19.425-5.89-.005-10.654-2.409-16.644-8.399-2.133-2.134-4.363-3.876-4.958-3.876-.594 0-2.986 1.983-5.314 4.403-5.57 5.794-9.771 7.878-15.886 7.878-6.317 0-12.768-3.29-18.93-9.658l-4.793-4.955-5.645 4.986c-6.777 5.987-9.573 7.17-16.939 7.17-11.126 0-18.792-8.124-18.792-19.916 0-6.949 2.998-12.753 9.634-18.64l2.624-2.332-4.936-5.355c-5.868-6.366-7.324-9.774-7.324-17.143 0-10.883 7.898-18.894 18.626-18.894 7.644 0 10.994 1.41 17.411 7.324l5.355 4.935L47.597 35c1.282-1.445 4.486-4.202 7.12-6.13 3.94-2.881 6.029-3.505 11.789-3.505 5.777 0 7.837.614 11.79 3.527zM56.04 37.805l-5.5 5.07 4.515 5.06c14.345 16.085 45.363 48.541 49.14 51.422 2.436 1.858 5.703 3.377 7.26 3.377 7.357 0 12.77-5.817 12.77-13.723 0-3.596-2.75-6.771-26.128-30.148-25.815-25.815-26.19-26.128-31.343-26.128-4.404 0-6.07.787-10.714 5.07zm-41.206-1.48c-2.843 2.843-3.588 4.677-3.588 8.817 0 5.165.302 5.537 25.482 30.728 16.358 16.368 26.691 25.791 28.86 26.315 4.976 1.2 8.276-.084 14.3-5.548l5.396-4.9-13.379-14.431c-7.358-7.937-20.031-21.213-28.162-29.501-14.356-14.634-14.935-15.07-20.05-15.07-4.186 0-6.005.74-8.857 3.588zm86.581 3.992l-5.562 5.126 8.884 8.944 8.884 8.943 3.174-3.325c8.644-9.047 9.773-15.292 3.837-21.226-2.8-2.8-4.697-3.587-8.623-3.587-4.203 0-5.954.848-10.596 5.126zm-90.17 47.892c0 6.83 5.213 12.068 12.012 12.068 3.92 0 5.929-.964 10.625-5.098l5.791-5.098-8.995-9.098-8.995-9.098-5.22 5.718c-4.308 4.72-5.219 6.572-5.219 10.606z" fill="#7c7c7c"/></svg>
        </div>
        <div class="padding-x-2">
          <span class="text-tint-onyx-4">
            Knott.js
          </span>
          <span class="text-tint-lime-4 font-semibold">
            Playground
          </span>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <a
          class="margin-r-2 margin-t-1 inline-block text-sm font-semibold text-tint-onyx-3 (hover)text-tint-onyx-5 (hover)text-underline transition duration-200 ease"
          href="https://knottjs.netlify.app"
          target="_BLANK"
          title="The official Knott.js website"
        >
          Documentation
        </a>
        <a
          class="margin-x-2 text-tint-onyx-1 (hover)text-tint-onyx-5"
          href="https://twitter.com/knottjs"
          target="_BLANK"
          title="News @ Twitter"
        >
          <svg
            class="-margin-t-1 height-5 width-5 fill-current text-tint-onyx-3 (hover)text-tint-onyx-5 transition duration-200 ease transform (hover)scale-150"
            viewBox="0 0 543.53503 443.00287"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 157.93717,490.55848 C 119.31606,487.57494 86.843075,480.17525 55.537175,467.22436 44.727945,462.7527 19.994145,450.26174 11.590385,445.03053 l -5.54679,-3.45279 19.40707,0.40303 c 28.65956,0.59518 51.48381,-2.64167 76.513625,-10.85091 12.70307,-4.16632 32.56579,-12.9511 42.10621,-18.62251 9.0116,-5.35704 25.06667,-16.45456 25.06667,-17.32648 0,-0.40126 -3.72,-1.02771 -8.26667,-1.39211 -30.03919,-2.40758 -60.81691,-20.55529 -79.670545,-46.97677 -4.83266,-6.77248 -12.76868,-21.80635 -13.90949,-26.3499 l -0.65122,-2.59364 h 18.44896 c 11.78872,0 20.750185,-0.52671 24.823365,-1.45901 l 6.3744,-1.45899 -8.50773,-2.46836 C 63.486725,299.63181 30.338595,259.16536 27.585475,214.58468 l -0.64744,-10.48376 4.16624,1.80472 c 16.44073,7.12177 31.08314,11.11148 40.90679,11.1461 l 4.74057,0.0167 -3.2056,-2.4 c -26.41069,-19.77345 -42.12031,-47.86372 -45.18776,-80.8 -1.03342,-11.09619 0.23523,-26.56113 3.08265,-37.577688 2.19262,-8.48317 10.55375,-27.78709 11.80483,-27.25462 0.38636,0.16444 4.07475,4.13898 8.19641,8.83232 47.29223,53.851568 113.603445,90.848768 184.361665,102.861418 12.53794,2.12857 36.74465,4.74947 37.44039,4.05373 0.19353,-0.19353 -0.17059,-3.68861 -0.80915,-7.76685 -1.66413,-10.62815 -0.48858,-35.40583 2.12304,-44.74831 3.09267,-11.06334 5.06815,-16.02628 10.27583,-25.8157 33.91244,-63.74878 120.41351,-78.508029 173.27733,-29.565458 l 6.44157,5.96376 7.75881,-1.72944 c 16.85173,-3.75623 40.15201,-12.52942 54.95883,-20.693477 4.25333,-2.345168 7.72747,-3.700482 7.72031,-3.011808 -0.0314,3.0138 -7.69949,18.445465 -13.32049,26.806655 -6.67472,9.9286 -22.16037,25.452448 -29.9346,30.008448 -2.65553,1.55624 -4.68546,2.97233 -4.51096,3.14685 0.63454,0.63454 21.95177,-3.59324 32.33109,-6.41212 5.85639,-1.59052 14.91912,-4.53703 20.13938,-6.54782 5.22028,-2.01078 9.6632,-3.48417 9.87317,-3.27421 0.20997,0.20997 -2.83737,4.65884 -6.77188,9.88638 -9.38868,12.47419 -26.15725,29.72956 -38.44286,39.55884 l -9.85018,7.88077 0.62478,7.69916 c 0.72876,8.98035 -1.01611,35.6591 -3.39238,51.86927 -11.5903,79.06519 -55.63488,156.8696 -116.17127,205.21562 -46.75859,37.34269 -98.53127,58.50417 -161.09409,65.84531 -10.15025,1.19104 -47.51827,2.15541 -56.53333,1.45899 z" />
          </svg>
        </a>
        <a
          class="margin-x-2 text-tint-onyx-1 (hover)text-tint-onyx-5"
          href="https://github.com/knott-dev/knott-js"
          target="_BLANK"
          title="Repo @ Github"
        >
          <svg
            class="width-5 height-5 fill-current text-tint-onyx-3 (hover)text-tint-onyx-5 transition duration-200 ease transform (hover)scale-150"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
            />
          </svg>
        </a>
        <a
          class="hidden margin-x-2 text-tint-onyx-1 (hover)text-tint-onyx-1"
          href="#"
          title="Change Light/Dark Theme"
          @click.prevent="toggleDark()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="height-5 width-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="isDark"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>

<style>
  nav {
    height: 45px;
  }
</style>
