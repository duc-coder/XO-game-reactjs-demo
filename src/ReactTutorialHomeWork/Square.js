export default function Square (props) {
        return (
            <button className="square my-3 mx-2" style={{width: "50px", height: "50px", fontSize: "20px"}} onClick={() => props.onClick()}>
            {props.value}
            </button>
        );
    }