
import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookMarks,readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-100 ml-4">
            <h2 className="text-4xl text-center  bg-gray-300 mb-2">Reading time:{readingTime}</h2>
            <h2 className="text-4xl text-center ml-4 ">Bookmarks <span>{bookMarks.length}</span></h2>
            {
                bookMarks.map(bookmark=><Bookmark  key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        
        </div>
    );
};

Bookmarks.propTypes={
    bookMarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;