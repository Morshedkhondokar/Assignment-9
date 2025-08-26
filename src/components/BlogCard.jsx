const BlogCard = ({ blog }) => {
  const { title, desc, image, author, date ,animation} = blog;

  return (
    <div>
      <div
        data-aos={animation}
        data-aos-duration="2000"
        className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{desc}</p>
        <div className="text-sm text-gray-500">
          <span>By {author}</span> • <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
