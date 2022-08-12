export const goToBack = (navigate) => {
    navigate(-1)
}
export const criarViagens = (navigate) => {
    navigate("/admin/trips/create")
}
export const goToDetails = (navigate) => {
    navigate("/admin/trips/:id")
}
export const login = (navigate) => {
    navigate("/login")
}
export const goToListaViagens = (navigate) => {
    navigate("/trips/list")
}

export const goToAdminPage = (navigate) => {
    navigate("/admin/trips/list")
}
export const goToApplicationForm = (navigate) => {
    navigate("/trips/application")
}