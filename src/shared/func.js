import { SITE_TRADE_MARK, SITE_NAME } from "../server/utils/Constants"

export const nullOrEmpty = (input) => {
    return !input || input.length == 0
}
export const mkTitle = (title) => {
    return title + " - " +SITE_NAME
}
export const mkDescription = (description) => {
    return SITE_TRADE_MARK+" "+description+" | "+SITE_NAME
}
export const emptyInitial = () => {
    const headData = {
        title: "",
        description: "",
        keywords: "",
        canonical: "",
        og: {
            title: "",
            description: "",
            url: "",
            image_type: "",
            image: ""
        }
    }
    const bodyData = {

    }
    return {
        headData: headData,
        bodyData: bodyData
    }
}