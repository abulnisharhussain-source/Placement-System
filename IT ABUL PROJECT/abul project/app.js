// ===== SAMPLE DATA =====
const SEED_DATA = {
  students: [
    // ===== CSE =====
    { id: 1, name: 'Aarav Sharma', email: 'aarav@college.edu', dept: 'CSE', branch: 'Computer Science', cgpa: 8.9, backlogs: 0, skills: 'Java, Python, React, Spring Boot', status: 'Placed', company: 'Google India', salary: '32 LPA', phone: '9876543210', year: 2026, rollNo: 'CS22001', batch: '2022-2026', tenth: 92, twelfth: 88, dob: '2004-05-15', linkedin: 'linkedin.com/in/aaravsharma' },
    { id: 4, name: 'Sneha Reddy', email: 'sneha@college.edu', dept: 'CSE', branch: 'AI & ML', cgpa: 8.5, backlogs: 0, skills: 'Python, ML, TensorFlow, PyTorch', status: 'Placed', company: 'Microsoft India', salary: '28 LPA', phone: '9876543213', year: 2026, rollNo: 'CS22004', batch: '2022-2026', tenth: 90, twelfth: 87, dob: '2004-08-30', linkedin: 'linkedin.com/in/snehareddy' },
    { id: 6, name: 'Ananya Iyer', email: 'ananya@college.edu', dept: 'CSE', branch: 'Software Eng', cgpa: 9.5, backlogs: 0, skills: 'React, TypeScript, AWS, GraphQL', status: 'Placed', company: 'Amazon India', salary: '30 LPA', phone: '9876543215', year: 2026, rollNo: 'CS22006', batch: '2022-2026', tenth: 97, twelfth: 94, dob: '2004-01-12', linkedin: 'linkedin.com/in/ananyaiyer' },
    { id: 9, name: 'Arjun Das', email: 'arjun@college.edu', dept: 'CSE', branch: 'Computer Science', cgpa: 7.6, backlogs: 0, skills: 'Flutter, Dart, Firebase, Android', status: 'Unplaced', company: '', salary: '—', phone: '9876543218', year: 2026, rollNo: 'CS22009', batch: '2022-2026', tenth: 82, twelfth: 79, dob: '2004-07-18', linkedin: '' },
    { id: 11, name: 'Rahul Verma', email: 'rahul@college.edu', dept: 'CSE', branch: 'Cybersecurity', cgpa: 8.2, backlogs: 0, skills: 'Ethical Hacking, Kali Linux, Python, CTF', status: 'Placed', company: 'Deloitte India', salary: '14 LPA', phone: '9876543220', year: 2026, rollNo: 'CS22011', batch: '2022-2026', tenth: 86, twelfth: 83, dob: '2004-09-05', linkedin: 'linkedin.com/in/rahulverma' },
    { id: 12, name: 'Pooja Krishnan', email: 'pooja@college.edu', dept: 'CSE', branch: 'Data Science', cgpa: 9.1, backlogs: 0, skills: 'R, Python, SQL, Tableau, Spark', status: 'Placed', company: 'Flipkart', salary: '24 LPA', phone: '9876543221', year: 2026, rollNo: 'CS22012', batch: '2022-2026', tenth: 93, twelfth: 90, dob: '2004-02-28', linkedin: 'linkedin.com/in/poojakrishnan' },
    { id: 13, name: 'Nitin Agarwal', email: 'nitin@college.edu', dept: 'CSE', branch: 'Computer Science', cgpa: 7.3, backlogs: 1, skills: 'C++, DSA, Competitive Programming', status: 'Unplaced', company: '', salary: '—', phone: '9876543222', year: 2026, rollNo: 'CS22013', batch: '2022-2026', tenth: 80, twelfth: 76, dob: '2004-10-20', linkedin: '' },
    { id: 14, name: 'Ishita Bose', email: 'ishita@college.edu', dept: 'CSE', branch: 'AI & ML', cgpa: 8.8, backlogs: 0, skills: 'NLP, LLMs, Hugging Face, Python', status: 'Placed', company: 'Adobe India', salary: '30 LPA', phone: '9876543223', year: 2026, rollNo: 'CS22014', batch: '2022-2026', tenth: 91, twelfth: 88, dob: '2004-04-14', linkedin: 'linkedin.com/in/ishitabose' },
    { id: 15, name: 'Siddharth Menon', email: 'siddharth@college.edu', dept: 'CSE', branch: 'Software Eng', cgpa: 7.9, backlogs: 0, skills: 'Node.js, Express, MongoDB, Docker', status: 'Placed', company: 'Razorpay', salary: '22 LPA', phone: '9876543224', year: 2026, rollNo: 'CS22015', batch: '2022-2026', tenth: 84, twelfth: 81, dob: '2004-06-03', linkedin: 'linkedin.com/in/siddharthmenon' },
    { id: 16, name: 'Kavya Pillai', email: 'kavya@college.edu', dept: 'CSE', branch: 'Computer Science', cgpa: 8.0, backlogs: 0, skills: 'Java, Kubernetes, CI/CD, Jenkins', status: 'Placed', company: 'IBM India', salary: '13 LPA', phone: '9876543225', year: 2026, rollNo: 'CS22016', batch: '2022-2026', tenth: 87, twelfth: 84, dob: '2004-12-10', linkedin: 'linkedin.com/in/kavyapillai' },
    // ===== IT =====
    { id: 3, name: 'Rohan Gupta', email: 'rohan@college.edu', dept: 'IT', branch: 'Information Tech', cgpa: 7.8, backlogs: 1, skills: 'JavaScript, Node.js, Vue.js', status: 'Unplaced', company: '', salary: '—', phone: '9876543212', year: 2026, rollNo: 'IT22003', batch: '2022-2026', tenth: 85, twelfth: 80, dob: '2004-11-10', linkedin: 'linkedin.com/in/rohangupta' },
    { id: 8, name: 'Divya Menon', email: 'divya@college.edu', dept: 'IT', branch: 'Information Tech', cgpa: 8.7, backlogs: 0, skills: 'Django, PostgreSQL, REST API, Redis', status: 'Placed', company: 'Infosys', salary: '8 LPA', phone: '9876543217', year: 2026, rollNo: 'IT22008', batch: '2022-2026', tenth: 89, twelfth: 85, dob: '2004-03-11', linkedin: 'linkedin.com/in/divyamenon' },
    { id: 17, name: 'Suresh Kumar', email: 'suresh@college.edu', dept: 'IT', branch: 'Information Tech', cgpa: 7.5, backlogs: 0, skills: 'PHP, Laravel, MySQL, HTML/CSS', status: 'Placed', company: 'Wipro', salary: '7 LPA', phone: '9876543226', year: 2026, rollNo: 'IT22017', batch: '2022-2026', tenth: 81, twelfth: 78, dob: '2004-08-22', linkedin: '' },
    { id: 18, name: 'Anjali Singh', email: 'anjali@college.edu', dept: 'IT', branch: 'Information Tech', cgpa: 8.4, backlogs: 0, skills: 'Angular, TypeScript, Spring, AWS', status: 'Placed', company: 'Accenture', salary: '10 LPA', phone: '9876543227', year: 2026, rollNo: 'IT22018', batch: '2022-2026', tenth: 88, twelfth: 85, dob: '2004-01-30', linkedin: 'linkedin.com/in/anjalisingh' },
    { id: 19, name: 'Deepak Rao', email: 'deepak@college.edu', dept: 'IT', branch: 'Information Tech', cgpa: 6.9, backlogs: 2, skills: 'HTML, CSS, Bootstrap, JavaScript', status: 'Unplaced', company: '', salary: '—', phone: '9876543228', year: 2026, rollNo: 'IT22019', batch: '2022-2026', tenth: 74, twelfth: 71, dob: '2004-07-07', linkedin: '' },
    { id: 20, name: 'Preethi Nair', email: 'preethi@college.edu', dept: 'IT', branch: 'Network Security', cgpa: 8.1, backlogs: 0, skills: 'Networking, CCNA, Python, Wireshark', status: 'Placed', company: 'HCL Technologies', salary: '9 LPA', phone: '9876543229', year: 2026, rollNo: 'IT22020', batch: '2022-2026', tenth: 86, twelfth: 83, dob: '2004-05-19', linkedin: 'linkedin.com/in/preethinair' },
    // ===== ECE =====
    { id: 2, name: 'Priya Patel', email: 'priya@college.edu', dept: 'ECE', branch: 'Electronics & Comm', cgpa: 9.2, backlogs: 0, skills: 'C++, VLSI, Embedded C, SystemVerilog', status: 'Placed', company: 'Intel India', salary: '22 LPA', phone: '9876543211', year: 2026, rollNo: 'EC22002', batch: '2022-2026', tenth: 95, twelfth: 91, dob: '2004-03-22', linkedin: 'linkedin.com/in/priyapatel' },
    { id: 7, name: 'Karthik Nair', email: 'karthik@college.edu', dept: 'ECE', branch: 'Communication Sys', cgpa: 8.1, backlogs: 0, skills: 'MATLAB, Signal Processing, LabVIEW', status: 'Unplaced', company: '', salary: '—', phone: '9876543216', year: 2026, rollNo: 'EC22007', batch: '2022-2026', tenth: 84, twelfth: 81, dob: '2004-06-25', linkedin: '' },
    { id: 21, name: 'Harini Subramaniam', email: 'harini@college.edu', dept: 'ECE', branch: 'VLSI Design', cgpa: 9.0, backlogs: 0, skills: 'VLSI, Verilog, FPGA, Cadence Tools', status: 'Placed', company: 'Qualcomm India', salary: '24 LPA', phone: '9876543230', year: 2026, rollNo: 'EC22021', batch: '2022-2026', tenth: 94, twelfth: 91, dob: '2004-02-14', linkedin: 'linkedin.com/in/harinisubramaniam' },
    { id: 22, name: 'Madhavan Rajan', email: 'madhavan@college.edu', dept: 'ECE', branch: 'Embedded Systems', cgpa: 8.4, backlogs: 0, skills: 'ARM Cortex, FreeRTOS, CAN, AUTOSAR', status: 'Placed', company: 'Bosch India', salary: '14 LPA', phone: '9876543231', year: 2026, rollNo: 'EC22022', batch: '2022-2026', tenth: 89, twelfth: 86, dob: '2004-09-09', linkedin: 'linkedin.com/in/madhavanrajan' },
    { id: 23, name: 'Shruti Mishra', email: 'shruti@college.edu', dept: 'ECE', branch: 'Electronics & Comm', cgpa: 7.7, backlogs: 1, skills: 'Python, IoT, Arduino, Raspberry Pi', status: 'Unplaced', company: '', salary: '—', phone: '9876543232', year: 2026, rollNo: 'EC22023', batch: '2022-2026', tenth: 83, twelfth: 79, dob: '2004-11-21', linkedin: '' },
    { id: 24, name: 'Aakash Trivedi', email: 'aakash@college.edu', dept: 'ECE', branch: 'RF & Antenna', cgpa: 8.6, backlogs: 0, skills: 'RF Design, Antenna, ADS, HFSS', status: 'Placed', company: 'Samsung R&D India', salary: '20 LPA', phone: '9876543233', year: 2026, rollNo: 'EC22024', batch: '2022-2026', tenth: 90, twelfth: 87, dob: '2004-04-18', linkedin: 'linkedin.com/in/aakash' },
    { id: 25, name: 'Nandini Chakraborty', email: 'nandini@college.edu', dept: 'ECE', branch: 'Communication Sys', cgpa: 7.4, backlogs: 0, skills: 'MATLAB, DSP, Python, GNU Radio', status: 'Placed', company: 'TCS', salary: '7 LPA', phone: '9876543234', year: 2026, rollNo: 'EC22025', batch: '2022-2026', tenth: 80, twelfth: 77, dob: '2004-08-12', linkedin: '' },
    // ===== EEE =====
    { id: 26, name: 'Surya Prakash', email: 'surya@college.edu', dept: 'EEE', branch: 'Power Systems', cgpa: 7.9, backlogs: 0, skills: 'MATLAB, PowerWorld, PLC, SCADA', status: 'Placed', company: 'L&T Technology', salary: '10 LPA', phone: '9876543235', year: 2026, rollNo: 'EE22026', batch: '2022-2026', tenth: 85, twelfth: 82, dob: '2004-02-05', linkedin: 'linkedin.com/in/suryaprakash' },
    { id: 27, name: 'Lavanya Rajan', email: 'lavanya@college.edu', dept: 'EEE', branch: 'Control Systems', cgpa: 8.3, backlogs: 0, skills: 'MATLAB, Simulink, Control Systems, PID', status: 'Placed', company: 'Texas Instruments', salary: '18 LPA', phone: '9876543236', year: 2026, rollNo: 'EE22027', batch: '2022-2026', tenth: 88, twelfth: 85, dob: '2004-06-16', linkedin: 'linkedin.com/in/lavanyarajan' },
    { id: 28, name: 'Vijay Shankar', email: 'vijay@college.edu', dept: 'EEE', branch: 'Power Electronics', cgpa: 7.1, backlogs: 2, skills: 'PSIM, PSPICE, Altium, PCB Design', status: 'Unplaced', company: '', salary: '—', phone: '9876543237', year: 2026, rollNo: 'EE22028', batch: '2022-2026', tenth: 76, twelfth: 73, dob: '2004-10-08', linkedin: '' },
    { id: 29, name: 'Revathi Balaji', email: 'revathi@college.edu', dept: 'EEE', branch: 'Renewable Energy', cgpa: 8.7, backlogs: 0, skills: 'ETAP, Solar PV, HOMER, AutoCAD', status: 'Placed', company: 'Bosch India', salary: '12 LPA', phone: '9876543238', year: 2026, rollNo: 'EE22029', batch: '2022-2026', tenth: 91, twelfth: 88, dob: '2004-03-27', linkedin: 'linkedin.com/in/revathi' },
    // ===== ME =====
    { id: 5, name: 'Vikram Singh', email: 'vikram@college.edu', dept: 'ME', branch: 'Mechanical Eng', cgpa: 7.2, backlogs: 2, skills: 'AutoCAD, SolidWorks, ANSYS', status: 'Unplaced', company: '', salary: '—', phone: '9876543214', year: 2026, rollNo: 'ME22005', batch: '2022-2026', tenth: 78, twelfth: 75, dob: '2004-12-05', linkedin: '' },
    { id: 10, name: 'Meera Joshi', email: 'meera@college.edu', dept: 'ME', branch: 'Manufacturing', cgpa: 8.3, backlogs: 0, skills: 'CATIA, NX, GD&T, Manufacturing Proc', status: 'Placed', company: 'Tata Motors', salary: '12 LPA', phone: '9876543219', year: 2026, rollNo: 'ME22010', batch: '2022-2026', tenth: 88, twelfth: 84, dob: '2004-05-22', linkedin: 'linkedin.com/in/meerajoshi' },
    { id: 30, name: 'Ajay Tiwari', email: 'ajay@college.edu', dept: 'ME', branch: 'Thermal Eng', cgpa: 7.6, backlogs: 0, skills: 'ANSYS Fluent, CFD, AutoCAD, HVAC', status: 'Placed', company: 'L&T Technology', salary: '9 LPA', phone: '9876543239', year: 2026, rollNo: 'ME22030', batch: '2022-2026', tenth: 83, twelfth: 80, dob: '2004-09-14', linkedin: '' },
    { id: 31, name: 'Pallavi Desai', email: 'pallavi@college.edu', dept: 'ME', branch: 'Robotics & Auto', cgpa: 8.9, backlogs: 0, skills: 'ROS, Python, Simulink, PLC, KUKA', status: 'Placed', company: 'Bosch India', salary: '15 LPA', phone: '9876543240', year: 2026, rollNo: 'ME22031', batch: '2022-2026', tenth: 92, twelfth: 89, dob: '2004-01-25', linkedin: 'linkedin.com/in/pallavidesai' },
    { id: 32, name: 'Ranjit Yadav', email: 'ranjit@college.edu', dept: 'ME', branch: 'Mechanical Eng', cgpa: 6.8, backlogs: 3, skills: 'AutoCAD, ANSYS, Basics of Python', status: 'Unplaced', company: '', salary: '—', phone: '9876543241', year: 2026, rollNo: 'ME22032', batch: '2022-2026', tenth: 72, twelfth: 69, dob: '2004-07-30', linkedin: '' },
    // ===== CIVIL =====
    { id: 33, name: 'Lekha Suresh', email: 'lekha@college.edu', dept: 'CIVIL', branch: 'Structural Eng', cgpa: 8.1, backlogs: 0, skills: 'AutoCAD Civil 3D, STAAD Pro, REVIT', status: 'Placed', company: 'L&T Construction', salary: '9 LPA', phone: '9876543242', year: 2026, rollNo: 'CV22033', batch: '2022-2026', tenth: 86, twelfth: 83, dob: '2004-04-06', linkedin: 'linkedin.com/in/lekhasuresh' },
    { id: 34, name: 'Manish Kapoor', email: 'manish@college.edu', dept: 'CIVIL', branch: 'Environmental Eng', cgpa: 7.4, backlogs: 1, skills: 'AutoCAD, GIS, EPANET, ArcGIS', status: 'Unplaced', company: '', salary: '—', phone: '9876543243', year: 2026, rollNo: 'CV22034', batch: '2022-2026', tenth: 79, twelfth: 76, dob: '2004-11-13', linkedin: '' },
    // ===== MCA / MSc =====
    { id: 35, name: 'Akshay Bhatt', email: 'akshay@college.edu', dept: 'MCA', branch: 'Master of Comp Apps', cgpa: 8.6, backlogs: 0, skills: 'Java, Spring Boot, Hibernate, MySQL', status: 'Placed', company: 'Cognizant', salary: '8 LPA', phone: '9876543244', year: 2026, rollNo: 'MC22035', batch: '2024-2026', tenth: 89, twelfth: 86, dob: '2002-06-18', linkedin: 'linkedin.com/in/akshaybhatt' },
    { id: 36, name: 'Deeksha Yadav', email: 'deeksha@college.edu', dept: 'MCA', branch: 'Master of Comp Apps', cgpa: 7.9, backlogs: 0, skills: 'Python, Data Analysis, Power BI, SQL', status: 'Placed', company: 'Capgemini', salary: '8 LPA', phone: '9876543245', year: 2026, rollNo: 'MC22036', batch: '2024-2026', tenth: 84, twelfth: 81, dob: '2002-09-24', linkedin: '' },
    { id: 37, name: 'Sanjana Murugan', email: 'sanjana@college.edu', dept: 'MCA', branch: 'Master of Comp Apps', cgpa: 8.3, backlogs: 0, skills: 'React, Next.js, Tailwind, Firebase', status: 'Unplaced', company: '', salary: '—', phone: '9876543246', year: 2026, rollNo: 'MC22037', batch: '2024-2026', tenth: 87, twelfth: 84, dob: '2002-12-02', linkedin: 'linkedin.com/in/sanjanamuru' },
    { id: 38, name: 'Harshit Jain', email: 'harshit@college.edu', dept: 'CSE', branch: 'Computer Science', cgpa: 9.3, backlogs: 0, skills: 'Golang, Kubernetes, Kafka, Microservices', status: 'Placed', company: 'Swiggy', salary: '22 LPA', phone: '9876543247', year: 2026, rollNo: 'CS22038', batch: '2022-2026', tenth: 95, twelfth: 92, dob: '2004-03-08', linkedin: 'linkedin.com/in/harshitjain' },
    { id: 39, name: 'Varsha Raghavan', email: 'varsha@college.edu', dept: 'ECE', branch: 'VLSI Design', cgpa: 8.0, backlogs: 0, skills: 'Digital Design, FPGA, Verilog HDL', status: 'Placed', company: 'Texas Instruments', salary: '20 LPA', phone: '9876543248', year: 2026, rollNo: 'EC22039', batch: '2022-2026', tenth: 85, twelfth: 82, dob: '2004-10-15', linkedin: 'linkedin.com/in/varsharaghavan' },
    { id: 40, name: 'Tarun Bakshi', email: 'tarun@college.edu', dept: 'CSE', branch: 'Computer Science', cgpa: 7.5, backlogs: 0, skills: 'Android, Kotlin, Jetpack Compose', status: 'Placed', company: 'Zoho Corporation', salary: '9 LPA', phone: '9876543249', year: 2026, rollNo: 'CS22040', batch: '2022-2026', tenth: 80, twelfth: 77, dob: '2004-08-01', linkedin: 'linkedin.com/in/tarunbakshi' }
  ],
  companies: [
    { id: 1, name: 'TCS (Tata Consultancy Services)', industry: 'IT Services', website: 'tcs.com', pkg: '7-11 LPA', contact: 'campus@tcs.com', visitDate: '2026-03-10', status: 'Active' },
    { id: 2, name: 'Infosys', industry: 'IT Services', website: 'infosys.com', pkg: '6-10 LPA', contact: 'campus@infosys.com', visitDate: '2026-03-12', status: 'Active' },
    { id: 3, name: 'Wipro', industry: 'IT Services', website: 'wipro.com', pkg: '6.5-10 LPA', contact: 'campus@wipro.com', visitDate: '2026-03-15', status: 'Active' },
    { id: 4, name: 'HCL Technologies', industry: 'IT Services', website: 'hcltech.com', pkg: '7-12 LPA', contact: 'campus@hcl.com', visitDate: '2026-03-18', status: 'Active' },
    { id: 5, name: 'Cognizant (CTS)', industry: 'IT Services', website: 'cognizant.com', pkg: '7-11 LPA', contact: 'campus@cognizant.com', visitDate: '2026-03-20', status: 'Active' },
    { id: 6, name: 'Tech Mahindra', industry: 'IT Services', website: 'techmahindra.com', pkg: '6-9 LPA', contact: 'campus@techmahindra.com', visitDate: '2026-03-22', status: 'Active' },
    { id: 7, name: 'Accenture', industry: 'Consulting & IT', website: 'accenture.com', pkg: '8-14 LPA', contact: 'campus@accenture.com', visitDate: '2026-02-28', status: 'Active' },
    { id: 8, name: 'Capgemini', industry: 'Consulting & IT', website: 'capgemini.com', pkg: '7-10 LPA', contact: 'campus@capgemini.com', visitDate: '2026-03-05', status: 'Active' },
    { id: 9, name: 'IBM India', industry: 'Technology', website: 'ibm.com', pkg: '10-16 LPA', contact: 'campus@ibm.com', visitDate: '2026-02-20', status: 'Active' },
    { id: 10, name: 'Oracle India', industry: 'Software', website: 'oracle.com', pkg: '18-28 LPA', contact: 'campus@oracle.com', visitDate: '2026-03-01', status: 'Active' },
    { id: 11, name: 'Google India', industry: 'Product / Tech', website: 'google.com', pkg: '30-50 LPA', contact: 'campus@google.com', visitDate: '2026-01-15', status: 'Active' },
    { id: 12, name: 'Microsoft India', industry: 'Product / Tech', website: 'microsoft.com', pkg: '28-45 LPA', contact: 'campus@microsoft.com', visitDate: '2026-01-20', status: 'Active' },
    { id: 13, name: 'Amazon India', industry: 'E-Commerce / Cloud', website: 'amazon.in', pkg: '30-48 LPA', contact: 'campus@amazon.com', visitDate: '2026-02-05', status: 'Active' },
    { id: 14, name: 'Flipkart', industry: 'E-Commerce', website: 'flipkart.com', pkg: '22-38 LPA', contact: 'campus@flipkart.com', visitDate: '2026-02-10', status: 'Active' },
    { id: 15, name: 'Swiggy', industry: 'Food Tech', website: 'swiggy.com', pkg: '18-30 LPA', contact: 'campus@swiggy.in', visitDate: '2026-02-15', status: 'Active' },
    { id: 16, name: 'Zomato', industry: 'Food Tech', website: 'zomato.com', pkg: '16-28 LPA', contact: 'campus@zomato.com', visitDate: '2026-02-18', status: 'Active' },
    { id: 17, name: 'Zoho Corporation', industry: 'SaaS / Product', website: 'zoho.com', pkg: '8-14 LPA', contact: 'campus@zoho.com', visitDate: '2026-03-08', status: 'Active' },
    { id: 18, name: 'Freshworks', industry: 'SaaS / Product', website: 'freshworks.com', pkg: '14-22 LPA', contact: 'campus@freshworks.com', visitDate: '2026-03-05', status: 'Active' },
    { id: 19, name: 'Razorpay', industry: 'FinTech', website: 'razorpay.com', pkg: '20-35 LPA', contact: 'campus@razorpay.com', visitDate: '2026-03-10', status: 'Active' },
    { id: 20, name: 'Paytm (One97)', industry: 'FinTech', website: 'paytm.com', pkg: '10-18 LPA', contact: 'campus@paytm.com', visitDate: '2026-03-14', status: 'Active' },
    { id: 21, name: 'Samsung R&D India', industry: 'Electronics / R&D', website: 'samsung.com', pkg: '16-26 LPA', contact: 'campus@samsung.com', visitDate: '2026-02-25', status: 'Active' },
    { id: 22, name: 'Intel India', industry: 'Semiconductors', website: 'intel.com', pkg: '20-32 LPA', contact: 'campus@intel.com', visitDate: '2026-02-20', status: 'Active' },
    { id: 23, name: 'Qualcomm India', industry: 'Semiconductors', website: 'qualcomm.com', pkg: '22-36 LPA', contact: 'campus@qualcomm.com', visitDate: '2026-02-22', status: 'Active' },
    { id: 24, name: 'Texas Instruments', industry: 'Semiconductors', website: 'ti.com', pkg: '18-30 LPA', contact: 'campus@ti.com', visitDate: '2026-03-02', status: 'Active' },
    { id: 25, name: 'Bosch India', industry: 'Automotive / IoT', website: 'bosch.in', pkg: '10-18 LPA', contact: 'campus@bosch.in', visitDate: '2026-03-06', status: 'Active' },
    { id: 26, name: 'Tata Motors', industry: 'Automotive', website: 'tatamotors.com', pkg: '8-14 LPA', contact: 'campus@tatamotors.com', visitDate: '2026-03-15', status: 'Active' },
    { id: 27, name: 'L&T Technology Services', industry: 'Engineering / R&D', website: 'ltts.com', pkg: '9-16 LPA', contact: 'campus@ltts.com', visitDate: '2026-03-20', status: 'Active' },
    { id: 28, name: 'ISRO (VSSC / SAC)', industry: 'Space / Govt', website: 'isro.gov.in', pkg: '8-14 LPA', contact: 'recruitment@isro.gov.in', visitDate: '2026-04-01', status: 'Upcoming' },
    { id: 29, name: 'Deloitte India', industry: 'Consulting', website: 'deloitte.com', pkg: '10-18 LPA', contact: 'campus@deloitte.com', visitDate: '2026-03-25', status: 'Active' },
    { id: 30, name: 'Adobe India', industry: 'Software / Product', website: 'adobe.com', pkg: '25-42 LPA', contact: 'campus@adobe.com', visitDate: '2026-03-18', status: 'Active' }
  ],
  jobs: [
    { id: 1, title: 'Assistant System Engineer', companyId: 1, dept: 'CSE, IT', minCgpa: 6.0, type: 'Full-time', deadline: '2026-04-10', status: 'Active', desc: 'Application development & maintenance, TCS NQT required' },
    { id: 2, title: 'Systems Engineer', companyId: 2, dept: 'CSE, IT, ECE', minCgpa: 6.5, type: 'Full-time', deadline: '2026-04-12', status: 'Active', desc: 'Software development in Infosys Digital vertical' },
    { id: 3, title: 'Project Engineer', companyId: 3, dept: 'CSE, IT, ECE', minCgpa: 6.5, type: 'Full-time', deadline: '2026-04-15', status: 'Active', desc: 'Wipro NLTH program — application developer track' },
    { id: 4, title: 'Graduate Engineer Trainee', companyId: 4, dept: 'CSE, IT, ECE, EEE', minCgpa: 6.5, type: 'Full-time', deadline: '2026-04-18', status: 'Active', desc: 'Mode 1 & Mode 3 hiring, diverse technology exposure' },
    { id: 5, title: 'Programmer Analyst', companyId: 5, dept: 'CSE, IT', minCgpa: 7.0, type: 'Full-time', deadline: '2026-04-20', status: 'Active', desc: 'Full-stack development and enterprise app maintenance' },
    { id: 6, title: 'Software Engineer', companyId: 6, dept: 'CSE, IT', minCgpa: 6.5, type: 'Full-time', deadline: '2026-04-22', status: 'Active', desc: 'Digital transformation projects, cloud & AI focus' },
    { id: 7, title: 'Associate Software Engineer', companyId: 7, dept: 'CSE, IT, ECE', minCgpa: 7.0, type: 'Full-time', deadline: '2026-03-28', status: 'Active', desc: 'Accenture ASE role — cloud, AI/ML, digital projects' },
    { id: 8, title: 'Analyst', companyId: 8, dept: 'CSE, IT', minCgpa: 7.0, type: 'Full-time', deadline: '2026-04-05', status: 'Active', desc: 'Capgemini SUPERNOVA program for fresh graduates' },
    { id: 9, title: 'Associate Developer', companyId: 9, dept: 'CSE, IT, ECE', minCgpa: 7.5, type: 'Full-time', deadline: '2026-03-20', status: 'Active', desc: 'IBM iX / Garage — AI, Blockchain, Cloud development' },
    { id: 10, title: 'Applications Engineer', companyId: 10, dept: 'CSE, IT', minCgpa: 8.5, type: 'Full-time', deadline: '2026-03-25', status: 'Active', desc: 'Oracle APEX, Java EE, database engineering' },
    { id: 11, title: 'Software Engineer (SWE)', companyId: 11, dept: 'CSE, IT', minCgpa: 8.5, type: 'Full-time', deadline: '2026-02-01', status: 'Active', desc: 'Google SWE — data structures, algorithms, distributed systems' },
    { id: 12, title: 'Software Development Engineer', companyId: 12, dept: 'CSE, IT', minCgpa: 8.0, type: 'Full-time', deadline: '2026-02-10', status: 'Active', desc: 'Microsoft SDE — cloud, Azure, productivity engineering' },
    { id: 13, title: 'SDE I — AWS / Alexa', companyId: 13, dept: 'CSE, IT', minCgpa: 8.0, type: 'Full-time', deadline: '2026-02-20', status: 'Active', desc: 'Amazon SDE I — backend, microservices, AWS platform' },
    { id: 14, title: 'Software Development Engineer', companyId: 14, dept: 'CSE, IT', minCgpa: 7.5, type: 'Full-time', deadline: '2026-02-25', status: 'Active', desc: 'Flipkart SDE — e-commerce platform, high-scale systems' },
    { id: 15, title: 'Software Development Engineer I', companyId: 15, dept: 'CSE, IT', minCgpa: 7.5, type: 'Full-time', deadline: '2026-03-01', status: 'Active', desc: 'Swiggy SDE — food delivery platform, real-time systems' },
    { id: 16, title: 'SDE — Backend Engineering', companyId: 16, dept: 'CSE, IT', minCgpa: 7.0, type: 'Full-time', deadline: '2026-03-05', status: 'Active', desc: 'Zomato backend engineering, Golang/Java microservices' },
    { id: 17, title: 'Member Technical Staff', companyId: 17, dept: 'CSE, IT', minCgpa: 7.0, type: 'Full-time', deadline: '2026-04-08', status: 'Active', desc: 'Zoho — product development, no bond or bond-free option' },
    { id: 18, title: 'Software Engineer', companyId: 18, dept: 'CSE, IT', minCgpa: 7.5, type: 'Full-time', deadline: '2026-04-05', status: 'Active', desc: 'Freshworks — CRM, ITSM platform, Ruby on Rails / React' },
    { id: 19, title: 'Software Development Engineer', companyId: 19, dept: 'CSE, IT', minCgpa: 8.0, type: 'Full-time', deadline: '2026-03-30', status: 'Active', desc: 'Razorpay — FinTech payments, banking infra, high-scale' },
    { id: 20, title: 'Software Engineer', companyId: 20, dept: 'CSE, IT', minCgpa: 7.0, type: 'Full-time', deadline: '2026-04-14', status: 'Active', desc: 'Paytm — payments, lending, financial services platform' },
    { id: 21, title: 'Software Engineer (R&D)', companyId: 21, dept: 'CSE, ECE, EEE', minCgpa: 8.0, type: 'Full-time', deadline: '2026-03-28', status: 'Active', desc: 'Samsung R&D — AI, IoT, Tizen OS, Mobile platform' },
    { id: 22, title: 'VLSI Design Engineer', companyId: 22, dept: 'ECE, EEE', minCgpa: 7.5, type: 'Full-time', deadline: '2026-03-20', status: 'Active', desc: 'Intel VLSI — RTL design, verification, physical design' },
    { id: 23, title: 'Engineer — ASIC / SoC', companyId: 23, dept: 'ECE, EEE', minCgpa: 8.0, type: 'Full-time', deadline: '2026-03-22', status: 'Active', desc: 'Qualcomm Snapdragon SoC design, DFT, physical verification' },
    { id: 24, title: 'Analog Design Engineer', companyId: 24, dept: 'ECE, EEE', minCgpa: 7.5, type: 'Full-time', deadline: '2026-04-02', status: 'Active', desc: 'Texas Instruments — analog IC design, signal chain' },
    { id: 25, title: 'Engineer — Embedded Systems', companyId: 25, dept: 'ECE, EEE, CSE', minCgpa: 7.0, type: 'Full-time', deadline: '2026-04-06', status: 'Active', desc: 'Bosch — automotive embedded, AUTOSAR, CAN, RTOS' },
    { id: 26, title: 'Graduate Engineer Trainee', companyId: 26, dept: 'ME, EEE', minCgpa: 7.0, type: 'Full-time', deadline: '2026-04-15', status: 'Active', desc: 'Tata Motors — vehicle design, manufacturing, EV R&D' },
    { id: 27, title: 'Engineer — Product R&D', companyId: 27, dept: 'ME, ECE, CSE', minCgpa: 7.0, type: 'Full-time', deadline: '2026-04-20', status: 'Active', desc: 'L&T Technology — digital manufacturing, robotics, IoT' },
    { id: 28, title: 'Scientist / Engineer-SC', companyId: 28, dept: 'ECE, ME, CSE, EEE', minCgpa: 7.5, type: 'Full-time', deadline: '2026-04-30', status: 'Upcoming', desc: 'ISRO — satellite systems, propulsion, aero structures' },
    { id: 29, title: 'Business Technology Analyst', companyId: 29, dept: 'CSE, IT, ECE', minCgpa: 7.5, type: 'Full-time', deadline: '2026-04-25', status: 'Active', desc: 'Deloitte USI — digital strategy, cloud, cyber security' },
    { id: 30, title: 'Computer Scientist', companyId: 30, dept: 'CSE, IT', minCgpa: 8.5, type: 'Full-time', deadline: '2026-04-18', status: 'Active', desc: 'Adobe — Creative Cloud, PDF, Document Cloud engineering' }
  ],
  applications: [
    { id: 1, studentId: 1, jobId: 1, status: 'Placed', appliedDate: '2026-01-10' },
    { id: 2, studentId: 2, jobId: 2, status: 'Placed', appliedDate: '2026-01-12' },
    { id: 3, studentId: 4, jobId: 1, status: 'Placed', appliedDate: '2026-01-11' },
    { id: 4, studentId: 6, jobId: 3, status: 'Placed', appliedDate: '2026-02-01' },
    { id: 5, studentId: 3, jobId: 4, status: 'Shortlisted', appliedDate: '2026-02-08' },
    { id: 6, studentId: 8, jobId: 4, status: 'Placed', appliedDate: '2026-02-09' },
    { id: 7, studentId: 10, jobId: 5, status: 'Placed', appliedDate: '2026-03-01' },
    { id: 8, studentId: 7, jobId: 2, status: 'Interviewed', appliedDate: '2026-01-14' },
    { id: 9, studentId: 9, jobId: 1, status: 'Applied', appliedDate: '2026-01-13' },
    { id: 10, studentId: 5, jobId: 5, status: 'Applied', appliedDate: '2026-03-05' }
  ],
  users: [
    { id: 1, name: 'Placement Officer', email: 'admin@shell.edu', password: 'admin123', role: 'admin' },
    { id: 2, name: 'Aarav Sharma', email: 'aarav@college.edu', password: 'student123', role: 'student', studentId: 1 },
    { id: 3, name: 'Google Recruiter', email: 'recruiter@google.com', password: 'recruiter123', role: 'recruiter', companyId: 11 }
  ],
  placedStudents: [
    { id: 1, name: 'Aarav Sharma', regNo: 'CS22001', dept: 'CSE', company: 'Google', salary: '32 LPA', placedDate: '2026-01-15', photo: '' },
    { id: 2, name: 'Priya Patel', regNo: 'EC22002', dept: 'ECE', company: 'Intel', salary: '22 LPA', placedDate: '2026-01-20', photo: '' },
    { id: 3, name: 'Sneha Reddy', regNo: 'CS22004', dept: 'CSE', company: 'Microsoft', salary: '28 LPA', placedDate: '2026-01-22', photo: '' },
    { id: 4, name: 'Ananya Iyer', regNo: 'CS22006', dept: 'CSE', company: 'Amazon', salary: '30 LPA', placedDate: '2026-02-05', photo: '' },
    { id: 5, name: 'Divya Menon', regNo: 'IT22008', dept: 'IT', company: 'Infosys', salary: '8 LPA', placedDate: '2026-02-10', photo: '' },
    { id: 6, name: 'Meera Joshi', regNo: 'ME22010', dept: 'ME', company: 'Tata Motors', salary: '12 LPA', placedDate: '2026-03-01', photo: '' }
  ],
  alumni: [
    { id: 1, name: 'Rahul Kumar', batch: '2018-2022', dept: 'CSE', company: 'Amazon', role: 'SDE II', experience: '3 years', photo: '' },
    { id: 2, name: 'Nisha Verma', batch: '2017-2021', dept: 'ECE', company: 'Qualcomm', role: 'VLSI Engineer', experience: '4 years', photo: '' },
    { id: 3, name: 'Aryan Mehta', batch: '2019-2023', dept: 'IT', company: 'Wipro', role: 'Tech Lead', experience: '2 years', photo: '' },
    { id: 4, name: 'Kavya Nair', batch: '2016-2020', dept: 'CSE', company: 'Flipkart', role: 'Senior SDE', experience: '5 years', photo: '' }
  ]
};

