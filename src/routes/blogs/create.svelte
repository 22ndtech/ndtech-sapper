<script>
    import { goto } from '@sapper/app';
import { BlogStore } from './BlogStore';

    let title;
    let date;
    let details;

    const handleSubmit = async () => {
      if (title && date && details) {
        const res = await fetch('blogs.json', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, date, details })
        });
        const updatedblogs = await res.json();
        goto('blogs');
      }
    }

const handleAdd = async () => {
  BlogStore.addBlog({title, date, details});
  goto('blogs');
}
  </script>
  
  <style>
    h2{
      text-align: center;
    }
    form {
      max-width: 360px;
      margin: 40px auto;
      text-align: center;
    }
    input, textarea {
      display: block;
      width: 100%;
      padding: 10px;
      font-family: arial;
      margin: 10px auto;
      border: 1px solid #eee;
      border-radius: 8px;
    }
  </style>
  
  <h2>Add a New Blog</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="blog title" bind:value={title} required>
    <!-- <input type="number" placeholder="date" bind:value={date} required> -->
    <textarea placeholder="blog details" bind:value={details} required></textarea>
    <button class="btn" on:click={() => handleAdd()}>Add new blogg</button>
  </form>
  