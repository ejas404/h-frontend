export function getAdminHeaders() {
    const jwtToken = sessionStorage.getItem('admin-token');
    const headers: { Authorization: string } | {} = jwtToken ? { Authorization: `${jwtToken}` } : {};
    return headers
}


export function getStudentHeaders() {
    const jwtToken = sessionStorage.getItem('student-token');
    const headers: { Authorization: string } | {} = jwtToken ? { Authorization: `${jwtToken}` } : {};
    return headers
}

export function getTutorHeaders() {
    const jwtToken = sessionStorage.getItem('tutor-token');
    const headers: { Authorization: string } | {} = jwtToken ? { Authorization: `${jwtToken}` } : {};
    return headers
}