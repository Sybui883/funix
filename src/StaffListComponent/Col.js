const btn1 = {
    width: '95%',
}
function btn() {
    document.getElementById('content');
}

function Col() {
    return (
        <div id="col">
        <button onclick = {(style={btn1})}>1-Col</button>
        <button>2-Col</button>
        <button>3-Col</button>
        </div>
    )

}
export default Col;