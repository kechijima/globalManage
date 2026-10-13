<template>
  <div class="border border-gray-200 rounded-xl overflow-hidden">
    <!-- ツールバー -->
    <div v-if="editor" class="flex flex-wrap items-center gap-1 px-2 py-2 border-b border-gray-100 bg-gray-50">
      <button type="button" @click="editor.chain().focus().toggleBold().run()" title="太字"
        class="w-9 h-9 rounded-lg transition flex items-center justify-center"
        :class="editor.isActive('bold') ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-200'">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4h6.5a4 4 0 013 6.62A4.25 4.25 0 0114.5 19H6V4zm3 2.5v4.5h3.5a2.25 2.25 0 000-4.5H9zm0 7v4.5h4a2.25 2.25 0 000-4.5H9z" />
        </svg>
      </button>
      <button type="button" @click="editor.chain().focus().toggleItalic().run()" title="斜体"
        class="w-9 h-9 rounded-lg transition flex items-center justify-center"
        :class="editor.isActive('italic') ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-200'">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 4h9v2h-3.2l-3.6 12H15v2H6v-2h3.2l3.6-12H10V4z" />
        </svg>
      </button>
      <div class="w-px h-6 bg-gray-200 mx-1"></div>
      <button type="button" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" title="見出し"
        class="h-9 px-3 rounded-lg text-sm font-bold transition flex items-center justify-center"
        :class="editor.isActive('heading', { level: 2 }) ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-200'">
        見出し
      </button>
      <button type="button" @click="editor.chain().focus().toggleBulletList().run()" title="箇条書き"
        class="w-9 h-9 rounded-lg transition flex items-center justify-center"
        :class="editor.isActive('bulletList') ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-200'">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h13M8 12h13M8 18h13" />
          <circle cx="3.5" cy="6" r="1.4" fill="currentColor" />
          <circle cx="3.5" cy="12" r="1.4" fill="currentColor" />
          <circle cx="3.5" cy="18" r="1.4" fill="currentColor" />
        </svg>
      </button>
      <button type="button" @click="setLink" title="リンク"
        class="w-9 h-9 rounded-lg transition flex items-center justify-center"
        :class="editor.isActive('link') ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-200'">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" />
        </svg>
      </button>
      <div class="w-px h-6 bg-gray-200 mx-1"></div>
      <label title="画像を追加"
        class="w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-200 transition flex items-center justify-center cursor-pointer"
        :class="uploading ? 'opacity-50 pointer-events-none' : ''">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 8h16M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
        <input type="file" accept="image/*" class="hidden" @change="handleImageUpload" />
      </label>
      <span v-if="uploading" class="text-xs text-gray-400 ml-1">アップロード中...</span>
    </div>

    <!-- 本文 -->
    <EditorContent :editor="editor"
      class="rich-editor-content prose prose-sm max-w-none px-4 py-3 min-h-[160px] text-sm text-gray-800 cursor-text"
      @click="editor?.chain().focus().run()" />
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import ImageExtension from '@tiptap/extension-image'
import LinkExtension from '@tiptap/extension-link'
import PlaceholderExtension from '@tiptap/extension-placeholder'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '~/plugins/firebase.client'

const props = withDefaults(defineProps<{ storagePath: string; placeholder?: string }>(), {
  placeholder: '内容を入力してください',
})
const modelValue = defineModel<string>({ default: '' })

const editor = useEditor({
  content: modelValue.value,
  extensions: [
    StarterKit,
    ImageExtension,
    LinkExtension.configure({ openOnClick: false }),
    PlaceholderExtension.configure({ placeholder: props.placeholder }),
  ],
  editorProps: {
    attributes: { class: 'focus:outline-none' },
  },
  onUpdate: ({ editor: e }) => {
    modelValue.value = e.getHTML()
  },
})

watch(modelValue, (val) => {
  if (editor.value && val !== editor.value.getHTML()) {
    editor.value.commands.setContent(val, false)
  }
})

function setLink() {
  if (!editor.value) return
  const previousUrl = editor.value.getAttributes('link').href as string | undefined
  const url = window.prompt('リンク先URL', previousUrl ?? 'https://')
  if (url === null) return
  if (url === '') {
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run()
    return
  }
  editor.value.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
}

const uploading = ref(false)

async function handleImageUpload(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file || !editor.value) return
  uploading.value = true
  try {
    const fileRef = storageRef(storage, `${props.storagePath}/${Date.now()}_${file.name}`)
    await uploadBytes(fileRef, file)
    const url = await getDownloadURL(fileRef)
    editor.value.chain().focus().setImage({ src: url }).run()
  } finally {
    uploading.value = false
    ;(e.target as HTMLInputElement).value = ''
  }
}

onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>

<style scoped>
.rich-editor-content :deep(.ProseMirror) {
  min-height: 140px;
  outline: none;
}
.rich-editor-content :deep(.ProseMirror p.is-editor-empty:first-child::before) {
  content: attr(data-placeholder);
  float: left;
  color: #9ca3af;
  pointer-events: none;
  height: 0;
}
.rich-editor-content :deep(img) {
  border-radius: 0.75rem;
  max-width: 100%;
}
.rich-editor-content :deep(a) {
  color: #2680eb;
  text-decoration: underline;
}
</style>
