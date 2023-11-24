const HomeModal = () => import("../components/HomeModal");
const FolderClose = () => import("../components/FolderClose");
const FolderOpen = () => import("../components/FolderOpen");

export default {
  name: "IndexScreen",
  components: {
    HomeModal,
    FolderClose,
    FolderOpen
  },
  data() {
    return {
      isHomeOpen: true
    };
  },
  methods: {
    openKCloseHome: function () {
      this.isHomeOpen = !this.isHomeOpen;
    }
  },
};
