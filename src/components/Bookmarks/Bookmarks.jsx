
import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookMarks}) => {
    return (
        <div className="w-1/3 bg-gray-100 ml-4">
            <h2 className="text-4xl bg-gray-300 text-center ml-4">Bookmarks <span>{bookMarks.length}</span></h2>
            {
                bookMarks.map(bookmark=><Bookmark  key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        
        </div>
    );
};

Bookmarks.propTypes={
    bookMarks:PropTypes.array
}
export default Bookmarks;