// ===== DATA STORE =====
class Store {
  constructor() { this.load(); }
  load() {
    try {
      // 1. Migrate from pshell_data if it exists (the temporary name)
      const pshell = localStorage.getItem('pshell_data');
      if (pshell) {
        const pshellData = JSON.parse(pshell);
        if (pshellData && pshellData.students) {
          this.data = pshellData;
          this.save();
          localStorage.removeItem('pshell_data');
          console.log('[PlaceMe] Migrated from pshell_data');
          return;
        }
      }

      // 2. Load from primary placeme_data key
      let d = JSON.parse(localStorage.getItem('placeme_data'));
      if (d && d.students) {
        this.data = d;
        if (!this.data.users) this.data.users = JSON.parse(JSON.stringify(SEED_DATA.users));

        // Auto-upgrade: ensure default demo accounts exist
        SEED_DATA.users.forEach(su => {
          if (!this.data.users.some(u => u.email.toLowerCase() === su.email.toLowerCase())) {
            this.data.users.push(su);
          }
        });

        // Auto-upgrade: if old small student list, replace with full 40-student dataset
        if (!this.data.students || this.data.students.length <= 10) {
          this.data.students = JSON.parse(JSON.stringify(SEED_DATA.students));
          console.log('[PlaceMe] Upgraded to 40 students');
        }

        // Auto-upgrade: if old small company list, replace with 30-company dataset
        if (!this.data.companies || this.data.companies.length <= 6) {
          this.data.companies = JSON.parse(JSON.stringify(SEED_DATA.companies));
          this.data.jobs = JSON.parse(JSON.stringify(SEED_DATA.jobs));
          console.log('[PlaceMe] Upgraded to 30 real companies & jobs');
        }

        // Add new collections if missing
        if (!this.data.placedStudents) this.data.placedStudents = JSON.parse(JSON.stringify(SEED_DATA.placedStudents));
        if (!this.data.alumni) this.data.alumni = JSON.parse(JSON.stringify(SEED_DATA.alumni));

        this.save();
        return;
      }
    } catch (e) {
      console.warn('Store load error:', e);
    }

    // 3. Fallback to SEED_DATA
    this.data = JSON.parse(JSON.stringify(SEED_DATA));
    this.save();
  }
  save() {
    localStorage.setItem('placeme_data', JSON.stringify(this.data));
  }
  get(key) { return this.data[key] || []; }
  add(key, item) { item.id = Date.now(); this.data[key].push(item); this.save(); return item; }
  update(key, id, item) { const i = this.data[key].findIndex(x => x.id === id); if (i > -1) { this.data[key][i] = { ...this.data[key][i], ...item }; this.save(); } }
  remove(key, id) { this.data[key] = this.data[key].filter(x => x.id !== id); this.save(); }
  find(key, id) { return this.data[key].find(x => x.id === id); }
  nextId(key) { return Math.max(0, ...this.data[key].map(x => x.id)) + 1; }
}

const store = new Store();

// ===== APP CONTROLLER =====
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// ===== AUTH STATE =====
let selectedRole = 'student';
let currentUser = null;

// Role selector
window.selectRole = function (role) {
  selectedRole = role;
  $$('.role-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('role-' + role);
  if (btn) btn.classList.add('active');
  // Admin: hide register tab
  const tabs = document.getElementById('auth-tabs');
  const tabReg = document.getElementById('tab-register');
  if (role === 'admin') {
    if (tabReg) tabReg.style.display = 'none';
    switchTab('login');
  } else {
    if (tabReg) tabReg.style.display = '';
  }
  // Update titles & hints
  const titles = { student: 'Welcome Back 👋', recruiter: 'Recruiter Login 🏢', admin: 'Admin Portal 🔐' };
  const subtitles = { student: 'Sign in to your student account', recruiter: 'Sign in to your recruiter account', admin: 'Placement Officer access only' };
  const hints = { student: 'Demo: aarav@college.edu / student123', recruiter: 'Demo: recruiter@google.com / recruiter123', admin: 'Demo: admin@shell.edu / admin123' };
  const el = id => document.getElementById(id);
  if (el('login-title')) el('login-title').textContent = titles[role];
  if (el('login-subtitle')) el('login-subtitle').textContent = subtitles[role];
  if (el('login-hint-text')) el('login-hint-text').textContent = hints[role];
  if (el('register-subtitle')) el('register-subtitle').textContent = 'Register as a ' + role;
  // Toggle reg fields
  const sf = el('student-reg-fields'), rf = el('recruiter-reg-fields');
  if (sf) sf.classList.toggle('hidden', role !== 'student');
  if (rf) rf.classList.toggle('hidden', role !== 'recruiter');
};

// Quick Fill Demo Credentials
window.fillDemoCredentials = function () {
  const creds = {
    student: { email: 'aarav@college.edu', pass: 'student123' },
    recruiter: { email: 'recruiter@google.com', pass: 'recruiter123' },
    admin: { email: 'admin@shell.edu', pass: 'admin123' }
  };
  const c = creds[selectedRole] || creds.student;
  const emailEl = document.getElementById('login-email');
  const passEl = document.getElementById('login-password');
  if (emailEl) emailEl.value = c.email;
  if (passEl) passEl.value = c.pass;
  toast(`Filled ${selectedRole.toUpperCase()} demo credentials ⚡`, 'info');
};

// Tab switcher
window.switchTab = function (tab) {
  const loginForm = document.getElementById('login-form');
  const regForm = document.getElementById('register-form');
  const tLogin = document.getElementById('tab-login');
  const tReg = document.getElementById('tab-register');
  const switchText = document.getElementById('auth-switch-text');
  const switchLink = document.getElementById('auth-switch-link');
  if (tab === 'login') {
    loginForm.classList.remove('hidden');
    regForm.classList.add('hidden');
    tLogin.classList.add('active');
    if (tReg) tReg.classList.remove('active');
    if (switchText) switchText.innerHTML = `Don't have an account? <a href="#" id="auth-switch-link" onclick="switchTab('register');return false;">Register here</a>`;
  } else {
    loginForm.classList.add('hidden');
    regForm.classList.remove('hidden');
    tLogin.classList.remove('active');
    if (tReg) tReg.classList.add('active');
    if (switchText) switchText.innerHTML = `Already have an account? <a href="#" id="auth-switch-link" onclick="switchTab('login');return false;">Sign in</a>`;
  }
};

// Password visibility toggle
window.togglePw = function (inputId, btn) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  const isHidden = inp.type === 'password';
  inp.type = isHidden ? 'text' : 'password';
  btn.innerHTML = isHidden ? '<i class="ph ph-eye-slash"></i>' : '<i class="ph ph-eye"></i>';
};

// pages registry — interviews added after renderInterviews is defined
const pages = { dashboard: renderDashboard, students: renderStudents, companies: renderCompanies, jobs: renderJobs, applications: renderApplications, reports: renderReports, 'placed-portal': renderPlacedPortal, 'alumni-portal': renderAlumniPortal, 'student-home': renderStudentHome, 'student-jobs': renderStudentJobs, 'student-applications': renderStudentApps, 'student-profile': renderStudentProfile, 'student-resume': renderStudentResume, 'student-match': renderPlacementMatch, 'skills-portal': renderSkillsPortal, 'recruiter-home': renderRecruiterHome, 'recruiter-jobs': renderRecruiterJobs, 'recruiter-applicants': renderRecruiterApplicants };
let currentPage = 'dashboard';

// Init
document.addEventListener('DOMContentLoaded', () => {
  pages['interviews'] = renderInterviews;
  pages['placed-portal'] = renderPlacedPortal;
  pages['alumni-portal'] = renderAlumniPortal;
  pages['skills-portal'] = renderSkillsPortal;
  $('#logout-btn').addEventListener('click', handleLogout);
  $('#sidebar-toggle').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
  $('#sidebar-close').addEventListener('click', () => $('#sidebar').classList.remove('open'));
  $('#modal-close').addEventListener('click', closeModal);
  $('#modal-overlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
  $('#global-search').addEventListener('input', handleSearch);

  const saved = localStorage.getItem('pshell_current_user');
  if (saved) {
    try { currentUser = JSON.parse(saved); } catch (e) { currentUser = null; }
  }
  if (currentUser) {
    showApp();
    seedNotifications();
  }

  window.addEventListener('hashchange', () => {
    const page = location.hash.slice(1) || getDefaultPage();
    if (pages[page]) navigateTo(page);
  });
});

window.handleLogin = function (e) {
  if (e) e.preventDefault();
  const email = (document.getElementById('login-email').value || '').trim();
  const pass = (document.getElementById('login-password').value || '').trim();
  if (!email || !pass) { toast('Please enter your email and password', 'error'); return false; }

  const users = store.get('users');
  // Check if email exists at all
  const emailMatch = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!emailMatch) {
    // Email not registered — guide user to register
    toast('No account found with this email. Please register first! 👇', 'error');
    setTimeout(() => {
      switchTab('register');
      // Pre-fill email in register form
      const regEmail = document.getElementById('reg-email');
      if (regEmail) { regEmail.value = email; regEmail.focus(); }
      toast('Fill in your details to create an account ✨', 'info');
    }, 1200);
    return false;
  }
  // Email found but password wrong
  if (emailMatch.password !== pass) {
    toast('Incorrect password. Please try again.', 'error');
    const passEl = document.getElementById('login-password');
    if (passEl) { passEl.value = ''; passEl.focus(); }
    return false;
  }
  const user = emailMatch;
  // Auto switch role to user's registered role if different
  if (user.role && user.role !== selectedRole) {
    selectRole(user.role);
  }

  currentUser = { id: user.id, name: user.name, email: user.email, role: user.role, companyId: user.companyId, studentId: user.studentId };
  localStorage.setItem('pshell_current_user', JSON.stringify(currentUser));
  showApp();
  toast(`Welcome back, ${user.name}! 🎓`, 'success');
  return false;
};
function handleLogin(e) { return window.handleLogin(e); }

window.handleRegister = function (e) {
  if (e) e.preventDefault();
  const email = (document.getElementById('reg-email').value || '').trim();
  const pass = (document.getElementById('reg-password').value || '').trim();
  const confirm = (document.getElementById('reg-confirm').value || '').trim();
  if (!email || !pass) { toast('Email and password are required', 'error'); return false; }
  if (pass.length < 6) { toast('Password must be at least 6 characters', 'error'); return false; }
  if (pass !== confirm) { toast('Passwords do not match', 'error'); return false; }

  const users = store.get('users');
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    toast('An account with this email already exists. Please sign in instead.', 'error'); return false;
  }

  // Admin cannot register through this form
  if (selectedRole === 'admin') {
    toast('Admin accounts cannot be registered. Please contact the Placement Officer.', 'error');
    return false;
  }

  let newUserEntry = null;

  if (selectedRole === 'student') {
    const name = (document.getElementById('reg-name').value || '').trim();
    if (!name) { toast('Full name is required', 'error'); return false; }
    const rollNo = document.getElementById('reg-roll').value.trim();
    const dept = document.getElementById('reg-dept').value;
    const cgpa = parseFloat(document.getElementById('reg-cgpa').value) || 0;
    const batch = document.getElementById('reg-batch').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    // Add student record
    const student = store.add('students', { name, email, rollNo, dept, branch: '', cgpa, backlogs: 0, skills: '', status: 'Unplaced', company: '', salary: '', phone, batch, year: new Date().getFullYear(), tenth: '', twelfth: '', dob: '', linkedin: '' });
    // Add user account
    newUserEntry = { name, email, password: pass, role: 'student', studentId: student.id };
    store.add('users', newUserEntry);
    currentUser = { id: newUserEntry.id, name, email, role: 'student', studentId: student.id };
  } else if (selectedRole === 'recruiter') {
    const companyName = (document.getElementById('reg-company').value || '').trim();
    const industry = (document.getElementById('reg-industry').value || '').trim();
    if (!companyName) { toast('Company name is required', 'error'); return false; }
    const contactName = (document.getElementById('reg-contact-name').value || '').trim();
    const pkg = document.getElementById('reg-pkg').value.trim();
    const website = document.getElementById('reg-website').value.trim();
    const name = contactName || companyName;
    // Add company record
    const company = store.add('companies', { name: companyName, industry, website, pkg: pkg || 'TBD', contact: email, visitDate: '', status: 'Upcoming' });
    newUserEntry = { name, email, password: pass, role: 'recruiter', companyId: company.id };
    store.add('users', newUserEntry);
    currentUser = { id: newUserEntry.id, name, email, role: 'recruiter', companyId: company.id };
  } else {
    toast('Please select Student or Recruiter to register.', 'error');
    return false;
  }

  if (!currentUser) {
    toast('Registration failed. Please try again.', 'error');
    return false;
  }

  localStorage.setItem('pshell_current_user', JSON.stringify(currentUser));
  toast(`Account created! Welcome, ${currentUser.name} 🎉`, 'success');
  showApp();
  return false;
};

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('pshell_current_user');
  location.hash = '';
  document.getElementById('app').classList.add('hidden');
  document.getElementById('auth-screen').classList.remove('hidden');
  // Reset to default login state
  selectRole('student');
  switchTab('login');
}

function getDefaultPage() {
  if (!currentUser) return 'dashboard';
  if (currentUser.role === 'student') return 'student-home';
  if (currentUser.role === 'recruiter') return 'recruiter-home';
  return 'dashboard';
}

