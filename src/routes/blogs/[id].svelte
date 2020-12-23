    
<script context="module">
    import { BlogStore } from "./BlogStore";
    export async function preload(page, session) {
        const { id } = page.params;
        const blog = BlogStore.getBlog(id);
        return {blog};
    }
  </script>
  
  <script>
    export let blog;
  </script>

 <div class="blog">
    <h2>{ blog.title }</h2>
     <p>{ blog.details }</p>
 </div>
