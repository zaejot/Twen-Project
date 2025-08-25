export function isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null
}
export function loginMock(name = 'User', email = 'user@example.com') {
    localStorage.setItem('user', JSON.stringify({ name, email }))
}
export function logout() {
    localStorage.removeItem('user')
}
export function currentUser() {
    const v = localStorage.getItem('user'); return v ? JSON.parse(v) : null
}