function showApp() {
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  // Update sidebar user info
  const avatar = document.getElementById('user-avatar');
  const uname = document.getElementById('user-name');
  const uemail = document.getElementById('user-email');
  if (avatar) {
    // Load student profile photo if saved
    if (currentUser.role === 'student' && currentUser.studentId) {
      const savedPhoto = localStorage.getItem('pshell_photo_' + currentUser.studentId);
      if (savedPhoto) {
        avatar.innerHTML = `<img src="${savedPhoto}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
      } else {
        avatar.textContent = (currentUser.name || 'U').charAt(0).toUpperCase();
      }
    } else {
      avatar.textContent = (currentUser.name || 'U').charAt(0).toUpperCase();
    }
  }
  if (uname) uname.textContent = currentUser.name || 'User';
  if (uemail) uemail.textContent = currentUser.role === 'admin' ? 'Placement Officer' : currentUser.role === 'recruiter' ? 'Recruiter' : 'Student';
  // Build nav based on role
  buildNav(currentUser.role);
  applyTheme(localStorage.getItem('placeme_theme') || 'dark');
  updateNotifBadge();
  const page = location.hash.slice(1) || getDefaultPage();
  navigateTo(pages[page] ? page : getDefaultPage());
}

const NAV_LINKS = {
  admin: [
    { page: 'dashboard', icon: 'ph ph-squares-four', label: 'Dashboard' },
    { page: 'students', icon: 'ph ph-student', label: 'Students' },
    { page: 'companies', icon: 'ph ph-buildings', label: 'Companies' },
    { page: 'jobs', icon: 'ph ph-briefcase', label: 'Job Listings' },
    { page: 'skills-portal', icon: 'ph ph-lightning', label: 'Skill Portal' },
    { page: 'applications', icon: 'ph ph-clipboard-text', label: 'Applications' },
    { page: 'interviews', icon: 'ph ph-calendar', label: 'Interviews' },
    { page: 'placed-portal', icon: 'ph ph-trophy', label: 'Current Placed Students' },
    { page: 'alumni-portal', icon: 'ph ph-graduation-cap', label: 'Passed-Out Students' },
    { page: 'reports', icon: 'ph ph-chart-bar', label: 'Reports' }
  ],
  student: [
    { page: 'student-home', icon: 'ph ph-house', label: 'My Dashboard' },
    { page: 'student-jobs', icon: 'ph ph-briefcase', label: 'Job Portal' },
    { page: 'skills-portal', icon: 'ph ph-lightning', label: 'Skill Portal' },
    { page: 'student-applications', icon: 'ph ph-clipboard-text', label: 'My Applications' },
    { page: 'student-resume', icon: 'ph ph-file-text', label: 'Resume Portal' },
    { page: 'student-match', icon: 'ph ph-magic-wand', label: 'Placement Match' },
    { page: 'student-profile', icon: 'ph ph-user-circle', label: 'My Profile' }
  ],
  recruiter: [
    { page: 'recruiter-home', icon: 'ph ph-house', label: 'Dashboard' },
    { page: 'recruiter-jobs', icon: 'ph ph-briefcase', label: 'My Job Posts' },
    { page: 'skills-portal', icon: 'ph ph-lightning', label: 'Skill Portal' },
    { page: 'recruiter-applicants', icon: 'ph ph-users-three', label: 'Applicants' }
  ]
};

function buildNav(role) {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;
  const links = NAV_LINKS[role] || NAV_LINKS.admin;
  nav.innerHTML = links.map(l => `
    <a href="#${l.page}" class="nav-link" data-page="${l.page}">
      <i class="${l.icon}"></i><span>${l.label}</span>
    </a>`).join('');
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(link.dataset.page);
      document.getElementById('sidebar').classList.remove('open');
    });
  });
}

function navigateTo(page) {
  currentPage = page;
  location.hash = page;
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.page === page));
  const titles = { dashboard: 'Dashboard', students: 'Students', companies: 'Companies', jobs: 'Job Listings', applications: 'Applications', interviews: 'Interviews', reports: 'Reports', 'placed-portal': 'Current Placed Students', 'alumni-portal': 'Alumni Portal', 'student-home': 'My Dashboard', 'student-jobs': 'Job Portal', 'student-applications': 'My Applications', 'student-profile': 'My Profile', 'student-resume': 'Resume Portal', 'student-match': 'Placement Matching Stats', 'skills-portal': 'Skill Portal', 'recruiter-home': 'Dashboard', 'recruiter-jobs': 'My Job Posts', 'recruiter-applicants': 'Applicants' };
  const pt = document.getElementById('page-title');
  if (pt) pt.textContent = titles[page] || (page.charAt(0).toUpperCase() + page.slice(1));
  const container = document.getElementById('page-container');
  if (container) container.innerHTML = '';
  if (pages[page]) pages[page]();
}

window.quickProfileSearch = function () {
  const query = $('#quick-search-input').value.trim();
  if (!query) return;
  const students = store.get('students');
  const found = students.find(s => s.rollNo?.toLowerCase() === query.toLowerCase() || s.name.toLowerCase().includes(query.toLowerCase()));
  if (found) { viewStudentProfile(found.id); }
  else { toast('Student not found with that Roll ID/Name', 'error'); }
};

let searchTimeout;
function handleSearch(e) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => { if (pages[currentPage]) pages[currentPage](e.target.value); }, 300);
}

// ===== MODAL =====
function openModal(title, bodyHTML) {
  $('#modal-title').textContent = title;
  $('#modal-body').innerHTML = bodyHTML;
  $('#modal-overlay').classList.remove('hidden');
}
function closeModal() { $('#modal-overlay').classList.add('hidden'); }

// ===== TOAST =====
function toast(msg, type = 'info') {
  const icons = { success: 'ph ph-check-circle', error: 'ph ph-x-circle', info: 'ph ph-info' };
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<i class="${icons[type]}"></i><span>${msg}</span>`;
  $('#toast-container').appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(60px)'; setTimeout(() => el.remove(), 300); }, 3000);
}

// ===== HELPERS =====
function getCompanyName(id) { const c = store.find('companies', id); return c ? c.name : 'Unknown'; }
function getStudentName(id) { const s = store.find('students', id); return s ? s.name : 'Unknown'; }
function getJobTitle(id) { const j = store.find('jobs', id); return j ? `${j.title} @ ${getCompanyName(j.companyId)}` : 'Unknown'; }
function exportCSV(headers, rows, filename) {
  const csv = [headers.join(','), ...rows.map(r => r.map(c => `"${c}"`).join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename; a.click();
}

// ===== SIMPLE CANVAS BAR CHART =====
function drawBarChart(canvas, labels, data, colors) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width = canvas.parentElement.clientWidth;
  const H = canvas.height = 250;
  const padding = { top: 20, right: 20, bottom: 50, left: 50 };
  const chartW = W - padding.left - padding.right;
  const chartH = H - padding.top - padding.bottom;
  const max = Math.max(...data, 1);

  ctx.clearRect(0, 0, W, H);

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const y = padding.top + (chartH / 5) * i;
    ctx.beginPath(); ctx.moveTo(padding.left, y); ctx.lineTo(W - padding.right, y); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.font = '11px Inter';
    ctx.textAlign = 'right';
    ctx.fillText(Math.round(max - (max / 5) * i), padding.left - 10, y + 4);
  }

  const barW = Math.min(50, (chartW / labels.length) * 0.6);
  const gap = chartW / labels.length;

  labels.forEach((label, i) => {
    const x = padding.left + gap * i + (gap - barW) / 2;
    const barH = (data[i] / max) * chartH;
    const y = padding.top + chartH - barH;

    // Bar with gradient
    const grad = ctx.createLinearGradient(x, y, x, padding.top + chartH);
    grad.addColorStop(0, colors[i % colors.length]);
    grad.addColorStop(1, colors[i % colors.length] + '33');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
    ctx.fill();

    // Value on top
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = 'bold 12px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(data[i], x + barW / 2, y - 6);

    // Label below
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '11px Inter';
    ctx.fillText(label, x + barW / 2, H - padding.bottom + 20);
  });
}

// ===== DONUT CHART =====
function drawDonutChart(canvas, labels, data, colors) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width = canvas.parentElement.clientWidth;
  const H = canvas.height = 250;
  const cx = W / 2, cy = H / 2 - 10, r = 80, inner = 50;
  const total = data.reduce((a, b) => a + b, 0) || 1;

  ctx.clearRect(0, 0, W, H);
  let startAngle = -Math.PI / 2;

  data.forEach((val, i) => {
    const sliceAngle = (val / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, startAngle, startAngle + sliceAngle);
    ctx.arc(cx, cy, inner, startAngle + sliceAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    startAngle += sliceAngle;
  });

  // Center text
  ctx.fillStyle = '#f0f0f5';
  ctx.font = 'bold 24px Inter';
  ctx.textAlign = 'center';
  ctx.fillText(total, cx, cy + 4);
  ctx.font = '11px Inter';
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.fillText('Total', cx, cy + 20);

  // Legend
  const legendY = H - 20;
  const legendStartX = cx - (labels.length * 70) / 2;
  labels.forEach((label, i) => {
    const lx = legendStartX + i * 80;
    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(lx, legendY - 6, 10, 10);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '10px Inter';
    ctx.textAlign = 'left';
    ctx.fillText(`${label} (${data[i]})`, lx + 14, legendY + 3);
  });
}

// ===== DASHBOARD =====
function renderDashboard() {
  const students = store.get('students');
  const companies = store.get('companies');
  const jobs = store.get('jobs');
  const apps = store.get('applications');
  const placedStudents = students.filter(s => s.status === 'Placed');
  const placedCount = placedStudents.length;
  const rate = students.length ? Math.round((placedCount / students.length) * 100) : 0;
  const activeJobs = jobs.filter(j => j.status === 'Active').length;

  const c = $('#page-container');
  c.innerHTML = `
    <!-- Top Bar: Welcome & Tech Stack -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px">
      <div>
        <h2 style="font-size:1.5rem; font-weight:800; margin-bottom:4px">Welcome back, Admin</h2>
        <p style="font-size:.85rem; color:var(--text-muted)">Here's what's happening with placements today.</p>
      </div>
      <div class="glass-card" style="padding:10px 16px; display:flex; align-items:center; gap:12px; border:1px solid var(--accent-cyan)33">
        <div style="width:32px; height:32px; border-radius:8px; background:var(--gradient-primary); display:flex; align-items:center; justify-content:center; color:#fff"><i class="ph ph-stack"></i></div>
        <div style="line-height:1.2">
          <div style="font-size:.7rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:.05em">System Stack</div>
          <div style="font-size:.85rem; font-weight:700">Node.js + MySQL <span style="color:var(--accent-green); font-size:.7rem">● Live</span></div>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="stats-grid">
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">Total Enrollment</span><i class="ph ph-student"></i></div>
        <div class="stat-card-value">${students.length}</div>
        <div class="stat-card-sub">${placedCount} Placed · ${students.length - placedCount} Seeking</div>
      </div>
      <div class="stat-card glass-card" style="border-bottom: 3px solid var(--accent-green)">
        <div class="stat-card-header"><span class="stat-card-label">Placement Success</span><i class="ph ph-trend-up"></i></div>
        <div class="stat-card-value" style="color:var(--accent-green)">${rate}%</div>
        <div class="progress-bar-wrapper" style="margin-top:8px; height:6px"><div class="progress-bar" style="width:${rate}%; background:var(--accent-green)"></div></div>
      </div>
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">Active Companies</span><i class="ph ph-buildings"></i></div>
        <div class="stat-card-value">${companies.length}</div>
        <div class="stat-card-sub">${companies.filter(co => co.status === 'Active').length} Currently Recruiting</div>
      </div>
      <div class="stat-card glass-card" style="border-bottom: 3px solid var(--accent-purple)">
        <div class="stat-card-header"><span class="stat-card-label">Open Roles</span><i class="ph ph-briefcase"></i></div>
        <div class="stat-card-value" style="color:var(--accent-purple)">${activeJobs}</div>
        <div class="stat-card-sub">New opportunities this batch</div>
      </div>
    </div>

    <div style="display:grid; grid-template-columns: 2fr 1fr; gap:24px; margin-top:24px">
      <!-- Main Content Area -->
      <div style="display:flex; flex-direction:column; gap:24px">
        
        <!-- Department Performance Chart -->
        <div class="glass-card" style="padding:24px">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px">
            <div style="font-weight:700; font-size:1.1rem; display:flex; align-items:center; gap:8px">
              <i class="ph ph-chart-bar" style="color:var(--accent-cyan)"></i> Department Performance
            </div>
            <button class="btn btn-secondary btn-sm" onclick="toast('Generating report...', 'info')"><i class="ph ph-download-simple"></i> Export</button>
          </div>
          <div id="dept-v-charts" style="display:flex; flex-direction:column; gap:16px">
            ${['CSE', 'IT', 'ECE', 'ME', 'EEE'].map(dept => {
    const dTotal = students.filter(s => s.dept === dept).length;
    if (dTotal === 0) return '';
    const dPlaced = students.filter(s => s.dept === dept && s.status === 'Placed').length;
    const dRate = Math.round((dPlaced / dTotal) * 100);
    const color = dept === 'CSE' ? 'var(--accent-cyan)' : dept === 'IT' ? 'var(--accent-purple)' : dept === 'ECE' ? 'var(--accent-pink)' : 'var(--accent-green)';
    return `
                <div style="display:flex; align-items:center; gap:12px">
                  <div style="width:40px; font-weight:700; font-size:.8rem">${dept}</div>
                  <div style="flex:1">
                    <div class="progress-bar-wrapper" style="height:14px; background:var(--bg-glass-heavy)">
                      <div class="progress-bar" style="width:${dRate}%; background:${color}; box-shadow:0 0 10px ${color}44">
                        <span style="font-size:.65rem; font-weight:800; color:#fff; position:absolute; right:8px; top:1px">${dRate}%</span>
                      </div>
                    </div>
                  </div>
                  <div style="width:60px; text-align:right; font-size:.75rem; color:var(--text-muted)">${dPlaced}/${dTotal}</div>
                </div>`;
  }).join('')}
          </div>
        </div>

        <!-- Recent Placements Horizontal Ribbon -->
        <div class="glass-card" style="padding:20px">
          <div style="font-weight:700; margin-bottom:16px; font-size:.95rem"><i class="ph ph-star" style="color:var(--accent-amber)"></i> Recent Success Stories</div>
          <div style="display:flex; gap:16px; overflow-x:auto; padding-bottom:8px" class="no-scrollbar">
            ${placedStudents.slice(-6).reverse().map(s => `
              <div style="min-width:200px; padding:12px; background:var(--bg-glass-heavy); border:1px solid var(--bg-glass-border); border-radius:12px; display:flex; align-items:center; gap:12px">
                <div style="width:40px; height:40px; border-radius:50%; background:var(--gradient-primary); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1rem; overflow:hidden">
                  ${localStorage.getItem('placeme_photo_' + s.id) ? `<img src="${localStorage.getItem('placeme_photo_' + s.id)}" style="width:100%; height:100%; object-fit:cover">` : s.name.charAt(0)}
                </div>
                <div>
                  <div style="font-size:.85rem; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:120px">${s.name}</div>
                  <div style="font-size:.72rem; color:var(--accent-green); font-weight:600">${s.company}</div>
                </div>
              </div>
            `).join('') || '<p style="color:var(--text-muted); font-size:.85rem">No placements recorded yet.</p>'}
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div style="display:flex; flex-direction:column; gap:24px">
        <!-- New Idea: Skill Trending Cloud -->
        <div class="glass-card" style="padding:20px">
          <div style="font-weight:700; margin-bottom:16px; font-size:.95rem"><i class="ph ph-lightning" style="color:var(--accent-amber)"></i> Top Skills in Demand</div>
          <div style="display:flex; flex-wrap:wrap; gap:8px">
            ${['React.js', 'Python', 'AWS', 'Java', 'SQL', 'Spring Boot', 'Node.js', 'Azure'].map(sk => `
              <span style="font-size:.7rem; font-weight:700; padding:4px 10px; border-radius:100px; background:var(--bg-glass-heavy); border:1px solid var(--bg-glass-border)">${sk}</span>
            `).join('')}
          </div>
          <div style="margin-top:16px; padding:12px; background:rgba(245,158,11,.05); border-radius:8px; font-size:.72rem; color:var(--accent-amber)">
            Insight: Companies are prioritizing <b>Cloud Skills</b> this quarter.
          </div>
        </div>

        <!-- Activity Feed -->
        <div class="glass-card" style="padding:20px">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px">
            <div style="font-weight:700; font-size:.95rem">Live Feed</div>
            <span class="badge" style="background:var(--accent-red)22; color:var(--accent-red); font-size:.65rem">LIVE</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:16px" id="dashboard-activity-feed">
            ${apps.slice(-4).reverse().map(a => {
    const student = store.find('students', a.studentId);
    const job = store.find('jobs', a.jobId);
    const statusColor = a.status === 'Placed' ? 'var(--accent-green)' : a.status === 'Rejected' ? 'var(--accent-red)' : 'var(--accent-cyan)';
    return `
                <div style="display:flex; gap:12px">
                  <div style="width:8px; height:8px; border-radius:50%; background:${statusColor}; margin-top:6px; flex-shrink:0"></div>
                  <div>
                    <div style="font-size:.8rem; line-height:1.4">
                      <b>${student ? student.name : 'Unknown'}</b> ${a.status.toLowerCase()} for <b>${job ? job.title : 'Position'}</b>
                    </div>
                    <div style="font-size:.68rem; color:var(--text-muted); margin-top:2px">${a.appliedDate}</div>
                  </div>
                </div>`;
  }).join('') || '<p style="color:var(--text-muted); font-size:.8rem">No recent activity.</p>'}
          </div>
        </div>
      </div>
    </div>`;
}

// ===== STUDENTS =====
function renderStudents(search = '') {
  let students = store.get('students');
  if (search) students = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || (s.dept || '').toLowerCase().includes(search.toLowerCase()) || (s.skills || '').toLowerCase().includes(search.toLowerCase()));

  const c = $('#page-container');
  c.innerHTML = `
    <div class="page-header">
      <div class="page-header-left">
        <div class="filter-group">
          <select id="filter-dept"><option value="">All Depts</option><option>CSE</option><option>ECE</option><option>IT</option><option>ME</option><option>EEE</option><option>CIVIL</option></select>
          <select id="filter-status"><option value="">All Status</option><option>Placed</option><option>Unplaced</option></select>
          <select id="sort-students"><option value="">Sort By</option><option value="name">Name</option><option value="cgpa">CGPA ↓</option><option value="dept">Department</option></select>
        </div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-secondary btn-sm" id="export-students-btn"><i class="ph ph-download"></i> Export CSV</button>
        <button class="btn btn-primary" id="add-student-btn"><i class="ph ph-plus"></i> Add Student</button>
      </div>
    </div>
    <div class="glass-card data-table-wrapper">
      <table class="data-table">
        <thead><tr><th>Name / Roll No</th><th>Dept / Branch</th><th>CGPA</th><th>Prediction</th><th>Skills</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody id="students-tbody"></tbody>
      </table>
    </div>`;

  function renderTable(data) {
    $('#students-tbody').innerHTML = data.length ? data.map(s => `<tr>
      <td class="name-cell">${s.name}<br><span style="font-size:0.72rem;color:var(--accent-cyan)">${s.rollNo || '—'}</span></td>
      <td>${s.dept}<br><span style="font-size:0.7rem;color:var(--text-muted)">${s.branch || ''}</span></td>
      <td style="font-size:0.82rem">${s.batch || s.year || '—'}</td>
      <td style="font-weight:700">${s.cgpa}</td>
      <td style="font-size:0.8rem; font-weight:700; color:var(--accent-cyan)">Excellent Fit</td>
      <td style="font-size:0.82rem;max-width:140px;white-space:normal">${(s.skills || '—')}</td>
      <td><span class="badge badge-${(s.status || 'unplaced').toLowerCase()}">${s.status || 'Unplaced'}</span></td>
      <td class="actions-cell">
        <button class="btn-icon" title="View Profile" onclick="viewStudentProfile(${s.id})"><i class="ph ph-eye"></i></button>
        <button class="btn-icon" title="Edit" onclick="openStudentModal(${s.id})"><i class="ph ph-pencil-simple"></i></button>
        <button class="btn-icon" title="Delete" onclick="deleteStudent(${s.id})"><i class="ph ph-trash"></i></button>
      </td></tr>`).join('') : '<tr><td colspan="8"><div class="empty-state"><i class="ph ph-student"></i><p>No students found</p></div></td></tr>';
  }

  renderTable(students);

  // Filters
  const applyFilters = () => {
    let filtered = store.get('students');
    const dept = $('#filter-dept').value;
    const status = $('#filter-status').value;
    const sort = $('#sort-students').value;
    if (dept) filtered = filtered.filter(s => s.dept === dept);
    if (status) filtered = filtered.filter(s => s.status === status);
    if (search) filtered = filtered.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));
    if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'cgpa') filtered.sort((a, b) => b.cgpa - a.cgpa);
    if (sort === 'dept') filtered.sort((a, b) => a.dept.localeCompare(b.dept));
    renderTable(filtered);
  };

  $('#filter-dept').addEventListener('change', applyFilters);
  $('#filter-status').addEventListener('change', applyFilters);
  $('#sort-students').addEventListener('change', applyFilters);
  $('#add-student-btn').addEventListener('click', () => openStudentModal());
  $('#export-students-btn').addEventListener('click', () => {
    const data = store.get('students');
    exportCSV(['Name', 'Email', 'Dept', 'CGPA', 'Skills', 'Status', 'Company', 'Phone'], data.map(s => [s.name, s.email, s.dept, s.cgpa, s.skills, s.status, s.company, s.phone]), 'students.csv');
    toast('Students exported!', 'success');
  });
}

window.viewStudentProfile = function (id) {
  const s = store.find('students', id);
  if (!s) return;
  const apps = store.get('applications').filter(a => a.studentId === id);
  openModal(`👤 ${s.name} — Detailed Profile`, `
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;font-size:0.88rem">
      <div style="grid-column:1/span 2"><span style="color:var(--text-muted);font-size:0.7rem">FULL NAME & ROLL NO</span><div style="font-weight:700;font-size:1.1rem">${s.name} <span style="color:var(--accent-cyan)">(${s.rollNo || '—'})</span></div></div>
      <div><span style="color:var(--text-muted);font-size:0.7rem">DATE OF BIRTH</span><div style="font-weight:600">${s.dob || '—'}</div></div>
      
      <div><span style="color:var(--text-muted);font-size:0.7rem">DEPARTMENT</span><div style="font-weight:600">${s.dept}</div></div>
      <div style="grid-column:2/span 2"><span style="color:var(--text-muted);font-size:0.7rem">BRANCH / SPECIALIZATION</span><div style="font-weight:600">${s.branch || 'General'}</div></div>
      
      <div><span style="color:var(--text-muted);font-size:0.7rem">CURRENT CGPA</span><div style="font-weight:800;font-size:1.3rem;color:var(--accent-green)">${s.cgpa}</div></div>
      <div><span style="color:var(--text-muted);font-size:0.7rem">ACTIVE BACKLOGS</span><div style="font-weight:700;color:${s.backlogs > 0 ? 'var(--accent-red)' : 'var(--accent-green)'}">${s.backlogs || 0}</div></div>
      <div><span style="color:var(--text-muted);font-size:0.7rem">BATCH YEAR</span><div style="font-weight:600">${s.batch || s.year || '—'}</div></div>

      <div style="background:rgba(255,255,255,0.02);padding:10px;border-radius:8px"><span style="color:var(--text-muted);font-size:0.65rem">10th SCORE</span><div style="font-weight:700">${s.tenth ? s.tenth + '%' : '—'}</div></div>
      <div style="background:rgba(255,255,255,0.02);padding:10px;border-radius:8px"><span style="color:var(--text-muted);font-size:0.65rem">12th SCORE</span><div style="font-weight:700">${s.twelfth ? s.twelfth + '%' : '—'}</div></div>
      <div style="background:rgba(255,255,255,0.02);padding:10px;border-radius:8px"><span style="color:var(--text-muted);font-size:0.65rem">EXPECTED PACKAGE</span><div style="font-weight:700;color:var(--accent-cyan)">${s.salary || '—'}</div></div>


      <div style="grid-column:1/span 2"><span style="color:var(--text-muted);font-size:0.7rem">EMAIL ADDRESS</span><div style="font-weight:500;color:var(--accent-cyan)">${s.email}</div></div>
      <div><span style="color:var(--text-muted);font-size:0.7rem">CONTACT NO</span><div style="font-weight:600">${s.phone || '—'}</div></div>

      <div style="grid-column:1/-1"><span style="color:var(--text-muted);font-size:0.7rem">TECHNICAL SKILLSET</span><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px">${(s.skills || '').split(',').filter(Boolean).map(sk => `<span class="badge badge-applied" style="background:rgba(0,212,255,0.08)">${sk.trim()}</span>`).join('') || '<span style="color:var(--text-muted)">No skills listed</span>'}</div></div>
      
      <div style="grid-column:1/-1;border-top:1px solid var(--bg-glass-border);padding-top:12px;margin-top:8px"><span style="color:var(--text-muted);font-size:0.7rem">APPLICATION STATUS: <span class="${s.status === 'Placed' ? 'accent' : ''}" style="font-weight:700">${s.status}</span> ${s.company ? `towards <strong>${s.company}</strong> (Expected)` : ''}</span></div>

      
      <div style="grid-column:1/-1;background:rgba(0,0,0,0.2);padding:12px;border-radius:12px">
         <span style="color:var(--text-secondary);font-weight:600;font-size:0.75rem">PLACEMENT LOG (${apps.length})</span>
         ${apps.length ? `<div style="margin-top:8px">${apps.map(a => `<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03);font-size:0.8rem"><span>${getJobTitle(a.jobId)}</span><span class="badge badge-${a.status.toLowerCase()}" style="font-size:0.65rem">${a.status}</span></div>`).join('')}</div>` : '<div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px">No application records found.</div>'}
      </div>
    </div>
    <div style="margin-top:16px;display:flex;gap:8px;justify-content:flex-end">
      <button class="btn btn-secondary btn-sm" onclick="closeModal()">Close</button>
      <button class="btn btn-primary btn-sm" onclick="closeModal();openStudentModal(${id})">Update Details</button>
    </div>`);
};

