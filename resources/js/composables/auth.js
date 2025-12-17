import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Swal from "sweetalert2";

export default function useAuth() {
    const user = ref(false);
    const is_loading = ref(false);
    const store = useStore();
    const error = ref("");
    const router = useRouter();

    const login = async (data) => {
        is_loading.value = true;
        error.value = "";
        try {
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/api/login", data)
             .then((response) => {
                if
             })
        } catch (err) {

        }
    }
}