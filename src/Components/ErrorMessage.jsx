function ErrorMessage({ err }) {
    console.log(err);

    return (
        <div className="container">
            <h2>{err}</h2>

        </div>
    )
}

export default ErrorMessage;