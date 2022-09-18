<script setup lang="ts">
  interface Item {
    text: string
    alt: string
    value: string
  }

  const props = defineProps<{
    modelValue: string
    items: Item[]
  }>()
  const emit = defineEmits<(e: 'update:modelValue', tab: string) => void>()
  
  const resetlocalStorageData = () => {
    localStorage.clear();
    window.location.reload();
  }
</script>

<template>
  <div class="padding-1 width-full border-b-2 border-tint-onyx-5 text-sm flex justify-between items-center height-auto overflow-x-auto scrollbar bar-sm track-tint-onyx-2 thumb-rad-md thumb-tint-onyx-5 thumb-hover-tint-onyx-3 select-none">
    <div class="flex justify-start items-center">
      <button
        v-for="item in items"
        :key="item.value"
        :class="props.modelValue === item.value ? 'flex-grow-0 flex-shrink-0 margin-r-1 padding-1 inline-block width-20 text-center text-white font-semibold bg-tint-teal-1 curve-border-md cursor-pointer transition duration-200 ease' : 'flex-grow-0 flex-shrink-0  margin-r-1 padding-1 inline-block width-20 text-center font-semibold text-tint-onyx-1 bg-tint-onyx-5 (hover)text-shade-onyx-1 (hover)bg-tint-onyx-4 curve-border-md cursor-pointer transition duration-200 ease'"
        @click.prevent="emit('update:modelValue', item.value)">
        <div>
          {{ item.text }}
        </div>
        <div :class="props.modelValue === item.value ? 'text-white text-xs font-light' : 'text-xs font-light'">
          {{ item.alt }}
        </div>
      </button>
    </div>
    <div class="(group) flex justify-center items-center">
      <svg class="(group-hover)opacity-100 opacity-0 margin-r-2 inline-block height-4 width-auto fill-current text-tint-onyx-4 (group-hover)text-tint-lava-1 transition duration-500 ease-in-out" version="1.1" viewBox="0 0 136.73 124.94" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(166.73 -60.435)">
      <path d="m-145.94 185.11c-6.5825-0.85184-12.791-4.8014-16.774-10.671-2.9947-4.4131-4.5157-10.657-3.8719-15.896 0.3392-2.7601 1.3276-6.2057 2.3813-8.3011 0.92203-1.8336 44.258-76.907 45.452-78.74 3.3509-5.1421 8.5457-8.9247 14.372-10.465 3.0636-0.81 8.9896-0.80693 12.032 0.0062 5.7202 1.5291 10.753 5.0626 13.955 9.7971 1.3371 1.9773 44.556 76.792 45.868 79.402 3.284 6.5291 3.3668 14.164 0.22636 20.865-1.3322 2.8428-2.7765 4.9408-4.8105 6.9876-3.9253 3.9501-8.5266 6.2517-14.028 7.0168-2.5036 0.34822-92.111 0.34704-94.802-1e-3zm93.429-10.944c8.5823-1.201 13.951-10.857 10.328-18.577-1.0424-2.2217-44.527-77.505-45.676-79.076-1.9265-2.6358-5.113-4.4962-8.635-5.0413-2.6621-0.41201-5.2526 0.01839-7.8094 1.2975-3.8063 1.9042-2.5872-0.0069-27.283 42.769-12.316 21.332-22.69 39.435-23.054 40.229-2.8508 6.2271 0.0382 14.085 6.3146 17.176 1.1027 0.54303 2.6723 1.0702 3.5715 1.1994 2.2884 0.32901 89.899 0.35118 92.242 0.0233zm-48.683-12.534c-4.2732-1.9408-5.4437-7.5684-2.2983-11.05 1.4896-1.6488 2.7739-2.1998 5.1273-2.1998 1.5421 0 2.2581 0.13387 3.1 0.57962 1.2934 0.68479 2.6925 2.2031 3.242 3.5183 0.54971 1.3156 0.53424 4.1967-0.0296 5.515-1.437 3.3596-5.8693 5.123-9.1414 3.6369zm0.47128-18.903c-1.0204-0.50847-1.5814-1.0154-2.0965-1.8944-0.69355-1.1835-0.71187-1.3488-1.323-11.939-0.34084-5.9064-0.80321-13.516-1.0275-16.911-0.45399-6.8717-0.32088-8.1417 1.0743-10.25 1.3033-1.9694 3.2616-2.9649 5.8146-2.9559 3.8255 0.0136 6.53 2.6677 6.7955 6.669 0.0638 0.961-0.1965 6.7404-0.57836 12.843-0.38186 6.1027-0.76327 13.081-0.84758 15.507-0.188 5.4104-0.52632 6.8114-1.957 8.1039-1.8098 1.635-3.698 1.9018-5.8546 0.8271z" stroke-width=".26737"/>
      </g>
      </svg>
    <button 
      class="flex-grow-0 flex-shrink-0 margin-x-1 padding-1 inline-block width-12 text-xs text-center font-semibold text-tint-onyx-2 (group-hover)text-white bg-tint-onyx-5 (group-hover)bg-tint-lava-4 curve-border-md cursor-pointer transition duration-200 ease"
      @click.prevent="resetlocalStorageData()">
      Reset
    </button>
    </div>
  </div>
</template>
