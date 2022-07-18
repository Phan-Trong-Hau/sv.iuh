import { Link } from 'react-router-dom';

const HomeItem = (props) => {
    return (
        <>
            <Link to={props.path}>
                <div className="feature-item">
                    <div className="feature-icon">
                        <i className={props.icon}></i>
                    </div>
                    <div className="feature-title">{props.title}</div>
                </div>
            </Link>
        </>
    );
};

export default HomeItem;