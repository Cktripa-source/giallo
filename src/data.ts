import  { Service, Project, Testimonial, Education, Experience, Skill } from './types';
import ServiceImage1 from './assets/Surveying-Instruments.jpg'
import ServiceImage2 from './assets/Survey-Picture-2.jpg'
export const services: Service[] = [
  {
    id: 1,
    title: "Topographic Surveys",
    description: "Precise mapping of terrain features, elevations, and contours for planning and design purposes.",
    icon: "Map",
    features: [
      "High-precision elevation data",
      "Detailed contour mapping",
      "3D terrain visualization",
      "GIS integration capabilities"
    ]
  },
  {
    id: 2,
    title: "Boundary Surveys",
    description: "Establishing property lines and boundaries through research and field measurements.",
    icon: "MapPin",
    features: [
      "Legal boundary determination",
      "Property corner marking",
      "Encroachment identification",
      "Boundary dispute resolution"
    ]
  },
  {
    id: 3,
    title: "Construction Surveys",
    description: "Setting out and verifying positions for construction projects to ensure accurate implementation of designs.",
    icon: "Building",
    features: [
      "Precise layout staking",
      "Construction alignment",
      "Cut and fill calculations",
      "As-built documentation"
    ]
  },
  {
    id: 4,
    title: "Drone Aerial Surveys",
    description: "Using UAV technology to capture high-resolution aerial imagery and 3D data for large areas.",
    icon: "Plane",
    features: [
      "High-resolution orthomosaics",
      "Photogrammetric mapping",
      "Volumetric calculations",
      "Rapid large-area surveys"
    ]
  },
  {
    id: 5,
    title: "GIS Mapping",
    description: "Creating and managing geographic information systems for spatial data analysis and visualization.",
    icon: "Globe",
    features: [
      "Spatial data management",
      "Thematic mapping",
      "Geographic analysis",
      "Custom GIS solutions"
    ]
  },
  {
    id: 6,
    title: "3D Laser Scanning",
    description: "Capturing detailed 3D point clouds of structures and terrain for precise modeling and analysis.",
    icon: "Scan",
    features: [
      "High-density point clouds",
      "3D BIM integration",
      "Deformation monitoring",
      "As-built documentation"
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Urban Development Mapping",
    description: "Comprehensive topographic survey and 3D terrain modeling for a major urban development project covering 50 acres.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Topographic",
    technologies: ["GPS RTK", "Total Station", "LiDAR", "AutoCAD Civil 3D"]
  },
  {
    id: 2,
    title: "Highway Corridor Survey",
    description: "Precision alignment and control network establishment for a 25-mile highway expansion project.",
    image: ServiceImage1,
    category: "Construction",
    technologies: ["GNSS Networks", "Digital Levels", "Trimble Access", "Bentley OpenRoads"]
  },
  {
    id: 3,
    title: "Watershed Analysis",
    description: "Detailed aerial and ground survey of a critical watershed area to support environmental management and flood control.",
    image: ServiceImage2,
    category: "GIS",
    technologies: ["Drone Photogrammetry", "GIS Analysis", "Hydrological Modeling", "ArcGIS Pro"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Project Manager, Urban Developments Ltd",
    content: "Muvunnyi's expertise in topographic surveying was crucial to the success of our downtown revitalization project. His precision and attention to detail saved us both time and resources in the planning phase.",
    avatar:ServiceImage2
  },
  {
    id: 2,
    name: "Robert Chen",
    position: "Chief Engineer, Bridge Construction Co.",
    content: "Working with Muvunnyi on our bridge expansion project was a pleasure. His innovative approach to 3D scanning provided us with invaluable data that helped prevent several potential structural issues.",
    avatar:ServiceImage1
  }
 
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Geomatics Engineering",
    institution: "University of California, Berkeley",
    duration: "2017-2019",
    description: "Specialized in advanced surveying technologies and geospatial data analysis. Thesis on 'Applications of Machine Learning in Topographic Feature Extraction from LiDAR Data'."
  },
  {
    id: 2,
    degree: "Bachelor of Science in Land Surveying",
    institution: "Colorado School of Mines",
    duration: "2013-2017",
    description: "Comprehensive education in fundamental surveying principles, boundary law, geodesy, and mapping technologies. Graduated with honors."
  },
  {
    id: 3,
    degree: "Professional License in Land Surveying",
    institution: "State Board of Licensure",
    duration: "2020",
    description: "Licensed Professional Land Surveyor with authorization to practice in multiple states."
  }
];

export const experience: Experience[] = [
  {
    id: 1,
    position: "Senior Land Surveyor",
    company: "GeoTech Solutions",
    duration: "2020-Present",
    description: "Lead surveyor responsible for managing complex projects and implementing new technologies.",
    responsibilities: [
      "Oversee a team of field technicians and office staff",
      "Implement and train team on advanced surveying technologies",
      "Manage client relationships and project deliverables",
      "Develop quality control protocols for survey data"
    ]
  },
  {
    id: 2,
    position: "Project Surveyor",
    company: "Precision Mapping Inc.",
    duration: "2017-2020",
    description: "Specialized in topographic surveys and 3D laser scanning for infrastructure projects.",
    responsibilities: [
      "Performed and supervised field data collection",
      "Processed and analyzed survey data",
      "Created deliverables including topographic maps and 3D models",
      "Coordinated with engineering teams for design integration"
    ]
  },
  {
    id: 3,
    position: "Survey Technician",
    company: "Turner Engineering Group",
    duration: "2015-2017",
    description: "Part-time position during undergraduate studies, focusing on construction staking and as-built surveys.",
    responsibilities: [
      "Assisted in field data collection using total stations and GPS",
      "Helped process field data and create preliminary drawings",
      "Performed construction staking and layout",
      "Conducted as-built verifications"
    ]
  }
];

export const skills: Skill[] = [
  { name: "GPS/GNSS Surveying", level: 95, category: "Technical" },
  { name: "Total Station Operations", level: 90, category: "Technical" },
  { name: "LiDAR and 3D Laser Scanning", level: 85, category: "Technical" },
  { name: "UAV/Drone Mapping", level: 90, category: "Technical" },
  { name: "AutoCAD Civil 3D", level: 85, category: "Software" },
  { name: "Trimble Business Center", level: 80, category: "Software" },
  { name: "ArcGIS", level: 75, category: "Software" },
  { name: "Pix4D", level: 80, category: "Software" },
  { name: "CloudCompare", level: 70, category: "Software" },
  { name: "Boundary Law", level: 85, category: "Knowledge" },
  { name: "Geodetic Principles", level: 80, category: "Knowledge" },
  { name: "Photogrammetry", level: 75, category: "Knowledge" },
  { name: "Project Management", level: 85, category: "Soft Skills" },
  { name: "Client Communication", level: 90, category: "Soft Skills" },
  { name: "Technical Writing", level: 80, category: "Soft Skills" }
];
  