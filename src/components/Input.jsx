import "../styles/input.css";

export function Input({ label, name, type, onChange }) {
    return (
        <label>
            {label}
            <input name={name} type={type} onChange={onChange} />
        </label>
    );
}
