import axios from "axios";
import { ref } from "vue";

export default function usePosts() {
  const posts = ref([]);
  const getPosts = async (page) => {
    axios.get("products?page=" + page).then((resposne) => {
      posts.value = resposne.data;
    });
  };
  return { posts, getPosts };
}