window.openStudentModal = function (id) {
  const s = id ? store.find('students', id) : {
    name: '', email: '', dept: 'CSE', branch: '', cgpa: '', backlogs: 0,
    skills: '', status: 'Unplaced', company: '', salary: '', phone: '',
    year: 2026, rollNo: '', batch: '2022-2026', tenth: '', twelfth: '',
    dob: '', linkedin: ''
  };

  const depts = ['CSE', 'IT', 'ECE', 'EEE', 'ME', 'CIVIL', 'MCA'];

  openModal(id ? '✏️ Edit Student Details' : '➕ Add New Student', `
    <form id="student-form" autocomplete="off">

      <!-- Section: Personal Info -->
      <div style="font-size:.75rem;font-weight:700;color:var(--accent-cyan);letter-spacing:.08em;text-transform:uppercase;margin-bottom:10px;display:flex;align-items:center;gap:6px">
        <i class="ph ph-user-circle"></i> Personal Information
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Full Name <span style="color:var(--accent-red)">*</span></label>
          <div class="input-wrapper"><i class="ph ph-user"></i>
            <input name="name" value="${s.name}" placeholder="e.g. Aarav Sharma" required>
          </div>
        </div>
        <div class="form-group">
          <label>Roll Number <span style="color:var(--accent-red)">*</span></label>
          <div class="input-wrapper"><i class="ph ph-identification-card"></i>
            <input name="rollNo" value="${s.rollNo || ''}" placeholder="e.g. CS22001" required>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Date of Birth</label>
          <div class="input-wrapper"><i class="ph ph-calendar-blank"></i>
            <input type="date" name="dob" value="${s.dob || ''}">
          </div>
        </div>
        <div class="form-group">
          <label>Batch / Year</label>
          <div class="input-wrapper"><i class="ph ph-graduation-cap"></i>
            <input name="batch" value="${s.batch || ''}" placeholder="e.g. 2022-2026">
          </div>
        </div>
      </div>

      <!-- Section: Academic Info -->
      <div style="font-size:.75rem;font-weight:700;color:var(--accent-purple);letter-spacing:.08em;text-transform:uppercase;margin:16px 0 10px;display:flex;align-items:center;gap:6px">
        <i class="ph ph-books"></i> Academic Information
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Department <span style="color:var(--accent-red)">*</span></label>
          <div class="input-wrapper"><i class="ph ph-tree-structure"></i>
            <select name="dept">
              ${depts.map(d => `<option ${s.dept === d ? 'selected' : ''}>${d}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Branch / Specialization</label>
          <div class="input-wrapper"><i class="ph ph-branch"></i>
            <input name="branch" value="${s.branch || ''}" placeholder="e.g. AI & ML">
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>CGPA <span style="color:var(--accent-red)">*</span></label>
          <div class="input-wrapper"><i class="ph ph-chart-line-up"></i>
            <input type="number" step="0.01" min="0" max="10" name="cgpa" value="${s.cgpa}" placeholder="0.00 – 10.00" required>
          </div>
        </div>
        <div class="form-group">
          <label>Active Backlogs / Arrears</label>
          <div class="input-wrapper"><i class="ph ph-warning"></i>
            <input type="number" min="0" name="backlogs" value="${s.backlogs || 0}" placeholder="0">
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>10th Mark (%)</label>
          <div class="input-wrapper"><i class="ph ph-exam"></i>
            <input type="number" step="0.1" min="0" max="100" name="tenth" value="${s.tenth || ''}" placeholder="e.g. 88.5">
          </div>
        </div>
        <div class="form-group">
          <label>12th Mark (%)</label>
          <div class="input-wrapper"><i class="ph ph-exam"></i>
            <input type="number" step="0.1" min="0" max="100" name="twelfth" value="${s.twelfth || ''}" placeholder="e.g. 91.0">
          </div>
        </div>
      </div>

      <!-- Section: Contact -->
      <div style="font-size:.75rem;font-weight:700;color:var(--accent-amber);letter-spacing:.08em;text-transform:uppercase;margin:16px 0 10px;display:flex;align-items:center;gap:6px">
        <i class="ph ph-phone"></i> Contact Details
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Email ID <span style="color:var(--accent-red)">*</span></label>
          <div class="input-wrapper"><i class="ph ph-envelope"></i>
            <input type="email" name="email" value="${s.email}" placeholder="student@college.edu" required>
          </div>
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <div class="input-wrapper"><i class="ph ph-device-mobile"></i>
            <input name="phone" value="${s.phone || ''}" placeholder="10-digit mobile">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>LinkedIn Profile URL</label>
        <div class="input-wrapper"><i class="ph ph-linkedin-logo"></i>
          <input name="linkedin" value="${s.linkedin || ''}" placeholder="linkedin.com/in/yourname">
        </div>
      </div>

      <!-- Section: Skills & Status -->
      <div style="font-size:.75rem;font-weight:700;color:var(--accent-green);letter-spacing:.08em;text-transform:uppercase;margin:16px 0 10px;display:flex;align-items:center;gap:6px">
        <i class="ph ph-lightning"></i> Skills & Placement Status
      </div>
      <div class="form-group">
        <label>Technical Skills <span style="color:var(--accent-red)">*</span></label>
        <div id="profile-skills-box"></div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Placement Status</label>
          <div class="input-wrapper"><i class="ph ph-flag"></i>
            <select name="status">
              <option ${s.status === 'Unplaced' ? 'selected' : ''}>Unplaced</option>
              <option ${s.status === 'Placed' ? 'selected' : ''}>Placed</option>
              <option ${s.status === 'Shortlisted' ? 'selected' : ''}>Shortlisted</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Expected Offer Package (LPA)</label>
          <div class="input-wrapper"><i class="ph ph-currency-inr"></i>
            <input name="salary" value="${s.salary || ''}" placeholder="e.g. 12 LPA">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>Expected Company</label>
        <div class="input-wrapper"><i class="ph ph-buildings"></i>
          <input name="company" value="${s.company || ''}" placeholder="e.g. Google, TCS, Infosys">
        </div>
      </div>


      <button type="submit" class="btn btn-primary btn-full" style="margin-top:8px">
        <i class="ph ph-floppy-disk"></i> ${id ? 'Update Student Details' : 'Register Student'}
      </button>
    </form>`);

  setTimeout(() => window.initSkillSelector('profile-skills-box', s.skills), 0);

  $('#student-form').addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd);
    data.cgpa = parseFloat(data.cgpa);
    data.backlogs = parseInt(data.backlogs) || 0;
    data.tenth = data.tenth ? parseFloat(data.tenth) : '';
    data.twelfth = data.twelfth ? parseFloat(data.twelfth) : '';
    // Skills are already in the hidden input with name "skills"
    if (id) { store.update('students', id, data); toast('Student details updated ✅', 'success'); }
    else { store.add('students', data); toast('New student registered 🎓', 'success'); }
    closeModal(); renderStudents();
  });
};



window.deleteStudent = function (id) {
  if (confirm('Delete this student?')) { store.remove('students', id); toast('Student removed', 'info'); renderStudents(); }
};

// ===== COMPANIES =====
function renderCompanies(search = '') {
  let companies = store.get('companies');
  if (search) companies = companies.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.industry.toLowerCase().includes(search.toLowerCase()));

  const c = $('#page-container');
  c.innerHTML = `
    <div class="page-header">
      <div class="filter-group">
        <select id="filter-co-status"><option value="">All Status</option><option>Active</option><option>Closed</option><option>Upcoming</option></select>
      </div>
      <button class="btn btn-primary" id="add-company-btn"><i class="ph ph-plus"></i> Add Company</button>
    </div>
    <div class="glass-card data-table-wrapper">
      <table class="data-table">
        <thead><tr><th>Company</th><th>Industry</th><th>Package</th><th>Visit Date</th><th>Status</th><th>Contact</th><th>Actions</th></tr></thead>
        <tbody id="companies-tbody"></tbody>
      </table>
    </div>`;

  function renderTable(data) {
    $('#companies-tbody').innerHTML = data.length ? data.map(co => `<tr>
      <td class="name-cell">${co.name}<br><span style="font-size:0.75rem;color:var(--text-muted)">${co.website}</span></td>
      <td>${co.industry}</td><td><strong style="color:var(--accent-green)">${co.pkg}</strong></td><td>${co.visitDate}</td>
      <td><span class="badge badge-${co.status.toLowerCase()}">${co.status}</span></td><td style="font-size:0.82rem">${co.contact}</td>
      <td class="actions-cell">
        <button class="btn-icon" onclick="openCompanyModal(${co.id})"><i class="ph ph-pencil-simple"></i></button>
        <button class="btn-icon" onclick="deleteCompany(${co.id})"><i class="ph ph-trash"></i></button>
      </td></tr>`).join('') : '<tr><td colspan="7"><div class="empty-state"><i class="ph ph-buildings"></i><p>No companies found</p></div></td></tr>';
  }
  renderTable(companies);

  $('#filter-co-status').addEventListener('change', () => {
    const v = $('#filter-co-status').value;
    renderTable(v ? store.get('companies').filter(c => c.status === v) : store.get('companies'));
  });
  $('#add-company-btn').addEventListener('click', () => openCompanyModal());
}

window.openCompanyModal = function (id) {
  const co = id ? store.find('companies', id) : { name: '', industry: '', website: '', pkg: '', contact: '', visitDate: '', status: 'Active' };
  openModal(id ? 'Edit Company' : 'Add Company', `
    <form id="company-form">
      <div class="form-row"><div class="form-group"><label>Company Name</label><input name="name" value="${co.name}" required></div>
      <div class="form-group"><label>Industry</label><input name="industry" value="${co.industry}" required></div></div>
      <div class="form-row"><div class="form-group"><label>Package Offered</label><input name="pkg" value="${co.pkg}" placeholder="e.g. 12 LPA" required></div>
      <div class="form-group"><label>Visit Date</label><input type="date" name="visitDate" value="${co.visitDate}" required></div></div>
      <div class="form-row"><div class="form-group"><label>Website</label><input name="website" value="${co.website}"></div>
      <div class="form-group"><label>Contact Email</label><input name="contact" value="${co.contact}"></div></div>
      <div class="form-group"><label>Status</label><select name="status"><option ${co.status === 'Active' ? 'selected' : ''}>Active</option><option ${co.status === 'Closed' ? 'selected' : ''}>Closed</option><option ${co.status === 'Upcoming' ? 'selected' : ''}>Upcoming</option></select></div>
      <button type="submit" class="btn btn-primary btn-full">${id ? 'Update' : 'Add'} Company</button>
    </form>`);
  $('#company-form').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (id) { store.update('companies', id, data); toast('Company updated', 'success'); }
    else { store.add('companies', data); toast('Company added', 'success'); }
    closeModal(); renderCompanies();
  });
};

window.deleteCompany = function (id) {
  if (confirm('Delete this company?')) { store.remove('companies', id); toast('Company removed', 'info'); renderCompanies(); }
};

// ===== JOBS =====
function renderJobs(search = '') {
  let jobs = store.get('jobs');
  if (search) jobs = jobs.filter(j => j.title.toLowerCase().includes(search.toLowerCase()) || getCompanyName(j.companyId).toLowerCase().includes(search.toLowerCase()));

  const companies = store.get('companies');
  const apps = store.get('applications');
  const c = $('#page-container');
  c.innerHTML = `
    <div class="page-header">
      <div class="filter-group">
        <select id="filter-job-status"><option value="">All Status</option><option>Active</option><option>Closed</option><option>Upcoming</option></select>
        <select id="filter-job-type"><option value="">All Types</option><option>Full-time</option><option>Internship</option><option>Part-time</option></select>
      </div>
      <button class="btn btn-primary" id="add-job-btn"><i class="ph ph-plus"></i> Post Job</button>
    </div>
    <div class="glass-card data-table-wrapper">
      <table class="data-table">
        <thead><tr><th>Position</th><th>Company</th><th>Departments</th><th>Min CGPA</th><th>Type</th><th>Deadline</th><th>Applicants</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody id="jobs-tbody"></tbody>
      </table>
    </div>`;

  function renderTable(data) {
    $('#jobs-tbody').innerHTML = data.length ? data.map(j => {
      const appCount = apps.filter(a => a.jobId === j.id).length;
      const placedCount = apps.filter(a => a.jobId === j.id && a.status === 'Placed').length;
      return `<tr>
      <td class="name-cell">${j.title}<br><span style="font-size:0.72rem;color:var(--text-muted)">${j.desc}</span></td>
      <td><strong>${getCompanyName(j.companyId)}</strong></td>
      <td style="font-size:0.82rem">${j.dept}</td>
      <td><strong>${j.minCgpa}</strong></td>
      <td>${j.type}</td><td>${j.deadline}</td>
      <td><span style="color:var(--accent-cyan)">${appCount}</span> <span style="color:var(--text-muted);font-size:0.78rem">(${placedCount} placed)</span></td>
      <td><span class="badge badge-${j.status.toLowerCase()}">${j.status}</span></td>
      <td class="actions-cell">
        <button class="btn-icon" title="Check Eligible Students" onclick="showEligible(${j.id})"><i class="ph ph-users-three"></i></button>
        <button class="btn-icon" title="Edit" onclick="openJobModal(${j.id})"><i class="ph ph-pencil-simple"></i></button>
        <button class="btn-icon" title="Delete" onclick="deleteJob(${j.id})"><i class="ph ph-trash"></i></button>
      </td></tr>`;
    }).join('') : '<tr><td colspan="9"><div class="empty-state"><i class="ph ph-briefcase"></i><p>No jobs found</p></div></td></tr>';
  }
  renderTable(jobs);

  $('#filter-job-status').addEventListener('change', () => {
    let filtered = store.get('jobs');
    const s = $('#filter-job-status').value;
    const t = $('#filter-job-type').value;
    if (s) filtered = filtered.filter(j => j.status === s);
    if (t) filtered = filtered.filter(j => j.type === t);
    renderTable(filtered);
  });
  $('#filter-job-type').addEventListener('change', () => $('#filter-job-status').dispatchEvent(new Event('change')));
  $('#add-job-btn').addEventListener('click', () => openJobModal());
}

// Eligibility checker — matches student dept & CGPA against job requirements
window.showEligible = function (jobId) {
  const job = store.find('jobs', jobId);
  if (!job) return;
  const students = store.get('students');
  const jobDepts = job.dept.split(',').map(d => d.trim());
  const eligible = students.filter(s => jobDepts.includes(s.dept) && s.cgpa >= job.minCgpa);
  const alreadyApplied = store.get('applications').filter(a => a.jobId === jobId).map(a => a.studentId);

  openModal(`Eligible Students — ${job.title}`, `
    <p style="color:var(--text-secondary);margin-bottom:16px;font-size:0.88rem">
      Showing students matching <strong>${job.dept}</strong> with CGPA ≥ <strong>${job.minCgpa}</strong>
    </p>
    ${eligible.length ? `<table class="data-table" style="font-size:0.85rem">
      <thead><tr><th>Name</th><th>Dept</th><th>CGPA</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${eligible.map(s => {
    const applied = alreadyApplied.includes(s.id);
    return `<tr>
          <td class="name-cell">${s.name}</td><td>${s.dept}</td><td>${s.cgpa}</td>
          <td><span class="badge badge-${s.status.toLowerCase()}">${s.status}</span></td>
          <td>${applied ? '<span class="badge badge-applied">Applied</span>' :
        `<button class="btn btn-sm btn-primary" onclick="quickApply(${s.id},${jobId})">Apply</button>`}</td>
        </tr>`;
  }).join('')}</tbody>
    </table>` : '<div class="empty-state"><p>No eligible students found</p></div>'}
    <p style="margin-top:16px;font-size:0.78rem;color:var(--text-muted)">${eligible.length} eligible · ${alreadyApplied.length} already applied</p>`);
};

window.quickApply = function (studentId, jobId) {
  store.add('applications', { studentId, jobId, status: 'Applied', appliedDate: new Date().toISOString().split('T')[0] });
  toast('Application submitted!', 'success');
  showEligible(jobId);
};

window.openJobModal = function (id) {
  const j = id ? store.find('jobs', id) : { title: '', companyId: '', dept: 'CSE', minCgpa: 6.0, type: 'Full-time', deadline: '', status: 'Active', desc: '' };
  const companies = store.get('companies');
  openModal(id ? 'Edit Job' : 'Post New Job', `
    <form id="job-form">
      <div class="form-row"><div class="form-group"><label>Job Title</label><input name="title" value="${j.title}" required></div>
      <div class="form-group"><label>Company</label><select name="companyId">${companies.map(c => `<option value="${c.id}" ${j.companyId == c.id ? 'selected' : ''}>${c.name}</option>`).join('')}</select></div></div>
      <div class="form-group"><label>Description</label><textarea name="desc">${j.desc}</textarea></div>
      <div class="form-row"><div class="form-group"><label>Eligible Depts (comma-sep)</label><input name="dept" value="${j.dept}" required></div>
      <div class="form-group"><label>Min CGPA</label><input type="number" step="0.1" min="0" max="10" name="minCgpa" value="${j.minCgpa}" required></div></div>
      <div class="form-row"><div class="form-group"><label>Job Type</label><select name="type"><option ${j.type === 'Full-time' ? 'selected' : ''}>Full-time</option><option ${j.type === 'Internship' ? 'selected' : ''}>Internship</option><option ${j.type === 'Part-time' ? 'selected' : ''}>Part-time</option></select></div>
      <div class="form-group"><label>Deadline</label><input type="date" name="deadline" value="${j.deadline}" required></div></div>
      <div class="form-group"><label>Status</label><select name="status"><option ${j.status === 'Active' ? 'selected' : ''}>Active</option><option ${j.status === 'Closed' ? 'selected' : ''}>Closed</option><option ${j.status === 'Upcoming' ? 'selected' : ''}>Upcoming</option></select></div>
      <button type="submit" class="btn btn-primary btn-full">${id ? 'Update' : 'Post'} Job</button>
    </form>`);
  $('#job-form').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.companyId = parseInt(data.companyId);
    data.minCgpa = parseFloat(data.minCgpa);
    if (id) { store.update('jobs', id, data); toast('Job updated', 'success'); }
    else { store.add('jobs', data); toast('Job posted', 'success'); }
    closeModal(); renderJobs();
  });
};

window.deleteJob = function (id) {
  if (confirm('Delete this job listing?')) { store.remove('jobs', id); toast('Job removed', 'info'); renderJobs(); }
};

// ===== APPLICATIONS (Advanced Pipeline) =====
function renderApplications(search = '') {
  let apps = store.get('applications');
  const statusFlow = ['Applied', 'Shortlisted', 'Interviewed', 'Placed', 'Rejected'];
  const c = $('#page-container');

  c.innerHTML = `
    <div class="page-header">
      <div class="filter-group">
        <select id="filter-app-status"><option value="">All Statuses</option>${statusFlow.map(s => `<option>${s}</option>`).join('')}</select>
        <select id="filter-app-job"><option value="">All Jobs</option>${store.get('jobs').map(j => `<option value="${j.id}">${j.title} @ ${getCompanyName(j.companyId)}</option>`).join('')}</select>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-secondary btn-sm" id="export-apps-btn"><i class="ph ph-download"></i> Export</button>
        <button class="btn btn-primary" id="add-app-btn"><i class="ph ph-plus"></i> New Application</button>
      </div>
    </div>
    <div class="stats-grid" style="margin-bottom:24px">
      ${statusFlow.map((s, i) => {
    const count = apps.filter(a => a.status === s).length;
    const colors = ['var(--accent-cyan)', 'var(--accent-purple)', 'var(--accent-amber)', 'var(--accent-green)', 'var(--accent-red)'];
    return `<div class="stat-card glass-card" style="cursor:pointer" onclick="document.querySelector('#filter-app-status').value='${s}';document.querySelector('#filter-app-status').dispatchEvent(new Event('change'))">
          <div class="stat-card-header"><span class="stat-card-label">${s}</span></div>
          <div class="stat-card-value" style="color:${colors[i]}">${count}</div>
        </div>`;
  }).join('')}
    </div>
    <div class="glass-card data-table-wrapper">
      <table class="data-table">
        <thead><tr><th>Student</th><th>Job Position</th><th>Applied Date</th><th>Status</th><th>Pipeline</th><th>Actions</th></tr></thead>
        <tbody id="apps-tbody"></tbody>
      </table>
    </div>`;

  function renderTable(data) {
    $('#apps-tbody').innerHTML = data.length ? data.map(a => {
      const student = store.find('students', a.studentId);
      const sName = student ? student.name : 'Unknown';
      const curIdx = statusFlow.indexOf(a.status);
      const pipeline = statusFlow.slice(0, -1).map((s, i) => {
        let cls = 'pipeline-dot';
        if (i < curIdx || (a.status === 'Placed' && i <= 3)) cls += ' done';
        else if (i === curIdx) cls += ' active';
        if (a.status === 'Rejected' && i === curIdx) cls += ' rejected';
        return `<span class="${cls}" title="${s}"></span>`;
      }).join('<span class="pipeline-line"></span>');

      return `<tr>
        <td class="name-cell">${sName}</td>
        <td>${getJobTitle(a.jobId)}</td>
        <td>${a.appliedDate}</td>
        <td><span class="badge badge-${a.status.toLowerCase()}">${a.status}</span></td>
        <td><div class="pipeline">${pipeline}</div></td>
        <td class="actions-cell">
          ${a.status !== 'Placed' && a.status !== 'Rejected' ? `<button class="btn btn-sm btn-success" onclick="advanceApp(${a.id})"><i class="ph ph-arrow-right"></i> Advance</button>` : ''}
          ${a.status !== 'Placed' && a.status !== 'Rejected' ? `<button class="btn btn-sm btn-danger" onclick="rejectApp(${a.id})"><i class="ph ph-x"></i></button>` : ''}
          <button class="btn-icon" onclick="deleteApp(${a.id})"><i class="ph ph-trash"></i></button>
        </td></tr>`;
    }).join('') : '<tr><td colspan="6"><div class="empty-state"><i class="ph ph-clipboard-text"></i><p>No applications found</p></div></td></tr>';
  }
  renderTable(apps);

  const applyFilters = () => {
    let filtered = store.get('applications');
    const status = $('#filter-app-status').value;
    const jobId = $('#filter-app-job').value;
    if (status) filtered = filtered.filter(a => a.status === status);
    if (jobId) filtered = filtered.filter(a => a.jobId == jobId);
    renderTable(filtered);
  };
  $('#filter-app-status').addEventListener('change', applyFilters);
  $('#filter-app-job').addEventListener('change', applyFilters);

  $('#add-app-btn').addEventListener('click', () => {
    const students = store.get('students');
    const jobs = store.get('jobs');
    openModal('New Application', `
      <form id="app-form">
        <div class="form-group"><label>Student</label><select name="studentId">${students.map(s => `<option value="${s.id}">${s.name} (${s.dept})</option>`).join('')}</select></div>
        <div class="form-group"><label>Job</label><select name="jobId">${jobs.map(j => `<option value="${j.id}">${j.title} @ ${getCompanyName(j.companyId)}</option>`).join('')}</select></div>
        <button type="submit" class="btn btn-primary btn-full">Submit Application</button>
      </form>`);
    $('#app-form').addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      data.studentId = parseInt(data.studentId);
      data.jobId = parseInt(data.jobId);
      data.status = 'Applied';
      data.appliedDate = new Date().toISOString().split('T')[0];
      // Check duplicate
      const exists = store.get('applications').find(a => a.studentId === data.studentId && a.jobId === data.jobId);
      if (exists) { toast('Student already applied for this job', 'error'); return; }
      store.add('applications', data);
      toast('Application created', 'success');
      closeModal(); renderApplications();
    });
  });

  $('#export-apps-btn').addEventListener('click', () => {
    exportCSV(['Student', 'Job', 'Status', 'Applied Date'],
      store.get('applications').map(a => [getStudentName(a.studentId), getJobTitle(a.jobId), a.status, a.appliedDate]),
      'applications.csv');
    toast('Applications exported!', 'success');
  });
}

window.advanceApp = function (id) {
  const flow = ['Applied', 'Shortlisted', 'Interviewed', 'Placed'];
  const app = store.find('applications', id);
  if (!app) return;
  const idx = flow.indexOf(app.status);
  if (idx < flow.length - 1) {
    const newStatus = flow[idx + 1];
    store.update('applications', id, { status: newStatus });
    if (newStatus === 'Placed') {
      const job = store.find('jobs', app.jobId);
      if (job) store.update('students', app.studentId, { status: 'Placed', company: getCompanyName(job.companyId) });
    }
    toast(`Application advanced to ${newStatus}`, 'success');
    renderApplications();
  }
};

window.rejectApp = function (id) {
  if (confirm('Reject this application?')) {
    store.update('applications', id, { status: 'Rejected' });
    toast('Application rejected', 'info');
    renderApplications();
  }
};

window.deleteApp = function (id) {
  if (confirm('Delete this application?')) { store.remove('applications', id); toast('Application deleted', 'info'); renderApplications(); }
};

// ===== REPORTS (Advanced Analytics) =====
function renderReports() {
  const students = store.get('students');
  const companies = store.get('companies');
  const apps = store.get('applications');
  const jobs = store.get('jobs');
  const placed = students.filter(s => s.status === 'Placed');
  const depts = [...new Set(students.map(s => s.dept))];

  // Compute advanced metrics
  const avgCgpaPlaced = placed.length ? (placed.reduce((sum, s) => sum + s.cgpa, 0) / placed.length).toFixed(2) : '—';
  const avgCgpaAll = students.length ? (students.reduce((sum, s) => sum + s.cgpa, 0) / students.length).toFixed(2) : '—';
  const highestPkg = companies.length ? companies.reduce((max, c) => { const v = parseFloat(c.pkg); return v > max ? v : max; }, 0) : 0;
  const avgPkg = companies.length ? (companies.reduce((sum, c) => sum + parseFloat(c.pkg), 0) / companies.length).toFixed(1) : 0;

  const c = $('#page-container');
  c.innerHTML = `
    <div class="stats-grid" style="margin-bottom:24px">
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">Placement Rate</span><i class="ph ph-chart-line-up"></i></div>
        <div class="stat-card-value">${students.length ? Math.round((placed.length / students.length) * 100) : 0}%</div>
        <div class="stat-card-sub">${placed.length} of ${students.length} students</div>
      </div>
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">Avg CGPA (Placed)</span><i class="ph ph-exam"></i></div>
        <div class="stat-card-value">${avgCgpaPlaced}</div>
        <div class="stat-card-sub">Overall avg: ${avgCgpaAll}</div>
      </div>
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">Highest Package</span><i class="ph ph-currency-inr"></i></div>
        <div class="stat-card-value">${highestPkg} LPA</div>
        <div class="stat-card-sub">Avg package: ${avgPkg} LPA</div>
      </div>
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">Total Applications</span><i class="ph ph-paper-plane-tilt"></i></div>
        <div class="stat-card-value">${apps.length}</div>
        <div class="stat-card-sub">${apps.filter(a => a.status === 'Placed').length} successful</div>
      </div>
    </div>
    <div class="reports-grid">
      <div class="report-card glass-card">
        <div class="report-card-title"><i class="ph ph-chart-bar"></i> Department-wise Placement</div>
        <ul class="report-list" id="dept-report"></ul>
      </div>
      <div class="report-card glass-card">
        <div class="report-card-title"><i class="ph ph-chart-pie"></i> Package Distribution</div>
        <div class="chart-container"><canvas id="pkgChart"></canvas></div>
      </div>
      <div class="report-card glass-card">
        <div class="report-card-title"><i class="ph ph-trophy"></i> Top Recruiters</div>
        <ul class="report-list" id="top-recruiters"></ul>
      </div>
      <div class="report-card glass-card">
        <div class="report-card-title"><i class="ph ph-lightning"></i> Skill Demand Analysis</div>
        <ul class="report-list" id="skill-demand"></ul>
      </div>
    </div>
    <div style="margin-top:20px;display:flex;gap:12px">
      <button class="btn btn-secondary" id="export-report-btn"><i class="ph ph-download"></i> Export Full Report (CSV)</button>
      <button class="btn btn-danger" id="reset-data-btn"><i class="ph ph-arrow-counter-clockwise"></i> Reset All Data</button>
    </div>`;

  // Dept placement report with progress bars
  $('#dept-report').innerHTML = depts.map(d => {
    const total = students.filter(s => s.dept === d).length;
    const placedCount = students.filter(s => s.dept === d && s.status === 'Placed').length;
    const pct = total ? Math.round((placedCount / total) * 100) : 0;
    return `<li class="report-list-item" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;justify-content:space-between"><span class="report-label">${d}</span><span class="report-value">${placedCount}/${total} (${pct}%)</span></div>
      <div class="progress-bar-wrapper"><div class="progress-bar" style="width:${pct}%"></div></div>
    </li>`;
  }).join('');

  // Package distribution bar chart
  const pkgRanges = ['0-10 LPA', '10-20 LPA', '20-30 LPA', '30+ LPA'];
  const pkgCounts = [
    companies.filter(c => parseFloat(c.pkg) < 10).length,
    companies.filter(c => parseFloat(c.pkg) >= 10 && parseFloat(c.pkg) < 20).length,
    companies.filter(c => parseFloat(c.pkg) >= 20 && parseFloat(c.pkg) < 30).length,
    companies.filter(c => parseFloat(c.pkg) >= 30).length
  ];
  setTimeout(() => drawBarChart($('#pkgChart'), pkgRanges, pkgCounts, ['#10b981', '#00d4ff', '#7c3aed', '#ec4899']), 50);

  // Top recruiters by number of placements
  const recruiterStats = companies.map(co => {
    const jobIds = jobs.filter(j => j.companyId === co.id).map(j => j.id);
    const placements = apps.filter(a => jobIds.includes(a.jobId) && a.status === 'Placed').length;
    return { name: co.name, pkg: co.pkg, placements };
  }).sort((a, b) => b.placements - a.placements);

  $('#top-recruiters').innerHTML = recruiterStats.slice(0, 6).map((r, i) => `
    <li class="report-list-item">
      <span class="report-label">${i + 1}. ${r.name} <span style="color:var(--text-muted);font-size:0.75rem">(${r.pkg})</span></span>
      <span class="report-value" style="color:var(--accent-green)">${r.placements} placed</span>
    </li>`).join('');

  // Skill demand analysis — count which skills appear most in job-eligible placements
  const skillMap = {};
  students.forEach(s => {
    (s.skills || '').split(',').forEach(sk => {
      const skill = sk.trim();
      if (!skill) return;
      skillMap[skill] = (skillMap[skill] || 0) + 1;
    });
  });
  const sortedSkills = Object.entries(skillMap).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const maxSkill = sortedSkills.length ? sortedSkills[0][1] : 1;
  $('#skill-demand').innerHTML = sortedSkills.map(([skill, count]) => `
    <li class="report-list-item" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;justify-content:space-between"><span class="report-label">${skill}</span><span class="report-value">${count} students</span></div>
      <div class="progress-bar-wrapper"><div class="progress-bar" style="width:${Math.round((count / maxSkill) * 100)}%;background:var(--gradient-warm)"></div></div>
    </li>`).join('');

  // Export report
  $('#export-report-btn').addEventListener('click', () => {
    const rows = students.map(s => {
      const studentApps = apps.filter(a => a.studentId === s.id);
      return [s.name, s.dept, s.cgpa, s.skills, s.status, s.company || '—', studentApps.length, studentApps.filter(a => a.status === 'Placed').length];
    });
    exportCSV(['Name', 'Dept', 'CGPA', 'Skills', 'Status', 'Company', 'Applications', 'Placements'], rows, 'placement_report.csv');
    toast('Report exported!', 'success');
  });

  // Reset data
  $('#reset-data-btn').addEventListener('click', () => {
    if (confirm('Reset all data to defaults? This cannot be undone.')) {
      localStorage.removeItem('placeme_data');
      store.load();
      toast('Data reset to defaults', 'info');
      renderReports();
    }
  });
}

// ===== THEME TOGGLE =====
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('placeme_theme', theme);
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) btn.innerHTML = theme === 'dark'
    ? '<i class="ph ph-sun"></i>'
    : '<i class="ph ph-moon"></i>';
}

window.toggleTheme = function () {
  const current = localStorage.getItem('placeme_theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
  toast(current === 'dark' ? '☀️ Light mode on' : '🌙 Dark mode on', 'info');
};

// ===== NOTIFICATION SYSTEM =====
const NOTIF_KEY = 'pshell_notifications';

function getNotifs() {
  try { return JSON.parse(localStorage.getItem(NOTIF_KEY)) || []; } catch { return []; }
}

function saveNotifs(list) { localStorage.setItem(NOTIF_KEY, JSON.stringify(list)); }

function addNotif(msg, type = 'info') {
  const list = getNotifs();
  list.unshift({ id: Date.now(), msg, type, time: new Date().toISOString(), read: false });
  if (list.length > 30) list.pop();
  saveNotifs(list);
  updateNotifBadge();
}

function updateNotifBadge() {
  const badge = document.getElementById('notif-badge');
  const unread = getNotifs().filter(n => !n.read).length;
  if (badge) {
    badge.textContent = unread;
    badge.style.display = unread > 0 ? 'flex' : 'none';
  }
}

window.openNotifications = function () {
  const list = getNotifs();
  list.forEach(n => n.read = true);
  saveNotifs(list);
  updateNotifBadge();

  const rows = list.length === 0
    ? '<p class="empty-state" style="padding:2rem">No notifications yet</p>'
    : list.map(n => `
      <div style="display:flex;align-items:flex-start;gap:1rem;padding:.9rem;border-bottom:1px solid rgba(255,255,255,.06)">
        <i class="ph ph-${n.type === 'success' ? 'check-circle' : n.type === 'error' ? 'x-circle' : 'info'}" style="color:var(--accent-${n.type === 'success' ? 'green' : n.type === 'error' ? 'red' : 'cyan'});font-size:1.4rem;margin-top:.1rem"></i>
        <div style="flex:1">
          <div style="font-size:.92rem">${n.msg}</div>
          <div style="font-size:.75rem;color:var(--text-muted);margin-top:.2rem">${new Date(n.time).toLocaleString()}</div>
        </div>
      </div>`).join('');

  openModal('🔔 Notifications', `<div style="max-height:420px;overflow-y:auto">${rows}</div>
    <div style="margin-top:1rem;text-align:right">
      <button class="btn btn-sm" onclick="clearNotifs()">Clear All</button>
    </div>`);
};

window.clearNotifs = function () { saveNotifs([]); updateNotifBadge(); closeModal(); toast('Notifications cleared', 'info'); };

// Seed initial notifications from data store on first load
function seedNotifications() {
  if (getNotifs().length === 0) {
    const apps = store.get('applications');
    const recent = apps.slice(0, 3);
    recent.forEach(a => {
      addNotif(`New application: ${getStudentName(a.studentId)} applied for ${getJobTitle(a.jobId)}`, 'info');
    });
    addNotif('Placement drive scheduled with TCS — next week', 'success');
    addNotif('3 students shortlisted for Google interviews', 'success');
  }
}

// ===== INTERVIEW SCHEDULER =====
window.openScheduler = function () {
  const students = store.get('students').filter(s => s.status !== 'Placed');
  const companies = store.get('companies');
  const jobs = store.get('jobs');

  const studentOpts = students.map(s => `<option value="${s.id}">${s.name} (${s.dept}, ${s.cgpa})</option>`).join('');
  const companyOpts = companies.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

  openModal('📅 Schedule Interview', `
    <div class="form-grid">
      <div class="form-group">
        <label>Student</label>
        <select id="sch-student" class="form-input">${studentOpts}</select>
      </div>
      <div class="form-group">
        <label>Company</label>
        <select id="sch-company" class="form-input" onchange="loadSchJobs(this.value)">${companyOpts}</select>
      </div>
      <div class="form-group">
        <label>Job Position</label>
        <select id="sch-job" class="form-input">${jobs.filter(j => j.companyId == companies[0]?.id).map(j => `<option value="${j.id}">${j.title}</option>`).join('') || '<option>No jobs available</option>'}</select>
      </div>
      <div class="form-group">
        <label>Interview Date</label>
        <input type="date" id="sch-date" class="form-input" value="${new Date().toISOString().split('T')[0]}">
      </div>
      <div class="form-group">
        <label>Interview Type</label>
        <select id="sch-type" class="form-input">
          <option>Technical</option>
          <option>HR</option>
          <option>Group Discussion</option>
          <option>Aptitude Test</option>
          <option>Final Round</option>
        </select>
      </div>
      <div class="form-group">
        <label>Time Slot</label>
        <input type="time" id="sch-time" class="form-input" value="10:00">
      </div>
      <div class="form-group" style="grid-column:1/-1">
        <label>Notes</label>
        <textarea id="sch-notes" class="form-input" rows="2" placeholder="Additional instructions..."></textarea>
      </div>
    </div>
    <div style="margin-top:1.2rem;display:flex;gap:.8rem;justify-content:flex-end">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="confirmSchedule()">Schedule Interview</button>
    </div>`);
};

window.loadSchJobs = function (companyId) {
  const jobs = store.get('jobs').filter(j => j.companyId == companyId);
  $('#sch-job').innerHTML = jobs.map(j => `<option value="${j.id}">${j.title}</option>`).join('') || '<option>No jobs</option>';
};

window.confirmSchedule = function () {
  const studentId = +$('#sch-student').value;
  const jobId = +$('#sch-job').value;
  const date = $('#sch-date').value;
  const type = $('#sch-type').value;
  const time = $('#sch-time').value;
  const notes = $('#sch-notes').value;

  if (!date) { toast('Please pick an interview date', 'error'); return; }

  // Check if application exists, if not create it
  let apps = store.get('applications');
  let app = apps.find(a => a.studentId === studentId && a.jobId === jobId);
  if (!app) {
    app = { id: Date.now(), studentId, jobId, status: 'Shortlisted', date: new Date().toISOString().split('T')[0], notes: '' };
    store.add('applications', app);
  } else if (app.status === 'Applied') {
    store.update('applications', app.id, { status: 'Shortlisted' });
  }

  // Store interview schedule in localStorage
  const schedules = JSON.parse(localStorage.getItem('pshell_schedules') || '[]');
  schedules.push({ id: Date.now(), studentId, jobId, date, time, type, notes });
  localStorage.setItem('pshell_schedules', JSON.stringify(schedules));

  addNotif(`Interview scheduled: ${getStudentName(studentId)} — ${type} round on ${date} at ${time}`, 'success');
  toast('Interview scheduled! 📅', 'success');
  closeModal();
};

// ===== ADVANCED SKILLS COMPONENT =====
window.COMMON_SKILLS = [
  'Python', 'Java', 'JavaScript', 'C++', 'C#', 'SQL', 'React', 'Node.js', 'Express', 'MongoDB', 
  'AWS', 'Docker', 'Kubernetes', 'TypeScript', 'Angular', 'Vue.js', 'Flutter', 'Dart', 'Firebase',
  'Machine Learning', 'AI', 'Data Science', 'Data Structures', 'Algorithms', 'UI/UX Design',
  'PHP', 'Laravel', 'Bootstrap', 'Tailwind CSS', 'Django', 'Flask', 'PostgreSQL', 'Redis',
  'Git', 'Jenkins', 'CI/CD', 'Cloud Computing', 'Cybersecurity', 'Ethical Hacking', 'Networking',
  'Mobile Development', 'Android', 'iOS', 'Kotlin', 'Swift', 'R Programming', 'Tableau', 'Power BI'
].sort();

/**
 * Creates an advanced skills selector inside a container
 * @param {string} containerId - ID of the container element
 * @param {string} initialSkills - Comma-separated initial skills
 */
window.initSkillSelector = function(containerId, initialSkills = '') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const selectedSkills = new Set(initialSkills.split(',').map(s => s.trim()).filter(Boolean));
  
  container.innerHTML = `
    <div class="skills-selector-wrapper">
      <div id="${containerId}-field" class="skills-input-field">
        <div id="${containerId}-tags" class="skills-tags-list"></div>
        <input type="text" id="${containerId}-input" class="skills-search-input" 
          placeholder="Type or select skills (e.g., Python, Java, React)" autocomplete="off">
      </div>
      <div id="${containerId}-dropdown" class="skills-dropdown no-scrollbar"></div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px">
        <span id="${containerId}-count" class="skills-count-badge">0 skills selected</span>
        <div style="display:flex; gap:12px">
          <button type="button" id="${containerId}-clear-all" class="btn-text-action" style="color:var(--text-muted)">
            Clear
          </button>
          <button type="button" id="${containerId}-add-all" class="btn-text-action">
            <i class="ph ph-plus-circle"></i> Add All Popular
          </button>
        </div>
      </div>

      <input type="hidden" name="skills" id="${containerId}-hidden-input" value="${Array.from(selectedSkills).join(', ')}">
    </div>

  `;

  const inputField = document.getElementById(`${containerId}-field`);
  const searchInput = document.getElementById(`${containerId}-input`);
  const tagsList = document.getElementById(`${containerId}-tags`);
  const dropdown = document.getElementById(`${containerId}-dropdown`);
  const countBadge = document.getElementById(`${containerId}-count`);
  const hiddenInput = document.getElementById(`${containerId}-hidden-input`);

  const updateSkills = () => {
    const list = Array.from(selectedSkills);
    hiddenInput.value = list.join(', ');
    countBadge.textContent = `${list.length} ${list.length === 1 ? 'skill' : 'skills'} selected`;
    renderTags();
    searchInput.placeholder = selectedSkills.size > 0 ? '' : 'Type or select skills (e.g., Python, Java, React)';
    // Trigger any dependent logic if needed
  };

  const renderTags = () => {
    tagsList.innerHTML = Array.from(selectedSkills).map(skill => `
      <div class="skill-tag">
        <span>${skill}</span>
        <button type="button" class="skill-tag-remove" onclick="window.removeSkillFromSelector('${containerId}', '${skill.replace(/'/g, "\\'")}')">×</button>
      </div>
    `).join('');
  };

  window.removeSkillFromSelector = (cid, skill) => {
    if (cid !== containerId) return;
    selectedSkills.delete(skill);
    updateSkills();
  };

  const addSkill = (skill) => {
    if (skill.includes(',')) {
      skill.split(',').forEach(s => {
        const trimmed = s.trim();
        if (trimmed) selectedSkills.add(trimmed);
      });
    } else {
      const trimmed = skill.trim();
      if (trimmed) selectedSkills.add(trimmed);
    }
    searchInput.value = '';
    dropdown.classList.remove('active');
    updateSkills();
  };

  const renderDropdown = (query = '') => {
    const term = query.toLowerCase().trim();
    const filtered = window.COMMON_SKILLS.filter(s => 
      s.toLowerCase().includes(term) && !selectedSkills.has(s)
    ).slice(0, 10);

    let html = filtered.map(s => `
      <div class="skill-option" onmousedown="window.addSkillToSelector('${containerId}', '${s.replace(/'/g, "\\'")}')">
        <span>${s}</span>
        <i class="ph ph-plus" style="font-size:0.7rem; opacity:0.6"></i>
      </div>
    `).join('');

    if (term && !window.COMMON_SKILLS.some(s => s.toLowerCase() === term) && !selectedSkills.has(term)) {
      html += `
        <div class="skill-option skill-add-new" onmousedown="window.addSkillToSelector('${containerId}', '${term.replace(/'/g, "\\'")}')">
          <span>Add "<b>${term}</b>"</span>
          <i class="ph ph-plus-circle" style="font-size:1rem"></i>
        </div>
      `;
    }

    if (!html && term) {
      html = '<div class="skill-option" style="opacity:0.6; pointer-events:none">No matches found</div>';
    }

    dropdown.innerHTML = html;
    if (html || term) {
        dropdown.classList.add('active');
    } else {
        dropdown.classList.remove('active');
    }
  };

  window.addSkillToSelector = (cid, skill) => {
    if (cid !== containerId) return;
    addSkill(skill);
  };

  document.getElementById(`${containerId}-add-all`).addEventListener('click', () => {
    window.COMMON_SKILLS.forEach(skill => selectedSkills.add(skill));
    updateSkills();
    toast('All popular skills added! ✨', 'success');
  });

  document.getElementById(`${containerId}-clear-all`).addEventListener('click', () => {
    selectedSkills.clear();
    updateSkills();
    toast('Skills cleared 🧹', 'info');
  });


  searchInput.addEventListener('input', (e) => {

    const val = e.target.value;
    if (val.includes(',')) {
      addSkill(val);
      return;
    }
    renderDropdown(val);
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim() || selectedSkills.size === 0) {
        renderDropdown(searchInput.value);
    }
  });
  
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = searchInput.value.trim();
      if (val) addSkill(val);
    } else if (e.key === 'Backspace' && !searchInput.value && selectedSkills.size > 0) {
      const last = Array.from(selectedSkills).pop();
      selectedSkills.delete(last);
      updateSkills();
    }
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(() => dropdown.classList.remove('active'), 200);
  });

  inputField.addEventListener('click', () => searchInput.focus());

  updateSkills();
};


window.updateCommLevel = function(val) {
  document.getElementById('pred-comm-val').textContent = val;
  const tagEl = document.getElementById('pred-comm-tag');
  if(!tagEl) return;
  const v = parseInt(val);
  let label = 'Beginner';
  let color = 'var(--accent-red)';
  // 1=Beginner, 2=Beginner (or Basic), 3=Intermediate, 4=Advanced, 5=Expert
  if (v === 2) { label = 'Beginner'; color = 'var(--accent-amber)'; }
  else if (v === 3) { label = 'Intermediate'; color = '#f59e0b'; } // yellow/amber
  else if (v === 4) { label = 'Advanced'; color = 'var(--accent-cyan)'; }
  else if (v === 5) { label = 'Expert'; color = 'var(--accent-green)'; }
  
  // Use hex conversion for light backgrounds if variables are purely text colors
  // But CSS variables might act up with + '22', so relying on rgba when we can or just keeping a generic glass bg.
  tagEl.textContent = label;
  tagEl.style.color = color;
  tagEl.style.border = `1px solid ${color}44`;
  // Set slight background overlay matching border color trick (fallback if var has issues)
  // Easiest is just to keep a dark glass background with a colored border and text
};

window.openPredictor = function () {
  openModal('🤖 Placement Predictor', `
    <p style="color:var(--text-muted);margin-bottom:1.2rem;font-size:.9rem">Enter student details to get an AI-style placement probability estimate.</p>
    <div class="form-grid">
      <div class="form-group">
        <label>CGPA (out of 10)</label>
        <input type="number" id="pred-cgpa" class="form-input" placeholder="e.g. 8.5" min="0" max="10" step="0.1">
      </div>
      <div class="form-group">
        <label>Internship / Projects Count</label>
        <input type="number" id="pred-projects" class="form-input" placeholder="e.g. 2" min="0">
      </div>
      <div class="form-group" style="grid-column: 1 / -1">
        <label>Skills Profile</label>
        <div id="predictor-skills-box"></div>
      </div>
      <div class="form-group">
        <label>Backlogs</label>
        <input type="number" id="pred-backlogs" class="form-input" placeholder="e.g. 0" min="0">
      </div>
      <div class="form-group">
        <label>Department</label>
        <select id="pred-dept" class="form-input">
          <option value="1.1">CSE</option>
          <option value="1.05">IT</option>
          <option value="1.0">ECE</option>
          <option value="0.95">EEE</option>
          <option value="0.9">MECH</option>
          <option value="0.85">CIVIL</option>
          <option value="0.8">Other</option>
        </select>
      </div>
      <div class="form-group" style="grid-column: 1 / -1; margin-top: 6px;">
        <label>Communication Skills (1-5)</label>
        <div style="display: flex; align-items: center; gap: 12px;">
          <input type="range" id="pred-comm" class="form-input" min="1" max="5" value="3" oninput="window.updateCommLevel(this.value)" style="flex: 1;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span id="pred-comm-tag" style="padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: bold; background: var(--bg-glass); border: 1px solid #f59e0b44; color: #f59e0b; min-width: 95px; text-align: center; text-transform: uppercase; letter-spacing: 0.5px;">Intermediate</span>
            <span style="font-weight: bold; width: 35px; text-align: right;"><span id="pred-comm-val" style="color:var(--accent-cyan)">3</span> / 5</span>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top:1.2rem;display:flex;gap:.8rem;justify-content:flex-end">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="runPredictor()">Predict 🔮</button>
    </div>
    <div id="pred-result" style="margin-top:1rem"></div>`);

  setTimeout(() => window.initSkillSelector('predictor-skills-box'), 0);
};



window.runPredictor = function () {
  const cgpa = parseFloat($('#pred-cgpa').value) || 0;
  const skillsValue = $('#predictor-skills-box-hidden-input').value;
  const skillsCount = skillsValue ? skillsValue.split(',').length : 0;

  const projects = parseInt($('#pred-projects').value) || 0;
  const backlogs = parseInt($('#pred-backlogs').value) || 0;
  const deptMult = parseFloat($('#pred-dept').value);
  const comm = parseInt($('#pred-comm').value);
  
  if(skillsCount === 0) {
    return toast('At least 1 skill is required for prediction.', 'error');
  }

  // Store for future use if needed
  localStorage.setItem('pshell_recent_prediction_skills', JSON.stringify(Array.from(window.predSelectedSkills)));

  // Weighted scoring model
  let score = 0;
  score += Math.min(cgpa / 10, 1) * 35;                   // CGPA: max 35 pts
  score += Math.min(skillsCount / 8, 1) * 20;             // Skills: max 20 pts (scaled to ~8 skills=max)
  score += Math.min(projects / 3, 1) * 20;                // Projects: max 20 pts 
  score -= Math.min(backlogs * 5, 30);                     // Backlogs: penalty
  score += ((comm - 1) / 4) * 15;                         // Communication: max 15 pts
  score += 10;                                             // Base score 10 pts
  score *= deptMult;                                       // Dept multiplier
  score = Math.max(5, Math.min(99, Math.round(score)));

  let label, color, tips;
  if (score >= 80) { label = 'Highly Likely'; color = 'var(--accent-green)'; tips = ['Strong CGPA and skill profile', 'Good project experience', 'Consider applying to top-tier companies']; }
  else if (score >= 60) { label = 'Likely'; color = 'var(--accent-cyan)'; tips = ['Decent profile — keep adding skills', 'Apply to mid and large companies', 'Work on communication and aptitude']; }
  else if (score >= 40) { label = 'Moderate'; color = 'var(--accent-yellow, #f59e0b)'; tips = ['Improve CGPA if possible', 'Add more certifications and projects', 'Clear any backlogs immediately']; }
  else { label = 'Needs Improvement'; color = 'var(--accent-red)'; tips = ['Focus on clearing backlogs first', 'Build at least 3–5 relevant projects', 'Take mock interviews and language courses']; }

  $('#pred-result').innerHTML = `
    <div class="glass-card" style="padding:1.5rem;text-align:center;border:1px solid ${color}44">
      <div style="font-size:.9rem;color:var(--text-muted);margin-bottom:.5rem">Placement Probability</div>
      <div style="font-size:3rem;font-weight:800;color:${color};line-height:1">${score}%</div>
      <div style="font-size:1rem;margin-top:.4rem;color:${color}">${label}</div>
      <div style="margin-top:1rem;text-align:left">
        <div style="font-size:.85rem;font-weight:600;margin-bottom:.5rem;color:var(--text-secondary)">Recommendations:</div>
        ${tips.map(t => `<div style="font-size:.82rem;color:var(--text-muted);padding:.25rem 0"><i class="ph ph-arrow-right" style="color:${color}"></i> ${t}</div>`).join('')}
      </div>
    </div>`;
};

// ===== SCHEDULED INTERVIEWS PAGE =====
// NOTE: pages['interviews'] is registered in DOMContentLoaded after this function is defined.

function renderInterviews() {
  const schedules = JSON.parse(localStorage.getItem('pshell_schedules') || '[]').sort((a, b) => new Date(a.date) - new Date(b.date));
  const today = new Date().toISOString().split('T')[0];

  const rows = schedules.length === 0
    ? `<tr><td colspan="7"><div class="empty-state"><i class="ph ph-calendar-blank"></i><p>No interviews scheduled yet</p></div></td></tr>`
    : schedules.map(s => {
      const isPast = s.date < today;
      const isToday = s.date === today;
      const badge = isPast
        ? `<span class="badge badge-placed">Completed</span>`
        : isToday
          ? `<span class="badge badge-shortlisted">Today</span>`
          : `<span class="badge badge-applied">Upcoming</span>`;
      return `<tr>
          <td>${s.date} <span style="color:var(--text-muted);font-size:.8rem">${s.time || ''}</span></td>
          <td>${getStudentName(s.studentId)}</td>
          <td>${getJobTitle(s.jobId)}</td>
          <td>${s.type}</td>
          <td>${badge}</td>
          <td style="color:var(--text-muted);font-size:.82rem">${s.notes || '—'}</td>
          <td><button class="btn btn-sm btn-danger" onclick="deleteSchedule(${s.id})"><i class="ph ph-trash"></i></button></td>
        </tr>`;
    }).join('');

  $('#page-container').innerHTML = `
    <div class="page-header">
      <div></div>
      <div style="display:flex;gap:.8rem">
        <button class="btn btn-primary" onclick="openScheduler()"><i class="ph ph-calendar-plus"></i> Schedule Interview</button>
      </div>
    </div>
    <div class="glass-card" style="padding:1.5rem;margin-bottom:1.5rem">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;text-align:center">
        <div><div style="font-size:1.8rem;font-weight:700;color:var(--accent-cyan)">${schedules.filter(s => s.date >= today).length}</div><div style="font-size:.85rem;color:var(--text-muted)">Upcoming</div></div>
        <div><div style="font-size:1.8rem;font-weight:700;color:var(--accent-green)">${schedules.filter(s => s.date === today).length}</div><div style="font-size:.85rem;color:var(--text-muted)">Today</div></div>
        <div><div style="font-size:1.8rem;font-weight:700;color:var(--text-muted)">${schedules.filter(s => s.date < today).length}</div><div style="font-size:.85rem;color:var(--text-muted)">Completed</div></div>
      </div>
    </div>
    <div class="table-container">
      <table class="data-table">
        <thead><tr>
          <th>Date & Time</th><th>Student</th><th>Position</th><th>Type</th><th>Status</th><th>Notes</th><th>Action</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

