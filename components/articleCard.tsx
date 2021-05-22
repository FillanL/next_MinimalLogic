import Image from "next/image"
const articleCard = ({article}) => {
  return (
    <div>
      <Image src="/public/images/profile.jpg" width={`100`} height={`100`} alt={`image title`} />
      <div>
          <h3>
              title
          </h3>
          <p>
              snippet of content
          </p>
          <span>
              5 min read
          </span>
          share link
      </div>
    </div>
  );
};

export default articleCard;
