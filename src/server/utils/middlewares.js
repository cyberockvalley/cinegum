export const auth = (req, res, next) => {
    res.locals.user = {
        id: 1, 
        firstname: "Jinmi", 
        lastname: "Adegoke"
    }
    next()
}