window.deleteSchedule = function (id) {
  if (!confirm('Remove this scheduled interview?')) return;
  const list = JSON.parse(localStorage.getItem('pshell_schedules') || '[]').filter(s => s.id !== id);
  localStorage.setItem('pshell_schedules', JSON.stringify(list));
  toast('Interview removed', 'info');
  renderInterviews();
};

// ===== STUDENT PAGES =====
function renderStudentHome() {
  const s = currentUser.studentId ? store.find('students', currentUser.studentId) : null;
  const allJobs = store.get('jobs').filter(j => j.status === 'Active');
  const myApps = s ? store.get('applications').filter(a => a.studentId === s.id) : [];
  const placed = s && s.status === 'Placed';
  const c = document.getElementById('page-container');
  c.innerHTML = `
    <div class="stats-grid" style="margin-bottom:24px">
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">Placement Status</span><i class="ph ph-chart-line-up"></i></div>
        <div class="stat-card-value" style="color:${placed ? 'var(--accent-green)' : 'var(--accent-amber)'}">${placed ? 'Placed ✓' : 'Seeking'}</div>
        <div class="stat-card-sub">${placed ? 'At ' + (s.company || 'a company') : 'Keep applying!'}</div>
      </div>
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">My CGPA</span><i class="ph ph-exam"></i></div>
        <div class="stat-card-value">${s ? s.cgpa : '—'}</div>
        <div class="stat-card-sub">${s ? s.dept + ' · ' + (s.batch || '') : 'Update your profile'}</div>
      </div>
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">Applications Sent</span><i class="ph ph-paper-plane-tilt"></i></div>
        <div class="stat-card-value">${myApps.length}</div>
        <div class="stat-card-sub">${myApps.filter(a => a.status === 'Placed').length} successful placements</div>
      </div>
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">Active Jobs</span><i class="ph ph-briefcase"></i></div>
        <div class="stat-card-value">${allJobs.length}</div>
        <div class="stat-card-sub">Jobs open for applications</div>
      </div>
      <div class="stat-card glass-card" style="border-top: 3px solid var(--accent-cyan); cursor: pointer" onclick="window.openPredictor()">
        <div class="stat-card-header"><span class="stat-card-label">Placement Prediction</span><i class="ph ph-magic-wand"></i></div>
        <div class="stat-card-value" style="color:var(--accent-cyan); font-size:1.1rem">${s ? 'Highly Likely' : 'Seeking Data'}</div>
        <div class="stat-card-sub">Based on your profile fit</div>
      </div>

    </div>
    <div class="dashboard-grid">
      <div class="dashboard-card glass-card">
        <div class="dashboard-card-title"><i class="ph ph-clock-counter-clockwise"></i> My Recent Applications</div>
        ${myApps.length ? `<table class="data-table"><thead><tr><th>Position</th><th>Applied</th><th>Status</th></tr></thead><tbody>
          ${myApps.slice(-5).reverse().map(a => `<tr><td>${getJobTitle(a.jobId)}</td><td style="font-size:.82rem">${a.appliedDate}</td><td><span class="badge badge-${a.status.toLowerCase()}">${a.status}</span></td></tr>`).join('')}
        </tbody></table>` : '<div class="empty-state"><i class="ph ph-clipboard-text"></i><p>No applications yet. <a href="#" onclick="navigateTo(\'student-jobs\')">Browse jobs →</a></p></div>'}
      </div>
      <div class="dashboard-card glass-card">
        <div class="dashboard-card-title"><i class="ph ph-sparkle"></i> Recommended Jobs</div>
        ${allJobs.slice(0, 4).map(j => `
          <div style="padding:10px 0;border-bottom:1px solid var(--bg-glass-border)">
            <div style="font-weight:600;font-size:.9rem">${j.title}</div>
            <div style="font-size:.8rem;color:var(--text-muted)">${getCompanyName(j.companyId)} · Min CGPA ${j.minCgpa}</div>
            <button class="btn btn-sm btn-primary" style="margin-top:6px" onclick="navigateTo('student-jobs')">Apply <i class="ph ph-arrow-right"></i></button>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderStudentJobs() {
  const jobs = store.get('jobs').filter(j => j.status === 'Active' || j.status === 'Upcoming');
  const s = currentUser.studentId ? store.find('students', currentUser.studentId) : null;
  const myApps = s ? store.get('applications').filter(a => a.studentId === s.id) : [];
  const appliedJobIds = myApps.map(a => a.jobId);
  const c = document.getElementById('page-container');
  c.innerHTML = `
    <div class="page-header">
      <div class="filter-group">
        <select id="sjob-filter"><option value="">All Jobs</option><option value="Active">Active</option><option value="Upcoming">Upcoming</option></select>
      </div>
      <span style="font-size:.85rem;color:var(--text-muted)">${jobs.length} jobs available</span>
    </div>
    <div style="display:grid;gap:16px" id="jobs-cards-grid"></div>`;
  function renderCards(data) {
    document.getElementById('jobs-cards-grid').innerHTML = data.length ? data.map(j => {
      const applied = appliedJobIds.includes(j.id);
      const eligible = s && j.dept.split(',').map(d => d.trim()).includes(s.dept) && s.cgpa >= j.minCgpa;
      return `<div class="glass-card" style="padding:20px;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap">
        <div style="flex:1">
          <div style="font-size:1.05rem;font-weight:700">${j.title} <span style="color:var(--text-muted);font-weight:400;font-size:.85rem">@ ${getCompanyName(j.companyId)}</span></div>
          <div style="font-size:.82rem;color:var(--text-muted);margin-top:4px">${j.desc || ''}</div>
          <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap">
            <span class="badge badge-${j.status.toLowerCase()}">${j.status}</span>
            <span style="font-size:.78rem;color:var(--text-secondary)"><i class="ph ph-books"></i> ${j.dept}</span>
            <span style="font-size:.78rem;color:var(--text-secondary)"><i class="ph ph-exam"></i> Min CGPA: ${j.minCgpa}</span>
            <span style="font-size:.78rem;color:var(--text-secondary)"><i class="ph ph-calendar"></i> Deadline: ${j.deadline}</span>
          </div>
        </div>
        <div style="flex-shrink:0">
          ${applied ? '<span class="badge badge-applied" style="font-size:.85rem;padding:8px 16px">Applied ✓</span>'
          : (!s ? '<span style="font-size:.8rem;color:var(--text-muted)">Complete profile to apply</span>'
            : (!eligible ? `<span style="font-size:.8rem;color:var(--accent-red)">Not eligible<br><span style="font-size:.7rem">(Dept/CGPA mismatch)</span></span>`
              : `<button class="btn btn-primary" onclick="studentApply(${j.id})"><i class="ph ph-paper-plane-tilt"></i> Apply Now</button>`))}
        </div>
      </div>`;
    }).join('') : '<div class="empty-state"><i class="ph ph-briefcase"></i><p>No jobs found</p></div>';
  }
  renderCards(jobs);
  document.getElementById('sjob-filter').addEventListener('change', function () {
    const v = this.value;
    renderCards(v ? store.get('jobs').filter(j => j.status === v) : store.get('jobs').filter(j => j.status !== 'Closed'));
  });
}

window.studentApply = function (jobId) {
  if (!currentUser.studentId) { toast('Please complete your profile first', 'error'); return; }
  const exists = store.get('applications').find(a => a.studentId === currentUser.studentId && a.jobId === jobId);
  if (exists) { toast('You already applied for this job', 'error'); return; }
  store.add('applications', { studentId: currentUser.studentId, jobId, status: 'Applied', appliedDate: new Date().toISOString().split('T')[0] });
  toast('Application submitted! Good luck 🤞', 'success');
  renderStudentJobs();
};

function renderStudentApps() {
  const s = currentUser.studentId ? store.find('students', currentUser.studentId) : null;
  const apps = s ? store.get('applications').filter(a => a.studentId === s.id) : [];
  const statusFlow = ['Applied', 'Shortlisted', 'Interviewed', 'Placed', 'Rejected'];
  const c = document.getElementById('page-container');
  c.innerHTML = `
    <div class="stats-grid" style="margin-bottom:20px">
      ${statusFlow.map((st, i) => {
    const colors = ['var(--accent-cyan)', 'var(--accent-purple)', 'var(--accent-amber)', 'var(--accent-green)', 'var(--accent-red)'];
    return `<div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">${st}</span></div><div class="stat-card-value" style="color:${colors[i]}">${apps.filter(a => a.status === st).length}</div></div>`;
  }).join('')}
    </div>
    <div class="glass-card data-table-wrapper">
      <table class="data-table">
        <thead><tr><th>Position</th><th>Applied Date</th><th>Status</th><th>Pipeline</th></tr></thead>
        <tbody>${apps.length ? apps.reverse().map(a => {
    const curIdx = statusFlow.indexOf(a.status);
    const pipeline = statusFlow.slice(0, -1).map((s, i) => {
      let cls = 'pipeline-dot';
      if (a.status === 'Placed' && i <= 3) cls += ' done';
      else if (i < curIdx) cls += ' done';
      else if (i === curIdx && a.status !== 'Rejected') cls += ' active';
      if (a.status === 'Rejected' && i === curIdx) cls += ' rejected';
      return `<span class="${cls}" title="${s}"></span>`;
    }).join('<span class="pipeline-line"></span>');
    return `<tr><td class="name-cell">${getJobTitle(a.jobId)}</td><td>${a.appliedDate}</td><td><span class="badge badge-${a.status.toLowerCase()}">${a.status}</span></td><td><div class="pipeline">${pipeline}</div></td></tr>`;
  }).join('') : '<tr><td colspan="4"><div class="empty-state"><i class="ph ph-clipboard-text"></i><p>No applications yet</p></div></td></tr>'}</tbody>
      </table>
    </div>`;
}

function renderStudentProfile() {
  const s = currentUser.studentId ? store.find('students', currentUser.studentId) : null;
  const c = document.getElementById('page-container');
  if (!s) { c.innerHTML = '<div class="empty-state"><i class="ph ph-user"></i><p>Profile not found. Please contact admin.</p></div>'; return; }

  // Load saved photo for this student
  const PHOTO_KEY = 'placeme_photo_' + s.id;
  const savedPhoto = localStorage.getItem(PHOTO_KEY) || s.photo || '';

  const skills = (s.skills || '').split(',').filter(Boolean);

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:300px 1fr;gap:24px;align-items:start">

      <!-- Left: Photo Card -->
      <div class="glass-card" style="padding:28px;text-align:center">
        <!-- Clickable photo avatar -->
        <div id="profile-photo-wrap" style="position:relative;width:120px;height:120px;margin:0 auto 16px;cursor:pointer" onclick="document.getElementById('profile-photo-input').click()" title="Click to change photo">
          <div id="profile-avatar" style="width:120px;height:120px;border-radius:50%;border:3px solid var(--accent-cyan);background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;font-size:2.8rem;font-weight:800;overflow:hidden;transition:opacity .2s">
            ${savedPhoto ? `<img id="profile-photo-img" src="${savedPhoto}" style="width:100%;height:100%;object-fit:cover">` : `<span id="profile-photo-initial">${s.name.charAt(0).toUpperCase()}</span>`}
          </div>
          <!-- Camera overlay on hover -->
          <div style="position:absolute;inset:0;border-radius:50%;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;font-size:1.4rem;color:#fff" onmouseenter="this.style.opacity=1" onmouseleave="this.style.opacity=0">
            <i class="ph ph-camera"></i>
          </div>
        </div>
        <input type="file" id="profile-photo-input" accept="image/*" style="display:none" onchange="uploadProfilePhoto(this,${s.id})">

        <div style="font-size:1.25rem;font-weight:800;margin-bottom:4px">${s.name}</div>
        <div style="font-size:.85rem;color:var(--accent-cyan);margin-bottom:8px">${s.rollNo || 'Roll No not set'}</div>
        <span class="badge badge-${s.status.toLowerCase()}">${s.status}</span>

        ${savedPhoto ? `<div style="margin-top:12px">
          <button class="btn btn-secondary btn-sm" onclick="document.getElementById('profile-photo-input').click()"><i class="ph ph-pencil-simple"></i> Change Photo</button>
          <button class="btn btn-secondary btn-sm" style="margin-left:4px" onclick="removeProfilePhoto(${s.id})"><i class="ph ph-trash"></i></button>
        </div>` : `<div style="margin-top:12px;font-size:.75rem;color:var(--text-muted)"><i class="ph ph-camera"></i> Click photo to upload</div>`}

        <div style="border-top:1px solid var(--bg-glass-border);margin-top:20px;padding-top:16px;text-align:left;display:flex;flex-direction:column;gap:10px;font-size:.85rem">
          <div><span style="color:var(--text-muted);font-size:.7rem;display:block">CGPA</span><span style="font-size:1.4rem;font-weight:800;color:var(--accent-green)">${s.cgpa}</span></div>
          <div><span style="color:var(--text-muted);font-size:.7rem;display:block">BACKLOGS</span><span style="font-weight:700;color:${s.backlogs > 0 ? 'var(--accent-red)' : 'var(--accent-green)'}">${s.backlogs || 0}</span></div>
          <div><span style="color:var(--text-muted);font-size:.7rem;display:block">BATCH</span><span style="font-weight:600">${s.batch || '—'}</span></div>
        </div>

        <button class="btn btn-primary btn-full" style="margin-top:20px" onclick="openStudentModal(${s.id})"><i class="ph ph-pencil-simple"></i> Edit Profile</button>
      </div>

      <!-- Right: Details -->
      <div style="display:flex;flex-direction:column;gap:20px">

        <!-- Contact & Academic Info -->
        <div class="glass-card" style="padding:24px">
          <div style="font-size:1rem;font-weight:700;margin-bottom:16px;display:flex;align-items:center;gap:8px"><i class="ph ph-identification-card" style="color:var(--accent-cyan)"></i> Academic Information</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;font-size:.88rem">
            <div><span style="color:var(--text-muted);font-size:.7rem">DEPARTMENT</span><div style="font-weight:600">${s.dept} ${s.branch ? '· ' + s.branch : ''}</div></div>
            <div><span style="color:var(--text-muted);font-size:.7rem">ROLL NUMBER</span><div style="font-weight:600">${s.rollNo || '—'}</div></div>
            <div><span style="color:var(--text-muted);font-size:.7rem">10TH MARKS</span><div style="font-weight:600">${s.tenth ? s.tenth + '%' : '—'}</div></div>
            <div><span style="color:var(--text-muted);font-size:.7rem">12TH MARKS</span><div style="font-weight:600">${s.twelfth ? s.twelfth + '%' : '—'}</div></div>
            <div><span style="color:var(--text-muted);font-size:.7rem">EMAIL</span><div style="font-weight:500;color:var(--accent-cyan);font-size:.82rem;word-break:break-all">${s.email}</div></div>
            <div><span style="color:var(--text-muted);font-size:.7rem">PHONE</span><div style="font-weight:600">${s.phone || '—'}</div></div>
            ${s.dob ? `<div><span style="color:var(--text-muted);font-size:.7rem">DATE OF BIRTH</span><div style="font-weight:600">${s.dob}</div></div>` : ''}
            ${s.linkedin ? `<div style="grid-column:1/-1"><span style="color:var(--text-muted);font-size:.7rem">LINKEDIN</span><div><a href="${s.linkedin}" target="_blank" style="color:var(--accent-cyan);font-size:.82rem">${s.linkedin}</a></div></div>` : ''}
          </div>
        </div>

        <!-- Skills -->
        <div class="glass-card" style="padding:24px">
          <div style="font-size:1rem;font-weight:700;margin-bottom:12px;display:flex;align-items:center;gap:8px"><i class="ph ph-lightning" style="color:var(--accent-amber)"></i> Skills</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">
            ${skills.length ? skills.map(sk => `<span class="badge badge-applied" style="font-size:.8rem;padding:5px 14px">${sk.trim()}</span>`).join('') : '<span style="color:var(--text-muted);font-size:.85rem">No skills added — click Edit Profile to add skills</span>'}
          </div>
        </div>

        <!-- Placement Status -->
        ${s.status ? `
        <div class="glass-card" style="padding:24px;border:1px solid rgba(0,212,255,.2);background:rgba(0,212,255,.03)">
          <div style="font-weight:700;font-size:1.1rem;color:var(--accent-cyan);margin-bottom:8px"><i class="ph ph-target" style="margin-right:6px"></i> ${s.status === 'Placed' ? 'Placed at' : 'Expected Company:'} ${s.company || 'TBD'}</div>
          <div style="font-size:.88rem;color:var(--text-secondary)">Expected Offer Package: <strong style="color:var(--accent-cyan);font-size:1rem">${s.salary || 'N/A'}</strong></div>
        </div>` : ''}


      </div>
    </div>`;
}

