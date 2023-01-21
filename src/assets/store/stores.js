import {createStore} from "vuex";
import moduleCommon from "@/assets/store/modules/common"
import moduleHeader from "@/assets/store/modules/header"
import moduleHome from "@/assets/store/modules/home"

export default createStore({
    modules: {
        moduleCommon, moduleHeader, moduleHome
    }
})


