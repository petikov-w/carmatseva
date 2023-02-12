import {createStore} from "vuex";
import moduleCommon from "@/assets/store/modules/common"
import moduleHeader from "@/assets/store/modules/header"
import moduleHome from "@/assets/store/modules/home"
import moduleCards from "@/assets/store/modules/cards"

export default createStore({
    modules: {
        moduleCommon, moduleHeader, moduleHome, moduleCards
    }
})