window.uploadProfilePhoto = function (input, studentId) {
  if (!input.files[0]) return;
  const file = input.files[0];
  if (file.size > 3 * 1024 * 1024) { toast('Photo too large. Maximum 3MB allowed.', 'error'); return; }
  const reader = new FileReader();
  reader.onload = e => {
    const base64 = e.target.result;
    const PHOTO_KEY = 'placeme_photo_' + studentId;
    localStorage.setItem(PHOTO_KEY, base64);
    // Update avatar in profile view instantly
    const avatar = document.getElementById('profile-avatar');
    if (avatar) avatar.innerHTML = `<img src="${base64}" style="width:100%;height:100%;object-fit:cover">`;
    // Update sidebar avatar
    const sidebarAvatar = document.getElementById('user-avatar');
    if (sidebarAvatar) {
      sidebarAvatar.innerHTML = `<img src="${base64}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
    }
    toast('Profile photo updated! 📸', 'success');
    // Re-render to show remove button
    setTimeout(() => renderStudentProfile(), 300);
  };
  reader.readAsDataURL(file);
};

window.removeProfilePhoto = function (studentId) {
  if (!confirm('Remove your profile photo?')) return;
  const PHOTO_KEY = 'placeme_photo_' + studentId;
  localStorage.removeItem(PHOTO_KEY);
  // Reset sidebar avatar to initial
  const s = store.find('students', studentId);
  const sidebarAvatar = document.getElementById('user-avatar');
  if (sidebarAvatar && s) sidebarAvatar.textContent = s.name.charAt(0).toUpperCase();
  toast('Photo removed', 'info');
  renderStudentProfile();
};


// ===== RECRUITER PAGES =====
function renderRecruiterHome() {
  const companyId = currentUser.companyId;
  const myJobs = store.get('jobs').filter(j => j.companyId == companyId);
  const allApps = store.get('applications');
  const myJobIds = myJobs.map(j => j.id);
  const myApps = allApps.filter(a => myJobIds.includes(a.jobId));
  const placed = myApps.filter(a => a.status === 'Placed').length;
  const company = store.find('companies', companyId);
  const c = document.getElementById('page-container');
  c.innerHTML = `
    ${company ? `<div class="glass-card" style="padding:20px;margin-bottom:24px;display:flex;align-items:center;gap:16px">
      <div style="width:52px;height:52px;border-radius:12px;background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:800">${company.name.charAt(0)}</div>
      <div><div style="font-size:1.2rem;font-weight:700">${company.name}</div><div style="font-size:.85rem;color:var(--text-muted)">${company.industry} · ${company.pkg}</div></div>
      <span class="badge badge-${company.status.toLowerCase()}" style="margin-left:auto">${company.status}</span>
    </div>` : ''}
    <div class="stats-grid" style="margin-bottom:24px">
      <div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">Jobs Posted</span><i class="ph ph-briefcase"></i></div><div class="stat-card-value">${myJobs.length}</div></div>
      <div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">Total Applicants</span><i class="ph ph-users"></i></div><div class="stat-card-value">${myApps.length}</div></div>
      <div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">Shortlisted</span><i class="ph ph-funnel"></i></div><div class="stat-card-value" style="color:var(--accent-purple)">${myApps.filter(a => a.status === 'Shortlisted').length}</div></div>
      <div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">Hired</span><i class="ph ph-check-circle"></i></div><div class="stat-card-value" style="color:var(--accent-green)">${placed}</div></div>
    </div>
    <div class="dashboard-card glass-card">
      <div class="dashboard-card-title"><i class="ph ph-clock-counter-clockwise"></i> Recent Applications</div>
      ${myApps.length ? `<table class="data-table"><thead><tr><th>Student</th><th>Position</th><th>Applied</th><th>Status</th><th>Action</th></tr></thead><tbody>
        ${myApps.slice(-6).reverse().map(a => `<tr>
          <td class="name-cell">${getStudentName(a.studentId)}</td>
          <td>${getJobTitle(a.jobId)}</td>
          <td style="font-size:.82rem">${a.appliedDate}</td>
          <td><span class="badge badge-${a.status.toLowerCase()}">${a.status}</span></td>
          <td class="actions-cell">
            ${a.status !== 'Placed' && a.status !== 'Rejected' ? `<button class="btn btn-sm btn-success" onclick="advanceApp(${a.id});renderRecruiterHome()"><i class="ph ph-arrow-right"></i></button>` : ''}
            ${a.status !== 'Placed' && a.status !== 'Rejected' ? `<button class="btn btn-sm btn-danger" onclick="rejectApp(${a.id});renderRecruiterHome()"><i class="ph ph-x"></i></button>` : ''}
          </td>
        </tr>`).join('')}
      </tbody></table>` : '<div class="empty-state"><i class="ph ph-users"></i><p>No applications yet</p></div>'}
    </div>`;
}

function renderRecruiterJobs() {
  const companyId = currentUser.companyId;
  const myJobs = store.get('jobs').filter(j => j.companyId == companyId);
  const apps = store.get('applications');
  const c = document.getElementById('page-container');
  c.innerHTML = `
    <div class="page-header">
      <div></div>
      <button class="btn btn-primary" onclick="openJobModal()"><i class="ph ph-plus"></i> Post New Job</button>
    </div>
    <div class="glass-card data-table-wrapper">
      <table class="data-table">
        <thead><tr><th>Position</th><th>Dept</th><th>Min CGPA</th><th>Deadline</th><th>Applicants</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${myJobs.length ? myJobs.map(j => {
    const appCount = apps.filter(a => a.jobId === j.id).length;
    return `<tr>
            <td class="name-cell">${j.title}<br><span style="font-size:.72rem;color:var(--text-muted)">${j.desc || ''}</span></td>
            <td style="font-size:.82rem">${j.dept}</td>
            <td><strong>${j.minCgpa}</strong></td>
            <td>${j.deadline}</td>
            <td><span style="color:var(--accent-cyan);font-weight:700">${appCount}</span></td>
            <td><span class="badge badge-${j.status.toLowerCase()}">${j.status}</span></td>
            <td class="actions-cell">
              <button class="btn-icon" title="View Applicants" onclick="navigateTo('recruiter-applicants')"><i class="ph ph-users-three"></i></button>
              <button class="btn-icon" title="Edit" onclick="openJobModal(${j.id})"><i class="ph ph-pencil-simple"></i></button>
              <button class="btn-icon" title="Delete" onclick="deleteJob(${j.id})"><i class="ph ph-trash"></i></button>
            </td>
          </tr>`;
  }).join('') : '<tr><td colspan="7"><div class="empty-state"><i class="ph ph-briefcase"></i><p>No jobs posted yet. Post your first job!</p></div></td></tr>'}</tbody>
      </table>
    </div>`;
}

function renderRecruiterApplicants() {
  const companyId = currentUser.companyId;
  const myJobIds = store.get('jobs').filter(j => j.companyId == companyId).map(j => j.id);
  let apps = store.get('applications').filter(a => myJobIds.includes(a.jobId));
  const c = document.getElementById('page-container');
  c.innerHTML = `
    <div class="page-header">
      <div class="filter-group">
        <select id="rec-app-filter"><option value="">All Status</option><option>Applied</option><option>Shortlisted</option><option>Interviewed</option><option>Placed</option><option>Rejected</option></select>
      </div>
      <span style="font-size:.85rem;color:var(--text-muted)">${apps.length} total applicants</span>
    </div>
    <div class="glass-card data-table-wrapper">
      <table class="data-table">
        <thead><tr><th>Student</th><th>Position</th><th>CGPA</th><th>Applied</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody id="rec-apps-tbody"></tbody>
      </table>
    </div>`;
  function renderRows(data) {
    document.getElementById('rec-apps-tbody').innerHTML = data.length ? data.map(a => {
      const stu = store.find('students', a.studentId);
      return `<tr>
        <td class="name-cell">${getStudentName(a.studentId)}<br><span style="font-size:.72rem;color:var(--accent-cyan)">${stu ? stu.rollNo || '' : ''}</span></td>
        <td>${getJobTitle(a.jobId)}</td>
        <td><strong>${stu ? stu.cgpa : '—'}</strong></td>
        <td>${a.appliedDate}</td>
        <td><span class="badge badge-${a.status.toLowerCase()}">${a.status}</span></td>
        <td class="actions-cell">
          ${a.status !== 'Placed' && a.status !== 'Rejected' ? `<button class="btn btn-sm btn-success" onclick="advanceApp(${a.id});renderRecruiterApplicants()"><i class="ph ph-arrow-right"></i> Advance</button>` : ''}
          ${a.status !== 'Placed' && a.status !== 'Rejected' ? `<button class="btn btn-sm btn-danger" onclick="rejectApp(${a.id});renderRecruiterApplicants()"><i class="ph ph-x"></i></button>` : ''}
          ${a.status !== 'Placed' ? '' : `<span style="color:var(--accent-green);font-weight:600;font-size:.82rem">✓ Hired</span>`}
        </td>
      </tr>`;
    }).join('') : '<tr><td colspan="6"><div class="empty-state"><i class="ph ph-users"></i><p>No applicants found</p></div></td></tr>';
  }
  renderRows(apps);
  document.getElementById('rec-app-filter').addEventListener('change', function () {
    const v = this.value;
    const filtered = v ? store.get('applications').filter(a => myJobIds.includes(a.jobId) && a.status === v) : store.get('applications').filter(a => myJobIds.includes(a.jobId));
    renderRows(filtered);
  });
}

// ===== RESUME PORTAL =====
function renderStudentResume() {
  const s = currentUser.studentId ? store.find('students', currentUser.studentId) : null;
  const RESUME_KEY = 'pshell_resume_' + (currentUser.id || 'demo');
  const saved = JSON.parse(localStorage.getItem(RESUME_KEY) || '{}');
  const c = document.getElementById('page-container');

  // Completeness score
  const fields = [
    { label: 'Name', done: !!(s && s.name) },
    { label: 'Email', done: !!(s && s.email) },
    { label: 'Phone', done: !!(s && s.phone) },
    { label: 'Department', done: !!(s && s.dept) },
    { label: 'CGPA', done: !!(s && s.cgpa) },
    { label: 'Skills', done: !!(s && s.skills) },
    { label: 'Batch / Year', done: !!(s && s.batch) },
    { label: 'Roll Number', done: !!(s && s.rollNo) },
    { label: 'Summary', done: !!(saved.summary) },
    { label: 'Projects', done: !!(saved.projects) },
  ];
  const score = Math.round((fields.filter(f => f.done).length / fields.length) * 100);
  const scoreColor = score >= 80 ? 'var(--accent-green)' : score >= 50 ? 'var(--accent-amber)' : 'var(--accent-red)';

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start">

      <!-- Left: Resume Builder -->
      <div>
        <div class="glass-card" style="padding:24px;margin-bottom:20px">
          <div style="font-size:1rem;font-weight:700;margin-bottom:16px;display:flex;align-items:center;gap:8px">
            <i class="ph ph-gauge" style="color:var(--accent-cyan)"></i> Resume Completeness
          </div>
          <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px">
            <div style="font-size:2.5rem;font-weight:800;color:${scoreColor}">${score}%</div>
            <div style="flex:1">
              <div class="progress-bar-wrapper"><div class="progress-bar" style="width:${score}%;background:${scoreColor}"></div></div>
              <div style="font-size:.75rem;color:var(--text-muted);margin-top:4px">${score >= 80 ? '🎉 Excellent! Ready to share.' : score >= 50 ? '📝 Good progress — fill more fields.' : '⚠️ Incomplete — add more details.'}</div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
            ${fields.map(f => `
              <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;color:${f.done ? 'var(--accent-green)' : 'var(--text-muted)'}">
                <i class="ph ${f.done ? 'ph-check-circle' : 'ph-circle'}"></i> ${f.label}
              </div>`).join('')}
          </div>
          <button class="btn btn-secondary btn-sm" style="margin-top:12px;width:100%" onclick="navigateTo('student-profile')">
            <i class="ph ph-pencil-simple"></i> Edit Profile to Improve Score
          </button>
        </div>

        <div class="glass-card" style="padding:24px">
          <div style="font-size:1rem;font-weight:700;margin-bottom:16px;display:flex;align-items:center;gap:8px">
            <i class="ph ph-plus-circle" style="color:var(--accent-purple)"></i> Extra Resume Details
          </div>
          <div class="form-group">
            <label>Professional Summary</label>
            <textarea id="res-summary" rows="3" placeholder="Write a 2-3 line summary about yourself...">${saved.summary || ''}</textarea>
          </div>
          <div class="form-group">
            <label>Projects (one per line)</label>
            <textarea id="res-projects" rows="4" placeholder="Project Name — Description&#10;Project Name — Description">${saved.projects || ''}</textarea>
          </div>
          <div class="form-group">
            <label>Certifications (one per line)</label>
            <textarea id="res-certs" rows="3" placeholder="AWS Certified Solutions Architect&#10;Google Data Analytics">${saved.certs || ''}</textarea>
          </div>
          <div class="form-group">
            <label>Achievements / Extra-curricular</label>
            <textarea id="res-achieve" rows="3" placeholder="Hackathon winner, NSS volunteer...">${saved.achieve || ''}</textarea>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>LinkedIn URL</label>
              <div class="input-wrapper"><i class="ph ph-linkedin-logo"></i><input type="text" id="res-linkedin" value="${saved.linkedin || (s && s.linkedin) || ''}" placeholder="linkedin.com/in/yourname"></div>
            </div>
            <div class="form-group">
              <label>GitHub URL</label>
              <div class="input-wrapper"><i class="ph ph-github-logo"></i><input type="text" id="res-github" value="${saved.github || ''}" placeholder="github.com/yourusername"></div>
            </div>
          </div>
          <div style="display:flex;gap:10px">
            <button class="btn btn-primary" onclick="saveResume()" style="flex:1"><i class="ph ph-floppy-disk"></i> Save Details</button>
            <button class="btn btn-secondary" onclick="previewResume()" style="flex:1"><i class="ph ph-eye"></i> Preview & Download</button>
          </div>
        </div>
      </div>

      <!-- Right: Live Preview -->
      <div class="glass-card" style="padding:24px">
        <div style="font-size:1rem;font-weight:700;margin-bottom:16px;display:flex;align-items:center;gap:8px">
          <i class="ph ph-file-text" style="color:var(--accent-green)"></i> Resume Preview
        </div>
        <div id="resume-preview-panel" style="background:rgba(255,255,255,0.03);border-radius:10px;padding:20px;font-size:.85rem;line-height:1.7">
          ${s ? buildResumeHTML(s, saved) : '<div style="color:var(--text-muted);text-align:center;padding:40px 0"><i class="ph ph-user" style="font-size:2rem;display:block;margin-bottom:8px"></i>Complete your profile to see preview</div>'}
        </div>
        <button class="btn btn-primary btn-full" style="margin-top:16px" onclick="previewResume()">
          <i class="ph ph-download"></i> Download / Print Resume
        </button>
      </div>
    </div>`;
}

function buildResumeHTML(s, saved) {
  const skills = (s.skills || '').split(',').filter(Boolean).map(sk => sk.trim());
  const projects = (saved.projects || '').split('\n').filter(Boolean);
  const certs = (saved.certs || '').split('\n').filter(Boolean);
  const achieve = (saved.achieve || '').split('\n').filter(Boolean);
  return `
    <div style="border-bottom:2px solid var(--accent-cyan);padding-bottom:12px;margin-bottom:12px">
      <div style="font-size:1.3rem;font-weight:800">${s.name}</div>
      <div style="font-size:.82rem;color:var(--text-muted)">${s.dept} | ${s.batch || ''} | ${s.rollNo || ''}</div>
      <div style="font-size:.78rem;margin-top:4px;display:flex;gap:16px;flex-wrap:wrap">
        <span><i class="ph ph-envelope"></i> ${s.email}</span>
        ${s.phone ? `<span><i class="ph ph-phone"></i> ${s.phone}</span>` : ''}
        ${saved.linkedin ? `<span><i class="ph ph-linkedin-logo"></i> ${saved.linkedin}</span>` : ''}
        ${saved.github ? `<span><i class="ph ph-github-logo"></i> ${saved.github}</span>` : ''}
      </div>
    </div>
    ${saved.summary ? `<div style="margin-bottom:12px"><div style="font-size:.82rem;font-weight:700;text-transform:uppercase;color:var(--accent-cyan);margin-bottom:4px">Summary</div><div style="font-size:.8rem;color:var(--text-secondary)">${saved.summary}</div></div>` : ''}
    <div style="margin-bottom:12px">
      <div style="font-size:.82rem;font-weight:700;text-transform:uppercase;color:var(--accent-cyan);margin-bottom:4px">Education</div>
      <div style="font-size:.8rem"><strong>${s.dept} Engineering</strong> — CGPA: ${s.cgpa} ${s.backlogs > 0 ? `(${s.backlogs} active backlogs)` : ''}</div>
      ${s.tenth ? `<div style="font-size:.78rem;color:var(--text-muted)">10th: ${s.tenth}%  |  12th: ${s.twelfth || '—'}%</div>` : ''}
    </div>
    ${skills.length ? `<div style="margin-bottom:12px"><div style="font-size:.82rem;font-weight:700;text-transform:uppercase;color:var(--accent-cyan);margin-bottom:6px">Skills</div><div style="display:flex;flex-wrap:wrap;gap:4px">${skills.map(sk => `<span style="background:rgba(0,212,255,.1);border:1px solid rgba(0,212,255,.2);border-radius:20px;padding:2px 10px;font-size:.72rem">${sk}</span>`).join('')}</div></div>` : ''}
    ${projects.length ? `<div style="margin-bottom:12px"><div style="font-size:.82rem;font-weight:700;text-transform:uppercase;color:var(--accent-cyan);margin-bottom:4px">Projects</div>${projects.map(p => `<div style="font-size:.78rem;color:var(--text-secondary);padding:2px 0">▸ ${p}</div>`).join('')}</div>` : ''}
    ${certs.length ? `<div style="margin-bottom:12px"><div style="font-size:.82rem;font-weight:700;text-transform:uppercase;color:var(--accent-cyan);margin-bottom:4px">Certifications</div>${certs.map(c => `<div style="font-size:.78rem;color:var(--text-secondary);padding:2px 0">▸ ${c}</div>`).join('')}</div>` : ''}
    ${achieve.length ? `<div><div style="font-size:.82rem;font-weight:700;text-transform:uppercase;color:var(--accent-cyan);margin-bottom:4px">Achievements</div>${achieve.map(a => `<div style="font-size:.78rem;color:var(--text-secondary);padding:2px 0">▸ ${a}</div>`).join('')}</div>` : ''}`;
}

window.saveResume = function () {
  const RESUME_KEY = 'pshell_resume_' + (currentUser.id || 'demo');
  const data = {
    summary: document.getElementById('res-summary')?.value || '',
    projects: document.getElementById('res-projects')?.value || '',
    certs: document.getElementById('res-certs')?.value || '',
    achieve: document.getElementById('res-achieve')?.value || '',
    linkedin: document.getElementById('res-linkedin')?.value || '',
    github: document.getElementById('res-github')?.value || '',
  };
  localStorage.setItem(RESUME_KEY, JSON.stringify(data));
  // Update preview panel
  const s = currentUser.studentId ? store.find('students', currentUser.studentId) : null;
  const panel = document.getElementById('resume-preview-panel');
  if (panel && s) panel.innerHTML = buildResumeHTML(s, data);
  toast('Resume saved! ✅', 'success');
};

window.previewResume = function () {
  const s = currentUser.studentId ? store.find('students', currentUser.studentId) : null;
  const RESUME_KEY = 'pshell_resume_' + (currentUser.id || 'demo');
  const saved = JSON.parse(localStorage.getItem(RESUME_KEY) || '{}');
  if (!s) { toast('Complete your profile first', 'error'); return; }
  const skills = (s.skills || '').split(',').filter(Boolean).map(sk => sk.trim());
  const projects = (saved.projects || '').split('\n').filter(Boolean);
  const certs = (saved.certs || '').split('\n').filter(Boolean);
  const achieve = (saved.achieve || '').split('\n').filter(Boolean);

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${s.name} — Resume</title>
  <style>
    body{font-family:'Segoe UI',Arial,sans-serif;margin:40px;color:#1e293b;line-height:1.6;max-width:800px;margin:40px auto}
    h1{font-size:1.8rem;font-weight:800;margin:0}
    .sub{font-size:.9rem;color:#475569;margin-top:4px}
    .contact{display:flex;gap:20px;flex-wrap:wrap;font-size:.82rem;color:#475569;margin-top:8px}
    .section{margin-top:22px;border-top:1px solid #e2e8f0;padding-top:12px}
    .section-title{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#0284c7;margin-bottom:8px}
    .skill{display:inline-block;background:#dbeafe;border-radius:20px;padding:2px 12px;font-size:.78rem;margin:2px;color:#1e40af}
    .item{margin-bottom:6px;font-size:.85rem;color:#334155}
    @media print{body{margin:20px}}
  </style></head><body>
  <h1>${s.name}</h1>
  <div class="sub">${s.dept} Engineering | Roll No: ${s.rollNo || '—'} | Batch: ${s.batch || '—'}</div>
  <div class="contact">
    <span>✉ ${s.email}</span>
    ${s.phone ? `<span>📞 ${s.phone}</span>` : ''}
    ${saved.linkedin ? `<span>🔗 ${saved.linkedin}</span>` : ''}
    ${saved.github ? `<span>💻 ${saved.github}</span>` : ''}
  </div>
  ${saved.summary ? `<div class="section"><div class="section-title">Professional Summary</div><div class="item">${saved.summary}</div></div>` : ''}
  <div class="section">
    <div class="section-title">Education</div>
    <div class="item"><strong>B.E. / B.Tech in ${s.dept}</strong> — CGPA: <strong>${s.cgpa}</strong>${s.backlogs > 0 ? ` (${s.backlogs} active backlogs)` : ' ✓'}</div>
    ${s.tenth ? `<div class="item">10th: ${s.tenth}%  |  12th: ${s.twelfth || '—'}%</div>` : ''}
  </div>
  ${skills.length ? `<div class="section"><div class="section-title">Technical Skills</div><div>${skills.map(sk => `<span class="skill">${sk}</span>`).join('')}</div></div>` : ''}
  ${projects.length ? `<div class="section"><div class="section-title">Projects</div>${projects.map(p => `<div class="item">▸ ${p}</div>`).join('')}</div>` : ''}
  ${certs.length ? `<div class="section"><div class="section-title">Certifications</div>${certs.map(c => `<div class="item">▸ ${c}</div>`).join('')}</div>` : ''}
  ${achieve.length ? `<div class="section"><div class="section-title">Achievements</div>${achieve.map(a => `<div class="item">▸ ${a}</div>`).join('')}</div>` : ''}
  ${s.status === 'Placed' ? `<div class="section"><div class="section-title">Placement</div><div class="item">✅ Placed at <strong>${s.company}</strong> — ${s.salary || ''}</div></div>` : ''}
  <script>window.onload=()=>window.print()<\/script>
  </body></html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  toast('Resume opened — use Ctrl+P / ⌘P to save as PDF', 'info');
};

// ===== PLACEMENT MATCHING STATS =====
function renderPlacementMatch() {
  const s = currentUser.studentId ? store.find('students', currentUser.studentId) : null;
  const allJobs = store.get('jobs');
  const myApps = s ? store.get('applications').filter(a => a.studentId === s.id) : [];
  const appliedIds = myApps.map(a => a.jobId);

  function getMatchStatus(score) {
    if (score >= 85) return { text: 'Excellent Match', color: 'var(--accent-green)', chance: 'Very High Chance' };
    if (score >= 70) return { text: 'Strong Match', color: 'var(--accent-cyan)', chance: 'High Chance' };
    if (score >= 50) return { text: 'Moderate Match', color: 'var(--accent-amber)', chance: 'Fair Chance' };
    if (score >= 30) return { text: 'Low Match', color: 'var(--accent-purple)', chance: 'Low Chance' };
    return { text: 'Not Suitable', color: 'var(--accent-red)', chance: 'Very Low Chance' };
  }

  function calcMatchScore(job, student) {
    if (!student) return { total: 0, dept: 0, cgpa: 0, skill: 0 };
    const jobDepts = job.dept.split(',').map(d => d.trim());
    const deptMatch = jobDepts.includes(student.dept) ? 40 : 0;
    const cgpaGap = student.cgpa - job.minCgpa;
    const cgpaScore = cgpaGap >= 0 ? Math.min(30, 30 + cgpaGap * 5) : Math.max(0, 30 + cgpaGap * 10);
    const studentSkills = (student.skills || '').toLowerCase().split(',').map(sk => sk.trim()).filter(Boolean);
    const jobDesc = (job.title + ' ' + job.desc + ' ' + job.dept).toLowerCase();
    const matched = studentSkills.filter(sk => jobDesc.includes(sk) || sk.length > 2);
    const skillScore = Math.min(30, matched.length * 8);
    return {
      total: Math.round(deptMatch + cgpaScore + skillScore),
      dept: deptMatch, cgpa: Math.round(cgpaScore), skill: Math.round(skillScore),
      deptOk: deptMatch > 0, cgpaOk: student.cgpa >= job.minCgpa, matchedSkills: matched
    };
  }

  const jobScores = allJobs.map(j => ({
    job: j, ...calcMatchScore(j, s),
    applied: appliedIds.includes(j.id)
  })).sort((a, b) => b.total - a.total);

  const topMatch = jobScores[0];
  const eligibleCount = jobScores.filter(j => j.deptOk && j.cgpaOk).length;
  const avgScore = jobScores.length ? Math.round(jobScores.reduce((sum, j) => sum + j.total, 0) / jobScores.length) : 0;
  const highMatch = jobScores.filter(j => j.total >= 70).length;

  const topStatus = topMatch ? getMatchStatus(topMatch.total) : null;
  const avgStatus = getMatchStatus(avgScore);

  const c = document.getElementById('page-container');
  c.innerHTML = `
    <div class="stats-grid" style="margin-bottom:24px">
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">Best Placement Prediction</span><i class="ph ph-magic-wand"></i></div>
        <div class="stat-card-value" style="color:${topStatus ? topStatus.color : 'var(--text-primary)'};font-size:1.15rem">${topStatus ? topStatus.chance : '—'}</div>
        <div class="stat-card-sub">${topMatch ? topMatch.job.title + ' @ ' + getCompanyName(topMatch.job.companyId) : 'No jobs available'}</div>
      </div>
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">Eligible Jobs</span><i class="ph ph-check-circle"></i></div>
        <div class="stat-card-value" style="color:var(--accent-cyan)">${eligibleCount}</div>
        <div class="stat-card-sub">Dept + CGPA criteria met</div>
      </div>
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">High Visibility</span><i class="ph ph-eye"></i></div>
        <div class="stat-card-value" style="color:var(--accent-purple)">${highMatch}</div>
        <div class="stat-card-sub">Jobs with strong compatibility</div>
      </div>
      <div class="stat-card glass-card">
        <div class="stat-card-header"><span class="stat-card-label">Overall Profile Match</span><i class="ph ph-chart-pie"></i></div>
        <div class="stat-card-value" style="color:${avgStatus.color};font-size:1.15rem">${avgStatus.text}</div>
        <div class="stat-card-sub">Based on current pool</div>
      </div>
    </div>

    ${s ? `<div class="glass-card" style="padding:20px;margin-bottom:24px">
      <div style="font-size:1rem;font-weight:700;margin-bottom:12px;display:flex;align-items:center;gap:8px">
        <i class="ph ph-user-circle" style="color:var(--accent-cyan)"></i> Your Profile Strength
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;font-size:.85rem">
        <div style="text-align:center">
          <div style="font-size:1.6rem;font-weight:800;color:var(--accent-green)">${s.cgpa}</div>
          <div style="color:var(--text-muted);font-size:.78rem">CGPA</div>
        </div>
        <div style="text-align:center">
          <div style="font-size:1.6rem;font-weight:800;color:var(--accent-cyan)">${(s.skills || '').split(',').filter(Boolean).length}</div>
          <div style="color:var(--text-muted);font-size:.78rem">Skills Listed</div>
        </div>
        <div style="text-align:center">
          <div style="font-size:1.6rem;font-weight:800;color:var(--accent-amber)">${s.backlogs || 0}</div>
          <div style="color:var(--text-muted);font-size:.78rem">Active Backlogs</div>
        </div>
      </div>
      ${s.backlogs > 0 ? '<div style="margin-top:12px;padding:10px;background:rgba(239,68,68,.08);border-radius:8px;font-size:.8rem;color:var(--accent-red)"><i class="ph ph-warning"></i> Active backlogs reduce your eligibility for many companies. Try to clear them!</div>' : ''}
    </div>` : ''}

    <div class="glass-card data-table-wrapper">
      <div style="padding:20px 20px 8px;font-size:1rem;font-weight:700;display:flex;align-items:center;gap:8px">
        <i class="ph ph-ranking" style="color:var(--accent-purple)"></i> Job Match Predictions
      </div>
      <table class="data-table">
        <thead><tr><th>Position</th><th>Company</th><th>Prediction</th><th>Dept</th><th>CGPA Fit</th><th>Skills</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${jobScores.map(jm => {
    const status = getMatchStatus(jm.total);
    return `<tr>
              <td class="name-cell">${jm.job.title}<br><span style="font-size:.72rem;color:var(--text-muted)">${jm.job.type} · Deadline: ${jm.job.deadline}</span></td>
              <td>${getCompanyName(jm.job.companyId)}</td>
              <td>
                <div style="display:flex;flex-direction:column;gap:4px">
                  <div style="font-size:.85rem;font-weight:700;color:${status.color}">${status.text}</div>
                  <div class="progress-bar-wrapper" style="height:4px"><div class="progress-bar" style="width:${jm.total}%;background:${status.color}"></div></div>
                  <div style="font-size:.7rem;color:var(--text-muted)">${status.chance}</div>
                </div>
              </td>
              <td><span style="color:${jm.deptOk ? 'var(--accent-green)' : 'var(--accent-red)'}">${jm.deptOk ? '✓ Match' : '✗ Mismatch'}</span></td>
              <td><span style="color:${jm.cgpaOk ? 'var(--accent-green)' : 'var(--accent-red)'}">${jm.cgpaOk ? `✓ ${s ? s.cgpa : '—'} ≥ ${jm.job.minCgpa}` : `✗ Need ${jm.job.minCgpa}`}</span></td>
              <td style="font-size:.78rem;color:var(--text-muted)">${jm.matchedSkills.length > 0 ? jm.matchedSkills.slice(0, 3).join(', ') : 'None matched'}</td>
              <td><span class="badge badge-${jm.job.status.toLowerCase()}">${jm.job.status}</span></td>
              <td>
                ${jm.applied
        ? '<span class="badge badge-applied">Applied ✓</span>'
        : (jm.deptOk && jm.cgpaOk && jm.job.status === 'Active')
          ? `<button class="btn btn-sm btn-primary" onclick="studentApply(${jm.job.id});renderPlacementMatch()"><i class="ph ph-paper-plane-tilt"></i> Apply</button>`
          : `<button class="btn btn-sm btn-secondary" onclick="navigateTo('student-jobs')">View</button>`}
              </td>
            </tr>`;
  }).join('')}
        </tbody>
      </table>
    </div>`;
}

// ===== SKILL PORTAL =====
function renderSkillsPortal() {
  const s = currentUser && currentUser.studentId ? store.find('students', currentUser.studentId) : null;
  const currentSkills = s && s.skills ? s.skills.split(',').map(x => x.trim()).filter(Boolean) : ['Java', 'Python', 'React', 'SQL', 'AWS'];
  const allJobs = store.get('jobs');
  
  const popularSkills = [
    { cat: 'Programming & Logic', skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'Go', 'Rust'] },
    { cat: 'Web Development', skills: ['React', 'Node.js', 'Angular', 'Vue.js', 'HTML/CSS', 'Express', 'Django'] },
    { cat: 'Cloud & DevOps', skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Linux'] },
    { cat: 'Data & AI', skills: ['SQL', 'MongoDB', 'PostgreSQL', 'Machine Learning', 'Data Analysis', 'Power BI', 'TensorFlow'] },
    { cat: 'Core & Soft Skills', skills: ['System Design', 'Data Structures', 'OOP', 'Communication', 'Problem Solving', 'Agile'] }
  ];

  const skillDemand = {};
  allJobs.forEach(j => {
    const text = (j.title + ' ' + (j.desc || '') + ' ' + (j.dept || '')).toLowerCase();
    popularSkills.flatMap(group => group.skills).forEach(sk => {
      if (text.includes(sk.toLowerCase())) {
        skillDemand[sk] = (skillDemand[sk] || 0) + 1;
      }
    });
  });

  const sortedDemand = Object.entries(skillDemand).sort((a, b) => b[1] - a[1]);

  const c = document.getElementById('page-container');
  c.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px">
      <div>
        <h2 style="font-size:1.5rem; font-weight:800; margin-bottom:4px"><i class="ph ph-lightning" style="color:var(--accent-amber)"></i> Skill Portal</h2>
        <p style="font-size:.85rem; color:var(--text-muted)">Manage student skills, explore trending industry demands, and optimize job match rates.</p>
      </div>
      ${s ? `<button class="btn btn-primary" onclick="saveSkillsFromPortal()"><i class="ph ph-check-circle"></i> Save Skills Profile</button>` : ''}
    </div>

    <div style="display:grid; grid-template-columns: 2fr 1fr; gap:24px">
      <div style="display:flex; flex-direction:column; gap:24px">

        <!-- Skills Profile Editor (Matches user requested style) -->
        <div class="glass-card" style="padding:24px">
          <div style="font-size:1.05rem; font-weight:700; margin-bottom:16px; display:flex; align-items:center; justify-content:space-between">
            <span><i class="ph ph-user-focus" style="color:var(--accent-cyan)"></i> Skills Profile</span>
            <span style="font-size:.78rem; color:var(--text-muted)">Click tag to remove or select from library below</span>
          </div>

          <div style="background:var(--bg-glass-heavy); border:1px solid var(--bg-glass-border); border-radius:12px; padding:16px; min-height:100px">
            <div id="skills-portal-tags" style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px">
              ${currentSkills.map(sk => `
                <div class="skill-tag" style="background:rgba(6,182,212,0.15); border:1px solid var(--accent-cyan); color:var(--accent-cyan); padding:6px 12px; border-radius:20px; font-size:.85rem; font-weight:600; display:inline-flex; align-items:center; gap:8px">
                  <span>${sk}</span>
                  <button type="button" onclick="removePortalSkill('${sk}')" style="background:none; border:none; color:var(--accent-cyan); cursor:pointer; font-weight:bold; font-size:1rem; padding:0">×</button>
                </div>
              `).join('')}
              ${currentSkills.length === 0 ? '<span style="color:var(--text-muted); font-size:.85rem">No skills selected. Pick from popular skills below!</span>' : ''}
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(255,255,255,0.06); padding-top:12px">
              <span id="portal-skill-count" style="font-size:.78rem; font-weight:700; color:var(--text-muted); text-transform:uppercase">${currentSkills.length} ${currentSkills.length === 1 ? 'Skill' : 'Skills'} Selected</span>
              <div style="display:flex; gap:16px">
                <button type="button" onclick="clearPortalSkills()" class="btn-text-action" style="background:none; border:none; color:var(--text-muted); font-size:.8rem; cursor:pointer">Clear</button>
                <button type="button" onclick="addAllPopularPortalSkills()" class="btn-text-action" style="background:none; border:none; color:var(--accent-cyan); font-weight:700; font-size:.8rem; cursor:pointer"><i class="ph ph-plus-circle"></i> Add All Popular</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Popular Skills Selector -->
        <div class="glass-card" style="padding:24px">
          <div style="font-size:1.05rem; font-weight:700; margin-bottom:16px"><i class="ph ph-sparkle" style="color:var(--accent-purple)"></i> Popular Skill Library</div>
          <div style="display:flex; flex-direction:column; gap:16px">
            ${popularSkills.map(group => `
              <div>
                <div style="font-size:.78rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:8px">${group.cat}</div>
                <div style="display:flex; flex-wrap:wrap; gap:8px">
                  ${group.skills.map(sk => {
                    const isAdded = currentSkills.includes(sk);
                    return `<button class="btn btn-sm ${isAdded ? 'btn-primary' : 'btn-secondary'}" onclick="togglePortalSkill('${sk}')" style="border-radius:20px; font-size:.78rem">
                      ${isAdded ? '✓ ' : '+ '}${sk}
                    </button>`;
                  }).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Right Column: Trending Skills & Industry Demand -->
      <div style="display:flex; flex-direction:column; gap:24px">
        <div class="glass-card" style="padding:20px">
          <div style="font-weight:700; font-size:.95rem; margin-bottom:16px"><i class="ph ph-trend-up" style="color:var(--accent-green)"></i> Top Skills in Industry Demand</div>
          <div style="display:flex; flex-direction:column; gap:12px">
            ${(sortedDemand.length ? sortedDemand : [['Java', 5], ['React', 4], ['Python', 4], ['SQL', 3], ['AWS', 2]]).map(([sk, cnt]) => {
              const has = currentSkills.includes(sk);
              return `
                <div>
                  <div style="display:flex; justify-content:space-between; font-size:.8rem; margin-bottom:4px; font-weight:600">
                    <span>${sk} ${has ? '<span style="color:var(--accent-green)">(In Your Profile)</span>' : ''}</span>
                    <span style="color:var(--text-muted)">${cnt} Jobs</span>
                  </div>
                  <div class="progress-bar-wrapper" style="height:6px">
                    <div class="progress-bar" style="width:${Math.min(100, cnt * 20)}%; background:${has ? 'var(--accent-green)' : 'var(--accent-cyan)'}"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="glass-card" style="padding:20px">
          <div style="font-weight:700; font-size:.95rem; margin-bottom:12px"><i class="ph ph-briefcase" style="color:var(--accent-cyan)"></i> Quick Action Options</div>
          <div style="display:flex; flex-direction:column; gap:10px">
            <button class="btn btn-secondary btn-full" onclick="navigateTo('student-jobs')" style="justify-content:flex-start">
              <i class="ph ph-magnifying-glass"></i> Explore Jobs Matching Skills
            </button>
            <button class="btn btn-secondary btn-full" onclick="navigateTo('student-match')" style="justify-content:flex-start">
              <i class="ph ph-magic-wand"></i> View Placement Match Prediction
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  window.portalSelectedSkills = [...currentSkills];
  window.togglePortalSkill = function(sk) {
    if (window.portalSelectedSkills.includes(sk)) {
      window.portalSelectedSkills = window.portalSelectedSkills.filter(x => x !== sk);
    } else {
      window.portalSelectedSkills.push(sk);
    }
    updatePortalUI();
  };
  window.removePortalSkill = function(sk) {
    window.portalSelectedSkills = window.portalSelectedSkills.filter(x => x !== sk);
    updatePortalUI();
  };
  window.clearPortalSkills = function() {
    window.portalSelectedSkills = [];
    updatePortalUI();
  };
  window.addAllPopularPortalSkills = function() {
    const popular = ['Java', 'Python', 'React', 'Node.js', 'SQL', 'AWS', 'Docker', 'C++', 'JavaScript'];
    popular.forEach(sk => { if (!window.portalSelectedSkills.includes(sk)) window.portalSelectedSkills.push(sk); });
    updatePortalUI();
  };
  window.saveSkillsFromPortal = function() {
    if (s) {
      store.update('students', s.id, { skills: window.portalSelectedSkills.join(', ') });
      toast('Skills profile updated successfully! 🎉', 'success');
    } else {
      toast('Skills updated for this session! Log in to save to your student profile.', 'info');
    }
  };

  function updatePortalUI() {
    const tagsContainer = document.getElementById('skills-portal-tags');
    const countBadge = document.getElementById('portal-skill-count');
    if (tagsContainer) {
      tagsContainer.innerHTML = window.portalSelectedSkills.map(sk => `
        <div class="skill-tag" style="background:rgba(6,182,212,0.15); border:1px solid var(--accent-cyan); color:var(--accent-cyan); padding:6px 12px; border-radius:20px; font-size:.85rem; font-weight:600; display:inline-flex; align-items:center; gap:8px">
          <span>${sk}</span>
          <button type="button" onclick="removePortalSkill('${sk}')" style="background:none; border:none; color:var(--accent-cyan); cursor:pointer; font-weight:bold; font-size:1rem; padding:0">×</button>
        </div>
      `).join('') || '<span style="color:var(--text-muted); font-size:.85rem">No skills selected. Pick from popular skills below!</span>';
    }
    if (countBadge) {
      countBadge.textContent = `${window.portalSelectedSkills.length} ${window.portalSelectedSkills.length === 1 ? 'Skill' : 'Skills'} Selected`;
    }
  }
}


// ===== PLACED STUDENTS PORTAL =====
function renderPlacedPortal() {
  const students = store.get('placedStudents');
  const depts = [...new Set(students.map(s => s.dept))];
  const c = document.getElementById('page-container');

  c.innerHTML = `
    <div class="page-header">
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
        <select id="placed-dept-filter" style="padding:8px 12px;background:var(--bg-glass);border:1px solid var(--bg-glass-border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:.85rem">
          <option value="">All Departments</option>
          ${depts.map(d => `<option value="${d}">${d}</option>`).join('')}
        </select>
        <input id="placed-search" type="text" placeholder="Search by name or company..." style="padding:8px 14px;background:var(--bg-glass);border:1px solid var(--bg-glass-border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:.85rem;width:220px">
      </div>
      <button class="btn btn-primary" onclick="openAddPlacedModal()"><i class="ph ph-plus"></i> Add Placed Student</button>
    </div>

    <!-- Stats bar -->
    <div class="stats-grid" style="margin-bottom:24px">
      <div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">Total Placed</span><i class="ph ph-trophy"></i></div><div class="stat-card-value" style="color:var(--accent-green)">${students.length}</div></div>
      <div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">Departments</span><i class="ph ph-books"></i></div><div class="stat-card-value" style="color:var(--accent-cyan)">${depts.length}</div></div>
      <div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">This Month</span><i class="ph ph-calendar"></i></div><div class="stat-card-value" style="color:var(--accent-purple)">${students.filter(s => { const d = new Date(s.placedDate); const n = new Date(); return d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear(); }).length}</div></div>
      <div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">Avg Package</span><i class="ph ph-currency-inr"></i></div><div class="stat-card-value" style="color:var(--accent-amber)">${students.length ? (students.reduce((s, st) => s + parseFloat(st.salary || 0), 0) / students.length).toFixed(1) + ' LPA' : '—'}</div></div>
    </div>

    <!-- Card Grid -->
    <div id="placed-cards" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;margin-bottom:28px"></div>

    <!-- Table -->
    <div class="glass-card data-table-wrapper">
      <div style="padding:16px 20px 8px;font-weight:700;font-size:.95rem;display:flex;align-items:center;gap:8px"><i class="ph ph-table" style="color:var(--accent-cyan)"></i> All Current Placed Students</div>
      <table class="data-table"><thead><tr><th>Photo</th><th>Name</th><th>Register Number</th><th>Department</th><th>Company Placed</th><th>Package (Salary)</th><th>Placement Date</th><th>Actions</th></tr></thead>
        <tbody id="placed-tbody"></tbody>
      </table>
    </div>`;

  function renderAll(data) {
    // Cards
    document.getElementById('placed-cards').innerHTML = data.length ? data.map(s => `
      <div class="glass-card" style="padding:20px;text-align:center;transition:var(--transition);cursor:default" onmouseenter="this.style.transform='translateY(-4px)'" onmouseleave="this.style.transform=''">
        <div style="width:72px;height:72px;border-radius:50%;margin:0 auto 12px;overflow:hidden;border:3px solid var(--accent-cyan);background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;font-size:1.8rem;font-weight:800">
          ${s.photo ? `<img src="${s.photo}" style="width:100%;height:100%;object-fit:cover">` : s.name.charAt(0)}
        </div>
        <div style="font-weight:700;font-size:.95rem">${s.name}</div>
        <div style="font-size:.75rem;color:var(--accent-cyan);margin:2px 0">${s.regNo || ''} · ${s.dept}</div>
        <div style="font-size:.85rem;font-weight:600;margin-top:8px">${s.company}</div>
        <div style="font-size:.8rem;color:var(--accent-green);font-weight:700">${s.salary}</div>
        <div style="font-size:.72rem;color:var(--text-muted);margin-top:4px">${s.placedDate}</div>
        <div style="display:flex;justify-content:center;gap:8px;margin-top:12px">
          <button class="btn-icon" title="Edit" onclick="openEditPlacedModal(${s.id})"><i class="ph ph-pencil-simple"></i></button>
          <button class="btn-icon" title="Delete" onclick="deletePlaced(${s.id})"><i class="ph ph-trash"></i></button>
        </div>
      </div>`).join('') : '<div style="color:var(--text-muted);text-align:center;padding:20px">No placed students yet</div>';

    // Table
    document.getElementById('placed-tbody').innerHTML = data.length ? data.map(s => `<tr>
      <td><div style="width:36px;height:36px;border-radius:50%;background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;font-weight:700;overflow:hidden">
        ${s.photo ? `<img src="${s.photo}" style="width:100%;height:100%;object-fit:cover">` : s.name.charAt(0)}
      </div></td>
      <td class="name-cell">${s.name}</td>
      <td>${s.regNo || '—'}</td>
      <td>${s.dept}</td>
      <td><strong>${s.company}</strong></td>
      <td style="color:var(--accent-green);font-weight:700">${s.salary}</td>
      <td>${s.placedDate}</td>
      <td class="actions-cell">
        <button class="btn-icon" onclick="openEditPlacedModal(${s.id})"><i class="ph ph-pencil-simple"></i></button>
        <button class="btn-icon" onclick="deletePlaced(${s.id})"><i class="ph ph-trash"></i></button>
      </td></tr>`).join('') : '<tr><td colspan="8"><div class="empty-state"><i class="ph ph-trophy"></i><p>No placed students yet</p></div></td></tr>';
  }

  renderAll(students);

  document.getElementById('placed-dept-filter').addEventListener('change', function () {
    const dept = this.value, search = document.getElementById('placed-search').value.toLowerCase();
    renderAll(store.get('placedStudents').filter(s => (!dept || s.dept === dept) && (!search || s.name.toLowerCase().includes(search) || s.company.toLowerCase().includes(search))));
  });
  document.getElementById('placed-search').addEventListener('input', function () {
    const dept = document.getElementById('placed-dept-filter').value, search = this.value.toLowerCase();
    renderAll(store.get('placedStudents').filter(s => (!dept || s.dept === dept) && (!search || s.name.toLowerCase().includes(search) || s.company.toLowerCase().includes(search))));
  });
}

function placedForm(entry = {}) {
  return `
    <div class="form-row">
      <div class="form-group"><label>Name *</label><div class="input-wrapper"><i class="ph ph-user"></i><input type="text" id="ps-name" value="${entry.name || ''}" placeholder="Enter full name" required></div></div>
      <div class="form-group"><label>Register Number *</label><div class="input-wrapper"><i class="ph ph-identification-card"></i><input type="text" id="ps-regno" value="${entry.regNo || ''}" placeholder="Enter register number" required></div></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Department *</label><div class="input-wrapper"><i class="ph ph-books"></i><select id="ps-dept"><option ${entry.dept === 'CSE' ? 'selected' : ''}>CSE</option><option ${entry.dept === 'IT' ? 'selected' : ''}>IT</option><option ${entry.dept === 'ECE' ? 'selected' : ''}>ECE</option><option ${entry.dept === 'EEE' ? 'selected' : ''}>EEE</option><option ${entry.dept === 'ME' ? 'selected' : ''}>ME</option><option ${entry.dept === 'CIVIL' ? 'selected' : ''}>CIVIL</option></select></div></div>
      <div class="form-group"><label>Company Placed *</label><div class="input-wrapper"><i class="ph ph-buildings"></i><input type="text" id="ps-company" value="${entry.company || ''}" placeholder="e.g. Google"></div></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Package (Salary)</label><div class="input-wrapper"><i class="ph ph-currency-inr"></i><input type="text" id="ps-salary" value="${entry.salary || ''}" placeholder="e.g. 12 LPA"></div></div>
      <div class="form-group"><label>Placement Date</label><div class="input-wrapper"><i class="ph ph-calendar"></i><input type="date" id="ps-date" value="${entry.placedDate || new Date().toISOString().split('T')[0]}"></div></div>
    </div>
    <div class="form-group">
      <label>Photo Upload</label>
      <div style="display:flex;align-items:center;gap:16px">
        <div id="ps-photo-preview" style="width:64px;height:64px;border-radius:50%;background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:700;overflow:hidden;border:3px solid var(--bg-glass-border)">
          ${entry.photo ? `<img src="${entry.photo}" style="width:100%;height:100%;object-fit:cover">` : (entry.name ? entry.name.charAt(0) : '📷')}
        </div>
        <div>
          <input type="file" id="ps-photo-file" accept="image/*" style="display:none" onchange="previewPlacedPhoto(this)">
          <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('ps-photo-file').click()"><i class="ph ph-camera"></i> Upload Photo</button>
          <div style="font-size:.72rem;color:var(--text-muted);margin-top:4px">JPG, PNG, GIF (max 2MB)</div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary btn-full" id="ps-save-btn" onclick="savePlacedStudent(${entry.id || 0})">
      <i class="ph ph-floppy-disk"></i> ${entry.id ? 'Update Student' : 'Add Placed Student'}
    </button>`;
}

window.openAddPlacedModal = function () { openModal('🏆 Add Current Placed Student', placedForm()); };
window.openEditPlacedModal = function (id) {
  const entry = store.find('placedStudents', id);
  if (entry) openModal('✏️ Edit Current Placed Student', placedForm(entry));
};
window.previewPlacedPhoto = function (input) {
  if (!input.files[0]) return;
  const reader = new FileReader();
  reader.onload = e => {
    const prev = document.getElementById('ps-photo-preview');
    if (prev) prev.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover">`;
    input.dataset.base64 = e.target.result;
  };
  reader.readAsDataURL(input.files[0]);
};
window.savePlacedStudent = function (id) {
  const name = document.getElementById('ps-name').value.trim();
  const company = document.getElementById('ps-company').value.trim();
  if (!name || !company) { toast('Name and Company are required', 'error'); return; }
  const fileInput = document.getElementById('ps-photo-file');
  const existingPhoto = id ? (store.find('placedStudents', id) || {}).photo || '' : '';
  const photo = fileInput.dataset.base64 || existingPhoto;
  const data = { name, regNo: document.getElementById('ps-regno').value.trim(), dept: document.getElementById('ps-dept').value, company, salary: document.getElementById('ps-salary').value.trim(), placedDate: document.getElementById('ps-date').value, photo };
  if (id) { store.update('placedStudents', id, data); toast('Updated successfully ✅', 'success'); }
  else { store.add('placedStudents', data); toast('Placed student added! 🎉', 'success'); }
  closeModal();
  renderPlacedPortal();
};
window.deletePlaced = function (id) {
  if (!confirm('Remove this student from placed list?')) return;
  store.remove('placedStudents', id);
  toast('Removed', 'info');
  renderPlacedPortal();
};

// ===== ALUMNI PORTAL =====
function renderAlumniPortal() {
  const alumni = store.get('alumni');
  const depts = [...new Set(alumni.map(a => a.dept))];
  const c = document.getElementById('page-container');

  c.innerHTML = `
    <div class="page-header">
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
        <select id="alumni-dept-filter" style="padding:8px 12px;background:var(--bg-glass);border:1px solid var(--bg-glass-border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:.85rem">
          <option value="">All Departments</option>
          ${depts.map(d => `<option value="${d}">${d}</option>`).join('')}
        </select>
        <input id="alumni-search" type="text" placeholder="Search by name or company..." style="padding:8px 14px;background:var(--bg-glass);border:1px solid var(--bg-glass-border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:.85rem;width:220px">
      </div>
      <button class="btn btn-primary" onclick="openAddAlumniModal()"><i class="ph ph-plus"></i> Add Alumni</button>
    </div>

    <div class="stats-grid" style="margin-bottom:24px">
      <div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">Total Alumni</span><i class="ph ph-graduation-cap"></i></div><div class="stat-card-value" style="color:var(--accent-cyan)">${alumni.length}</div></div>
      <div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">Departments</span><i class="ph ph-books"></i></div><div class="stat-card-value" style="color:var(--accent-purple)">${depts.length}</div></div>
      <div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">Batches</span><i class="ph ph-calendar"></i></div><div class="stat-card-value" style="color:var(--accent-amber)">${[...new Set(alumni.map(a => a.batch))].length}</div></div>
      <div class="stat-card glass-card"><div class="stat-card-header"><span class="stat-card-label">Companies</span><i class="ph ph-buildings"></i></div><div class="stat-card-value" style="color:var(--accent-green)">${[...new Set(alumni.map(a => a.company))].length}</div></div>
    </div>

    <div id="alumni-cards" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;margin-bottom:28px"></div>

    <div class="glass-card data-table-wrapper">
      <div style="padding:16px 20px 8px;font-weight:700;font-size:.95rem;display:flex;align-items:center;gap:8px"><i class="ph ph-table" style="color:var(--accent-purple)"></i> All Passed-Out Students</div>
      <table class="data-table"><thead><tr><th>Photo</th><th>Name</th><th>Batch Year</th><th>Department</th><th>Current Company</th><th>Role / Position</th><th>Experience</th><th>Actions</th></tr></thead>
        <tbody id="alumni-tbody"></tbody>
      </table>
    </div>`;

  function renderAll(data) {
    document.getElementById('alumni-cards').innerHTML = data.length ? data.map(a => `
      <div class="glass-card" style="padding:20px;text-align:center;transition:var(--transition);cursor:default" onmouseenter="this.style.transform='translateY(-4px)'" onmouseleave="this.style.transform=''">
        <div style="width:72px;height:72px;border-radius:50%;margin:0 auto 12px;overflow:hidden;border:3px solid var(--accent-purple);background:var(--gradient-warm);display:flex;align-items:center;justify-content:center;font-size:1.8rem;font-weight:800">
          ${a.photo ? `<img src="${a.photo}" style="width:100%;height:100%;object-fit:cover">` : a.name.charAt(0)}
        </div>
        <div style="font-weight:700;font-size:.95rem">${a.name}</div>
        <div style="font-size:.75rem;color:var(--accent-purple);margin:2px 0">Batch ${a.batch} · ${a.dept}</div>
        <div style="font-size:.85rem;font-weight:600;margin-top:8px">${a.company}</div>
        <div style="font-size:.78rem;color:var(--text-secondary)">${a.role || ''}</div>
        <div style="font-size:.72rem;color:var(--text-muted);margin-top:4px"><i class="ph ph-clock"></i> ${a.experience}</div>
        <div style="display:flex;justify-content:center;gap:8px;margin-top:12px">
          <button class="btn-icon" title="Edit" onclick="openEditAlumniModal(${a.id})"><i class="ph ph-pencil-simple"></i></button>
          <button class="btn-icon" title="Delete" onclick="deleteAlumni(${a.id})"><i class="ph ph-trash"></i></button>
        </div>
      </div>`).join('') : '<div style="color:var(--text-muted);text-align:center;padding:20px">No alumni added yet</div>';

    document.getElementById('alumni-tbody').innerHTML = data.length ? data.map(a => `<tr>
      <td><div style="width:36px;height:36px;border-radius:50%;background:var(--gradient-warm);display:flex;align-items:center;justify-content:center;font-weight:700;overflow:hidden">
        ${a.photo ? `<img src="${a.photo}" style="width:100%;height:100%;object-fit:cover">` : a.name.charAt(0)}
      </div></td>
      <td class="name-cell">${a.name}</td>
      <td>${a.batch}</td>
      <td>${a.dept}</td>
      <td><strong>${a.company}</strong></td>
      <td style="color:var(--text-secondary)">${a.role || '—'}</td>
      <td>${a.experience}</td>
      <td class="actions-cell">
        <button class="btn-icon" onclick="openEditAlumniModal(${a.id})"><i class="ph ph-pencil-simple"></i></button>
        <button class="btn-icon" onclick="deleteAlumni(${a.id})"><i class="ph ph-trash"></i></button>
      </td></tr>`).join('') : '<tr><td colspan="8"><div class="empty-state"><i class="ph ph-graduation-cap"></i><p>No alumni yet</p></div></td></tr>';
  }

  renderAll(alumni);

  document.getElementById('alumni-dept-filter').addEventListener('change', function () {
    const dept = this.value, q = document.getElementById('alumni-search').value.toLowerCase();
    renderAll(store.get('alumni').filter(a => (!dept || a.dept === dept) && (!q || a.name.toLowerCase().includes(q) || a.company.toLowerCase().includes(q))));
  });
  document.getElementById('alumni-search').addEventListener('input', function () {
    const dept = document.getElementById('alumni-dept-filter').value, q = this.value.toLowerCase();
    renderAll(store.get('alumni').filter(a => (!dept || a.dept === dept) && (!q || a.name.toLowerCase().includes(q) || a.company.toLowerCase().includes(q))));
  });
}

function alumniForm(entry = {}) {
  return `
    <div class="form-row">
      <div class="form-group"><label>Name *</label><div class="input-wrapper"><i class="ph ph-user"></i><input type="text" id="al-name" value="${entry.name || ''}" placeholder="Enter full name" required></div></div>
      <div class="form-group"><label>Batch Year *</label><div class="input-wrapper"><i class="ph ph-calendar"></i><input type="text" id="al-batch" value="${entry.batch || ''}" placeholder="e.g. 2018-2022" required></div></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Department *</label><div class="input-wrapper"><i class="ph ph-books"></i><select id="al-dept"><option ${entry.dept === 'CSE' ? 'selected' : ''}>CSE</option><option ${entry.dept === 'IT' ? 'selected' : ''}>IT</option><option ${entry.dept === 'ECE' ? 'selected' : ''}>ECE</option><option ${entry.dept === 'EEE' ? 'selected' : ''}>EEE</option><option ${entry.dept === 'ME' ? 'selected' : ''}>ME</option><option ${entry.dept === 'CIVIL' ? 'selected' : ''}>CIVIL</option></select></div></div>
      <div class="form-group"><label>Current Company *</label><div class="input-wrapper"><i class="ph ph-buildings"></i><input type="text" id="al-company" value="${entry.company || ''}" placeholder="e.g. Amazon"></div></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Current Role / Position</label><div class="input-wrapper"><i class="ph ph-user-tie"></i><input type="text" id="al-role" value="${entry.role || ''}" placeholder="e.g. Senior SDE"></div></div>
      <div class="form-group"><label>Experience</label><div class="input-wrapper"><i class="ph ph-clock"></i><input type="text" id="al-exp" value="${entry.experience || ''}" placeholder="e.g. 3 years"></div></div>
    </div>
    <div class="form-group">
      <label>Photo Upload</label>
      <div style="display:flex;align-items:center;gap:16px">
        <div id="al-photo-preview" style="width:64px;height:64px;border-radius:50%;background:var(--gradient-warm);display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:700;overflow:hidden;border:3px solid var(--bg-glass-border)">
          ${entry.photo ? `<img src="${entry.photo}" style="width:100%;height:100%;object-fit:cover">` : (entry.name ? entry.name.charAt(0) : '📷')}
        </div>
        <div>
          <input type="file" id="al-photo-file" accept="image/*" style="display:none" onchange="previewAlumniPhoto(this)">
          <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('al-photo-file').click()"><i class="ph ph-camera"></i> Upload Photo</button>
          <div style="font-size:.72rem;color:var(--text-muted);margin-top:4px">JPG, PNG, GIF (max 2MB)</div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary btn-full" onclick="saveAlumni(${entry.id || 0})">
      <i class="ph ph-floppy-disk"></i> ${entry.id ? 'Update Alumni' : 'Add Alumni'}
    </button>`;
}

window.openAddAlumniModal = function () { openModal('🎓 Add Passed-Out Student', alumniForm()); };
window.openEditAlumniModal = function (id) {
  const entry = store.find('alumni', id);
  if (entry) openModal('✏️ Edit Passed-Out Student', alumniForm(entry));
};
window.previewAlumniPhoto = function (input) {
  if (!input.files[0]) return;
  const reader = new FileReader();
  reader.onload = e => {
    const prev = document.getElementById('al-photo-preview');
    if (prev) prev.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover">`;
    input.dataset.base64 = e.target.result;
  };
  reader.readAsDataURL(input.files[0]);
};
window.saveAlumni = function (id) {
  const name = document.getElementById('al-name').value.trim();
  const company = document.getElementById('al-company').value.trim();
  if (!name || !company) { toast('Name and Company are required', 'error'); return; }
  const fileInput = document.getElementById('al-photo-file');
  const existingPhoto = id ? (store.find('alumni', id) || {}).photo || '' : '';
  const photo = fileInput.dataset.base64 || existingPhoto;
  const data = { name, batch: document.getElementById('al-batch').value.trim(), dept: document.getElementById('al-dept').value, company, role: document.getElementById('al-role').value.trim(), experience: document.getElementById('al-exp').value.trim(), photo };
  if (id) { store.update('alumni', id, data); toast('Alumni updated ✅', 'success'); }
  else { store.add('alumni', data); toast('Alumni added! 🎓', 'success'); }
  closeModal();
  renderAlumniPortal();
};
window.deleteAlumni = function (id) {
  if (!confirm('Remove this alumni record?')) return;
  store.remove('alumni', id);
  toast('Removed', 'info');
  renderAlumniPortal();
};

// ===== INIT END =====
