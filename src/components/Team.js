const people = [
  {
    name: "Er. Rahul Dalal",
    role: "Civil Engineer",
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/4042/4042356.png",
  },
  {
    name: "Ar. Uttam Rathee",
    role: "Associate Architect",
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/4042/4042356.png",
  },
  {
    name: "Chintu Dabas",
    role: "3D Visualizer",
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/4042/4042356.png",
  },
  {
    name: "Er. Himmat Yadav",
    role: "Project Manager",
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/4042/4042356.png",
  },
  {
    name: "Er. Yash Saroha",
    role: "Structure Engineer",
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/4042/4042356.png",
  },
  {
    name: "Lovekesh Sheoran",
    role: "Site Supervisor",
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/4042/4042356.png",
  },
  {
    name: "Nilsa Dawar",
    role: "HR Consultant",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
  },
  {
    name: "Tushar Gulia",
    role: "Material Acquisition",
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/4042/4042356.png",
  },
  {
    name: "Sunaina Choudhary",
    role: "Art and Decor Consultant",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
  },
  {
    name: "Vipin Dalal",
    role: "Financial Consultant   ",
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/4042/4042356.png",
  },
];

export default function Team() {
  return (
    <div className="bg-white py-10 mx-10">
        <ul
          role="list"
          className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                  <p>
                    B.tech Civil from DTU, Delhi. Specialises in Construction
                    Services and Site Management.
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
}
