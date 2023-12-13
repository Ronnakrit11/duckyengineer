import Home from "./components/HomeNew/Home";

export const metadata = {
  title: "คอร์สเรียน Power BI , Power Automate , Power Apps , Copilots ,LineOA และที่ปรึกษาทางด้าน Data ,Digital Markeing และ  Low Code Technology",
  description:
    "เข้าร่วมคอร์สออนไลน์จาก วิศวกรเป็ด เพื่อพัฒนาทักษะใน Power BI, DAX, Power Query, และอีกมากมาย พร้อมเรียนรู้การใช้งาน Microsoft Fabric, Power Automate, และ PowerApps เพื่อประยุกต์ใช้กับงานของคุณ ค้นพบเครื่องมือต่างๆ ใน Power Platform, Copilot Studio, พร้อมทั้งความรู้ด้าน Data Analytics, Data Science, Python, SQL, RPA, และ Low Code เพื่อเพิ่มศักยภาพในด้านต่างๆ ทั้งนี้ยังมีคอร์สเกี่ยวกับ Excel, Excel Automation, Line Official Account, Digital Marketing, และ Lean Six Sigma ที่จะช่วยให้คุณก้าวหน้าในอาชีพและธุรกิจของคุณ.",
  keywords:
    "Power BI, DAX, Power Query, Microsoft Fabric, Power Automate, PowerApps, Power Platform, Copilot Studio, Data Analytics, Data Science, Python, SQL, RPA, Low Code, Excel, Excel Automation, Line Official Account, Digital Marketing, Lean Six Sigma, คอร์สออนไลน์, คอร์สเรียน, การศึกษา, เทคโนโลยีสารสนเทศ, พัฒนาทักษะ , Citizen Developer , คอร์สดาต้า , คอร์ส AI ",
  openGraph: {
    title: "คอร์สเรียน Power BI , Power Automate , Power Apps , Copilots ,LineOA และที่ปรึกษาทางด้าน Data ,Digital Markeing และ  Low Code Technology ",
    description: "เข้าร่วมคอร์สออนไลน์จาก วิศวกรเป็ด เพื่อพัฒนาทักษะใน Power BI, DAX, Power Query, และอีกมากมาย พร้อมเรียนรู้การใช้งาน Microsoft Fabric, Power Automate, และ PowerApps เพื่อประยุกต์ใช้กับงานของคุณ ค้นพบเครื่องมือต่างๆ ใน Power Platform, Copilot Studio, พร้อมทั้งความรู้ด้าน Data Analytics, Data Science, Python, SQL, RPA, และ Low Code เพื่อเพิ่มศักยภาพในด้านต่างๆ ทั้งนี้ยังมีคอร์สเกี่ยวกับ Excel, Excel Automation, Line Official Account, Digital Marketing, และ Lean Six Sigma ที่จะช่วยให้คุณก้าวหน้าในอาชีพและธุรกิจของคุณ.",
    url: "https://www.duckyengineer.com",

    siteName: "Duckyengineer",
    images: [
      {
        url: "https://res.cloudinary.com/doqbge8fv/image/upload/v1702357995/ft9rhzvtetxfzcv9asks.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "th-TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "คอร์สเรียน Power BI , Power Automate , Power Apps , Copilots ,LineOA และที่ปรึกษาทางด้าน Data ,Digital Markeing และ  Low Code Technology",
    description:
         "เข้าร่วมคอร์สออนไลน์จาก วิศวกรเป็ด เพื่อพัฒนาทักษะใน Power BI, DAX, Power Query, และอีกมากมาย พร้อมเรียนรู้การใช้งาน Microsoft Fabric, Power Automate, และ PowerApps เพื่อประยุกต์ใช้กับงานของคุณ ค้นพบเครื่องมือต่างๆ ใน Power Platform, Copilot Studio, พร้อมทั้งความรู้ด้าน Data Analytics, Data Science, Python, SQL, RPA, และ Low Code เพื่อเพิ่มศักยภาพในด้านต่างๆ ทั้งนี้ยังมีคอร์สเกี่ยวกับ Excel, Excel Automation, Line Official Account, Digital Marketing, และ Lean Six Sigma ที่จะช่วยให้คุณก้าวหน้าในอาชีพและธุรกิจของคุณ.",
    images: [
      "https://res.cloudinary.com/doqbge8fv/image/upload/v1702357995/ft9rhzvtetxfzcv9asks.jpg",
    ],
  },
};

export const revalidate = 180;

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  console.log("porcess env =>", process.env.NEXT_PUBLIC_SERVER_URI);

  const pmBanner = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Banner`,
    {}
  );
  const pmCategory = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Categories`,
    {}
  );
  const [resBanner, resCategory] = await Promise.all([pmBanner, pmCategory]);
  const banner = await resBanner.json();
  const category = await resCategory.json();

  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || [],
  };

  return <Home webInfo={webInfo} />;
};

export default Page;
