import PropTypes from 'prop-types';
import { LuBookmark  } from 'react-icons/lu';


const Blog = ({blog,handleAddToBookmarks}) => {
  const {title,cover,author,author_img,posted_date,reading_time,hashtags}=blog
    return (
        <div className='mb-4'>
            <img className='mb-4' src={cover}alt="" />
            <div className='flex justify-between'>
                <div className='flex mb-4'>
                     <img className='w-14' src={author_img} />
                     <div className='ml-4'>
                        <h2 className='text-2xl'>{author}</h2>
                        <h2 className="text-2xl">{posted_date}</h2>
                     </div>
                </div>
                <div className='flex items-center'>
                    <h2 className="text-2xl">{reading_time} min read</h2>
                    <button 
                    onClick={()=>handleAddToBookmarks(blog)}
                    className='text-2xl ml-2 text-red-600'>
                        <LuBookmark></LuBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) =><span className='ml-4' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmarks:PropTypes.func
}
export default Blog;