import PropTypes from 'prop-types';

const Blog = ({blog}) => {
  const {title,cover,author,author_img,posted_date,reading_time}=blog
    return (
        <div>
            <img src={cover}alt="" />
            <div className='flex justify-between'>
                <div>
                     <img className='w-14' src={author_img} />
                     <div>
                        <h2 className='text-2xl'>{author}</h2>
                        <h2 className="text-2xl">{posted_date}</h2>
                     </div>
                </div>
                <div>
                    <h2 className="text-2xl">{reading_time} min read</h2>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;