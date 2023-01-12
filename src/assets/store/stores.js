import {createStore} from "vuex";
import moduleCommon from "@/assets/store/modules/common"
import moduleHeader from "@/assets/store/modules/header"

export default createStore({
    modules: {
        moduleCommon, moduleHeader
    }
})


