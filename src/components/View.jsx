import "../styles/view.css";

export function View({ name, email, phone, school, position, dob }) {
    return (
        <div id="resume">
            <h1>Personal Details</h1>
            <div id="p">
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
                <h2>Phone: {phone}</h2>
            </div>

            <h1>Afilliates</h1>
            <div id="a">
                <h2>School: {school}</h2>
                <h2>Position: {position}</h2>
                <h2>Birth: {dob}</h2>
            </div>
        </div>
    );
}
