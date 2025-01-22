export interface Banner {
  bannerImageURL: string;
  bannerTitle: string;
  bannerDescription: string;
  bannerClosedRequests: number;
  bannerSkills: string[];
}

export interface Expert {
  id: string;
  name: string;
  serviceTitle: string;
  serviceDescription: string;
  experience: string;
  hourlyRate: number;
  rating: number;
  reviews: number;
  profileImage: string;
  expertProfilePictureURL: string;
  listOfBanners: Banner[];
}

export const experts: Expert[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    serviceTitle: 'UI/UX Designer',
    serviceDescription: "Hey there! I'm Sarah, specializing in creating intuitive and beautiful digital experiences.",
    experience: '5 years experience',
    hourlyRate: 65,
    rating: 4.9,
    reviews: 124,
    profileImage: 'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    expertProfilePictureURL: 'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    listOfBanners: [
      {
        bannerImageURL: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzaWduJTIwYW5kJTIwcHJvdG90eXBlfGVufDB8fDB8fHww',
        bannerTitle: 'Design and Prototype',
        bannerDescription: 'I have extensive experience in Design and Prototype. I have 56 successfully closed work projects in my arsenal. In 5 years I have accumulated a huge amount of knowledge in this field.',
        bannerClosedRequests: 56,
        bannerSkills: ['Figma', 'Adobe XD', 'Sketch']
      },
      {
        bannerImageURL: 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHJlc2VhcmNofGVufDB8fDB8fHww',
        bannerTitle: 'User Research',
        bannerDescription: 'Specialized in conducting user research and creating data-driven design solutions. Successfully completed 34 research projects.',
        bannerClosedRequests: 34,
        bannerSkills: ['User Testing', 'Analytics', 'Interviews']
      },
      {
        bannerImageURL: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VUklMjBBbmltYXRpb258ZW58MHx8MHx8fDA%3D',
        bannerTitle: 'UI Animation',
        bannerDescription: 'Created engaging and intuitive UI animations for various projects. Improved user engagement by 40% through interactive design elements.',
        bannerClosedRequests: 28,
        bannerSkills: ['After Effects', 'Principle', 'Framer']
      }
    ]
  },
  {
    id: '2',
    name: 'Michael Torres',
    serviceTitle: 'Product Designer',
    serviceDescription: "Product designer with a passion for solving complex problems with simple solutions.",
    experience: '3 years experience',
    hourlyRate: 55,
    rating: 4.7,
    reviews: 89,
    profileImage: '/placeholder.svg?height=400&width=300&text=Michael+Torres',
    expertProfilePictureURL: 'https://plus.unsplash.com/premium_photo-1667520139348-d2faa311b370?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWljaGFlbCUyMFRvcnJlc3xlbnwwfHwwfHx8MA%3D%3D',
    listOfBanners: []
  },
  {
    id: '3',
    name: 'Emma Wilson',
    serviceTitle: 'UX Researcher',
    serviceDescription: "Experienced UX researcher helping companies make data-driven design decisions.",
    experience: '4 years experience',
    hourlyRate: 70,
    rating: 4.8,
    reviews: 156,
    profileImage: '/placeholder.svg?height=400&width=300&text=Emma+Wilson',
    expertProfilePictureURL: 'https://plus.unsplash.com/premium_photo-1661440052048-48f37620b3ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RW1tYSUyMFdpbHNvbnxlbnwwfHwwfHx8MA%3D%3D',
    listOfBanners: [
      {
        bannerImageURL: 'https://images.unsplash.com/photo-1606343647114-3cf38d47ded4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VXNlciUyMFJlc2VhcmNofGVufDB8fDB8fHww',
        bannerTitle: 'User Research',
        bannerDescription: 'Conducted over 100 user interviews and usability tests. Specialized in qualitative and quantitative research methods.',
        bannerClosedRequests: 45,
        bannerSkills: ['User Testing', 'Data Analysis', 'Survey Design']
      }
    ]
  }
];
