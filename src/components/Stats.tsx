import farmer from '../assets/farmer.jpg'
import customer from '../assets/customer.png'

interface StatsCardProps {
    title: string;
    description: string;
    imageSrc: string;
    rotation: string;
  }
  
  const StatsCard = ({ title, description, imageSrc, rotation }: StatsCardProps) => (
    <div className={`bg-white/70 font-cute rounded-lg shadow-lg w-full flex items-center gap-6 px-4 py-8 ${rotation}`}>
      <img src={imageSrc} alt="" className="h-16 w-16" />
      <div>
        <h4 className="text-5xl">{title}</h4>
        <p className="text-slate-700">{description}</p>
      </div>
    </div>
  );
  
  export const StatsGrid = () => {
    const statsData = [
      {
        title: "4.9/5",
        description: "Average Rating Of Food Across Cumming",
        imageSrc: "https://pawsandrelax.netlify.app/assets/staricon-DMVaXg0J.png",
        rotation: "md:-rotate-1"
      },
      {
        title: "50+",
        description: "Trusted farmers across the state",
        imageSrc: farmer,
        rotation: "md:rotate-1"
      },
      {
        title: "98%",
        description: "of customers said they would be coming back",
        imageSrc: customer,
        rotation: "md:-rotate-1"
      }
    ];
  
    return (
      <div className="w-full max-w-[62rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            description={stat.description}
            imageSrc={stat.imageSrc}
            rotation={stat.rotation}
          />
        ))}
      </div>
    );
  };