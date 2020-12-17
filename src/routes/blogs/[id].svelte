<script context="module">
    // console.log('module script');
    export async function preload(page, session) {
        const { id } = page.params;

        const res = await this.fetch(`blogs/${id}.json`);

        if (res.status === 200) {
            const blog = await res.json();
            return { blog }
        }

        if (res.status === 404) {
            const { error } = await res.json();
            this.error(404, error);
        }
    }
  </script>

  <script>
      export let blog;
  </script>

 <div class="blog">
     <h2>{ blog.title }</h2>
     <!-- <p>Date { blog.date }</p> -->
     <p>{ blog.details }</p>
 </div>
