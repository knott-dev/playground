<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { useStorage } from '@vueuse/core'
  import Split from 'split.js'

  import { StorageName, generateHTML, useDarkGlobal } from '../utils'
  import MonacoEditor from './MonacoEditor.vue'
  import Tabs from './Tabs.vue'

  const iframe = ref<HTMLIFrameElement>()

  const items = ref([
    { text: 'HTML', alt: 'index.html', value: 'html' },
    { text: 'JS', alt: 'app.js', value: 'javascript' },
    { text: 'CSS', alt: 'style.css', value: 'css' },
  ])

  const currentTab = useStorage(StorageName.ACTIVE_TAB, items.value[0].value)

  const isDark = useDarkGlobal()

  watch(isDark, (value) => { // TODO:
    iframe.value?.contentWindow?.postMessage(
      `${value ? '1' : '0'}`,
      '*',
    )
  })

  const onChange = (payload: Record<string, any>) => {
    iframe.value!.srcdoc = generateHTML(payload, isDark.value)
  }

  onMounted(() => {
    Split(['#split-0', 'iframe'])
  })
</script>

<template>
  <main class="border-t-2 border-tint-onyx-5">
    <div class="flex flex-row height-full">
    
      <div 
        class="width-full"
        id="split-0"
      >
      
        <Tabs 
          v-model="currentTab" 
          :items="items" 
        />
        
        <MonacoEditor 
          :active-tab="currentTab" 
          @change="onChange" 
        />
        
      </div>
      
      <iframe
        ref="iframe"
        class="height-full width-full"
        sandbox="allow-scripts"
        frameBorder="0"
      />
      
    </div>
  </main>
</template>

<style>
  main {
    height: 100vh;
  }

  .gutter {
    background-color: #ebebeb;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .gutter.gutter-horizontal {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
    cursor: col-resize;
  }
</style>
