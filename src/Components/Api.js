const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmM2NhZTA3Zi1jNTgxLTRjNDYtODlhNi0yYjk5MTlmMzk1OGQiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4NjI2MzIsImV4cCI6MTY3OTc2MjYzMn0.xMG87cL1Tz8Z-0Aps1zEYaH_x7z9XH2h19Is_NRxU6M';
const url = 'http://api.wisey.app/api/v1/core/preview-courses';

const getCourses = async function () {
    try {
        let response = await fetch(url + '?token=' + token, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/ json'
            }
        })
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }

}

const getCourse = async function (courseId) {
    try {
        let response = await fetch(url + '/' + courseId + '?token=' + token, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/ json'
            }
        })
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }

}

export { getCourses, getCourse };
