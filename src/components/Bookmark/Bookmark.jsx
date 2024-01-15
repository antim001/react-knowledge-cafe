import PropTypes from "prop-types"

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div>
            <h3 className="text-3xl bg-slate-200 p-4 m-4">{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object
}
export default Bookmark;