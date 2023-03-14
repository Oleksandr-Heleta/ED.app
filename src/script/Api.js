const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmY3N2ZiMi01NGIyLTQ2NzEtYjRjNy1jZjNkNDUzNDEwODAiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3Mzg5MzcsImV4cCI6MTY3OTYzODkzN30.WgrjRPzDCLlDcUPQ5cNgCIa3zstxuOzOP-oujEo2rNw';
const url = 'http://api.wisey.app/api/v1/core/preview-courses';

const getCourses = async function () {
    let courses = await fetch(url + '?token=' + token);
    return await courses;
}

export default getCourses;