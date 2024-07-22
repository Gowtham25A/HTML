const studentData = [
    {
        name: "Arjun Kumar",
        registerNumber: "1231",
        english: 85,
        tamil: 78,
        science: 90,
        socialScience: 88,
        mathematics: 92,
        dob: "2005-04-15"
    },
    {
        name: "Priya Sharma",
        registerNumber: "1232",
        english: 92,
        tamil: 81,
        science: 87,
        socialScience: 85,
        mathematics: 89,
        dob: "2005-08-22"
    },
    {
        name: "Rahul Nair",
        registerNumber: "1233",
        english: 78,
        tamil: 88,
        science: 82,
        socialScience: 79,
        mathematics: 91,
        dob: "2005-11-05"
    },
    {
        name: "Meera Singh",
        registerNumber: "1234",
        english: 80,
        tamil: 85,
        science: 89,
        socialScience: 90,
        mathematics: 87,
        dob: "2005-07-19"
    },
    {
        name: "Varun Iyer",
        registerNumber: "1235",
        english: 88,
        tamil: 79,
        science: 86,
        socialScience: 84,
        mathematics: 90,
        dob: "2005-02-10"
    },
    {
        name: "Anjali Patel",
        registerNumber: "1236",
        english: 90,
        tamil: 84,
        science: 85,
        socialScience: 87,
        mathematics: 92,
        dob: "2005-12-30"
    },
    {
        name: "Siddharth Gupta",
        registerNumber: "1237",
        english: 86,
        tamil: 82,
        science: 88,
        socialScience: 86,
        mathematics: 89,
        dob: "2005-06-25"
    },
    {
        name: "Kavya Reddy",
        registerNumber: "1238",
        english: 91,
        tamil: 80,
        science: 87,
        socialScience: 89,
        mathematics: 85,
        dob: "2005-09-11"
    },
    {
        name: "Rohan Joshi",
        registerNumber: "1239",
        english: 84,
        tamil: 83,
        science: 90,
        socialScience: 88,
        mathematics: 87,
        dob: "2005-03-29"
    },
    {
        name: "Sneha Pillai",
        registerNumber: "1240",
        english: 89,
        tamil: 86,
        science: 91,
        socialScience: 87,
        mathematics: 90,
        dob: "2005-01-17"
    }
];

document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const rollNo = document.getElementById('rollNo').value;
    const dob = document.getElementById('dob').value;

    const student = studentData.find(student => student.registerNumber === rollNo && student.dob === dob);

    if (student) {
        const passOrFail = (mark) => mark >= 35 ? 'Pass' : 'Fail';

        document.getElementById('result').innerHTML = `
            <h3>Result for ${student.name}</h3>
            <table>
                <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>English</td>
                    <td>${student.english}</td>
                    <td>${passOrFail(student.english)}</td>
                </tr>
                <tr>
                    <td>Tamil</td>
                    <td>${student.tamil}</td>
                    <td>${passOrFail(student.tamil)}</td>
                </tr>
                <tr>
                    <td>Science</td>
                    <td>${student.science}</td>
                    <td>${passOrFail(student.science)}</td>
                </tr>
                <tr>
                    <td>Social Science</td>
                    <td>${student.socialScience}</td>
                    <td>${passOrFail(student.socialScience)}</td>
                </tr>
                <tr>
                    <td>Mathematics</td>
                    <td>${student.mathematics}</td>
                    <td>${passOrFail(student.mathematics)}</td>
                </tr>
            </table>
        `;
    } else {
        document.getElementById('result').innerHTML = '<p>Student not found. Please check the Roll Number and Date of Birth.</p>';
    }
});