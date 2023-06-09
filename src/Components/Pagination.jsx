import { Link } from "react-router-dom";


function Pagination({ count, page }) {

    const btns = new Array(count).fill(0).map((el, index) => { return (index + 1); });
    return (
        <div className="pagination">{
            !((page - 1) === 0) && <Link to={'/pages/' + (page - 1)}>
                <button>prew</button>
            </Link>}

            {
                btns.map((el, index) => {
                    return (
                        <Link to={'/pages/' + el} key={index}>
                            <button className={(page === el) ? 'btn-active' : ''}>{el}</button>
                        </Link>);

                })}
            {
                !((page + 1) >= count) && <Link to={'/pages/' + (page + 1)}>
                    <button>next</button>
                </Link>}
        </div>
    )
}

export default Pagination;
