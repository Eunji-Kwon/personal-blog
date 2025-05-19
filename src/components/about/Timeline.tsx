const timeline = [
  {
    date: '2024',
    icon: '🎉',
    description: 'Started my personal blog project.'
  },
  {
    date: '2022',
    icon: '💼',
    description: 'Joined Company XYZ as a Frontend Developer.'
  },
  {
    date: '2020',
    icon: '🎓',
    description: 'Graduated from ABC University with a degree in Computer Science.'
  }
];

export default function Timeline() {
  return (
    <ol className="relative border-l border-gray-300 max-w-xl mx-auto">
      {timeline.map((item, idx) => (
        <li key={idx} className="mb-10 ml-6">
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white text-lg">
            {item.icon}
          </span>
          <h3 className="font-semibold text-gray-900">{item.date}</h3>
          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        </li>
      ))}
    </ol>
  );
} 